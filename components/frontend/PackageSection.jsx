"use client";

import PackageCard from "../ui/PackageCard";

const PackageSection = () => {
  const packageList = [
    {
      id: 1,
      name: "Basic",
      features: ["Desain minimalis dan responsif", "Halaman utama + 3 halaman tambahan", "CTA WhatsApp", "Integrasi media sosial", "Gratis domain dan hosting (1 tahun)"],
    },
    {
      id: 2,
      name: "Standard",
      features: ["Semua fitur dari paket basic", "Halaman tambahan (total 6 halaman)", "Desain lebih ekslusif", "Blog atau fitur berita", "Basic SEO"],
      isPopular: true,
    },
    {
      id: 3,
      name: "Premium",
      features: ["Semua fitur dari paket standard", "Fitur toko online", "Payment Gateway", "Optimasi SEO lanjutan", "Backup berkala"],
    },
  ];

  return (
    <section id="package" className="py-12 text-center bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0454BE] dark:text-blue-300 mb-4">
            Pilihan Paket
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 max-w-5xl mx-auto">
            Kami menawarkan paket yang fleksibel untuk memenuhi kebutuhan Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packageList.map((list) => (
            <PackageCard key={list.id} {...list} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
