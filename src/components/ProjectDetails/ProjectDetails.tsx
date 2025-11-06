import { Link, useParams } from 'react-router';
import projects from '@/data/projects.json';
import { TypographyH1 } from '../Typographie/TypographieH1';
import { BackButton } from './BackButton';
import { TechItems } from './TechItems';
import { SkillsCard } from './SkillsCard';
import { MotionMain } from '../MotionComponents/MotionMain';
import { Footer } from '../Layout/Footer';
import { ArrowLeftIcon } from '../Icon/ArrowLeftIcon';
import { ScrollRestoration } from 'react-router';

export const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.projects[Number(projectId) - 1];

  return (
    <>
      <ScrollRestoration />
      <MotionMain
        delay={0.1}
        className="flex flex-col items-center justify-around min-h-screen mx-5 gap-10"
      >
        <div className="flex flex-col items-center justify-center gap-5 w-full">
          <div className="relative w-full flex items-center">
            <Link
              to="/#tabs-toggle"
              className="hidden md:block absolute left-0"
            >
              <ArrowLeftIcon className="size-10" />
            </Link>
            <div className="flex-1 flex justify-center">
              <TypographyH1>{project?.title}</TypographyH1>
            </div>
          </div>
          <TechItems technologies={project?.technologies} />
        </div>

        <div className="w-7/8 md:w-1/2">
          <Link
            to={project?.url}
            target="_blank"
            className="hover:grayscale-100 transition-all duration-300 inline-block"
          >
            <img
              src={project?.image}
              alt=""
              loading="eager"
              fetchPriority="high"
              className="rounded-lg"
            />
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center">
          {project?.skills.map(skill => (
            <SkillsCard key={skill} skill={skill} />
          ))}
        </div>
        <BackButton />
      </MotionMain>
      <Footer />
    </>
  );
};
