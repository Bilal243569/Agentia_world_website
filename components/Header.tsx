import { Bot, Building2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export default function Header() {
  return (
    <div>
      <header className="fixed top-0 w-full bg-[#301c34] text-white z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Bot className="w-8 h-8" />
              <span className="ml-2 text-xl font-bold">Agentic Nexus</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-[#cb73fa] transition-colors">Home</Link>
              <Link href="/about" className="text-[#cb73fa]">About</Link>
              <Link href="/#tools" className="hover:text-[#cb73fa] transition-colors">Tools</Link>
            </nav>
            
            <Link href="/#contact">
              <Button
                variant="secondary"
                className="bg-[#cb73fa] hover:bg-[#cb73fa]/80 text-white"
              >
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}
