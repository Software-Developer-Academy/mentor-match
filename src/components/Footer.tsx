import Link from "next/link";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

import { Technologies, AccountLinks } from "@/data/navigation";
const technologies = Technologies;

const Explore = () => {
  return (
    <div className="grid grid-flow-dense w-full gap-x-10 md:gap-x-20 gap-y-10 grid-cols-2 md:grid-cols-3">
      {technologies.map((group) => (
        <div key={group.title}>
          <div className="w-full flex justify-between">
            <p className="text-xs uppercase">{group.title}</p>
          </div>
          <Separator className="border-secondary mb-2 border-[1px]" />
          <ul className="grid w-full gap-x-2">
            {group.languages.map((language) => (
              <li key={language.name}>
                <Link
                  className="text-xs py-1 flex flex-row-reverse gap-2 border-b-[1px] border-dashed border-secondary/50 justify-end text-gray-300 hover:text-secondary focus:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary focus-visible:ring-offset-transparent transition-colors"
                  href={language.href}
                >
                  {language.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-20">
          <div className="row-start-2 md:row-start-1 col-start-1 md:col-start-1 col-span-2">
            <Explore />
          </div>
          <div className="row-start-1 md:col-start-3 col-span-1">
            <form className="w-full">
              <Input
                type="text"
                placeholder="Search..."
                className="p-2 w-full"
              />
            </form>
          </div>
        </div>
        <div className="text-right text-xs mt-10">&copy; Copyright Info</div>
      </div>
    </footer>
  );
};

export default Footer;
