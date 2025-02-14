const Loader = () => {
  return (
    <div className="absolute top-1/2 transform -translate-y-1/2 flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-28 h-28 border-4 border-transparent text-primary-purple text-4xl animate-spin flex items-center justify-center border-t-primary-purple rounded-full">
        <div className="w-24 h-24 border-4 border-transparent text-purple-600 text-2xl animate-spin flex items-center justify-center border-t-purple-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
