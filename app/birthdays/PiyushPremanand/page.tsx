'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Metadata } from 'next';
import useWindowSize from 'react-use/lib/useWindowSize';
const Confetti = dynamic(() => import('react-confetti'), {
  ssr: false,
});
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
import dynamic from 'next/dynamic';

export default function About() {
  const { width, height } = useWindowSize();
  console.log(width, height);
  const stories = [
    {
      url: 'https://static.vecteezy.com/system/resources/previews/000/257/348/non_2x/beautiful-happy-birthday-card-colorful-watercolor-background-vector.jpg',
      header: {
        heading: 'Piyush Premanand',
        subheading: 'Happy birthday 🎉',
        profileImage:
          'https://i.postimg.cc/JnzWH2JY/344331975-776763367218746-4995551074575971953-n.jpg',
      },
    },
  ];
  const people = [
    {
      id: 1,
      name: 'Piyush Premanand',
      designation: 'premanandpiyush17',
      image:
        'https://i.postimg.cc/JnzWH2JY/344331975-776763367218746-4995551074575971953-n.jpg',
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
