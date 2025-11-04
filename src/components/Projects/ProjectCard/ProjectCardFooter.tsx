import { CogIcon } from 'lucide-react';
import { CardFooter } from '@/components/ui/card';

interface ProjectCardFooterProps {
  technologies: string[];
}

export const ProjectCardFooter = ({ technologies }: ProjectCardFooterProps) => {
  return (
    <CardFooter className="flex items-center gap-2 pb-6">
      <CogIcon className="h-6 w-6" />
      {technologies.map(technology => (
        <img
          key={technology}
          src={technology}
          alt="Project Image"
          className="h-5 w-auto"
        />
      ))}
    </CardFooter>
  );
};
