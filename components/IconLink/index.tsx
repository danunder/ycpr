import Link from "next/link";
import Image from "next/image";
import "98.css";

export default function IconLink({
  href,
  alt,
  text,
  icon: { src, width, height },
}: {
  href: string;
  alt: string;
  text: string;
  icon: { src: string; width: number; height: number };
}) {
  return (
    <div className="flex flex-col justify-items-center m-3">
      <Link href={href}>
        <div className="flex flex-col items-center align-center space-y-1">
          <Image
            alt={alt}
            className=""
            height={height}
            src={`https:${src}`}
            width={width}
          />
          <div className="text-base lg:text-xl font-semibold text-white text-center">
            {text}
          </div>
        </div>
      </Link>
    </div>
  );
}
