'use client';

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Dither from "@/components/Dither";
import { Project } from "@/data/projects";

interface ClientProjectPageProps {
  project: Project;
}

export default function ClientProjectPage({ project }: ClientProjectPageProps) {
  const [currentLang, setCurrentLang] = useState<'en' | 'lv'>('en');

  const title = currentLang === 'lv' ? project.titleLv : project.titleEn;
  const description = currentLang === 'lv' ? project.descriptionLv : project.descriptionEn;
  const category = currentLang === 'lv' ? project.categoryLv : project.categoryEn;

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Dither Background */}
      <div className="fixed inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <Dither
          waveColor={[0.3, 0.2, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.2}
          colorNum={4}
          waveAmplitude={0.37}
          waveFrequency={3.7}
          waveSpeed={0.03}
        />
      </div>

      {/* Navigation */}
      <Navbar currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Back Button */}
      <div className="relative z-10 container mx-auto max-w-6xl px-4 md:px-6 pt-32 pb-8">
        <Link
          href="/#works"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-[family-name:var(--font-ibm-plex-mono)]"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {currentLang === 'en' ? 'Back to Works' : 'Atpakaļ uz Darbiem'}
        </Link>
      </div>

      {/* Project Header */}
      <section className="relative z-10 container mx-auto max-w-6xl px-4 md:px-6 pb-12">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-[#4a388f]/20 border border-[#4a388f]/40 rounded-full text-sm font-[family-name:var(--font-ibm-plex-mono)] mb-4">
            {category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-ibm-plex-mono)]">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-[family-name:var(--font-ibm-plex-mono)] max-w-3xl">
            {description}
          </p>
        </div>

        {/* Project Meta */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-zinc-950 rounded-lg p-6 border border-[#4a388f]/20">
            <h3 className="text-sm text-gray-400 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
              {currentLang === 'en' ? 'Year' : 'Gads'}
            </h3>
            <p className="text-xl font-semibold font-[family-name:var(--font-ibm-plex-mono)]">{project.year}</p>
          </div>

          <div className="bg-zinc-950 rounded-lg p-6 border border-[#4a388f]/20">
            <h3 className="text-sm text-gray-400 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
              {currentLang === 'en' ? 'Technologies' : 'Tehnoloģijas'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#4a388f]/20 border border-[#4a388f]/40 rounded-full text-xs font-[family-name:var(--font-ibm-plex-mono)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Website Link */}
        {project.url && (
          <div className="mb-12">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#4a388f] hover:bg-[#5a48af] rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,56,143,0.5)] font-[family-name:var(--font-ibm-plex-mono)]"
            >
              {currentLang === 'en' ? 'Visit Website' : 'Apmeklēt Vietni'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </section>

      {/* Project Images Gallery */}
      <section className="relative z-10 container mx-auto max-w-6xl px-4 md:px-6 pb-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 font-[family-name:var(--font-ibm-plex-mono)]">
          {currentLang === 'en' ? 'Project Gallery' : 'Projekta Galerija'}
        </h2>

        <div className="space-y-8">
          {/* Images */}
          {project.images.map((image, index) => (
            <div
              key={`image-${index}`}
              className="group relative overflow-hidden rounded-2xl border border-[#4a388f]/20 bg-zinc-950"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">
                  {currentLang === 'en' ? 'Image' : 'Attēls'} {index + 1} / {project.images.length + (project.videos?.length || 0)}
                </p>
              </div>
            </div>
          ))}

          {/* Videos */}
          {project.videos?.map((video, index) => (
            <div
              key={`video-${index}`}
              className="group relative overflow-hidden rounded-2xl border border-[#4a388f]/20 bg-zinc-950"
            >
              <div className="aspect-video relative overflow-hidden">
                <video
                  src={video}
                  controls
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-sm text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">
                  {currentLang === 'en' ? 'Video' : 'Video'} {project.images.length + index + 1} / {project.images.length + (project.videos?.length || 0)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-zinc-950 border-t border-white/10 relative z-10">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2025 CodeByLapins. {currentLang === 'en' ? 'All rights reserved.' : 'Visas tiesības aizsargātas.'}</p>
        </div>
      </footer>
    </div>
  );
}
