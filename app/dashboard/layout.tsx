import Navbar from "@/components/shared/Dashboard/Navbar";
import Sidebar from "@/components/shared/Dashboard/Sidebar";

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
        {children}
      </div>
    </div>
  );
}
