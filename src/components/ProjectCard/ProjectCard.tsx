import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-is-mobile';
import { ProjectCardFooter } from './ProjectCardFooter';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

export const ProjectCard = ({
  title,
  description,
  technologies,
}: ProjectCardProps) => {
  const { isMobile } = useIsMobile();

  return (
    <Card className="w-full max-w-3xl transition-shadow duration-300 hover:shadow-lg md:flex md:flex-row">
      <div className="flex flex-1 flex-col justify-between">
        <CardHeader className="pt-6">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardHeader>
        <ProjectCardFooter technologies={technologies} />
      </div>
      {!isMobile && (
        <div className="max-w-1/2 h-full overflow-hidden rounded-r-[0.6875rem]">
          <img
            src="https://images.pexels.com/photos/33771131/pexels-photo-33771131.jpeg"
            alt="Project Image"
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </Card>
  );
};
