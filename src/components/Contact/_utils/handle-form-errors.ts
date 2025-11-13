import { toast } from 'sonner';

export function handleFormErrors({
  email,
  message,
}: {
  email?: string;
  message?: string;
}) {
  if (!email || !message) {
    toast.error('Veuillez remplir tous les champs');
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    toast.error('Veuillez entrer une adresse email valide');
    return;
  }
}
