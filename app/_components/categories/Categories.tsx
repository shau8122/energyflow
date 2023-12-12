
import CategoriesBox from "./CategoriesBox";
import {
  School2,
  Home,
  BedDouble,
  Backpack,
  Truck,
  Car,
  CalendarClock,
  Dumbbell,
  Hotel,
} from "lucide-react";


const Categories = () => {
  const categoriesList = [
    {
      name: "Hotels",
      icon: <BedDouble />,
    },
    {
      name: "Home Decor",
      icon: <Home />,
    },
    {
      name: "Education",
      icon: <School2 />,
    },
    { name: "PG/Hostels", icon: <Hotel /> },
    { name: "Gym", icon: <Dumbbell /> },
    { name: "Event Organisers", icon: <CalendarClock /> },
    { name: "Driving Schools", icon: <Car /> },
    { name: "Courier Service", icon: <Truck /> },
    { name: "Travel", icon: <Backpack /> },
  ];
  
  return (
    <div className="max-w-[1080px] mx-auto w-full flex justify-center  items-center my-5">
      <div className="w-full mx-auto flex flex-col justify-between">
        <h1 className="text-3xl mx-2 font-semibold mb-2 mt-5 text-start text-blue-500">
          Categories
        </h1>
        <div className="w-full mt-2 gap-2 grid grid-cols-3 lg:grid-cols-9 md:grid-cols-5 justify-between items-center">
          {categoriesList.map((category, index) => (
            <CategoriesBox key={index} name={category.name}>
              {category.icon}
            </CategoriesBox>
          ))}
        </div>
    
      </div>
    </div>
  );
};

export default Categories;
