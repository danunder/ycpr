'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import "98.css";
import github from "@/public/github.png";
import linkedin from "@/public/linkedin.png";
import { title, subtitle } from "@/components/primitives";

export const PageComponent = ({
  pageTitle,
  heading,
  subHeading,
  bodyText,
  subcomponents = [],
}) => {
  
  const components = [
    {
      heading,
      subHeading,
      bodyText,
    },
    ...subcomponents,
  ];

  const [ active, setActive ] = useState(0);

  useEffect(() => {
    setActive(
      components.indexOf(
        components?.find((component) => component.heading != null)
      ),
    )
  }, []);
  

  return (
    <section className="">
      <div className="window m-3 sm:m-10 md:m-15 text-left">
        <div className="title-bar">
          <div className="title-bar-text py-0.5 px-2 text-xl lg:text-2xl font-bold">
            {pageTitle}
          </div>
          <div className="title-bar-controls space-x-2 mr-1">
            <Link href="https://github.com/danunder" target="_blank">
              <button>
                <Image alt="github" className="size-6 m-0.5" src={github} />
              </button>
            </Link>
            <Link href="https://linkedin.com/in/danunder" target="_blank">
              <button className="p-1">
                <Image alt="github" className="size-6 m-0.5" src={linkedin} />
              </button>
            </Link>
          </div>
        </div>

        <div className="window-body space-y-3 m-3 py-2">
          <h1 className={title({ color: "violet" })}>
            {components[active]?.heading}
          </h1>
          <h2 className={subtitle()}>{components[active]?.subHeading}</h2>
          <ul className="tree-view">
            <div>{documentToReactComponents(components[active]?.bodyText)}</div>
          </ul>
          <div className="space-x-4 flex flex-row items-center justify-center my-2">
            <button disabled className="px-2 py-1 text-sm sm:text-base">
              Back
            </button>
            
              <button 
              className="px-2 py-1 text-sm sm:text-base"
              onClick={() => setActive(active + 1)}
              disabled={active === components.length - 1}
              >
                {components[active + 1]?.heading ?? "Next"}
              </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};
