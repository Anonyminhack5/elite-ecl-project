
import { WHATSAPP_NUMBER, BUSINESS_NAME } from '../constants';
import { ServiceType } from '../types';

export const generateWhatsAppLink = (service: ServiceType = ServiceType.RESIDENTIAL): string => {
  const message = `Hello ${BUSINESS_NAME} Team! 👋\n\nI would like to book a cleaning service.\n\n*Service:* ${service}\n*Name:* [Your Name]\n*Phone:* [Your Phone Number]\n*Location:* [Your Address/Area]\n*Preferred Date:* [DD/MM/YYYY]\n\nPlease let me know your availability!`;
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodedMessage}`;
};

export const redirectToWhatsApp = (service?: ServiceType) => {
  const link = generateWhatsAppLink(service);
  window.open(link, '_blank');
};
