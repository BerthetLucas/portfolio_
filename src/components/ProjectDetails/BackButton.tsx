import { Link } from 'react-router';
import { Button } from '../ui/button';
import { ArrowLeftIcon } from '../Icon/ArrowLeftIcon';

export const BackButton = () => {
  return (
    <Button
      variant="outline"
      size="xl"
      className="rounded-full h-24 w-24 md:hidden"
    >
      <Link to="/#tabs-toggle">
        <ArrowLeftIcon className="size-10" />
      </Link>
    </Button>
  );
};
