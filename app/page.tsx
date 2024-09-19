import { getMappedContentfulData } from "./services/contentful";

import { Navbar, getNavBarData } from "@/components/Navbar";
import { PageComponent } from "@/components/Page";

import "98.css";

export default async function Home() {
  const data = await getMappedContentfulData();

  const navBarData = getNavBarData(data.pages);
  const pageData = data.pages[0];
  const { title: pageTitle, heading, subHeading, bodyText } = pageData;

  return (
    <div className="flex flex-col sm:flex-row p-4 max-w-5xl">
      {Navbar({ navBarData })}
      <PageComponent
        bodyText={bodyText}
        heading={heading}
        pageTitle={pageTitle}
        subHeading={subHeading}
      />
    </div>
  );
}
