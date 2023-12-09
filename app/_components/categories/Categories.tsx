"use client";
import { use, useEffect, useState } from "react";
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
import AuthenticationModal from "../../../components/AuthenticationModal";

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
    <div className="w-full flex justify-center items-center my-5">
      
      <div className="w-3/4 mx-auto flex flex-col justify-between">
        <h1 className="text-3xl font-semibold mb-2 mt-5 text-start text-blue-500">
          Categories
        </h1>
        <div className="w-full gap-2 grid md:grid-cols-9 grid-cols-5 justify-between items-center">
          {categoriesList.map((category, index) => (
            <CategoriesBox key={index} name={category.name}>
              {category.icon}
            </CategoriesBox>
          ))}
          {categoriesList.map((category, index) => (
            <CategoriesBox key={index} name={category.name}>
              {category.icon}
            </CategoriesBox>
          ))}
        </div>
        MA
      </div>
      {/* <button onClick={() => setIsOpen(true)} className="m-5">
        click to open modal
      </button> */}
      {/* <AuthenticationModal isOpen={isOpen} onClose={onClose} /> */}
    </div>
  );
};

export default Categories;
