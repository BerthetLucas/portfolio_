interface TechItemsProps {
  technologies: string[];
}

export const TechItems = ({ technologies }: TechItemsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map(technology => (
        <img src={technology} alt="" className="w-16 h-auto" />
      ))}
    </div>
  );
};
