import { cn } from "@/lib/utils";
import { Footer } from "@/modules/home/footer";
import { Header } from "@/modules/home/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Code It",
    default: "Code It - AI Powered Vibe Code Editor",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fffaf5] text-[#2d1606] dark:bg-[#1a120b] dark:text-[#f4e7dd] transition-colors duration-300">

      {/* 🔥 Glow Effects */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#ff944d]/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#ffb36b]/10 blur-3xl" />

      <div className="absolute left-0 top-1/3 h-[300px] w-[300px] rounded-full bg-[#ff7b3d]/10 blur-3xl" />

      {/* 📐 Grid Background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:42px_42px]",
          "[background-image:linear-gradient(to_right,#f3dfcc_1px,transparent_1px),linear-gradient(to_bottom,#f3dfcc_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#3b2a22_1px,transparent_1px),linear-gradient(to_bottom,#3b2a22_1px,transparent_1px)]"
        )}
      />

      {/* 🌑 Radial Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(255,180,120,0.08),transparent_40%)]" />

      {/* 🎨 Noise Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Header */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Page Content */}
      <main className="relative z-10 w-full">
        {children}
      </main>

      {/* Footer */}
      <div className="relative z-20 border-t border-orange-100 bg-white/70 backdrop-blur-xl dark:border-[#3b2a22] dark:bg-[#1a120f]/70">
        <Footer />
      </div>
    </div>
  );
}