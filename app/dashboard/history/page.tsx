import { auth } from "@/auth";
import db from '@/libs/db'
import TableWrapper from "./_components/table/TableWrapper";

const HistoryPage = async() => {
  const session = await auth();
  if(!session?.user?.id){
    return;
  }
  const userId =session?.user.id;

  const ordersWithLabels = await db.order.findMany({
    where: {
      userId
    },
    select: {
      id:true,
      quantity: true,
      price: true,
      progress: true,
      Label: {
        select: {
          name: true
        }
      }
    }
  });
  
  const files = ordersWithLabels.map((order)=>{
    return {
      id:order.id,
      name:order.Label?.name,
      quantity:order.quantity,
      progress:order.progress,
      price:order.price
    }
  })
  return ( 
    <div className="my-10 md:mx-5">
      <div className="w-full border-2 pb-3 rounded-xl">
        <div className="w-full h-[60px] flex rounded-t-xl items-center bg-blue-500">
          <div className="text-3xl ml-2 font-semibold h-12 w-12 flex justify-center items-center rounded-full bg-white">📚</div>
          <h1 className="text-xl font-semibold text-white ml-2">Order history</h1>
        </div>
          <TableWrapper files={files} />
      </div>
    </div>
   );
}
 
export default HistoryPage;