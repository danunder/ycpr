import Link from "next/link";
import Image from "next/image";

import "98.css";
import github from "@/public/github.png";
import linkedin from "@/public/linkedin.png";

export const DanHome = () => {
  return (
    <section className="">
      <div className="window m-3 sm:m-10 md:m-15 text-left">
        <div className="title-bar">
          <div className="title-bar-text py-0.5 px-2 text-xl lg:text-2xl font-bold">
            Dan Robertson
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

        <div className="window-body space-y-2 m-2">
          <h1 className="text-base md:text-xl lg:text-2xl font-semibold">
            Developer & Scrum Master
          </h1>
          <ul className="tree-view">
            <p className="p-1 text-base md:text-xl lg:text-2xl">
              Hi, I’m Dan. I am a passionate and tenacious developer and problem
              solver with 3+yrs of fullstack experience (front+back+ops) on
              production e-commerce applications. I am enthusiastic and
              empathetic and enjoy employing these trains as an Agile Scrum
              Master. I thrive when I am working and learning (and having fun!)
              with great people to build something meaningful.
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
