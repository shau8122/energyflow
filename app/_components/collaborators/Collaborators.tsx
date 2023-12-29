import CollaboratorsCarousel from "./CollaboratorsCarousel";

const Collaborators = () => {
  return (
    <div className="w-full h-[400px] my-10   "
 
      // style={{
      //   backgroundImage: 'url("/signinbg.jpg")',
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: 'center' ,
      // }}
    
    >
      <h1 className="text-center  text-4xl my-6 text-mainColor">
        Our <span className="font-bold">Collaborators</span>
      </h1>
      <div className="w-full max-w-[1080px] bg-gray-50  rounded-2xl shadow-md mx-auto h-[350px] flex flex-col items-center justify-center">
        
        <h2 className="text-2xl font-semibold text-gray-700 text-center px-2">Trusted by the world’s most innovative teams</h2>
        <div className="md:px-32 px-2 mt-5 w-full">
          <CollaboratorsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
