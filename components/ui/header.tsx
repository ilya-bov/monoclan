import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/70 bg-opacity-5 border-opacity-10 px-3 shadow-lg">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Link href="/" className="inline-flex" aria-label="Cruip">
              <p
                className="font-bold text-xl"
                data-aos="zoom-y-out"
                data-aos-delay={150}
              >
                iishenka.pro
              </p>
            </Link>
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/group#pricing"
                className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
              >
                Вступить в Pro
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
