import { NavbarItems } from "./client";
import { getSessionUser } from "@/lib/tools/session/api";

export const LoadingNav = async () => {
  const user = await getSessionUser();
  console.log(user)
  return <NavbarItems loggedIn={!!user} />;
};
