'use client';

import { useFirstVisit } from '../../hooks/useFirstVisit';
import PromoPopup from './PromoPopup';

const PromoPopupProvider = ({
  imageSrc = "/promo.jpg",
  imageAlt = "Promo Spesial Devix",
  whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  whatsappMessage = "Halo Devix! Saya tertarik dengan promo yang sedang berlangsung. Bisa info lebih detail?",
  autoShowDelay = 3000,
  showOnFirstVisitOnly = true,
  ...props
}) => {
  const { isFirstVisit, isLoading, markPopupClosed } = useFirstVisit();

  // Jangan tampilkan popup jika masih loading atau bukan first visit
  if (isLoading || (showOnFirstVisitOnly && !isFirstVisit)) {
    return null;
  }

  // Handler untuk saat popup ditutup - mark sebagai sudah ditutup
  const handlePopupClose = () => {
    markPopupClosed();
    // Jika ada onClose prop dari parent, panggil juga
    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <PromoPopup
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      whatsappNumber={whatsappNumber}
      whatsappMessage={whatsappMessage}
      autoShow={true}
      autoShowDelay={autoShowDelay}
      showCloseButton={true}
      onClose={handlePopupClose}
      {...props}
    />
  );
};

export default PromoPopupProvider;
