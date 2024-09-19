import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import "98.css";
import github from "@/public/github.png";
import linkedin from "@/public/linkedin.png";
import { title, subtitle } from "@/components/primitives";

export const PageComponent = ({ pageTitle, heading, subHeading, bodyText }) => {
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
          <h1 className={title({ color: "violet" })}>{heading}</h1>
          <h2 className={subtitle()}>{subHeading}</h2>
          <ul className="tree-view">
            <p className="p-1 text-base md:text-xl lg:text-2xl">
              <div>{documentToReactComponents(bodyText)}</div>
            </p>
          </ul>
          <div className="space-x-4 flex flex-row items-center justify-center my-2">
            <button disabled className="px-2 py-1 text-sm sm:text-base">
              Back
            </button>
            <Link href="/about">
              <button className="px-2 py-1 text-sm sm:text-base">
                Experience
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
