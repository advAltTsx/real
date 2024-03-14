import Image from 'next/image';
import Link from 'next/link';
import localFont from '@next/font/local';

const nothing = localFont({
  src: [
    {
      path: './nothing.ttf',
      weight: '800',
    },
  ],
  variable: '--font-nothing',
});

export default function Footer() {
  return (
    <footer className="h-auto p-6 w-full dark:bg-black bg-white">
      <div className="h-auto py-12 w-full flex ">
        <div className="h-full w-1/2 flex flex-col">
          <div className="h-1/2 w-full space-x-4">
            <h1 className="py-6 text-2xl font-extrabold dark:text-white text-black">
              Quick links <br />
              <Link href={'/'}>
                {' '}
                <span className=" font-semibold text-sm dark:text-white text-black/70">
                  Home
                </span>
              </Link>
            </h1>
          </div>
          <div className="h-1/2 w-full">
            <h1 className=" text-2xl py-6 font-extrabold dark:text-white text-black">
              Projects <br />
              <Link href={'https://advnote.abhyudaya.xyz'}>
                {' '}
                <span className=" font-semibold text-sm dark:text-white text-black/70">
                  ADVNote
                </span>
              </Link>{' '}
              <br />
              <Link href={'https://search.abhyudaya.xyz'}>
                {' '}
                <span className=" font-semibold text-sm dark:text-white text-black/70">
                  ADVSearch
                </span>
              </Link>
            </h1>
          </div>
        </div>
        <div className="h-full w-1/2">
          <h1 className="py-6 text-2xl font-extrabold dark:text-white text-black">
            Socials <br />
            <Link href={'https://instagram.com/advwastaken'}>
              {' '}
              <span className=" font-semibold text-sm dark:text-white text-black/70">
                Instagram
              </span>
            </Link>
          </h1>
        </div>
      </div>
      <div className="h-auto w-full flex items-center justify-center text-center">
        <p
          className={`dark:text-white text-black/90 ${nothing.variable} font-sans`}
        >
          {' '}
          ©Abhyudaya 2024
        </p>
      </div>
    </footer>
  );
}
