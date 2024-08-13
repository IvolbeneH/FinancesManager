import { CreditCard } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AccountBankInfo } from "./account-bank-info";

interface StatisticsBankProps {
  title: string;
  title2: string;
}

export function StatisticsBank({ title, title2 }: StatisticsBankProps) {
  return (
    <Card className="h-64 rounded-2xl shadow-lg">
      <CardContent className="flex flex-col px-1">
        <header className="flex w-full items-center justify-between gap-2 border-b border-zinc-400 p-2">
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            <span className="font-medium">
              {title} <span className="font-bold text-zinc-950">{title2}</span>
            </span>
          </div>
          <Button
            variant="link"
            className="text-base font-semibold text-zinc-950"
          >
            adicionar
          </Button>
        </header>
        <div className="grid grid-cols-1 gap-4 p-3">
          <AccountBankInfo />
          <AccountBankInfo />
          <AccountBankInfo />
        </div>
      </CardContent>
    </Card>
  );
}
