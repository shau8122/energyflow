import AnimatedNumbers from "./AnimatedNumbers";

const Counter = () => {
  return (
    <div className="w-full max-w-[1100px] mx-auto mb-10 mt-5">
      <h1 className="text-3xl text-[#02006c] font-semibold mb-5 ">Our Statistics</h1>
      <div className="w-full  flex mx-auto justify-between text-blue-950">
        <div className="flex flex-col items-end justify-center">
          <span className="inline-block text-xl md:text-5xl font-bold">
            <AnimatedNumbers value={50} />+
          </span>
          <h2 className="text-xl font-medium  capitalize text-dark/75">
            satisfied clients
          </h2>
        </div>
        <div className="flex flex-col items-end justify-center">
          <span className="inline-block text-xl md:text-5xl font-bold">
            <AnimatedNumbers value={500} />+ 
          </span>
          <h2 className="text-xl font-medium capitalize text-dark/75">
            Visitors
          </h2>
        </div>
        <div className="flex flex-col items-end justify-center">
          <span className="inline-block text-xl md:text-5xl font-bold">
            <AnimatedNumbers value={30} />+
          </span>
          <h2 className="text-xl font-medium capitalize text-dark/75">
            Business
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Counter;
