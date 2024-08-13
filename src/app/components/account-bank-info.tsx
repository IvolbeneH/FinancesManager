import { Avatar, AvatarImage } from "./ui/avatar";

interface AccountBankInfoProps {
  src: string;
}

export function AccountBankInfo() {
  return (
    <div className="flex gap-2">
      <Avatar>
        <AvatarImage
          src="/nubank.webp"
          width={32}
          height={32}
          alt="Logo banco"
        />
      </Avatar>
      <div className="">
        <span className="font-bold">NuBank</span>
        <p className="truncate text-sm">R$ 1000,00</p>
      </div>
      <div className="mt-6 h-4 w-full rounded-lg bg-zinc-200">
        <div></div>
      </div>
      <div>
        <p className="truncate text-sm text-zinc-700">
          fecha <span className="font-bold">20/01</span>
        </p>
        <span className="truncate text-sm font-bold">R$ 1500,00</span>
      </div>
    </div>
  );
}
