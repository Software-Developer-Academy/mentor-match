import { NavbarItems } from "./client";
import { getSessionUser } from "@/lib/tools/session/api";

export const LoadingNav = async () => {
  const user = await getSessionUser();
  return <NavbarItems loggedIn={!!user} />;
};
