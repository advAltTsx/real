'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Metadata } from 'next';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import ReactInstaStories from 'react-insta-stories';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function About() {
  const { width, height } = useWindowSize();
  const stories = [
    {
      url: 'https://static.vecteezy.com/system/resources/previews/000/257/348/non_2x/beautiful-happy-birthday-card-colorful-watercolor-background-vector.jpg',
      header: {
        heading: 'Sana Afreen',
        subheading: 'Happy birthday 🎉',
        profileImage:
          'https://i.postimg.cc/CMBk4VMw/152279566-2487563044886925-3138287418515049012-n.jpg',
      },
    },
  ];
  const people = [
    {
      id: 1,
      name: 'Sana Afreen',
      designation: 'sumaira_3984',
      image:
        'https://i.postimg.cc/CMBk4VMw/152279566-2487563044886925-3138287418515049012-n.jpg',
    },
  ];
  return (
    <>
      <Confetti width={width} height={height} />

      <main className="flex h-[calc(100vh-20vh)]  w-full dark:bg-black bg-white flex-col items-center justify-center p-12 text-center">
       
        <div className="h-[80vh] w-full flex items-center bg-grid-white/[0.2] justify-center">
          <Dialog>
            <DialogTrigger>
              {' '}
              <AnimatedTooltip items={people} />
            </DialogTrigger>
            <DialogContent className=" bg-black w-auto border-none h-auto">
              <div className="flex items-center justify-center">
                <ReactInstaStories
                  stories={stories}
                  defaultInterval={1500}
                  width={400}
                  height={600}
                  loop
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </>
  );
}
