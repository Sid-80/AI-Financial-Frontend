import { columns } from "@/components/shared/Planning/Columns";
import CreateAlert from "@/components/shared/Planning/CreateAlert";
import { DataTable } from "@/components/shared/Planning/DataTable";
import SearchBar from "@/components/shared/Planning/SearchBar";
import { RetirementPlanningFile } from "@/types";

export default function Page() {
  const data: RetirementPlanningFile[] = [
    {
      _id: "2123j31",
      filename: "file1",
      createdAt: "1/1/24",
      updatedAt: "1/8/24",
    },
    {
      _id: "2123j31fdf",
      filename: "file2",
      createdAt: "1/5/24",
      updatedAt: "1/6/24",
    },
  ];
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex w-full items-center justify-between p-4">
      <CreateAlert />
      <SearchBar />
      </div>
      <div className="flex-1 p-5 text-white">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
