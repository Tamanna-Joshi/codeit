
import Link from "next/link";
import Image from "next/image";
import UserButton from "../auth/components/user-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-3xl border border-orange-100 bg-[#fffaf5]/80 px-6 py-3 shadow-[0_8px_30px_rgba(255,140,60,0.08)] backdrop-blur-xl dark:border-[#3b2a22] dark:bg-[#241915]/80">
        
        {/* Left Side */}
        <div className="flex items-center gap-10">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 shadow-inner dark:from-[#3a291f] dark:to-[#2a1d18]">
              <Image
                src="/logo.svg"
                alt="Code It Logo"
                width={50}
                height={50}
              />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-lg font-black tracking-tight text-[#2d1606] dark:text-white">
                Code It
              </h1>

              <p className="text-xs text-orange-700/70 dark:text-[#c8a58d]">
                AI Powered Editor
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/docs"
              className="text-sm font-medium text-[#7a4d2d] transition hover:text-orange-500 dark:text-[#d9b9a2]"
            >
              Docs
            </Link>

            <Link
              href="/api"
              className="flex items-center gap-2 text-sm font-medium text-[#7a4d2d] transition hover:text-orange-500 dark:text-[#d9b9a2]"
            >
              API

              <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-semibold text-orange-600 dark:bg-[#3a291f] dark:text-[#ffb36b]">
                NEW
              </span>
            </Link>

            <Link
              href="/community"
              className="text-sm font-medium text-[#7a4d2d] transition hover:text-orange-500 dark:text-[#d9b9a2]"
            >
              Community
            </Link>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          
          {/* Theme Toggle */}
          <div className="rounded-xl border border-orange-100 bg-black/70 p-1 shadow-sm dark:border-[#4d3528] dark:bg-[#2a1d18]/70">
            <ThemeToggle />
          </div>

          {/* User Button */}
          <div className="rounded-xl border border-orange-100 bg-black/70 p-1 shadow-sm dark:border-[#4d3528] dark:bg-[#2a1d18]/70">
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
}