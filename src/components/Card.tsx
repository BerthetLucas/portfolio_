import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-is-mobile';
import { CogIcon } from 'lucide-react';

interface CardComponentProps {
  title: string;
  description: string;
  footer: string;
}

export const CardComponent = ({ title, description, footer }: CardComponentProps) => {
  const { isMobile } = useIsMobile();

  return (
    <Card className="w-full max-w-3xl transition-shadow duration-300 hover:shadow-lg md:flex md:flex-row">
      <div className="flex flex-1 flex-col justify-between">
        <CardHeader className="pt-6">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center gap-2 pb-6">
          <CogIcon className="h-4 w-4" />
          <p className="text-sm">{footer}</p>
        </CardFooter>
      </div>
      {!isMobile && (
        <div className="max-w-1/2">
          <img src="https://placehold.co/800x600" alt="Project Image" className="rounded-r-2xl object-cover" />
        </div>
      )}
    </Card>
  );
};
