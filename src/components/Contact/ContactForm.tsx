import { EmailInput } from './EmailInput';
import { MessageInput } from './MessageInput';
import { Button } from '../ui/button';
import { toast, Toaster } from 'sonner';
import { ContactText } from './ContactText';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from '../config/env';
import { handleFormErrors } from './_utils/handle-form-errors';

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!form.current) return;

    handleFormErrors({ email, message });

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      });
      toast.success('Message envoyé avec succès');
      form.current.reset();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Erreur d'envoie");
    }
  };

  return (
    <>
      <ContactText />
      <form
        className="flex flex-col items-center justify-center w-full gap-2 md:w-3/4 mt-10 md:gap-8"
        onSubmit={handleSubmit}
        ref={form}
      >
        <EmailInput />
        <MessageInput />
        <Button type="submit">Envoyer</Button>
      </form>
      <Toaster richColors closeButton position="top-center" />
    </>
  );
};
