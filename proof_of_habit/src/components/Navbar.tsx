import Link from "next/link";

import { auth } from "@clerk/nextjs/server";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { Sparkles } from "lucide-react";
import { syncUser } from "@/action/user.action";

async function Navbar() {
  const user = await auth();
  if (user) await syncUser(); // POST

  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold font-mono tracking-wider"
            >
              <div className="flex items-center gap-2 text-xl font-semibold">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#14F195] to-[#9945FF] rounded-full blur-xl opacity-40"></div>
                  <Sparkles className="h-6 w-6 text-[#14F195] animate-pulse" />
                </div>
                <span className="bg-gradient-to-r from-[#14F195] to-[#9945FF] text-transparent bg-clip-text">
                  ProofOfHabit
                </span>
              </div>
            </Link>
          </div>

          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
