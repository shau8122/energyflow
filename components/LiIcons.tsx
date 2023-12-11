import {motion,useScroll} from 'framer-motion'
interface LiIconProps{
  referance:any
}
const LiIcon:React.FC<LiIconProps> = ({
  referance:ref
}) => {
 
 const {scrollYProgress}=useScroll(
  {
    target:ref,
    offset:["center end", "center center"]
  }
 )
  return ( 
    <figure className="absolute left-0 stroke-[#50b8e7]">
      <svg className='-rotate-90' width="75" height="75" viewBox="0 0 100 100">
        <circle cx="75" cy="50" r='20' className="stroke-[#50b8e7] stroke-1 fill-none" />
        <motion.circle
        style={{
          pathLength:scrollYProgress
        }}
         cx="75" cy="50" r='20' className=" stroke-[5px] fill-white" />
        <circle cx="75" cy="50" r='10' className="animate-pulse stroke-1 fill-[#50b8e7]"/>
      </svg>
    </figure>
   );
}
 
export default LiIcon;