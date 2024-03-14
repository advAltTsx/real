import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex h-[calc(100vh-20vh)] dark:bg-black bg-white flex-col items-center justify-center p-12 text-center">
      <h1 className="text-3xl font-bold dark:text-white text-black">
        Hi there
      </h1>
      <h1 className="text-lg font-light dark:text-white text-black/80">
        {
          "I'm Abhyudaya, a student from India, passionated about how the technology works."
        }
      </h1>
      <h1 className=" text-lg font-light dark:text-white text-black/80">
        Also, I intensely like coffee.
      </h1>
      <br /> <br />
      <Link href="/home">
        <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-black dark:bg-white dark:text-black text-white text-neutarl-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
          Home
        </button>
      </Link>
    </main>
  );
}
