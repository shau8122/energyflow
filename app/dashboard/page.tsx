
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart, BarChart3, InboxIcon, LucidePieChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cardDetails = [
  {
    name: "Approved Order",
    count: 0,
    icon: InboxIcon,
    color: "bg-green-500",
    textColor: "text-green-500",
  },
  {
    name: "Pending Order",
    count: 0,
    icon: LucidePieChart,
    color: "bg-yellow-500",
    textColor: "text-yellow-500",
  },
  {
    name: "Rejected Order",
    count: 0,
    icon: BarChart3,
    color: "bg-red-500",
    textColor: "text-red-500",
  },
  {
    name: "Completed Order",
    count: 0,
    icon: BarChart,
    color: "bg-blue-500",
    textColor: "text-blue-500",
  },
];

const Home = () => {
  const slides = [
    "/bottles/1.jpeg",
    "/bottles/2 (1).jpeg",
    "/bottles/2 (2).jpeg",
    "/bottles/2 (3).jpeg",
    "/bottles/2 (4).jpeg",
  ];
  return (
    <div className="grid grid-cols-12 gap-4  m-3">
     
      <div className="grid grid-cols-12  max-w-[1300px] col-span-12 gap-4">
        {
          cardDetails.map((card, index) => (
            <div
              key={index}
              className={`col-span-12 sm:col-span-6 lg:col-span-3 ${card.color}  text-white rounded-xl  h-[150px] p-3`}
            >
              <div className="flex flex-col justify-between  h-full w-full">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold">{card.name}</h2>
                    <h2 className="text-lg font-bold ">{card.count}</h2>
                  </div>
                  <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center">
                    <card.icon className={`h-8 w-8 ${card.textColor}`} />
                  </div>
                </div>
                <div className=" self-end ">
                  <Link className="text-sm text-slate-200 hover:text-white" href='/dashborad'>more info...</Link>
                </div>
              </div>
            </div>
          ))
        }

      </div>
      
      <div className="col-span-12 bg-gray-200 h-[400px] rounded-xl p-10">
        <h2 className="text-slate-900 text-xl font-semibold">Search Order</h2>
        <div className="w-full  flex">
        <Input className="bg-white outline-none text-gray-300 rounded-xl mt-4" type="text" placeholder="Search Order" />
        <Button className="bg-blue-500 hover:bg-blue-400 text-white text-xl font-semibold rounded-xl mt-4 ml-2">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
