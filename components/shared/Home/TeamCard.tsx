import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type Props = {
  CardTitleText: string;
  cardTitleSvg: string;
  githubUrl: string;
};

export default function TeamCard({
  CardTitleText,
  cardTitleSvg,
  githubUrl,
}: Props) {
  return (
    <Card>
      <Link target="_blank" href={githubUrl}>
        <CardHeader className="flex flex-col group gap-2 hover:bg-[#4477CE]/20">
          <CardTitle className="flex text-white items-center justify-center flex-col gap-6">
            <Image
              alt={""}
              className="h-full w-full rounded-lg object-cover object-center group-hover:scale-110 transition-all duration-500"
              src={cardTitleSvg}
              width={400}
              height={400}
            />
            {CardTitleText}
          </CardTitle>
        </CardHeader>
      </Link>
    </Card>
  );
}
