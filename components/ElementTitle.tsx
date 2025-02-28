interface ElementTitleProps {
  title: string;
  className?: string;
}

const ElementTitle = ({ title, className }: ElementTitleProps) => {
  return (
    <h2 className={`text-purple-text font-medium mb-4 ${className}`}>
      {title}
    </h2>
  );
};

export default ElementTitle;
