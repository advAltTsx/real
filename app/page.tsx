import { NextSeo } from 'next-seo';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex h-[calc(100vh-20vh)] dark:bg-black bg-white flex-col items-center justify-center p-12">
      <NextSeo
        title="Abhyudaya - Home"
        description="Portfolio of Deep Abhyudaya."
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/logo.jpg',
          },
        ]}
      />
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
    </main>
  );
}
