import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandAndroid, IconBrandApple, IconBrandTiktok, IconBrandTwitterFilled, IconBrandTwitch, IconBrandYoutube } from "@tabler/icons-react";

import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div>
      <div>
      <footer className=" py-4">
      <div className="container mx-auto flex justify-center">
        <Link to="/help" className="mr-2 text-[14px] text-gray-400 hover:text-gray-300">
          Help |
        </Link>
        <Link to="/about" className="mr-2 text-[14px] text-gray-400 hover:text-gray-300">
          About |
        </Link>
        <Link to="/contact" className="text-[14px] text-gray-400 hover:text-gray-300">
          Contact |
        </Link>
        
      </div>
      <div className="container mx-auto flex justify-center items-center mt-4">
      <a
          href="https://play.google.com/store"
          className=" text-gray-400 hover:text-green-700"
        >
          <IconBrandAndroid size={24} />
        </a>
        <a
          href="https://www.apple.com/app-store/"
          className="mr-3 bg-transparent hover:text-gray-300"
        >
          <IconBrandApple size={24} />
        </a>
        <a
          href=""
          className=" text-gray-400 hover:text-gray-300"
        >
          <IconBrandTiktok size={24} />
        </a>
        <a
          href=""
          className="text-gray-400 hover:text-blue-300"
        >
          <IconBrandTwitterFilled size={24} />
        </a>
        <a
          href=""
          className="text-gray-400 hover:text-gray-300"
        >
          <IconBrandTwitch size={24} />
        </a>
        <a
          href=""
          className="text-gray-400 hover:text-red-300"
        >
          <IconBrandYoutube size={24} />
        </a>
      </div>
    </footer>
      </div>
    <footer className="footer border-base-300 dark:border-neutral text-base-content mx-1 mt-4 w-auto grid-flow-col items-center justify-between border-t-2 p-4 md:mx-16 lg:mx-40">
      <div className="items-center">
        <p>
          &copy; 2023{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover"
          >
            chess
          </a>
        </p>
      </div>
      <div className="items-center">
        <a
          href="https://github.com/SDU-Bilgisayar-Muhendisligi/chess"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-sm gap-1 normal-case"
        >
          <IconBrandGithub className="inline-block" size={16} />
          GitHub
        </a>
      </div>
    </footer>

    </div>
  );
}
