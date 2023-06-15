export default function Home() {
  return (
    <main className="bg-zinc-900 h-screen w-screen flex items-center justify-center flex-col text-zinc-400">
      <h1 className="font-black text-6xl">Zen Stack</h1>
      <p className="font-medium mt-4 text-lg">
        A Next.js template with modern technologies.
      </p>

      <a
        href="https://github.com/juanzenn/zen-stack"
        className="block mt-6 py-2 px-6 bg-zinc-400 text-zinc-900 font-medium rounded shadow"
        target="_blank"
      >
        GitHub
      </a>
    </main>
  );
}
