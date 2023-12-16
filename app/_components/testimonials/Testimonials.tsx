import TestimonialsCard from "./TestimonialsCard";
import TestimonialsCarousel from "./TestimonialsCarousel";


const Testimonials = () => {
  return (
    <div>
      <div className="flex flex-col max-w-[1080px] w-full mx-auto h-full my-10 mt-10 ">
        <div className="flex flex-col gap-2 mt-4 mb-2">
          <h1 className="text-4xl font-bold w-full text-center text-[#0084CB]">Testimonials</h1>
          <p className=" text-xl text-center mt-3 mb-2 text-slate-700 font-semibold">What our customers say about us</p>
        </div>
        <div className="w-full gap-4 flex">
          <TestimonialsCarousel/>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
