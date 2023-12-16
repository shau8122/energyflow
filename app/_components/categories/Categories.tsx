"use client";
import { useEffect, useMemo, useState } from "react";
import CategoriesBox from "./CategoriesBox";

import CategoriesModal from "./CategoriesModal";
export interface ServiceCategory {
  name: string;
  alt: string;
  icon: string;
}
const Categories = () => {
  const [search, setSearch] = useState("");
  const serviceCategorie = useMemo(() => [
    { name: "Restaurants & Eateries", alt: "Restaurant", icon: "🍽️" },
    { name: "Hotels & Inns", alt: "Hotel", icon: "🏨" },
    { name: "Lodges & Retreats", alt: "Lodge", icon: "🏡" },
    { name: "Hospitals & Clinics", alt: "Hospital", icon: "🏥" },
    { name: "Dentists & Clinicians", alt: "Dentist", icon: "🦷" },
    { name: "Dermatologists & Skin Experts", alt: "Dermatologist", icon: "🩹" },
    { name: "Schools & Academia", alt: "School", icon: "🏫" },
    { name: "Coaching and Mentoring", alt: "Coaching", icon: "🎓" },
    { name: "Skills & Training", alt: "Training", icon: "💼" },
    { name: "Placement Services & Careers", alt: "Placement", icon: "🌐" },
    { name: "Supermarket", alt: "Supermarket", icon: "🛒" },
    { name: "Fashion Marts", alt: "Fashion Mart", icon: "👗" },
    { name: "Malls & Lifestyle", alt: "Mall", icon: "🛍️" },
    { name: "Jewelry Showrooms", alt: "Jewelry Showroom", icon: "💍" },
    { name: "Clothing & Fashion", alt: "Clothing", icon: "👕" },
    { name: "Gym & Fitness", alt: "Gym", icon: "🏋️" },
    { name: "Beauty Spa & Salons", alt: "Beauty Spa", icon: "💆" },
    { name: "Body Massage Centers & Spas", alt: "Massage Center", icon: "🌸" },
    { name: "Bars and Casino", alt: "Bar", icon: "🍸" },
    { name: "Car Hire & Rental Bike", alt: "Car Rental", icon: "🚗" },
    {
      name: "Car Repair & Bike Services Mechanics",
      alt: "Car Repair",
      icon: "🔧",
    },
    { name: "Electricians", alt: "Electrician", icon: "⚡" },
    { name: "AC Service & Cooling", alt: "AC Service", icon: "❄️" },
    {
      name: "Nursing Services & Caretakers",
      alt: "Nursing Service",
      icon: "👩‍⚕️",
    },
    {
      name: "Housekeeping Services & Cleaners",
      alt: "Housekeeping",
      icon: "🧹",
    },
    {
      name: "Interior Designers & Decorators",
      alt: "Interior Designer",
      icon: "🛋️",
    },
    { name: "Photographers & Capturers", alt: "Photographer", icon: "📸" },
    {
      name: "Chartered Accountant & Financiers",
      alt: "Accountant",
      icon: "💰",
    },
    { name: "Lawyers & Attorneys", alt: "Lawyer", icon: "⚖️" },
    { name: "Packers & Movers", alt: "Packers & Movers", icon: "📦" },
    {
      name: "Computer & Laptop Repair Services",
      alt: "Computer Repair",
      icon: "💻",
    },
    { name: "Web & App Designers", alt: "Web Designer", icon: "🖥️" },
    { name: "Caterers & Foodies", alt: "Caterer", icon: "🍲" },
    { name: "Real Estate & Realty", alt: "Real Estate", icon: "🏡" },
    {
      name: "Registration Consultants & Registrars",
      alt: "Registrar",
      icon: "📝",
    },
    { name: "Security System", alt: "Security System", icon: "🚨" },
    { name: "Courier Services", alt: "Courier Service", icon: "📬" },
    {
      name: "Printing & Publishing Services",
      alt: "Printing Service",
      icon: "🖨️",
    },
    { name: "Furniture Repair Services", alt: "Furniture Repair", icon: "🔨" },
    { name: "Fabricators & Crafters", alt: "Fabricator", icon: "🛠️" },
    { name: "Astrologers", alt: "Astrologer", icon: "⭐" },
    {
      name: "Farming Consultants and Seeds",
      alt: "Farming Consultant",
      icon: "🌱",
    },
    {
      name: "Pest Control Services & Exterminators",
      alt: "Pest Control",
      icon: "🐜",
    },
    {
      name: "Paint Contractors & Painters",
      alt: "Paint Contractor",
      icon: "🎨",
    },
    { name: "Hobbies & Interests", alt: "Hobbies", icon: "🎲" },
    { name: "Transporters & Movers", alt: "Transporter", icon: "🚚" },
  ], []);
  const [serviceCategories, setServiceCategories] = useState<ServiceCategory[]>(serviceCategorie)
  const trimmedCategories = serviceCategorie.slice(0, 15);
  const [showMore, setShowMore] = useState(false);
  const handleClose = () => {
    setShowMore(false);
  };
  const searchAndSortServiceCategory = (
    serviceCategories: ServiceCategory[],
    search: string
  ) => {
    return serviceCategories
      .filter((p: { name: string }) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  };
  useEffect(() => {
    setServiceCategories(searchAndSortServiceCategory(serviceCategorie, search))

  }, [search, serviceCategorie])
  
  return (
    <div className="max-w-[1080px] lg:mx-auto w-full flex justify-center px-4  items-center my-5">
      <div className="w-full mx-auto flex flex-col justify-between">
        <h1 className="text-3xl mx-2 font-semibold mb-2 mt-5 text-start text-blue-500">
          Categories
        </h1>
        <div className="w-full mt-2 gap-2 grid grid-cols-2 lg:grid-cols-8 md:grid-cols-4 justify-between items-center">
          {trimmedCategories.map((category, index) => (
            <CategoriesBox
              key={index}
              name={category.name}
              icon={category.icon}
            />
          ))}
          <button onClick={() => setShowMore(true)}>
            <CategoriesBox name="More" icon="...." />
          </button>
        </div>
      </div>
      <CategoriesModal isOpen={showMore} onClose={handleClose}>
        <div className="w-full mx-auto flex flex-col relative justify-between">
          <h1 className="text-3xl mx-2 font-semibold mb-2 mt-5 text-start text-blue-500">
            Categories
          </h1>
          <input
            className="mt-3 block w-full rounded-xl mb-3  border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
            placeholder="Search categories"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
           
          />
          <div className="w-full mt-2 gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 justify-between items-center">
            {serviceCategories.map((category, index) => (
              <CategoriesBox
                key={index}
                name={category.name}
                icon={category.icon}
              />
            ))}
          </div>
        </div>
      </CategoriesModal>
    </div>
  );
};

export default Categories;
