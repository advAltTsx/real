import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex h-[calc(100vh-20vh)] dark:bg-black bg-white flex-col items-center justify-center p-12 text-center">
      <h1 className="text-3xl font-bold dark:text-white text-black">
        Hi there
      </h1>
      <h1 className="text-xl font-light dark:text-white text-black/80">
        {
          "I'm Abhyudaya, a student from India, passionated about how the technology works."
        }
      </h1>
      <h1 className="text-xl font-light dark:text-white text-black/80">
        Also, I intensely like coffee.
      </h1>
    </main>
  );
}
