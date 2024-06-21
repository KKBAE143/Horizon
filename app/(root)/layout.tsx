// import MobileNav from "@/components/MobileNav";
// import Sidebar from "@/components/Sidebar";
// import { getLoggedInUser } from "@/lib/actions/user.actions";
// import Image from "next/image";
// import { redirect } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
//   const loggedIn = await getLoggedInUser();

//   if(!loggedIn) redirect('/sign-in')

  return (
    <main>
     SIDEBAR
     {children}
    </main>
  );
}
