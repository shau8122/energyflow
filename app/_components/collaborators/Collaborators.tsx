import Collab from "./Collab";
import CollaboratorsCarousel from "./CollaboratorsCarousel";

const Collaborators = () => {
  return (
    <div className="w-full  my-10   "
 
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
      <div className="w-full max-w-7xl bg-gray-50  rounded-2xl shadow-md mx-auto flex flex-col items-center justify-center">
        
        <h2 className="text-2xl font-semibold text-gray-700 text-center px-2">Trusted by the world’s most innovative teams</h2>
        <div className="px-2 my-5 w-full">
          <Collab />
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
