import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Sparkles,
  Code2,
  Zap,
  BrainCircuit,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#fffaf5] text-[#2d1606] dark:bg-[#1a120b] dark:text-[#f4e7dd] transition-colors duration-300">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#ff944d]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#ffb36b]/10 blur-3xl" />

      {/* HERO */}
      <section className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-between gap-16 px-6 pt-20 lg:flex-row lg:px-12">
        
        {/* LEFT */}
        <div className="max-w-2xl text-center lg:text-left">
          
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white/70 px-4 py-2 backdrop-blur dark:border-[#3b2a22] dark:bg-[#241915]/60">
            <Sparkles className="h-4 w-4 text-[#ff944d]" />
            <span className="text-sm text-[#7a4d2d] dark:text-[#f6d2b1]">
              AI Powered Code Editor
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-7xl">
            Build Faster <br />
            <span className="bg-gradient-to-r from-[#ffb36b] via-[#ff944d] to-[#ff7b3d] bg-clip-text text-transparent">
              With Code It
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#7a4d2d] dark:text-[#d6b7a1]">
            A beautiful AI-powered coding experience crafted for modern developers.
            Fast, intelligent, minimal, and built to keep you in flow.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            
            <Link href="/dashboard">
              <Button
                size="lg"
                className="rounded-xl bg-gradient-to-r from-[#ffb36b] via-[#ff944d] to-[#ff7b3d] text-black hover:opacity-90"
              >
                Get Started
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              className="rounded-xl border-orange-200 bg-white/70 text-[#7a4d2d] hover:bg-orange-50 dark:border-[#3b2a22] dark:bg-[#241915]/50 dark:text-[#f4d7bf]"
            >
              Live Preview
            </Button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#ff944d]/20 blur-3xl" />

          <div className="relative h-[340px] w-[340px] overflow-hidden rounded-full border border-orange-100 shadow-[0_0_80px_rgba(255,145,77,0.25)] sm:h-[420px] sm:w-[420px] dark:border-[#3b2a22]">
            <Image
              src="/hero.svg"
              alt="Developer coding"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 mt-24 grid w-full max-w-6xl grid-cols-1 gap-6 px-6 pb-24 md:grid-cols-3">
        
        {/* Card 1 */}
        <div className="rounded-3xl border border-orange-100 bg-white/70 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl dark:border-[#3b2a22] dark:bg-[#241915]/60">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff944d]/10">
            <Code2 className="h-7 w-7 text-[#ffb36b]" />
          </div>
          <h3 className="text-xl font-semibold">Smart Editing</h3>
          <p className="mt-3 text-[#7a4d2d] dark:text-[#cba891]">
            Write cleaner code with intelligent suggestions and distraction-free workflows.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-3xl border border-orange-100 bg-white/70 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl dark:border-[#3b2a22] dark:bg-[#241915]/60">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff944d]/10">
            <Zap className="h-7 w-7 text-[#ff944d]" />
          </div>
          <h3 className="text-xl font-semibold">Lightning Fast</h3>
          <p className="mt-3 text-[#7a4d2d] dark:text-[#cba891]">
            Optimized performance for smooth and responsive coding.
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-3xl border border-orange-100 bg-white/70 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl dark:border-[#3b2a22] dark:bg-[#241915]/60">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff944d]/10">
            <BrainCircuit className="h-7 w-7 text-[#ffcc8f]" />
          </div>
          <h3 className="text-xl font-semibold">AI Integrated</h3>
          <p className="mt-3 text-[#7a4d2d] dark:text-[#cba891]">
            AI helps you debug, generate and optimize code faster.
          </p>
        </div>

      </section>
    </main>
  );
}