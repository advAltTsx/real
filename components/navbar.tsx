"use client";

import Image from "next/image";
import { Input } from "./input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "./ui/button";
import { VercelCMDK } from "./cmdk";
import { Squeeze as Hamburger, Squeeze } from "hamburger-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="h-auto py-8 w-full flex bg-black">
      <div className="h-full w-1/5 flex items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              className="rounded-full"
              src={"/logo.jpg"}
              width={40}
              height={40}
              alt="Logo"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black text-white border-none p-2">
            <DropdownMenuLabel className="font-nothing">Abhyudaya Deep Verma</DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="h-full w-3/5 flex items-center justify-center">
        <Dialog>
          <DialogTrigger>
            <Input id="email" placeholder="Search..." type="text" />
          </DialogTrigger>
          <DialogContent className="bg-black border-none">
            <VercelCMDK />
          </DialogContent>
        </Dialog>
      </div>
      <div className="h-full w-1/5 flex items-center justify-center">
        <Sheet>
          <SheetTrigger>
            <Squeeze color="white" toggled={isOpen} size={25} />
          </SheetTrigger>
          <SheetContent
            className="bg-black border-none"
            side={"left"}
          ><h1 className="py-16 text-2xl font-nothing font-extrabold text-white">
          <Link href={"/"}>
            {" "}
            <span className=" font-nothing font-extralight text-2xl text-white/70">
              HOME
            </span>
          </Link>
        </h1></SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
