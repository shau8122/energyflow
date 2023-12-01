import CategoriesBox from "./CategoriesBox";
import { EducationIcon, HomeIcon, HospitalIcon, HotelIcon, RentIcon, SpaIcon } from "./Icons";

const Categories = () => {
  // const categoriesList = [
  //   "Hotels",
  //   "Beauty Spa",
  //   "Home Decor",
  //   "Education",
  //   "Rent & Hire",
  //   "Hospitals",
  //   "Contractors",
  //   "Pet Shops",
  //   "PG/Hostels",
  //   "Estate Agent",
  //   "Dentists",
  //   "Gym",
  //   "Consultants",
  //   "Event Organisers",
  //   "Driving Schools",
  //   "Packers & Movers",
  //   "Courier Service",
  //   "Travel",
  // ];
  return (
    <div className="w-full flex justify-center items-center my-5">
      <div className="w-3/4 mx-auto flex flex-col justify-between">
        <h1 className="text-3xl font-semibold mb-2 mt-5 text-start text-blue-500">Categories</h1>
        <div className="w-full gap-2 grid md:grid-cols-9 grid-cols-5 justify-between items-center">
          <CategoriesBox name="Hotels">
            <HotelIcon/>
          </CategoriesBox>
          <CategoriesBox name="Beauty Spa">
            <SpaIcon/>
          </CategoriesBox>
          <CategoriesBox name="Home Decor">
            <HomeIcon/>
          </CategoriesBox>
          <CategoriesBox name="Hotels">
            <HotelIcon/>
          </CategoriesBox>
          <CategoriesBox name="Beauty Spa">
            <SpaIcon/>
          </CategoriesBox>
          <CategoriesBox name="Home Decor">
            <HomeIcon/>
          </CategoriesBox>
          <CategoriesBox name="Hotels">
            <HotelIcon/>
          </CategoriesBox>
          <CategoriesBox name="Beauty Spa">
            <SpaIcon/>
          </CategoriesBox>
          <CategoriesBox name="Home Decor">
            <HomeIcon/>
          </CategoriesBox>
          <CategoriesBox name="Education">
            <EducationIcon/>
          </CategoriesBox>
          <CategoriesBox name="Rent and Hire">
            <RentIcon/>
          </CategoriesBox>
          <CategoriesBox name="Hospitals">
            <HospitalIcon/>
          </CategoriesBox>
          <CategoriesBox name="Hotels">
            <HotelIcon/>
          </CategoriesBox>
          <CategoriesBox name="Beauty Spa">
            <SpaIcon/>
          </CategoriesBox>
          <CategoriesBox name="Home Decor">
            <HomeIcon/>
          </CategoriesBox>
          <CategoriesBox name="Education">
            <EducationIcon/>
          </CategoriesBox>
          <CategoriesBox name="Rent and Hire">
            <RentIcon/>
          </CategoriesBox>
          <CategoriesBox name="Hospitals">
            <HospitalIcon/>
          </CategoriesBox>
         
        </div>
      </div>
    </div>
  );
};

export default Categories;
