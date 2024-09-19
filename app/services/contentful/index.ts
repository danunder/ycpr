export const getMappedContentfulData = async () => {
  // get all entries of space
  const { items: entries } = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&include=10`,
  ).then((res) => res.json());

  // get all assets of space
  const { items: assets } = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/assets?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  ).then((res) => res.json());

  // Recursively resolve fields and links in Contentful data
  const _resolveFieldsAndLinks = (obj: any): any => {
    if (typeof obj !== "object") return obj ?? null;
    if (Array.isArray(obj)) {
      return obj.map((element) => _resolveFieldsAndLinks(element));
    }
    const finalObject: Record<string, any> = {};
    let _entries;

    if (Object.hasOwn(obj, "fields")) {
      _entries = Object.entries(obj.fields);
    } else if (Object.hasOwn(obj, "sys")) {
      const { id, linkType } = obj.sys;

      if (linkType === "Entry") {
        const linkedEntry = entries.find((entry) => entry.sys.id === id);

        return _resolveFieldsAndLinks(linkedEntry);
      }
      if (linkType === "Asset") {
        const linkedAsset = assets.find((asset) => asset.sys.id === id);

        return _resolveFieldsAndLinks(linkedAsset);
      }
    } else {
      _entries = Object.entries(obj);
    }
    for (const [key, value] of _entries) {
      finalObject[key] = _resolveFieldsAndLinks(value);
    }

    return { ...finalObject };
  };

  const resolved = _resolveFieldsAndLinks(entries);
  // return only the main page tree
  const pageData = resolved.find((item: any) => item.page === "ycpr");

  return pageData;
};
