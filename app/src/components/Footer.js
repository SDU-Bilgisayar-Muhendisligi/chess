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
    

    </div>
  );
}
