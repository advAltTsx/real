'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Head from 'next/head';
import { Metadata } from 'next';
import GlobeSec from '@/components/globe';

export default function Home() {
  return (
    <main className="flex h-auto dark:bg-black bg-white flex-col items-center justify-center py-12">
      <title>Abhyudaya - Home</title>

      <div className="fsec h-auto py-24 px-0 flex flex-col items-center justify-center">
        <Image
          width={100}
          height={100}
          src={'/fsec/fsec-light.jpg'}
          alt="logo"
          unoptimized
          className=" w-full h-auto md:w-[50vw] lg:w-[40vw] dark:hidden "
        />
        <Image
          width={100}
          height={100}
          src={'/fsec/fsec-dark.jpg'}
          alt="logo"
          unoptimized
          className=" w-full h-auto md:w-[50vw] lg:w-[40vw] hidden dark:block"
        />
        <GlobeSec />
      </div>
      <div className="ssec h-auto pt-0 py-24 px-0 flex flex-col items-center justify-center">
        <Image
          width={100}
          height={100}
          src={'/techs/techs-light.png'}
          alt="logo"
          unoptimized
          className=" w-full h-auto md:w-[50vw] lg:w-[40vw] dark:hidden "
        />
        <Image
          width={100}
          height={100}
          src={'/techs/techs-dark.png'}
          alt="logo"
          unoptimized
          className=" w-full h-auto md:w-[50vw] lg:w-[40vw] hidden dark:block"
        />
        <Link href="/about">
          <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-black dark:bg-white dark:text-black text-white text-neutarl-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
            About ME
          </button>
        </Link>
      </div>
      <div className="tsec h-auto w-[70vw] text-left md:w-[50vw] lg:w-[40vw] py-24 pb-32 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center py-6">
          <h1 className=" text-3xl dark:text-white text-black font-medium">
            FAQs
          </h1>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <div className="text-left">
              <AccordionTrigger>How to contact me?</AccordionTrigger>
              <AccordionContent>
                Head on to the{' '}
                <Link href={'/contact'}>
                  <span className=" underline text-blue-600 font-bold">
                    Contact Page
                  </span>
                </Link>
              </AccordionContent>
            </div>
          </AccordionItem>
          <AccordionItem value="item-2">
            <div className="text-left">
              <AccordionTrigger>
                <div className="text-left">
                  Could you build ecommerce websites?
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Definitely yes, but requires time. Generally ranging from 5-20
                days depending upon the type and availability.
              </AccordionContent>
            </div>
          </AccordionItem>
          <AccordionItem value="item-3">
            <div className="text-left">
              <AccordionTrigger>{"What's the $?"}</AccordionTrigger>
              <AccordionContent>
                Depending upon the type and availability, however discussions
                earlier while contracting the deal.
              </AccordionContent>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
