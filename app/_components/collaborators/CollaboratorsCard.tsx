import Image from "next/image";
import image1 from "@/public/bg1.jpeg";

interface CollabProps {
  src: string;
}

const CollaboratorsCard: React.FC<CollabProps> = ({ src }) => {
  return (
    <div className="flex items-center justify-center w-full h-full rounded-xl bg-mainColor">
      <Image
        src={src}
        alt="1"
        sizes="100"
        width={400}
        height={500}
        className="object-contain p-1 rounded-xl"
      />
    </div>
  );
};

export default CollaboratorsCard;
