import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky p-1 top-0 z-10 border-b-2 border-b-black bg-white">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-[Caveat] text-black grid place-content-center mb-2 md:mb-0">
          <Link href="/" className="text-black no-underline font-bold">
            Weblog
          </Link>
        </h1>
        <h1 className="text-2xl font-semibold font-[Caveat] text-black grid place-content-center mb-2 md:mb-0">
          <a
            href="https://praveenraj-rs.github.io"
            target="_blank"
            className="no-underline"
          >
            Praveenraj R S
          </a>
        </h1>
      </div>
    </nav>
  );
}
