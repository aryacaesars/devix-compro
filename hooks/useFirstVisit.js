'use client';

import { useState, useEffect } from 'react';

/**
 * Hook untuk mendeteksi kunjungan dan menampilkan popup promo
 * - Popup akan muncul setiap kali user membuka/refresh halaman
 * - Saat popup ditutup, data first visit akan di-clear
 * - Pada refresh berikutnya, popup akan muncul lagi
 * Menggunakan localStorage untuk menyimpan status kunjungan
 */
export const useFirstVisit = (storageKey = 'devix_first_visit') => {
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Cek apakah sudah pernah berkunjung
    const hasVisited = localStorage.getItem(storageKey);
    
    if (!hasVisited) {
      // First time visitor - popup akan muncul
      setIsFirstVisit(true);
      // Mark sebagai sudah berkunjung
      localStorage.setItem(storageKey, 'true');
      localStorage.setItem(`${storageKey}_timestamp`, new Date().toISOString());
    } else {
      // Sudah pernah berkunjung - karena data di-clear saat popup ditutup,
      // berarti ini adalah kunjungan baru setelah refresh
      // Reset status untuk memungkinkan popup muncul lagi
      setIsFirstVisit(true);
    }
    
    setIsLoading(false);
  }, [storageKey]);
  // Function untuk mark popup sebagai sudah ditutup dan clear first visit data
  const markPopupClosed = () => {
    // Clear semua data first visit saat popup ditutup
    localStorage.removeItem(storageKey);
    localStorage.removeItem(`${storageKey}_timestamp`);
    localStorage.removeItem(`${storageKey}_popup_closed`);
    localStorage.removeItem(`${storageKey}_popup_closed_timestamp`);
    setIsFirstVisit(false);
  };

  // Function untuk reset first visit (untuk testing)
  const resetFirstVisit = () => {
    localStorage.removeItem(storageKey);
    localStorage.removeItem(`${storageKey}_timestamp`);
    localStorage.removeItem(`${storageKey}_popup_closed`);
    localStorage.removeItem(`${storageKey}_popup_closed_timestamp`);
    setIsFirstVisit(true);
  };

  return {
    isFirstVisit,
    isLoading,
    markPopupClosed,
    resetFirstVisit
  };
};
