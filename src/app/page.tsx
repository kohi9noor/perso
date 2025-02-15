import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await onAuthenticateUser();

  if (!user) {
    redirect("/sign-in");
  }

  redirect("/dashboard");
};

export default Page;
