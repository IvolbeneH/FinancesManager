import { ElementType } from "react";
import { Button } from "./ui/button";

interface SearchIconProps {
  icon: ElementType;
  title: string;
}

export function SearchIcon({ icon: Icon, title }: SearchIconProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="flex w-full items-center justify-start gap-3 p-2"
    >
      <Icon className="h-6 w-6 text-[#4b68fa] hover:text-[#3555F9]" />
      <span className="text-sm font-semibold text-zinc-950">{title}</span>
    </Button>
  );
}
