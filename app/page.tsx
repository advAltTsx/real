import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-[calc(100vh-20vh)] bg-black flex-col items-center justify-center p-12">
      <Image src={'/construction.jpg'} width={2000} height={2000} alt="construction"/>
    </main>
  );
}
