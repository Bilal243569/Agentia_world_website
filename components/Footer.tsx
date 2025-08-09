import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#301c34] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Agentia Nexus</h3>
              <p className="text-gray-300">
                Empowering your digital journey with cutting-edge solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-[#cb73fa]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-[#cb73fa]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#tools" className="text-gray-300 hover:text-[#cb73fa]">
                    Tools
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-[#cb73fa]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                {/* <a href="#" className="text-gray-300 hover:text-[#cb73fa]">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#cb73fa]">
                  <Facebook className="w-6 h-6" />
                </a> */}
                <Link href="https://www.linkedin.com/in/bilal-khan-350289306/" className="text-gray-300 hover:text-[#cb73fa]">
    <Linkedin className="w-6 h-6" />
</Link>
<Link href="https://github.com/Bilal243569" className="text-gray-300 hover:text-[#cb73fa]">
    <Github className="w-6 h-6" />
</Link>

              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button
                  className="ml-2 bg-[#cb73fa] hover:bg-[#cb73fa]/80"
                  size="icon"
                >
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Agentia Nexus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
