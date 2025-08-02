import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  
  const textContainerRef = useRef(null);
  const myimageref = useRef(null);
  const ctaButtonRef = useRef(null);

  useEffect(() => {
    const textElements = textContainerRef.current.children;
    const imageEl = myimageref.current;
    const buttonEl = ctaButtonRef.current;

    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" },
    });

    tl.from(
      textElements,
      {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        delay: 0.5,
      },
      "start"
    )
    .from(
      buttonEl,
      {
        y: 20,
        opacity: 0,
        delay: 1.0, 
      },
      "start"
    )
    .from(
      imageEl,
      {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
      },
      "start+=0.5"
    );
  }, []);

  return (
    <div className="relative min-h-screen w-full aurora-background flex items-center justify-center overflow-hidden">
      <main className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-8 gap-8 md:gap-12">
        {/* Kiri: Teks */}
        <div className="relative z-10 flex flex-col gap-3 md:gap-4 items-center text-center md:items-start md:text-left mt-12 md:mt-0">
          <div ref={textContainerRef}>
            <div className="overflow-hidden">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white">
                Hi, <span role="img" aria-label="wave">👋</span> I'm
              </h1>
            </div>
            <div className="overflow-hidden mt-1">
              <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
                {name}
              </h1>
            </div>
            <div className="overflow-hidden mt-3">
              <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 tracking-wide">
                {tagline}
              </h2>
            </div>
          </div>

          {/* === PERUBAHAN DI SINI === */}
          {/* Tombol Aksi (CTA) diubah menjadi Download CV */}
          <div ref={ctaButtonRef} className="mt-6">
            <a 
              href="/cv.pdf" // 1. Arahkan ke file di folder public
              download="cv.pdf" // 2. Tambahkan atribut download agar file diunduh
              className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              {/* 3. Ganti teks tombol dan tambahkan ikon download */}
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </a>
          </div>
          {/* === AKHIR PERUBAHAN === */}

        </div>
        
        {/* Kanan: Gambar */}
        <div className="relative z-10 w-full flex justify-center md:justify-center">
          <div ref={myimageref} className="relative group w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300 to-purple-400 blur-xl opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
            <img
              className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-gray-100 dark:border-gray-700"
              src={img}
              alt={name}
            />
          </div>
        </div>
      </main>

      {/* Indikator Scroll Down */}
      <div className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll down">
          <div className="w-8 h-14 rounded-full border-2 border-gray-500 dark:border-gray-400 flex justify-center items-start p-1 animate-bounce-slow">
            <div className="w-1 h-2 rounded-full bg-gray-500 dark:bg-gray-400"></div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Home;