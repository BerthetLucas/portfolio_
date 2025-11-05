import { TypographyH1 } from '../Typographie/TypographieH1';
import { TypographyP } from '../Typographie/TypographieP';
import { Button } from '../ui/button';
import { MotionHeader } from '../MotionComponents/MotionHeader';

export const Header = () => {
  return (
    <MotionHeader
      delay={0.7}
      className="flex flex-col items-center justify-center h-screen mb-10 md:gap-20 gap-16"
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <TypographyH1 className="text-5xl md:text-8xl">
          Lucas Berthet
        </TypographyH1>
        <TypographyP className="text-2xl md:text-4xl">
          Développeur Web
        </TypographyP>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 w-full md:flex-row md:gap-0">
        <a href="#tabs-toggle" className="flex justify-center">
          <Button variant="default" size="xl">
            Découvrez mes projets !
          </Button>
        </a>
      </div>
    </MotionHeader>
  );
};
