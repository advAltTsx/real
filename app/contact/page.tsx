import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main className="flex h-[calc(100vh-20vh)] dark:bg-black bg-white flex-col items-center justify-center p-12 text-center">
      <Image
        className="hidden dark:block w-full h-auto md:w-[50vw] lg:w-[40vw]"
        src={'/contact/contact-dark.jpg'}
        width={2000}
        height={2000}
        alt="construction"
      />
      <Image
        className="dark:hidden w-full h-auto md:w-[50vw] lg:w-[40vw]"
        src={'/contact/contact-light.jpg'}
        width={2000}
        height={2000}
        alt="construction"
      />
      <Link href="/home">
        <button className="px-8 py-0.5 my-12  border-2 border-black dark:border-white uppercase bg-black dark:bg-white dark:text-black text-white text-neutarl-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
          Home
        </button>
      </Link>
    </main>
  );
}
