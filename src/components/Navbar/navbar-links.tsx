"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import { Technologies, AccountLinks } from "@/data/navigation";
import { getIcon } from "@/data/static";
import { signoutUser } from "@/lib/User/actions";

const technologies = Technologies;
const accountLinks = AccountLinks;
import * as NavbarTypes from "./navbar-types";

/**
 * Renders the account links in the navbar.
 * @returns JSX.Element
 */
export const Account = () => {
  const router = useRouter();
  return (
    <ul className="grid w-screen md:w-max md:grid-cols-1 gap-row-10 p-5">
      {accountLinks.map((link) => (
        <li key={link.text}>
          {link.style === "button" ? (
            <form
              className="flex flex-col w-full"
              action={() => {
                signoutUser();
                router.refresh();
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

/**
 * Renders the Explore component.
 * This component displays a grid of technologies with their titles, descriptions, and associated languages.
 */
export const Explore = () => {
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

/**
 * Renders a navigation menu item based on the provided link and index.
 * @param link - The navigation link object.
 * @param index - The index of the navigation menu item.
 * @returns The rendered navigation menu item.
 */
const CreateNavigationMenuItem = ({
  link,
  index,
}: {
  link: NavbarTypes.NavigationProps;
  index: number;
}) => {
  return (
    <NavigationMenuItem key={index}>
      {link.component === "link" ? (
        <Link href={link.href ?? ""} legacyBehavior passHref>
          <NavigationMenuLink
            className={`${navigationMenuTriggerStyle()}, ${link.className ? link.className : ""}`}
          >
            {link.text}
          </NavigationMenuLink>
        </Link>
      ) : (
        <>
          <NavigationMenuTrigger className="relative">
            {link.text ? (
              link.text
            ) : (
              <span className="material-symbols-outlined">{link.icon}</span>
            )}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="overflow-y-scroll md:overflow-auto max-h-screen">
            {link.component}
          </NavigationMenuContent>
        </>
      )}
    </NavigationMenuItem>
  );
};

/**
 * Renders the navigation links for the navbar.
 *
 * @param {NavbarTypes.NavLinksProps} navLinks - The array of navigation links.
 * @returns {JSX.Element} - The rendered navigation links.
 */
const NavbarLinks = ({ navLinks }: NavbarTypes.NavLinksProps) => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {navLinks.map((link, index) =>
            CreateNavigationMenuItem({ link, index }),
          )}
        </NavigationMenuList>
        <NavigationMenuViewport className="w-screen origin-top-right fixed right-0 md:absolute" />
      </NavigationMenu>
    </>
  );
};

export default NavbarLinks;
