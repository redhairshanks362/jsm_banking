import SideBar from "@/components/ui/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Ak', lastName: 'B'};
  return (
   <main className="flex h-screen w-full font-inter">
    <SideBar user={loggedIn}/>
    {children}
   </main>
  );
}
