import { GithubIcon, LinkedinIcon } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 flex items-center justify-center gap-2">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Lucas Berthet. Tous droits réservés.
        </p>
        <a
          href="https://github.com/lucasberthet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="h-4 w-4 hover:text-primary transition-colors text-muted-foreground" />
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-berthet-4b1b4b252/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="h-4 w-4 hover:text-primary transition-colors text-muted-foreground" />
        </a>
      </div>
    </footer>
  );
};
