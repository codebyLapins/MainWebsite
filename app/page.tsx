'use client';

import { useState } from "react";
import Image from "next/image";
import PixelBlast from "@/components/PixelBlast";
import FuzzyText from "@/components/FuzzyText";
import ShinyText from "@/components/ShinyText";
import RotatingText from "@/components/RotatingText";
import MagicBento from "@/components/MagicBento";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-center mt-4 md:mt-8 px-4">
          <div className="bg-[#4a388f]/10 backdrop-blur-md border border-[#4a388f]/40 rounded-full px-6 md:px-12 py-1.5 md:py-2 flex items-center gap-8 md:gap-20 shadow-lg shadow-[#4a388f]/20 relative">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center overflow-visible relative">
                <Image src="/logo.png" alt="CodeByLapins" width={120} height={120} className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-contain absolute" style={{ imageRendering: 'crisp-edges' }} />
              </div>
              <span className="text-sm md:text-xl font-semibold text-white">CodeByLapins</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6 md:gap-10 text-white text-sm md:text-base">
              <a href="#home" className="hover:text-[#4a388f] hover:scale-110 transition-all duration-200 font-medium">Home</a>
              <a href="#services" className="hover:text-[#4a388f] hover:scale-110 transition-all duration-200 font-medium">Services</a>
              <a href="#about" className="hover:text-[#4a388f] hover:scale-110 transition-all duration-200 font-medium">About</a>
              <a href="#works" className="hover:text-[#4a388f] hover:scale-110 transition-all duration-200 font-medium">Works</a>
              <a href="#contact" className="hover:text-[#4a388f] hover:scale-110 transition-all duration-200 font-medium">Pricing</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1 p-2"
              aria-label="Toggle menu"
            >
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
            </button>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
              <div className="absolute top-full mt-2 right-0 bg-[#4a388f]/95 backdrop-blur-md border border-[#4a388f]/40 rounded-2xl py-4 px-6 flex flex-col gap-3 shadow-lg shadow-[#4a388f]/20 md:hidden">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9b7fd9] transition-colors font-medium text-white">Home</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9b7fd9] transition-colors font-medium text-white">Services</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9b7fd9] transition-colors font-medium text-white">About</a>
                <a href="#works" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9b7fd9] transition-colors font-medium text-white">Works</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9b7fd9] transition-colors font-medium text-white">Pricing</a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section with PixelBlast - Full Screen */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        {/* PixelBlast Background covering entire section */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <PixelBlast
            variant="square"
            pixelSize={6}
            color="#4a388f"
            patternScale={3}
            patternDensity={1.6}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0}
            transparent
          />
          {/* Dark blur vignette effect on sides */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black via-black/50 to-transparent"></div>
          </div>
        </div>
        {/* Bottom fade overlay that extends beyond the section */}
        <div className="absolute left-0 right-0 bottom-0 h-96 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl flex flex-col items-center w-full">
          <div className="flex flex-col items-center w-full">
            <div className="w-full flex justify-center mb-2 md:mb-4">
              <FuzzyText
                baseIntensity={0.13}
                hoverIntensity={0.72}
                enableHover={true}
                fontSize="clamp(2.5rem, 10vw, 6rem)"
                fontWeight={900}
                color="#ffffff"
              >
                Beautiful.
              </FuzzyText>
            </div>
            <div className="w-full flex justify-center mb-2 md:mb-4">
              <FuzzyText
                baseIntensity={0.13}
                hoverIntensity={0.72}
                enableHover={true}
                fontSize="clamp(2.5rem, 10vw, 6rem)"
                fontWeight={900}
                color="#ffffff"
              >
                Functional.
              </FuzzyText>
            </div>
            <div className="w-full flex justify-center">
              <FuzzyText
                baseIntensity={0.13}
                hoverIntensity={0.72}
                enableHover={true}
                fontSize="clamp(2.5rem, 10vw, 6rem)"
                fontWeight={900}
                color="#ffffff"
              >
                Yours.
              </FuzzyText>
            </div>
          </div>

          <div className="mt-8">
            <RotatingText
              texts={['Websites', 'Web Apps', 'Mobile Apps', 'E-Commerce']}
              mainClassName="px-4 py-2 bg-[#33496b] text-white overflow-hidden rounded-lg text-2xl font-semibold"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a
              href="#services"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 min-w-[160px]"
            >
              <ShinyText text="Get Started" speed={3} />
            </a>
            <a
              href="#about"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all transform hover:scale-105 min-w-[160px]"
            >
              <ShinyText text="Learn More" speed={3} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-0 bg-black relative z-10">
        <h2 className="text-5xl font-bold mb-12 text-center text-white">Services</h2>
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="74, 56, 143"
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-zinc-950 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold mb-12 text-center text-[#4a388f]">About</h2>
          <div className="bg-zinc-900 rounded-2xl p-8 border border-[#4a388f]/20">
            <h3 className="text-2xl font-bold text-white mb-4">Arturs Lapiņš</h3>
            <p className="text-lg text-[#4a388f] mb-6">Computer Science Student</p>
            <p className="text-xl leading-relaxed text-gray-300 mb-6">
              I'm a computer science student passionate about creating innovative web solutions
              and applications. I specialize in building modern, responsive websites and apps
              that combine cutting-edge technology with exceptional user experiences.
            </p>
            <p className="text-xl leading-relaxed text-gray-300">
              Whether you need a stunning website, a custom web application, or mobile app development,
              I bring creativity and technical expertise to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-24 px-6 bg-black relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-16 text-center text-[#4a388f]">Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project placeholders - you can add real projects later */}
            <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-[#4a388f]/20 hover:border-[#4a388f] transition-all hover:transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-[#4a388f] to-purple-900 flex items-center justify-center">
                <span className="text-2xl font-bold">Project 1</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Coming Soon</h3>
                <p className="text-gray-400 mb-4">
                  Exciting projects are in development. Check back soon to see my latest work.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#4a388f]/20 text-[#4a388f] rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-[#4a388f]/20 text-[#4a388f] rounded-full text-sm">Next.js</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-[#4a388f]/20 hover:border-[#4a388f] transition-all hover:transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-purple-900 to-[#4a388f] flex items-center justify-center">
                <span className="text-2xl font-bold">Project 2</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Coming Soon</h3>
                <p className="text-gray-400 mb-4">
                  Exciting projects are in development. Check back soon to see my latest work.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#4a388f]/20 text-[#4a388f] rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-[#4a388f]/20 text-[#4a388f] rounded-full text-sm">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-black relative z-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-5xl font-bold mb-12 text-center text-[#4a388f]">Get In Touch</h2>
          <div className="bg-zinc-950 rounded-2xl p-8 border border-[#4a388f]/20">
            <p className="text-xl text-center text-gray-300 mb-8">
              Ready to start your project? Let's discuss how I can help bring your ideas to life.
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-zinc-900 border border-[#4a388f]/20 rounded-lg focus:outline-none focus:border-[#4a388f] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-zinc-900 border border-[#4a388f]/20 rounded-lg focus:outline-none focus:border-[#4a388f] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-900 border border-[#4a388f]/20 rounded-lg focus:outline-none focus:border-[#4a388f] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#4a388f] text-white rounded-lg font-semibold hover:bg-[#9b7fd9] transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-zinc-950 border-t border-white/10 relative z-10">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2025 CodeByLapins. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
