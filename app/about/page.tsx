"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const tools = [
  {
    image: "/download.jpg",
    name: "Job Interview Agent",
    description: "Advanced AI-powered Job Interview Agent for your career growth",
    href: "https://job-interview-website-bilals-projects-24de79e8.vercel.app/",
    github:"https://github.com/Bilal243569/Job_Interview_Agent"
  },
  {
    image: "/image2.png",
    name: "Medical Rag AI Application",
    description: "Advanced AI-powered Medical Rag for your development needs",
    href: "https://medical-rag-application-bilal-a119.vercel.app/",
    github:"https://github.com/Bilal243569/Medical_Rag_Application_Bilal"
  },
  {
    image: "/customgpt.png",
    name: "CustomGPT Agentic AI Panaversity Document",
    description: "Advanced AI-powered Document for your development needs",
    href: "https://bilal243569-customgpt-for-agentic-ai-document-main-jcuyqz.streamlit.app/",
    github:"https://github.com/Bilal243569/CustomGPT-For-Agentic-AI-Document"
  },
  {
    image: "/wether.png",
    name: "Wether CustomGPT",
    description: "Advanced AI-powered Weather for your development needs",
    href: "https://bilal243569-weather-customgpt-main-kaery6.streamlit.app/",
    github:"https://github.com/Bilal243569/Weather_CustomGpt"
  },
  {
    image: "/book.png",
    name: "AI Book Writer",
    description: "Advanced AI-powered Book Writer for your development needs",
    href: "https://bilal243569-ai-book-writer-agent-srcai-book-writermain-y6iz22.streamlit.app/",
    github:"https://github.com/Bilal243569/Ai_Book_Writer_Agent"
  },
  {
    image: "/resume.jpg",
    name: "AI Resume Builder",
    description: "Advanced AI-powered Resume for your development needs",
    href: "https://ai-resume-builder-s356-b558crakt-bilals-projects-24de79e8.vercel.app/",
    github:"https://github.com/Bilal243569/AI_RESUME_BUILDER"
  },
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    name: "AI Translator",
    description: "Advanced AI-powered Translator for your development needs",
    href: "https://bilal243569-ai-transl-multilingual-translator-projectapp-pqp8vk.streamlit.app/",
    github:"https://github.com/Bilal243569/AI_TRANSLATOR"
  },
  {
    image: "/8.jpg",
    name: "Gmail Assistant",
    description: "Advanced AI-powered Assistant for your development needs",
    href: "https://bilal243569-gmail-assistant-app-rdv5ns.streamlit.app/",
    github:"https://github.com/Bilal243569/Gmail_Assistant"
  },
  {
    image: "https://images.unsplash.com/photo-1678995632928-298d05d41671?q=80&w=2070&auto=format&fit=crop",
    name: "AI Dev Tools",
    description: "Comprehensive suite of development tools and utilities",
    href: "https://bilal243569-ai-dev-tools-app-fcajjd.streamlit.app/",
    github: "https://github.com/Bilal243569/Ai_Dev_Tools"
  }
];

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />

          

      {/* Hero Split Section */}
      <section className="pt-16 ">
        <div className="grid md:grid-cols-2">
          <div className="relative h-[500px] md:h-[calc(100vh-64px)]">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
              alt="About Agentia Nexus"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center p-8 md:p-16 bg-[#301c34] text-white">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Agentia World
              </h1>
              <p className="text-lg mb-6">
                At Agentia Nexus, I am passionate about creating innovative
                solutions that empower businesses and individuals to thrive in the
                digital age. My mission is to provide cutting-edge tools and
                technologies that make complex tasks simple and efficient.
              </p>
              <p className="text-lg mb-8">
                With years of experience and a dedicated work, I
                continue to push the boundaries of what's possible in the world of
                technology.
              </p>
              <Link href="/#contact">
                <Button className="bg-[#cb73fa] hover:bg-[#cb73fa]/80 text-white">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative h-[400px]">
        <Image
          src="/7.jpeg"
          alt="Technology Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold text-center px-4">
            Empowering Innovation
          </h2>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-[#301c34] mb-6">
              My Vision & Mission
            </h2>
            <p className="text-gray-600 mb-6">
              Agentia Nexus stands at the forefront of technological innovation,
              dedicated to transforming how businesses and individuals interact
              with technology. My comprehensive suite of tools and services is
              designed to streamline processes, enhance productivity, and drive
              success in the digital age.
            </p>
            <p className="text-gray-600 mb-6">
              I believe in the power of technology to create positive change and
              are committed to developing solutions that are not only powerful and
              efficient but also accessible and user-friendly. I 
              work tirelessly to push the boundaries of what's possible,
              constantly innovating and improving my offerings to meet the
              evolving needs of our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center mb-12 text-[#301c34]">
      My Tools & Solutions
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="relative h-48">
            <Image
              src={tool.image}
              alt={tool.name}
              fill
              className="object-fill"
            />
          </div>
          <div className="p-6">
            <a
              href={tool.href}
              className="inline-block text-2xl font-bold mb-2 text-[#301c34] hover:text-[#cb73fa] transition-colors"
            >
              {tool.name}
            </a>
            <p className="text-gray-600 mb-4">{tool.description}</p>
            <Button
              variant="outline"
              className="w-full border-[#cb73fa] text-[#301c34] hover:bg-[#cb73fa] hover:text-white mb-2"
              onClick={() => window.location.href = tool.href}
            >
              View Project
            </Button>
            <Button
              variant="secondary"
              className="w-full border-gray-800 bg-[#cb73fa] hover:bg-[#cb73fa]/80 text-white "
              onClick={() => window.location.href = tool.github}
            >
              View on GitHub
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
          </section>

          {/* Footer */}
          <Footer />
    </main>
  );
}