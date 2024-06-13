import Navbar from "@/components/shared/Dashboard/Navbar";
import Sidebar from "@/components/shared/Dashboard/Sidebar";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <Separator className=" bg-gray-600" decorative />
        {children}
      </div>
    </div>
  );
}
