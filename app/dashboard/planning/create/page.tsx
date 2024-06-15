import CraeteForm from "@/components/shared/Planning/CreateForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Card className="bg-[#1A1A1A] overflow-hidden sm:w-[600px]">
        <CardHeader>
          <CardTitle className=" text-white">Retirement Planning</CardTitle>
          <CardDescription className="font-semibold">
            Fill the form for getting a retirnement plan!!
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-y-auto min-h-[400px] max-h-[450px] sm:max-h-[550px]">
            <CraeteForm />
        </CardContent>
      </Card>
    </div>
  );
}
