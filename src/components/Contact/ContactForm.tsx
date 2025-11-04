import { EmailInput } from './EmailInput';
import { MessageInput } from './MessageInput';
import { Button } from '../ui/button';

export const ContactForm = () => {
  return (
    <form className="flex flex-col items-center justify-center w-full gap-2">
      <EmailInput />
      <MessageInput />
      <Button type="submit">Submit</Button>
    </form>
  );
};
