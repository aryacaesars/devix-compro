"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";

const FAQSection = () => {
  const faqData = [
    {
      id: 1,
      question: "Berapa lama waktu yang dibutuhkan untuk membuat website?",
      answer:
        "Waktu pengembangan website bervariasi tergantung pada kompleksitas proyek. Website sederhana dapat selesai dalam 2-4 minggu, sementara proyek yang lebih kompleks mungkin membutuhkan 2-3 bulan. Kami akan memberikan estimasi waktu yang lebih akurat setelah berdiskusi tentang kebutuhan spesifik Anda.",
    },
    {
      id: 2,
      question: "Apakah website yang dibuat responsive?",
      answer:
        "Ya, semua website yang kami buat responsive dan dapat diakses dengan baik melalui berbagai perangkat (desktop, tablet, dan mobile). Kami menggunakan pendekatan mobile-first untuk memastikan pengalaman pengguna yang optimal di semua ukuran layar.",
    },
    {
      id: 3,
      question: "Apakah ada biaya maintenance bulanan?",
      answer:
        "Kami menawarkan paket maintenance bulanan opsional yang mencakup pembaruan konten, backup rutin, pemantauan keamanan, dan dukungan teknis. Biaya maintenance disesuaikan dengan kebutuhan dan skala website Anda.",
    },
    {
      id: 4,
      question: "Apakah saya bisa mengupdate konten website sendiri?",
      answer:
        "Ya, kami mengintegrasikan Content Management System (CMS) yang user-friendly, memungkinkan Anda untuk mengelola dan memperbarui konten website dengan mudah tanpa pengetahuan teknis khusus.",
    },
    {
      id: 5,
      question: "Apakah termasuk optimasi SEO?",
      answer:
        "Ya, kami menerapkan praktik SEO dasar dalam setiap website yang kami buat, termasuk optimasi meta tags, struktur URL yang SEO-friendly, dan kecepatan loading yang optimal. Untuk optimasi SEO yang lebih mendalam, kami juga menawarkan paket SEO terpisah.",
    },
    {
      id: 6,
      question: "Bagaimana proses pembayaran?",
      answer:
        "Kami menerapkan sistem pembayaran bertahap: 50% di awal sebagai down payment untuk memulai proyek, dan 50% setelah website selesai dan siap diluncurkan. Kami menerima pembayaran melalui transfer bank atau metode pembayaran lain yang disepakati.",
    },
  ];

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const message =
    "Halo, saya ingin konsultasi lebih lanjut mengenai layanan yang *DEVIX* tawarkan. Bisa bantu saya untuk mendapatkan informasi lebih detail? Terima kasih!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      id="faq"
      className="bg-gradient-to-br from-[#f6f9ff] to-[#e9f0ff] dark:from-gray-900 dark:to-gray-800 rounded-3xl dark:rounded-none overflow-hidden shadow-xl"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e3987] dark:text-blue-300 mb-4 drop-shadow">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami.
          </p>
        </div>

        <div className="bg-white/90 dark:bg-gray-900 rounded-2xl shadow-lg p-2 md:p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-100 text-base md:text-lg bg-[#f6f9ff] dark:bg-gray-800 rounded-xl px-4 py-3 mt-2 mb-2 shadow-inner">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Masih punya pertanyaan? Jangan ragu untuk menghubungi kami
          </p>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-[#1e3987] to-[#3561e7] text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              Hubungi Kami
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;