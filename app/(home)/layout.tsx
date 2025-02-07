"use client"; // Make sure this is at the top

import { ThemeProvider } from "next-themes";
import { DarkMode } from "@/components/DarkMode";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // Avoid rendering on the server until the theme is set
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration errors

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div>
        <div className="border-b">
          <nav className="flex items-center justify-between max-w-7xl mx-auto py-2">
            <Logo />
            <div className="flex items-center gap-2">
              <Link href={"/dashboard/analytics"}>
                <Button variant={"link"}>Dashboard</Button>
              </Link>
              <UserButton afterSignOutUrl="/sign-in" />
              <DarkMode />
            </div>
          </nav>
        </div>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
