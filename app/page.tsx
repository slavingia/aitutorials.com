"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ArrowRight,
  Code,
  Compass,
  MessageSquare,
  Twitter,
  Github,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const href = e.currentTarget.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for header
            behavior: "smooth",
          });

          // Update URL without reload
          window.history.pushState(null, "", href);
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener(
        "click",
        handleAnchorClick as unknown as EventListener
      );
    });

    return () => {
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener(
          "click",
          handleAnchorClick as unknown as EventListener
        );
      });
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center md:px-6 mx-auto">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold tracking-tight text-primary">
              AITutorials.com
            </span>
          </Link>
          <div className="flex flex-1 items-center justify-end space-x-2 md:space-x-4">
            <nav className="flex items-center space-x-2">
              {/* Mobile Menu Icon */}
              <div className="md:hidden">
                <button onClick={toggleMenu} className="flex items-center">
                  <span className="h-5 w-5">☰</span>
                </button>
              </div>

              {/* Mobile Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute  bg-slate-100  dark:bg-blue-800 right-2 mt-52 w-48 shadow-lg rounded-lg p-4 z-50">
                  <Link href="#tutorials" className="block mb-2 text-black hover:text-blue-500" onClick={closeMenu}>Tutorials</Link>
                  <Link href="#about" className="block mb-2 text-black hover:text-blue-500" onClick={closeMenu}>About</Link>
                  <Link href="#contact" className="block mb-2 text-black hover:text-blue-500" onClick={closeMenu}>Contact</Link>
                  <a
                    href="https://github.com/slavingia/aitutorials.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-2 text-black hover:text-blue-500"
                    onClick={closeMenu}
                  >
                    GitHub
                  </a>
                </div>
              )}

              {/* Desktop Buttons */}
              <div className="hidden md:flex space-x-2">
                <Button variant="ghost" asChild>
                  <Link href="#tutorials">Tutorials</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="#about">About</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="#contact">Contact</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <a
                    href="https://github.com/slavingia/aitutorials.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Learn to Build with AI
              </h1>
              <p className="mx-auto text-muted-foreground md:text-xl">
                Master the art of building with AI through our comprehensive
                tutorials covering product management, coding, and design.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link href="#tutorials">
                  Explore Tutorials <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div id="tutorials" className="container px-4 md:px-6 py-12 mx-auto">
        {/* PMing Section */}
        <section className="mb-20">
          <div className="flex items-center mb-6">
            <Compass className="h-8 w-8 mr-3 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">
              Product Management with AI
            </h2>
          </div>
          <p className="text-xl text-muted-foreground mb-8">
            Learn how to leverage AI to enhance your product management
            workflow, from ideation to execution.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>PMing with o1 pro, v0, and DeepSeek-R1</CardTitle>
                  <CardDescription>
                    Improved audio version for better product management with AI
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <YoutubeEmbed
                    videoId="EBosnqXWxYI"
                    title="PMing with o1 pro, v0, and DeepSeek-R1 (better audio)"
                  />
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Developing with Devin</CardTitle>
                  <CardDescription>
                    Learn how to use Devin for AI-assisted development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <YoutubeEmbed
                    videoId="7UIYiOGtC8Y"
                    title="Developing with Devin"
                  />
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>
                    Using Cursor + Claude 3.5 Sonnet + Tailwind
                  </CardTitle>
                  <CardDescription>
                    Ship 20x faster with modern AI-assisted development tools
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <YoutubeEmbed
                    videoId="bEU15KXIAVk"
                    title="Using Cursor + Claude 3.5 Sonnet + Tailwind to ship 20x faster"
                  />
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>QAing with AI</CardTitle>
                  <CardDescription>
                    Learn effective techniques for quality assurance using AI
                    tools
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <YoutubeEmbed videoId="7ahhZDlTP8M" title="QAing with AI" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Coding Section */}
        <section className="mb-20">
          <div className="flex items-center mb-6">
            <Code className="h-8 w-8 mr-3 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">
              Coding with AI
            </h2>
          </div>
          <p className="text-xl text-muted-foreground mb-8">
            Discover how to use AI tools to accelerate your development process
            and write better code.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Coding with Cursor: Session 1</CardTitle>
                  <CardDescription>
                    Getting started with AI-assisted development ft. @shpigford
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <YoutubeEmbed
                    videoId="1CC88QGQiEA"
                    title="Coding with Cursor: Session 1 ft. @shpigford"
                  />
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Coding with Cursor: Session 2</CardTitle>
                  <CardDescription>
                    Continuing your journey with AI-assisted development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <YoutubeEmbed
                    videoId="mY6oV7tZUi0"
                    title="Coding with Cursor: Session 2"
                  />
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Coding with Cursor: Session 3</CardTitle>
                  <CardDescription>
                    Advanced techniques for coding with AI assistance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <YoutubeEmbed
                    videoId="XuCRzqgD_ns"
                    title="Coding with Cursor: Session 3"
                  />
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Coding with Cursor: Session 4</CardTitle>
                  <CardDescription>
                    Advanced AI-assisted development with @shaoruu
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <YoutubeEmbed
                    videoId="42zmF9ARSWM"
                    title="Coding with Cursor: Session 4 ft. @shaoruu"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20">
          <div className="flex items-center mb-6">
            <MessageSquare className="h-8 w-8 mr-3 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">
              About AITutorials
            </h2>
          </div>
          <div className="prose">
            <p className="text-xl text-muted-foreground mb-8">
              AITutorials is dedicated to helping developers, product managers,
              and designers leverage the power of AI in their daily workflows.
              Our tutorials are created by industry professionals who are
              passionate about sharing their knowledge and experience with the
              community.
            </p>
            <p className="text-xl text-muted-foreground mb-8">
              We believe that AI tools can dramatically improve productivity and
              creativity when used effectively. Our mission is to provide clear,
              practical guidance on integrating these powerful tools into your
              work.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <div className="flex items-center mb-6">
            <Twitter className="h-8 w-8 mr-3 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          </div>
          <p className="text-xl text-muted-foreground mb-8">
            Have questions or suggestions? I&apos;d love to hear from you!
          </p>
          <div>
            <Button size="lg" asChild>
              <a
                href="https://twitter.com/messages/compose?recipient_id=shl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Twitter className="mr-2 h-5 w-5" />
                DM me on X (@shl)
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
