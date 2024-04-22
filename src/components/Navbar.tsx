"use client";

import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { getIcon } from "@/data/static";
import { Technologies, AccountLinks } from "@/data/navigation";
const technologies = Technologies;
const accountLinks = AccountLinks;

// Generate the Account navigation menu
const Account = () => {
  return (
    <ul className="grid w-[400px] md:w-[200px] md:grid-cols-1 gap-row-10">
      {accountLinks.map((link) => (
        <li key={link.text}>
          {link.style === "button" ? (
            <Button className="w-full block p-3 px-6">
              <Link href={link.href}>{link.text}</Link>
            </Button>
          ) : (
            <Link
              href={link.href}
              className="px-6 p-2 block text-slate-500 border-b-[1px] hover:text-slate-900 hover:bg-slate-100 focus:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:ring-offset-slate-100 transition-colors"
            >
              {link.text}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

// Generate the Explore navigation menu
const Explore = () => {
  return (
    <div className="grid w-screen lg:w-max gap-10 md:grid-cols-3 p-10 pb-32 md:pb-10">
      {technologies.map((group) => (
        <div key={group.title}>
          <div className="w-full flex justify-between">
            <p>{group.title}</p>
            <small className="text-slate-500 text-xs">
              {group.description}
            </small>
          </div>
          <Separator className="border-secondary" />
          <ul className="grid w-full gap-x-2 grid-cols-2">
            {group.languages.map((language) => (
              <li key={language.name}>
                <Link
                  className="text-sm px-2 p-2 flex flex-row-reverse gap-2 justify-end text-slate-500 border-b-[1px] hover:text-slate-900 hover:bg-slate-100 focus:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:ring-offset-slate-100 transition-colors"
                  href={language.href}
                >
                  {language.name}
                  <Image
                    src={`/icons/${getIcon(language.name)}.svg`}
                    alt={`${language.name} Icon`}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const Navbar = () => {
  const userLoggedIn = true;

  return (
    <nav className="fixed z-50 w-full p-2 bg-white">
      <div className="lg:container w-full flex justify-between">
        <Link href="/" className="flex flex-center gap-2 items-center">
          <Image
            src="/images/logo.svg"
            alt="Mentor Match Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <h1 className="text-2xl text-primary font-bold hidden md:inline-block">
            Mentor Match
          </h1>
        </Link>

        {userLoggedIn ? (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="relative">Explore</NavigationMenuTrigger>
                <NavigationMenuContent className="overflow-y-scroll md:overflow-auto max-h-screen">
                  <Explore />
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="relative text-primary text-sm font-medium flex items-center justify-center">
                  <span className="material-symbols-outlined">person</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex justify-center p-5">
                  <Account />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuViewport className="w-screen origin-top-right fixed right-0 md:absolute"/>
            {/* className="w-screen origin-top-right fixed right-0 md:w-full md:relative md:origin-top-center md:right-0" */}
          </NavigationMenu>
        ) : (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                <NavigationMenuContent className="overflow-y-scroll md:overflow-auto max-h-screen">
                  <Explore />
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/signin" legacyBehavior passHref>
                  <NavigationMenuLink className="outline_btn text-sm font-medium flex items-center justify-center">
                    Log In
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuViewport />
          </NavigationMenu>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
