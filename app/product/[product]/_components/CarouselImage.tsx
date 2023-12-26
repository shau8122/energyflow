import Image from "next/image";

interface CarouselImageProps {
  imageURL?: string;
}

const CarouselImage:React.FC<CarouselImageProps> = ({
  imageURL
}) => {
  return ( 
    <div className=" aspect-[4/3] relative">
      <Image
        src={imageURL || "https://picsum.photos/id/1015/200/300"}
        alt={imageURL || "https://picsum.photos/id/1015/200/300"}
        fill
        style={{
          objectFit: 'cover',
          width: '100%',
        }}
      />
    </div>
   );
}
 
export default CarouselImage;