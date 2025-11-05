import { GitHubIcon } from '../Icon/GitHubIcon';
import { LinkedinIcon } from '../Icon/LinkedinIcon';

export const ContactText = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-5 mt-20">
      <GitHubIcon />
      <LinkedinIcon />
    </div>
  );
};
