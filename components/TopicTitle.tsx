interface TopicTitleProps {
  number: string;
  title: string;
}

const TopicTitle = ({ number, title }: TopicTitleProps) => {
  return (
    <>
      <h1 className="text-3xl font-semibold">
        <span className="text-light-gray font-normal">{number}. </span>
        <span className="gradient-text">{title}</span>
      </h1>
      <div className="w-full bg-gradient-to-r to-primary from-secondary h-[2px] rounded-3xl mt-2 mb-6 opacity-50"></div>
    </>
  );
};

export default TopicTitle;
