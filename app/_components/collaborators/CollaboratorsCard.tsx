import Image from "next/image";
import image1 from '@/public/bg1.jpeg'

const CollaboratorsCard = () => {
  return ( 
        <Image fill src={image1} alt="1" sizes="100" className="object-cover rounded-xl"/>

   );
}
 
export default CollaboratorsCard;