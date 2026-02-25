import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white flex items-center justify-center overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse top-[-150px] right-[-150px]" />
      <div className="text-center max-w-2xl px-6">
      <h1 className="text-5xl md:text-6xl font-semibold tracking-normal bg-gradient-to-r from-blue-400 via-blue-300 to-gray-100 bg-clip-text text-transparent">
          Luciano Paoletta
        </h1>

        <p className="text-xl text-gray-400 mb-6">
          Finance Major | CIS Minor
        </p>

        <p className="text-lg text-gray-300 mb-8">
          Building analytical tools at the intersection of markets and technology.
        </p>

        <Link
  href="/projects"
  className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition transform hover:scale-105 cursor-pointer inline-block"
>
  View Projects
</Link>
      </div>
    </main>
  );
}