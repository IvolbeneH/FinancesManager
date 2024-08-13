import Image from "next/image";
import { Card, CardContent } from "./ui/card";

interface CardInfoProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function CardInfo({ title, description, imageUrl }: CardInfoProps) {
  return (
    <Card className="flex h-[5.6rem] items-center justify-center rounded-2xl shadow-lg">
      <CardContent className="mt-6 flex flex-col gap-4">
        <div className="flex items-center justify-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#3555F9] bg-opacity-10">
            <Image src={imageUrl} alt="Money" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="truncate text-xs font-semibold">{title}</p>
            <span className="text-lg font-bold text-[#3549F9]">
              {description}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
