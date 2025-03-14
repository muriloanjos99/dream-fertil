export const getWhatsAppLink = (productName?: string) => {
  const phoneNumber = '554499612027';
  let message;
  
  if (productName) {
    message = `Olá, tenho interesse no produto "Fertilizante ${productName}". Poderia me ajudar?`;
  } else {
    message = `Olá, vim pelo site e tenho interesse em mais informações sobre a Dream Fértil e seus produtos. Poderia me ajudar?`;
  }

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};