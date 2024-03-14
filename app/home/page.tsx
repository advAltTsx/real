import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex h-[calc(100vh-20vh)] dark:bg-black bg-white flex-col items-center justify-center py-12">
      {/* <Image
        className="hidden dark:block"
        src={'/construction.jpg'}
        width={2000}
        height={2000}
        alt="construction"
      />
      <Image
        className="dark:hidden"
        src={'/construction-light.jpg'}
        width={2000}
        height={2000}
        alt="construction"
      /> */}

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
        <Link href="/about">
          <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-black dark:bg-white dark:text-black text-white text-neutarl-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
            About ME
          </button>
        </Link>
      </div>
    </main>
  );
}
