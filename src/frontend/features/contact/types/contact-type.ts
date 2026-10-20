export type ContactMessageType = {
  name: string;
  email: string;
  title: string;
  message: string;
};

export type ContactFormStatusType = 'idle' | 'sending' | 'success' | 'error';

export type TContactType = {
  ContactMessage: ContactMessageType;
  ContactFormStatus: ContactFormStatusType;
};
