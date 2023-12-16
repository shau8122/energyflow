import Image from "next/image";
import image1 from '@/public/bg1.jpeg'

const CollaboratorsCard = () => {
  return ( 
      <div className="flex h-[100px] w-full rounded-xl items-center relative justify-center">
        <Image fill src={image1} alt="1" sizes="100" className="object-cover rounded-xl"/>
      </div>

   );
}
 
export default CollaboratorsCard;