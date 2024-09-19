import { getMappedContentfulData } from "../../services/contentful";

import { PageComponent } from "@/components/Page";
import { Navbar, getNavBarData } from "@/components/Navbar";
import "98.css";
import {} from "../../services/contentful";
import { title } from "process";

export interface PageProps {
  page: string;
}

export async function generateStaticParams() {
  const data = await getMappedContentfulData();
  const { pages } = data;

  return pages.map((page: any) => ({
    slug: page.slug
  }));
}

export async function getPageData(page) {
  const data = await getMappedContentfulData();
  const pageData = data.pages.find((p: any) => p.slug === page[0]);
  const { title: pageTitle, heading, subHeading, bodyText } = pageData;

  return {
    pageTitle,
    heading,
    subHeading,
    bodyText
  };
} 

export default async function Page({ params }: { params: PageProps }) {
  const { page } = params;
  console.log('*** params, ', params);
 
  const data = await getMappedContentfulData();

  const navBarData = getNavBarData(data.pages);

  // const pageData = data.pages.find((p: any) => p.slug === page[0]);
  const { title: pageTitle, heading, subHeading, bodyText } = await getPageData(page);

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
