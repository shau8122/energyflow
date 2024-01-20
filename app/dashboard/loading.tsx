import { Spinner } from "@/components/Spinner";

const Loading = () => {
  return ( 
    <div className="flex justify-center items-center w-[100%] h-[70vh]">
      <Spinner size={"icon"}/>
    </div>
   );
}
 
export default Loading;