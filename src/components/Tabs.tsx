import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CardComponent } from '@/components/Card.tsx';

export const TabsToggle = () => {
  return (
    <Tabs defaultValue="projects" className="flex w-full items-center justify-center">
      <TabsList className="flex gap-1 rounded-lg bg-amber-300 py-7">
        <TabsTrigger value="projects" className="p-6 text-lg font-bold focus:bg-white">
          Projets
        </TabsTrigger>
        <TabsTrigger value="contact" className="p-6 text-lg font-bold focus:bg-white active:bg-white">
          Contact
        </TabsTrigger>
      </TabsList>
      <TabsContent value="projects" className="w-3/4">
        <div className="flex flex-col items-center gap-10 md:flex-row md:flex-wrap md:justify-center">
          <CardComponent title="Projets" description="Description des projets" footer="Coucou" />
          <CardComponent title="Projets" description="Description des projets" footer="Coucou" />
          <CardComponent title="Projets" description="Description des projets" footer="Coucou" />
          <CardComponent title="Projets" description="Description des projets" footer="Coucou" />
        </div>
      </TabsContent>
      <TabsContent value="contact">Change your password here.</TabsContent>
    </Tabs>
  );
};
