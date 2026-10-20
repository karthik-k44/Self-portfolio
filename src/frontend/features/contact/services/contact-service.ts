import emailjs from '@emailjs/browser';
import type { ContactMessageType } from '../types';

export const contactService = {
  SendMessage: (message: ContactMessageType) =>
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      message,
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
    ),
};
