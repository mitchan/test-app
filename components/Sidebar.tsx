import { getUserFromCookie } from "../lib/auth";
import { cookies } from "next/headers";

function getUser() {
  return getUserFromCookie(cookies());
}

export async function Sidebar() {
  const user = await getUser();

  if (!user) {
    return null;
  }

  return (
    <div className="w-3/12 border border-black p-2 m-2 rounded-md min-w-fit">
      Hello {user.name}
    </div>
  );
}
