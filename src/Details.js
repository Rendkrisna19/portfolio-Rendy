// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import php from "./assets/techstack/laravel.png";
import laravel from "./assets/techstack/php.png";
import mysql from "./assets/techstack/mysql.png";
import python from "./assets/techstack/python.jpg";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.png";
import projectImage6 from "./assets/projects/project6.png";
import projectImage7 from "./assets/projects/project7.png";
import projectImage8 from "./assets/projects/project8.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Rendy Krisna",
  tagline: "I am Fullstack Developer",
  img: profile,
  about: `Saya percaya teknologi adalah seni. Sebagai seorang Developer, saya membangun pengalaman web yang tidak hanya bekerja dengan sempurna, tetapi juga terasa hidup dan intuitif. Dari merajut piksel di antarmuka (front-end) hingga merakit logika di balik layar (back-end), setiap baris kode adalah langkah untuk menciptakan sesuatu yang bermakna. Saya bersemangat dalam memecahkan masalah dan siap berkolaborasi untuk membangun Sistem yang bermanfaat, yang dapat memecahkan masalah.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/rendy-krisna-27b6362a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  github: "https://github.com/Rendkrisna19/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/reendev/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `PT SOLARIA INDONESIA`,
    Location: "REMOTE WORKER",
    Type: "FREELANCER",
    Duration: "May 2025 - April 2025",
  },
  {
    Position: "Web Developer ",
    Company: `PT KREATIF DIGITAL INDONESIA`,
    Location: "REMOTE",
    Type: "Internship",
    Duration: "April 2025 - June 2025",
  },
  {
    Position: "FULLSTACK DEVELOPER",
    Company: `codifyhub`,
    Location: "Medan",
    Type: "Part Time",
    Duration: "May 2024 - Now",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Manajemen Informatika",
    Company: "Politeknik Negeri Medan",
    Location: "Medan",
    Type: "Sekolah Vokasi",
    Duration: "2023 - 2026",
  },
  {
    Position: "Dicoding Academy",
    Company: `Frontend Web Developer`,
    Location: "Online",
    Type: "Botcamp acedemy",
    Duration: "2023 - 2024",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  laravel: laravel,
  php: php,
  mysql: mysql,
  python: python,


};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Wesco | Sistem Pengelolaan Tanki Delivery Pertamina",
    image: projectImage1,
    description: `Sistem Ini ialah sistem yang saya buat melalui pesanan client yang saya dapatkan dari seorang karyawan PT pertamina, mereka ingin mengembangkan sistem yang sebelumnya manual menjadi semi digitalisasi dengan membuat sistem agar pekerjaan lebih mudah dan efektif. Sistem ini saya buat selama lebih kurang 1 bulan pengerjaan.`,
    techstack: "PHP, MYSQL, Tailwind CSS, JavaScript",
    previewLink: "https://",
    githubLink: "https://github.com/",
  },
  {
    title: "Company Profile Solaria Indonesia",
    image: projectImage2,
    description: `Website Company Profile Solaria Indonesia adalah website yang saya buat untuk memenuhi kebutuhan perusahaan dalam memperkenalkan diri mereka kepada publik. Website ini dirancang dengan tampilan yang menarik dan responsif, sehingga dapat diakses dengan baik di berbagai perangkat. Saya menggunakan teknologi React Js dan Tailwind Css untuk membangun website ini.`,
    techstack: "React Js, Tailwind CSS",
    previewLink: "https://google.com",  
    githubLink: "https://github.com",
  },
  {
    title: "Sistem Inventaris Barang Kabupaten Kemang",
    image: projectImage3,
    description: `Website Sistem Inventaris Barang Kabupaten Kemang adalah sebuah sistem yang saya buat untuk membantu pemerintah daerah dalam mengelola inventaris barang. Sistem ini dirancang untuk memudahkan pencatatan, pengelolaan, dan pelaporan inventaris barang secara efisien. Saya menggunakan teknologi PHP dan MySQL untuk membangun sistem ini.`,
    techstack: "HTML/CSS, JavaScript, PHP, MySQL",
    previewLink: "https://kecamatankemangkabbogor.site/",
    githubLink: "https://github.com",
  },
  {
    title: "Sistem Informasi Bakoelide",
    image: projectImage4,
    description: `Website ini merupakan website yang saya buat waktu saya magang di PT DIGITAL KREATIF INDONESIA, sebuah perusahaan yang bergerak di bidang digital marketing. Website ini dirancang untuk memberikan informasi tentang layanan yang ditawarkan oleh PT agency, serta untuk mempromosikan produk dan layanan mereka kepada klien potensial. Saya menggunakan teknologi React Js dan Tailwind Css, Dan laravel untuk membangun website ini.`,
    techstack: "Laravel, React Js, Tailwind CSS",
    previewLink: "https://bakoelide.com/",
    githubLink: "https://github.com",
  },
  {
    title: "Sistem Informasi Desa Singgamanik",
    image: projectImage5,
    description: `Website Sistem Informasi Desa Singgamanik adalah sebuah sistem yang saya buat untuk membantu pemerintah desa dalam mengelola informasi dan layanan publik. Sistem ini dirancang untuk memudahkan warga desa dalam mengakses informasi terkait layanan publik, seperti administrasi kependudukan, kesehatan, pendidikan, dan lain-lain. Saya menggunakan teknologi PHP dan MySQL untuk membangun sistem ini.`,
    techstack: "PHP, Mysql, HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Website Latahzan Reborn",
    image: projectImage6,
    description: `Website Latahzan Reborn Adalah sebuah website yang saya buat untuk Team Basket Latahzan Reborn, sebuah tim basket yang berbasis di Medan. Website ini dirancang untuk memberikan informasi tentang tim, jadwal pertandingan, dan berita terkini seputar dunia basket. Saya menggunakan teknologi React Js & Tailwind Css untuk membangun website ini.`,
    techstack: "React Js, Tailwind CSS",
    previewLink: "https://latahzan-reborn.vercel.app/",
    githubLink: "https://github.com",
  },
  {
    title: "Website Codifyhub",
    image: projectImage7,
    description: `Website Codifyhub adalah website usaha jasa pembuatan Website Saya sendiri, yang saya buat untuk mempromosikan jasa pembuatan website yang saya tawarkan. Website ini dirancang dengan tampilan yang menarik dan responsif, sehingga dapat diakses dengan baik di berbagai perangkat. Saya menggunakan teknologi React Js dan Tailwind Css untuk membangun website ini.`,
    techstack: "React Js, Tailwind CSS",
    previewLink: "https://codify-hub-one.vercel.app/",
    githubLink: "https://github.com",
  },
  {
    title: "Website Pringsewu Tani Digital",
    image: projectImage8,
    description: `Website Pringsewu Tani Digital adalah sebuah website yang saya buat untuk mempromosikan produk pertanian lokal di Kabupaten Pringsewu, Lampung. Website ini dirancang untuk memberikan informasi tentang produk pertanian, harga, dan cara pemesanan. Saya menggunakan teknologi React Js dan Tailwind Css untuk membangun website ini.`,
    techstack: "React Js, Tailwind CSS",
    previewLink: "https://pringsewu-tani-digital.vercel.app/",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "muhammadrendykrisna@gmail.com",
  phone: "+62822-7537-3233",
};
