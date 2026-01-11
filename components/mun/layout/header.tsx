"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/mun/logo';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [groupOpen, setGroupOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    if (!isBrowser) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBrowser]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target as Node)) {
        setGroupOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-6 text-5xl sm:text-3xl lg:text-xl", className)}>
      {navLinks.filter((link) => !["/mun/about-us", "/mun/our-team", "/mun/past-editions"].includes(link.href)).map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-foreground hover:text-primary transition-all duration-200 font-semibold hover:scale-105",
            isBrowser && typeof window !== 'undefined' && window.location.pathname === link.href ? "border-b-2 border-white" : ""
          )}
        >
          {link.label}
        </Link>
      ))}
      <div className="relative group" ref={dropdownRef}>
        <button
          className="text-primary hover:text-primary-dark transition-all duration-200 font-semibold flex items-center bg-transparent px-4 py-2 rounded-md hover:scale-105"
          onMouseEnter={() => setGroupOpen(true)}
          onMouseLeave={() => setGroupOpen(false)}
          onClick={() => setGroupOpen(!groupOpen)}
        >
          About Us
          {groupOpen ? (
            <ChevronUp className="ml-2 h-4 w-4 transition-transform duration-200 text-primary" />
          ) : (
            <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-200 text-primary" />
          )}
        </button>
        {groupOpen && (
          <div
            className="absolute left-0 mt-0 w-48 bg-[#0B1533] shadow-lg border border-primary"
            onMouseEnter={() => setGroupOpen(true)}
            onMouseLeave={() => setGroupOpen(false)}
          >
            <Link href="/mun/about-us" className={cn(
              "block px-4 py-2 text-primary-dark hover:bg-primary hover:text-white border-b border-primary hover:scale-105 transition-all duration-200",
              isBrowser && typeof window !== 'undefined' && window.location.pathname === "/mun/about-us" ? "underline" : ""
            )}>About Us</Link>
            <Link href="/mun/our-team" className={cn(
              "block px-4 py-2 text-primary-dark hover:bg-primary hover:text-white border-b border-primary hover:scale-105 transition-all duration-200",
              isBrowser && typeof window !== 'undefined' && window.location.pathname === "/mun/our-team" ? "underline" : ""
            )}>Our Team</Link>
            <Link href="/mun/past-editions" className={cn(
              "block px-4 py-2 text-primary-dark hover:bg-primary hover:text-white hover:scale-105 transition-all duration-200",
              isBrowser && typeof window !== 'undefined' && window.location.pathname === "/mun/past-editions" ? "underline" : ""
            )}>Past Editions</Link>
          </div>
        )}
      </div>
    </nav>
  );

  const formsUrl = process.env.NEXT_PUBLIC_FORMS_URL;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 ease-in-out",
        scrolled
          ? "bg-[#0B1533]/90 backdrop-blur-md"
          : "bg-transparent"
      )}
      style={{
        height: scrolled ? '5rem' : '8rem',
      }}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-full transition-all duration-500",
          scrolled ? "border-b border-white" : "border-none"
        )}
      >
        <Link
          href="/mun"
          aria-label="Go to homepage"
          className="flex items-center gap-4 sm:justify-center sm:w-auto lg:w-auto transition-all duration-500"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="transition-all duration-500 ease-in-out"
            style={{
              height: scrolled ? '3.5rem' : '6rem',
            }}
          />
          <span
            className="font-bold text-white transition-all duration-500 ease-in-out whitespace-nowrap"
            style={{
              fontSize: scrolled ? '1.75rem' : '2.75rem',
            }}
          >
            GSSMUN
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <NavLinks className="text-lg" />
        </div>
        <div className="lg:hidden ml-4 shrink-0">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-8 w-8 text-white" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[90vw] sm:w-[70vw] bg-[#0B1533]"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center gap-4 mb-3 border-b border-white pb-1">
                  <img src="/logo.png" alt="Logo" className="h-8" />
                  <span className="text-lg font-bold text-white">GSSMUN</span>
                </div>

                <nav className="flex flex-col gap-6 text-xl">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-white hover:text-primary transition-colors",
                          isBrowser && typeof window !== 'undefined' && window.location.pathname === link.href
                            ? "underline"
                            : ""
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <Button
                  asChild
                  className="mt-auto rounded-full text-xl py-6 bg-primary text-white"
                >
                  <a
                    href={formsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
