import './App.css';
import { TabsToggle } from './components/Tabs';
import { TypographyH1 } from './components/Typographie/TypographieH1';
import { TypographyP } from './components/Typographie/TypographieP';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';

function App() {
  return (
    <main className="mt-10 flex min-h-screen w-full flex-col items-center justify-center gap-8 md:gap-20">
      <TypographyH1>Lucas Berthet</TypographyH1>
      <TypographyH1>Développeur Web</TypographyH1>
      <Avatar className="md:size-32 size-18">
        <AvatarImage src="https://images.pexels.com/photos/33771131/pexels-photo-33771131.jpeg" />
        <AvatarFallback>LB</AvatarFallback>
      </Avatar>
      <TypographyP className="mx-4 text-justify md:mx-24">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </TypographyP>
      <TabsToggle />
    </main>
  );
}

export default App;
