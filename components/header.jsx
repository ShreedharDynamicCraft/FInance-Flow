import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";

// FinanceFlow SVG Logo Component
const FinanceFlowLogo = ({ className = "h-12 w-auto" }) => (
  <svg
    className={className}
    viewBox="0 0 200 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background Circle */}
    <circle cx="30" cy="30" r="25" fill="#3B82F6" />
    
    {/* Dollar Sign */}
    <path
      d="M26 15v6m0 18v6m-6-15h12c1.1 0 2-.9 2-2s-.9-2-2-2h-8c-1.1 0-2-.9-2-2s.9-2 2-2h12m-12 8h12c1.1 0 2 .9 2 2s-.9 2-2 2h-8c-1.1 0-2 .9-2 2s.9 2 2 2h12"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Flow Arrow */}
    <path
      d="M45 25L55 30L45 35"
      stroke="#10B981"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Text */}
    <text x="65" y="25" fill="#1F2937" fontSize="16" fontWeight="bold" fontFamily="system-ui">
      Finance
    </text>
    <text x="65" y="42" fill="#3B82F6" fontSize="16" fontWeight="bold" fontFamily="system-ui">
      Flow
    </text>
  </svg>
);

const Header = async () => {
  await checkUser();

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <FinanceFlowLogo className="h-12 w-auto object-contain" />
        </Link>

        {/* Navigation Links - Different for signed in/out users */}
        <div className="hidden md:flex items-center space-x-8">
          <SignedOut>
            <a href="#features" className="text-gray-600 hover:text-blue-600">
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-blue-600"
            >
              Testimonials
            </a>
          </SignedOut>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <a href="/transaction/create">
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </a>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;