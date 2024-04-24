"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { signoutUser } from "@/lib/User/actions";

import { getIcon } from "@/data/static";
import { Technologies, AccountLinks } from "@/data/navigation";
const technologies = Technologies;
const accountLinks = AccountLinks;

export const NavbarItems = ({ loggedIn }: { loggedIn: boolean }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(loggedIn);

  // Generate the Account navigation menu
  const Account = () => {
    return (
      <ul className="grid w-screen md:w-max md:grid-cols-1 gap-row-10">
        {accountLinks.map((link) => (
          <li key={link.text}>
            {link.style === "button" ? (
              <form
                className="flex flex-col w-full"
                action={async () => {
                  await signoutUser();
                  setUserLoggedIn(false);
                }}
                noValidate
              >
                <Button type="submit" className="text-sm font-medium text-white">
                  Log out
                </Button>
              </form>
            ) : (
              <Link
                href={link.href}
                className="font-poppins text-sm px-4 p-2 block text-slate-500 border-b-[1px] hover:text-slate-900 hover:bg-slate-100 focus:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:ring-offset-slate-100 transition-colors"
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
      <div className="grid w-screen md:w-max gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 p-10 pb-32 md:pb-10">
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

  return (
    <>
      {userLoggedIn ? (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/mentors" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Find a Mentor
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
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

          <NavigationMenuViewport className="w-screen origin-top-right fixed right-0 md:absolute" />
        </NavigationMenu>
      ) : (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/mentors" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Find a Mentor
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
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

          <NavigationMenuViewport className="w-screen origin-top-right fixed right-0 md:absolute" />
        </NavigationMenu>
      )}
    </>
  );
};
