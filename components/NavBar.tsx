"use client";
import React, { useState } from 'react';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar';
import { Sparkles, Shield, Zap, Users, Mail, ArrowRight } from 'lucide-react';

export function NavBar() {
  const navItems = [
    {
      name: "Problem",
      link: "#problem",
    },
    {
      name: "Solution",
      link: "#solution",
    },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full z-50 ">
      <Navbar className="top-4">
        {/* Desktop Navigation */}
        <NavBody className="border border-neutral-200/50 dark:border-neutral-800/50">
          {/* Logo Section */}
          <div className="relative z-20 flex items-center gap-3 px-2 py-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg blur-md opacity-50"></div>
              <div className="relative w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
              InnovateLab
            </span>
          </div>

          {/* Navigation Items */}
          <NavItems items={navItems} className="text-neutral-700 text-md dark:text-neutral-300" />

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <NavbarButton 
              variant="secondary"
              className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
            >
              Sign In
            </NavbarButton>
            <NavbarButton 
              variant="gradient"
              className="flex items-center gap-2 shadow-lg shadow-blue-500/30"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="border border-neutral-200/50 dark:border-neutral-800/50">
          <MobileNavHeader>
            {/* Mobile Logo */}
            <div className="flex items-center gap-3 px-2 py-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg blur-md opacity-50"></div>
                <div className="relative w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="font-bold text-base bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
                InnovateLab
              </span>
            </div>

            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          {/* Mobile Menu */}
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="border border-neutral-200/50 dark:border-neutral-800/50"
          >
            {/* Mobile Nav Items with Icons */}
            <div className="w-full space-y-1">
              {navItems.map((item, idx) => {
                const icons = {
                  Problem: Shield,
                  Solution: Zap,
                  Features: Sparkles,
                  About: Users,
                  Contact: Mail,
                };
                const Icon = icons[item.name as keyof typeof icons] || Sparkles;
                
                return (
                  <a
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200 group"
                  >
                    <Icon className="w-5 h-5 text-neutral-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    <span className="text-base font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white">
                      {item.name}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 my-2"></div>

            {/* Mobile Action Buttons */}
            <div className="flex w-full flex-col gap-3">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800"
              >
                Sign In
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="gradient"
                className="w-full flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

     
    </div>
  );
}

export default NavBar;