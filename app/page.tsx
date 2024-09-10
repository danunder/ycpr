import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import "98.css";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-20">
      <div className=" window inline-block max-w-xl text-center  justify-center">
        <div className="title-bar">
          <div className="title-bar-text">Welcome</div>
          <div className="title-bar-controls">
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="p-4 md:p-8 space-y-4">
          <h1 className={title({ color: "violet" })}>Yamini Coen</h1>
          <h2 className={subtitle({ color: "violet" })}>
            Communications, Public Relations and Digital Marketing
          </h2>
          <p className="text-base">
            Nice to meet you! I’m Yamini, a communications, public relations and
            digital marketing expert based out of Toronto, Canada. Are you
            looking for some help with your brand’s marketing and communications
            strategies? Needing some social media advice, or just plainly
            someone to do it for you? You’re at the right place!
          </p>
        </div>
      </div>

      {/* <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div> */}

      {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
