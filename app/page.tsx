"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  MessageSquare,
  Settings,
  Wand2,
  Brain,
  Plane,
  Book,
  Cloud,
  Bot,
  Stethoscope,
  Briefcase,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const carouselImages = [
  "/3.png",
  "/1.jpg",
  "/4.png",
];

const tools = [
  {
    icon: <Briefcase className="w-12 h-12" />,
    name: "Job Interview Agent",
    description: "Advanced AI-powered Job Interview Agent for your career growth",
    href: "https://job-interview-website-bilals-projects-24de79e8.vercel.app/",
  },
  {
    icon: <Stethoscope className="w-12 h-12" />,
    name: "Medical Rag AI Application",
    description: "Advanced AI-powered Medical Rag for your development needs",
    href: "https://medical-rag-application-bilal-a119.vercel.app/",
  },
  {
    icon: <Bot className="w-12 h-12" />,
    name: "CustomGPT Agentic AI Panaversity Document",
    description: "Advanced AI-powered Document for your development needs",
    href: "https://bilal243569-customgpt-for-agentic-ai-document-main-jcuyqz.streamlit.app/"
  },
  {
    icon: <Cloud className="w-12 h-12" />,
    name: "Wether CustomGPT",
    description: "Advanced AI-powered Weather for your development needs",
    href: "https://bilal243569-weather-customgpt-main-kaery6.streamlit.app/"
  },
  {
    icon: <Book className="w-12 h-12" />,
    name: "AI Book Writer",
    description: "Advanced AI-powered Book Writer for your development needs",
    href: "https://bilal243569-ai-book-writer-agent-srcai-book-writermain-y6iz22.streamlit.app/"
  },
  {
    icon: <Brain className="w-12 h-12" />,
    name: "AI Resume Builder",
    description: "Advanced AI-powered Resume for your development needs",
    href: "https://ai-resume-builder-s356-b558crakt-bilals-projects-24de79e8.vercel.app/"
  },
  {
    icon: <Wand2 className="w-12 h-12" />,
    name: "AI Translator",
    description: "Advanced AI-powered Translator for your development needs",
    href: "https://bilal243569-ai-transl-multilingual-translator-projectapp-pqp8vk.streamlit.app/"
  },
  {
    icon: <MessageSquare className="w-12 h-12" />,
    name: "Gmail Assistant",
    description: "Advanced AI-powered Assistant for your development needs",
    href: "https://bilal243569-gmail-assistant-app-rdv5ns.streamlit.app/"
  },
  {
    icon: <Settings className="w-12 h-12" />,
    name: "AI Dev Tools",
    description: "Comprehensive suite of development tools and utilities",
    href: "https://bilal243569-ai-dev-tools-app-fcajjd.streamlit.app/"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Success!",
      description: "Your message has been sent successfully.",
    });
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative h-screen pt-16">
        <div className="absolute inset-0">
          {carouselImages.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>

        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center space-y-6 px-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Welcome to Agentia Nexus
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Empowering your digital journey with cutting-edge solutions
            </p>
            <div className="space-x-4">
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-[#cb73fa] hover:bg-[#cb73fa]/80 text-white"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-[#cb73fa]" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Tools Section */}
      {/* Tools Section */}
<section id="tools" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center mb-12 text-[#301c34]">
      My Tools
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-[#cb73fa] mb-4">{tool.icon}</div>
          <h3 className="text-2xl font-bold mb-2 text-[#301c34]">
            {tool.name}
          </h3>
          <p className="text-gray-600 mb-4">{tool.description}</p>
          
          {/* Display Link */}
          {/* <p className="text-sm text-gray-500 font-mono break-all">
            {tool.href}
          </p> */}

          {/* Open Link Button */}
          <a href={tool.href} target="_blank" rel="noopener noreferrer">
            <Button className="mt-4 w-full bg-[#cb73fa] hover:bg-[#cb73fa]/80 text-white">
              Open Tool
            </Button>
          </a>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="About Agentia Nexus"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#301c34]">
                About Agentia Nexus
              </h2>
              <p className="text-gray-600 mb-6">
                At Agentia Nexus, I am passionate about creating innovative
                solutions that empower businesses and individuals to thrive in the
                digital age. My mission is to provide cutting-edge tools and
                technologies that make complex tasks simple and efficient.
              </p>
              <p className="text-gray-600 mb-8">
                With years of experience and a dedicated team of experts, I
                continue to push the boundaries of what's possible in the world of
                technology.
              </p>
              <Link href="/about">
              <Button className="bg-[#301c34] hover:bg-[#301c34]/80 text-white">
                Learn More
                </Button>
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#301c34]">
            Get in Touch
          </h2>
          <form action={"https://formspree.io/f/myzygreg"} method="POST" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <Input required type="Name" name="name" autoComplete="off" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input type="email" name="email" required autoComplete="off" className="w-full" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <Input required type="Subject" name="subject" autoComplete="off" className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <Textarea required name="message" autoComplete="off" className="w-full min-h-[150px]" />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#301c34] hover:bg-[#301c34]/80 text-white"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}