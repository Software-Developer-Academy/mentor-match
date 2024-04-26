/**
 * Represents the properties for the Navigation component.
 */
export interface NavigationProps {
  /**
   * The text to be displayed for the navigation item.
   */
  text?: string;
  
  /**
   * The URL to navigate to when the navigation item is clicked.
   */
  href?: string;
  
  /**
   * The name of the icon to be displayed for the navigation item.
   */
  icon?: string;
  
  /**
   * The component to be rendered for the navigation item.
   * It can be either a "link" or a JSX.Element.
   */
  component: "link" | JSX.Element;
  
  /**
   * The CSS class name(s) for the navigation item.
   */
  className?: string | string[];
}

/**
 * Represents the props for the NavLinks component.
 */
export interface NavLinksProps {
  navLinks: NavigationProps[];
};