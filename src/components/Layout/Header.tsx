import { TypographyH1 } from '../Typographie/TypographieH1';
import { TypographyP } from '../Typographie/TypographieP';
import { Button } from '../ui/button';

export const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center h-screen gap-20">
      <TypographyH1 className="text-5xl md:text-8xl">
        Lucas Berthet
      </TypographyH1>
      <TypographyP className="text-2xl md:text-4xl">
        Développeur Web
      </TypographyP>
      <a href="#tabs-toggle">
        <Button variant="default" size="lg">
          Voir mes projets
        </Button>
      </a>
    </header>
  );
};
