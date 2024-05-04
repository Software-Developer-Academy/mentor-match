import { getSessionUser } from "@/lib/utils/session/api";

import { NavbarItems } from "./client";

export const LoadingNav = async () => {
  const user = await getSessionUser();
  return <NavbarItems loggedIn={!!user} />;
};
