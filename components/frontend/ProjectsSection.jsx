"use client";

import { ProjectCard } from "../ui/ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Platform E-Commerce",
      description:
        "Website E-commerce dengan kustomisasi personal.",
      images: [
        "/frontend/project/sanydressline1.png",
        "/frontend/project/sanydressline2.png",
      ],
      link: "https://sanydressline.my.id/",
    },
    {
      id: 2,
      title: "Layanan Publiksi",
      description:
        "Landing Page layanan publikasi artikel atau jurnal.",
      images: [
        "/frontend/project/npi1.png",
        "/frontend/project/npi2.png",
      ],
      link: "https://www.publinesia.com/",
    },
    {
      id: 3,
      title: "Layanan Konsultasi Profesional",
      description:
        "Website Company Profile tentang Layanan Konsultasi Profesional.",
      images: [
        "/frontend/project/undagi.png",
      ],
      link: "https://www.undagicorp.com/id",
    },
    {
      id: 4,
      title: "Sistem Manajemen Bisnis",
      description:
        "Aplikasi berbasis website untuk efisiensi bisnis.",
      images: [
        "/frontend/project/Saas.png",
        "/frontend/project/Saas1.png",
        "/frontend/project/Saas2.png",
      ],
      link: "https://tokosembako-eta.vercel.app/",
    },
    {
      id: 5,
      title: "Sistem Menajemen Projek",
      description:
        "Aplikasi manajemen proyek untuk tim dan organisasi.",
      images: [
        "/frontend/project/ciao1.png",
        "/frontend/project/ciao2.png",
      ],
      link: "https://ciao-pink.vercel.app/",
    },
    {
      id: 6,
      title: "Social Media Analytics Tool",
      description:
        "Advanced analytics and reporting tool for social media marketers and influencers.",
      images: [
        "/frontend/project/1.png",
        "/frontend/project/2.jpg",
        "/frontend/project/3.jpg",
      ],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0454BE] dark:text-blue-300 mb-4">
            Portofolio Kami
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-200 max-w-5xl mx-auto">
            Proyek-Proyek Terbaik yang Mengubah Ide Menjadi Kenyataan
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
