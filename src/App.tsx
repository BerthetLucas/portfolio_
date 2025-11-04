import { TabsToggle } from './components/Tabs';
import { TypographyH1 } from './components/Typographie/TypographieH1';
import { TypographyP } from './components/Typographie/TypographieP';

function App() {
  return (
    <main className="mt-10 flex min-h-screen w-full flex-col items-center justify-center bg-background">
      <TypographyH1>Lucas Berthet</TypographyH1>
      <TypographyH1 className="mb-10">Développeur Web</TypographyH1>
      <div className="flex flex-col items-center justify-center gap-2 mb-10">
        <TypographyP className="text-justify mx-10 md:mx-20">
          Bienvenue sur mon portfolio !
        </TypographyP>
      </div>

      <TabsToggle />
    </main>
  );
}

export default App;
