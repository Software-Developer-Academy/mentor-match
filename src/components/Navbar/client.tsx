import NavbarLinks, { Explore, Account } from "./navbar-links";
import * as NavbarTypes from "./navbar-types";

/**
 * Represents the navigation links for a logged-in user in the Navbar component.
 */
const loggedInNavLinks: NavbarTypes.NavigationType[] = [
  { text: "Find a Mentor", href: "/mentors", component: "link" },
  { text: "Explore", component: <Explore /> },
  { icon: "person", component: <Account /> },
];

/**
 * Represents the navigation links for the logged out state of the Navbar component.
 */
const loggedOutNavLinks: NavbarTypes.NavigationType[] = [
  { text: "Explore", component: <Explore /> },
  {
    text: "Log In",
    href: "/signin",
    component: "link",
    className:
      "outline-btn text-sm font-medium flex items-center justify-center",
  },
];

/**
 * Renders the navigation items based on the user's login status.
 * @param {boolean} loggedIn - Indicates whether the user is logged in or not.
 * @returns {JSX.Element} - The rendered navigation items.
 */
export const NavbarItems = ({ loggedIn }: { loggedIn: boolean }) => {
  return (
    <>
      {loggedIn ? (
        <NavbarLinks navLinks={loggedInNavLinks} />
      ) : (
        <NavbarLinks navLinks={loggedOutNavLinks} />
      )}
    </>
  );
};
