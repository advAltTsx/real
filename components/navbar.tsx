'use client';

import Image from 'next/image';
import { Input } from './input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoonIcon, Lightbulb, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { VercelCMDK } from './cmdk';
import { Squeeze as Hamburger, Squeeze } from 'hamburger-react';
import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const { setTheme } = useTheme();

  return (
    <nav className="h-auto py-8 w-full flex dark:bg-black bg-white">
      <div className="h-full w-1/5 flex items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              className="rounded-full"
              src={'/logo.jpg'}
              width={40}
              height={40}
              alt="Logo"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="dark:bg-black bg-white dark:text-white text-black border-none p-2">
            <DropdownMenuLabel className="font-nothing">
              Abhyudaya Deep Verma
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="h-full w-3/5 flex items-center justify-center">
        <Dialog>
          <DialogTrigger>
            <Input id="email" placeholder="Search..." type="text" />
          </DialogTrigger>
          <DialogContent className=" bg-black border-none">
            <VercelCMDK />
          </DialogContent>
        </Dialog>
      </div>
      <div className="h-full w-1/5 flex items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger
            className="dark:bg-black bg-white border-none"
            asChild
          >
            <Button className=" hover:bg-inherit" size="icon">
              <Lightbulb
                color="black"
                className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              />
              <MoonIcon className="absolute fill-white h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="dark:bg-black bg-white border dark:text-white text-black"
            align="end"
          >
            <DropdownMenuItem onClick={() => setTheme('light')}>
              <DropdownMenuLabel className="font-nothing">
                Light
              </DropdownMenuLabel>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              <DropdownMenuLabel className="font-nothing">
                Dark
              </DropdownMenuLabel>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              <DropdownMenuLabel className="font-nothing">
                System
              </DropdownMenuLabel>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
