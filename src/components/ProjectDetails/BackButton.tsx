import { Button } from '../ui/button';
import { ArrowLeftIcon } from '../Icon/ArrowLeftIcon';
import { useNavigate } from 'react-router';

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <Button
      variant="outline"
      size="xl"
      className="rounded-full h-24 w-24 md:hidden"
      onClick={handleBackClick}
    >
      <ArrowLeftIcon className="size-10" />
    </Button>
  );
};
