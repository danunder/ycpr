import "98.css";
import IconLink from "@/components/IconLink";

export const getNavBarData = (pageData: any) => {
  const navBarData = pageData.map((p: any) => {
    return {
      title: p.title,
      slug: p.slug,
      icon: {
        src: p.icon.file.url,
        width: p.icon.file.details.image.width,
        height: p.icon.file.details.image.height,
      },
    };
  });

  return navBarData;
};

export const Navbar = ({ navBarData }) => {
  return (
    <div className="flex grow flex-row justify-evenly sm:grow-0 sm:flex-col sm:justify-start">
      {navBarData.map(({ slug, icon, title }) => (
        <IconLink
          key={slug}
          alt={"placeholder"}
          href={`/${slug}`}
          icon={icon}
          text={title}
        />
      ))}
    </div>
  );
};
