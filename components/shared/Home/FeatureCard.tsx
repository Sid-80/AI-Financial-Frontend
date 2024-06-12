import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type Props = {
  CardTitleText: string;
  cardTitleSvg: string;
  cardDescriptionText: string;
};

export default function FeatureCard({
  CardTitleText,
  cardTitleSvg,
  cardDescriptionText,
}: Props) {
  return (
    <Card>
      <CardHeader className="flex group gap-2 hover:bg-[#4477CE]/20">
        <CardTitle className="flex text-white flex-col gap-4">
          <Button className="" variant={"secondary"} size={"icon"}>
            <Image
              width={10}
              height={10}
              className="w-6 h-6"
              alt="icon"
              src={cardTitleSvg}
            />
          </Button>
          {CardTitleText}
        </CardTitle>
        <CardDescription className=" text-gray-300 w-[250px]">
          {cardDescriptionText}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
