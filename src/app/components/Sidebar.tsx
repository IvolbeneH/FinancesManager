"use client";
import { SearchIcon } from "./SearchIcon";

import {
  Bell,
  ChartColumn,
  Home,
  LogIn,
  LogOut,
  Menu,
  Moon,
  Settings,
  Sun,
  User,
  Users,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Image from "next/image";
import Greeting from "./Greeting";

export function Sidebar() {
  const { data } = useSession();

  function handleLoginWithGoogle() {
    signIn("google");
  }

  const handleSignOut = () => signOut();

  return (
    <aside className="flex h-20 w-full items-center justify-between gap-2 bg-zinc-50 px-4 shadow-lg">
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost" className="text-zinc-800">
              <Menu className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[70%] px-3" side="left">
            <SheetHeader className="px-2">
              <SheetTitle className="border-b border-zinc-950 py-2 text-left">
                Menu
              </SheetTitle>
            </SheetHeader>
            <div className="mt-3 flex flex-col gap-2">
              <SearchIcon icon={Home} title="Home" />
              <SearchIcon icon={ChartColumn} title="Statistics" />
              <SearchIcon icon={User} title="User Settings" />
              <SearchIcon icon={Settings} title="Settings" />
            </div>
            {/* VERIFICANDO USUARIO LOGADO NA SIDEBAR */}
            {data?.user ? (
              <div className="mt-[26.5rem] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src={data?.user?.image ?? ""}
                      alt="Imagem do usuario"
                    />
                  </Avatar>
                  <div className="justify center flex max-w-[11rem] flex-col items-start">
                    <p className="font-bold">{data?.user?.name}</p>
                    <span className="truncate text-base font-normal">
                      {data?.user?.email}
                    </span>
                  </div>
                </div>
                <Button size="icon" variant="ghost" onClick={handleSignOut}>
                  <LogOut />
                </Button>
              </div>
            ) : (
              <div className="mt-[37.5rem] flex items-center justify-center gap-2">
                <h2 className="text-lg font-normal">
                  Olá, <span className="font-semibold">faça seu login!</span>
                </h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="icon"
                      className="h-8 w-8 bg-zinc-50"
                      variant="outline"
                    >
                      <LogIn />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-[80%] rounded-lg">
                    <DialogHeader>
                      <DialogTitle>Faça login na plataforma!</DialogTitle>
                      <DialogDescription>
                        Conecte-se usando sua conta do Google.
                      </DialogDescription>
                    </DialogHeader>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 font-bold"
                      onClick={handleLoginWithGoogle}
                    >
                      <Image
                        src="/google.png"
                        width={22}
                        height={22}
                        alt="Logo google."
                      />
                      Google
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            )}
            {/* FIM VERIFICAÇÃO USUARIO LOGADO */}
          </SheetContent>
        </Sheet>
        {/* VERIFICANDO USUARIO LOGADO NA HEADER */}
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src={data?.user?.image ?? ""}
                alt="Imagem do usuario"
              />
            </Avatar>
            <div className="flex flex-col">
              <p className="text-base font-normal">
                Olá, <span className="font-semibold">{data?.user?.name}</span>
              </p>
              <Greeting />
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-lg font-normal">
              Olá, <span className="font-semibold">faça seu login.</span>
            </h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="icon"
                  className="h-8 w-8 bg-zinc-50"
                  variant="outline"
                >
                  <LogIn />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[80%] rounded-lg">
                <DialogHeader>
                  <DialogTitle>Faça login na plataforma!</DialogTitle>
                  <DialogDescription>
                    Conecte-se usando sua conta do Google.
                  </DialogDescription>
                </DialogHeader>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 font-bold"
                  onClick={handleLoginWithGoogle}
                >
                  <Image
                    src="/google.png"
                    width={22}
                    height={22}
                    alt="Logo google."
                  />
                  Google
                </Button>
              </DialogContent>
            </Dialog>
          </>
        )}
        {/* FIM VERIFICANDO USUARIO LOGADO NA HEADER */}
      </div>
      <div className="relative">
        <Bell className="h-7 w-7" />
        <span className="absolute right-[-6px] top-[-6px] flex h-5 w-5 items-center justify-center rounded-full bg-red-400 text-sm font-bold text-zinc-50">
          1
        </span>
      </div>
    </aside>
  );
}
