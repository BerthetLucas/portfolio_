import { MotionDiv } from '../MotionComponents/MotionDiv';
import { ProjectCard } from './ProjectCard/ProjectCard';
import projects from '@/data/projects.json';

export const ProjectContainer = () => {
  return (
    <MotionDiv
      delay={0.2}
      className="flex flex-col items-center gap-10 md:flex-row md:flex-wrap md:justify-center"
    >
      {projects.projects.map(project => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
        />
      ))}
    </MotionDiv>
  );
};
