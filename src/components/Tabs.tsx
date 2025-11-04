import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ContactForm } from './Contact/ContactForm';
import { ProjectContainer } from './Projects/ProjectContainer';

export const TabsToggle = () => {
  return (
    <Tabs
      defaultValue="projects"
      className="flex w-full flex-col items-center justify-center min-h-screen scroll-mt-20"
      id="tabs-toggle"
    >
      <TabsList>
        <TabsTrigger value="projects">Projets</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>
      <TabsContent value="projects" className="w-3/4">
        <ProjectContainer />
      </TabsContent>
      <TabsContent
        value="contact"
        className="flex flex-col items-center justify-center w-3/4"
      >
        <ContactForm />
      </TabsContent>
    </Tabs>
  );
};
