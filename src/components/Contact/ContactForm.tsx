import { EmailInput } from './EmailInput';
import { MessageInput } from './MessageInput';
import { Button } from '../ui/button';
import { toast, Toaster } from 'sonner';

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    console.log('Email:', email);
    console.log('Message:', message);
    toast.success('Message envoyé avec succès');
  };

  return (
    <>
      <form
        className="flex flex-col items-center justify-center w-full gap-2 md:w-3/4 mt-10 md:gap-8"
        onSubmit={handleSubmit}
      >
        <EmailInput />
        <MessageInput />
        <Button type="submit">Envoyer</Button>
      </form>
      <Toaster richColors closeButton position="top-center" />
    </>
  );
};
