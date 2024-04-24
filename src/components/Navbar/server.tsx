import { NavbarItems } from "./client";
import { getSessionUser } from "@/lib/utils/session/api";

export const LoadingNav = async () => {
  const user = await getSessionUser();
  return <NavbarItems loggedIn={!!user} />;
};
