import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard.tsx';

export const TabsToggle = () => {
  const projects = [
    {
      title: 'Projet1',
      description: 'Description des projets',
      technologies: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1200px-Spring_Boot.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1200px-Spring_Boot.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1200px-Spring_Boot.svg.png',
      ],
    },
    {
      title: 'Projet2',
      description: 'Description des projets',
      technologies: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1200px-Spring_Boot.svg.png',
      ],
    },
  ];

  return (
    <Tabs
      defaultValue="projects"
      className="flex w-full items-center justify-center"
    >
      <TabsList className="flex gap-1 rounded-lg bg-amber-300 py-7">
        <TabsTrigger
          value="projects"
          className="p-6 text-lg font-bold focus:bg-white"
        >
          Projets
        </TabsTrigger>
        <TabsTrigger
          value="contact"
          className="p-6 text-lg font-bold focus:bg-white active:bg-white"
        >
          Contact
        </TabsTrigger>
      </TabsList>
      <TabsContent value="projects" className="w-3/4">
        <div className="flex flex-col items-center gap-10 md:flex-row md:flex-wrap md:justify-center">
          {projects.map(project => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="contact">Change your password here.</TabsContent>
    </Tabs>
  );
};
