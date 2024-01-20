import { Spinner } from "@/components/Spinner";

const Loading = () => {
  return ( 
    <div className="flex justify-center items-center h-[50vh] w-full">
      <Spinner size={"icon"}/>
    </div>
   );
}
 
export default Loading;