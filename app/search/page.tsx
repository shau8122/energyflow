import { Metadata } from "next";
import ProductCard from "./_components/ProductCard";
import LocationFilter from "./_components/LocationFilter";
import SearchResults from "./_components/SearchResults";

interface SearchPageProps {
  searchParams: { query: string };
}
export function generateMetadata({
  searchParams: { query },
}: SearchPageProps): Metadata {
  return {
    title: `Search: ${query} - enerzyflow`,
  };
}

const products = [
  {
    Name: "Cozy Inn",
    Address: "123 Main Street, Cityville",
    Distance: 2.5,
    OpenClose: "Open",
    Rating: 4.2,
    RatingDescription: "Excellent",
    Facilities: ["Free Cancellation", "Free Wi-Fi", "Free Breakfast"],
    OriginalPricing: 120,
    OffPricePercentage: 15,
    NetPrice: 102,
    Tax: 8,
    ImageURLs: [
      "https://picsum.photos/id/1015/200/300",
      "https://picsum.photos/id/1016/200/300",
      "https://picsum.photos/id/1018/200/300",
      "https://picsum.photos/id/1020/200/300",
      "https://picsum.photos/id/1024/200/300",
    ],
  },
  {
    Name: "Urban Retreat",
    Address: "456 Elm Avenue, Townburg",
    Distance: 5.3,
    OpenClose: "Close",
    Rating: 3.8,
    RatingDescription: "Good",
    Facilities: ["Free Wi-Fi", "Gym", "Parking"],
    OriginalPricing: 150,
    OffPricePercentage: 20,
    NetPrice: 120,
    Tax: 10,
    ImageURLs: [
      "https://picsum.photos/id/1025/200/300",
      "https://picsum.photos/id/1026/200/300",
      "https://picsum.photos/id/1027/200/300",
      "https://picsum.photos/id/1028/200/300",
      "https://picsum.photos/id/1029/200/300",
    ],
  },
  {
    Name: "Serenity Lodge",
    Address: "789 Oak Lane, Villageton",
    Distance: 8.0,
    OpenClose: "Open",
    Rating: 4.5,
    RatingDescription: "Excellent",
    Facilities: ["Free Cancellation", "Free Breakfast", "Spa"],
    OriginalPricing: 180,
    OffPricePercentage: 25,
    NetPrice: 135,
    Tax: 12,
    ImageURLs: [
      "https://picsum.photos/id/1030/200/300",
      "https://picsum.photos/id/1031/200/300",
      "https://picsum.photos/id/1032/200/300",
      "https://picsum.photos/id/1033/200/300",
      "https://picsum.photos/id/1034/200/300",
    ],
  },
  {
    Name: "Sunset View Motel",
    Address: "321 Pine Road, Hamletville",
    Distance: 3.1,
    OpenClose: "Open",
    Rating: 3.5,
    RatingDescription: "Fair",
    Facilities: ["Free Cancellation", "Free Wi-Fi", "Parking"],
    OriginalPricing: 100,
    OffPricePercentage: 10,
    NetPrice: 90,
    Tax: 7,
    ImageURLs: [
      "https://picsum.photos/id/1035/200/300",
      "https://picsum.photos/id/1036/200/300",
      "https://picsum.photos/id/1037/200/300",
      "https://picsum.photos/id/1038/200/300",
      "https://picsum.photos/id/1039/200/300",
    ],
  },
  {
    Name: "Pleasant Stay Hotel",
    Address: "567 Cedar Street, Countryside",
    Distance: 6.7,
    OpenClose: "Close",
    Rating: 4.0,
    RatingDescription: "Good",
    Facilities: ["Free Wi-Fi", "Gym", "Free Breakfast"],
    OriginalPricing: 130,
    OffPricePercentage: 18,
    NetPrice: 106.6,
    Tax: 9,
    ImageURLs: [
      "https://picsum.photos/id/1040/200/300",
      "https://picsum.photos/id/1041/200/300",
      "https://picsum.photos/id/1042/200/300",
      "https://picsum.photos/id/1043/200/300",
      "https://picsum.photos/id/1044/200/300",
    ],
  },
  {
    Name: "Tranquil Oasis Inn",
    Address: "890 Maple Court, Suburbia",
    Distance: 4.5,
    OpenClose: "Open",
    Rating: 4.8,
    RatingDescription: "Excellent",
    Facilities: ["Free Cancellation", "Free Wi-Fi", "Parking"],
    OriginalPricing: 200,
    OffPricePercentage: 30,
    NetPrice: 140,
    Tax: 15,
    ImageURLs: [
      "https://picsum.photos/id/1045/200/300",
      "https://picsum.photos/id/1046/200/300",
      "https://picsum.photos/id/1047/200/300",
      "https://picsum.photos/id/1048/200/300",
      "https://picsum.photos/id/1049/200/300",
    ],
  },

  {
    Name: "Harbor View Suites",
    Address: "234 Ocean Boulevard, Coastal City",
    Distance: 1.8,
    OpenClose: "Open",
    Rating: 4.7,
    RatingDescription: "Excellent",
    Facilities: ["Free Wi-Fi", "Ocean View Rooms", "Fitness Center"],
    OriginalPricing: 220,
    OffPricePercentage: 20,
    NetPrice: 176,
    Tax: 14,
    ImageURLs: [
      "https://picsum.photos/id/1050/200/300",
      "https://picsum.photos/id/1051/200/300",
      "https://picsum.photos/id/1052/200/300",
      "https://picsum.photos/id/1053/200/300",
      "https://picsum.photos/id/1054/200/300",
    ],
  },
  {
    Name: "Mountain Retreat Lodge",
    Address: "567 Summit Drive, Mountain Town",
    Distance: 10.2,
    OpenClose: "Open",
    Rating: 4.4,
    RatingDescription: "Excellent",
    Facilities: ["Free Cancellation", "Scenic Views", "Hiking Trails"],
    OriginalPricing: 180,
    OffPricePercentage: 15,
    NetPrice: 153,
    Tax: 12,
    ImageURLs: [
      "https://picsum.photos/id/1055/200/300",
      "https://picsum.photos/id/1056/200/300",
      "https://picsum.photos/id/1057/200/300",
      "https://picsum.photos/id/1058/200/300",
      "https://picsum.photos/id/1059/200/300",
    ],
  },
  {
    Name: "City Lights Hotel",
    Address: "789 Broadway Avenue, Metropolitan City",
    Distance: 3.5,
    OpenClose: "Close",
    Rating: 3.9,
    RatingDescription: "Good",
    Facilities: ["Free Parking", "City Skyline Views", "Business Center"],
    OriginalPricing: 160,
    OffPricePercentage: 12,
    NetPrice: 140.8,
    Tax: 11.2,
    ImageURLs: [
      "https://picsum.photos/id/1060/200/300",
      "https://picsum.photos/id/1061/200/300",
      "https://picsum.photos/id/1062/200/300",
      "https://picsum.photos/id/1063/200/300",
      "https://picsum.photos/id/1064/200/300",
    ],
  },
  {
    Name: "Riverside Inn",
    Address: "101 River Street, Riverside Village",
    Distance: 5.8,
    OpenClose: "Open",
    Rating: 4.1,
    RatingDescription: "Good",
    Facilities: ["Free Breakfast", "Riverfront Patio", "Canoe Rentals"],
    OriginalPricing: 140,
    OffPricePercentage: 25,
    NetPrice: 105,
    Tax: 8.4,
    ImageURLs: [
      "https://picsum.photos/id/1065/200/300",
      "https://picsum.photos/id/1066/200/300",
      "https://picsum.photos/id/1067/200/300",
      "https://picsum.photos/id/1068/200/300",
      "https://picsum.photos/id/1069/200/300",
    ],
  },
  {
    Name: "Sunrise Suites",
    Address: "876 Morning Lane, Sunrise City",
    Distance: 4.0,
    OpenClose: "Close",
    Rating: 3.6,
    RatingDescription: "Fair",
    Facilities: ["Free Wi-Fi", "Morning Yoga Classes", "Pet-Friendly"],
    OriginalPricing: 110,
    OffPricePercentage: 10,
    NetPrice: 99,
    Tax: 7.92,
    ImageURLs: [
      "https://picsum.photos/id/1070/200/300",
      "https://picsum.photos/id/1071/200/300",
      "https://picsum.photos/id/1072/200/300",
      "https://picsum.photos/id/1073/200/300",
      "https://picsum.photos/id/1074/200/300",
    ],
  },
  {
    Name: "Green Valley Resort",
    Address: "345 Parkside Road, Green Valley",
    Distance: 7.2,
    OpenClose: "Open",
    Rating: 4.9,
    RatingDescription: "Excellent",
    Facilities: ["Free Cancellation", "Swimming Pool", "Golf Course"],
    OriginalPricing: 250,
    OffPricePercentage: 22,
    NetPrice: 195,
    Tax: 15.6,
    ImageURLs: [
      "https://picsum.photos/id/1075/200/300",
      "https://picsum.photos/id/1076/200/300",
      "https://picsum.photos/id/1077/200/300",
      "https://picsum.photos/id/1078/200/300",
      "https://picsum.photos/id/1079/200/300",
    ],
  },
  {
    Name: "Downtown Suites",
    Address: "567 Main Street, Green Valley",
    Distance: 6.5,
    OpenClose: "Open",
    Rating: 4.5,
    RatingDescription: "Excellent",
    Facilities: ["Free Wi-Fi", "City View Rooms", "Fitness Center"],
    OriginalPricing: 180,
    OffPricePercentage: 20,
    NetPrice: 144,
    Tax: 11.52,
    ImageURLs: [
      "https://picsum.photos/id/1080/200/300",
      "https://picsum.photos/id/1081/200/300",
      "https://picsum.photos/id/1082/200/300",
      "https://picsum.photos/id/1083/200/300",
      "https://picsum.photos/id/1084/200/300",
    ],
  },
  {
    Name: "City Center Hotel",
    Address: "789 Elm Avenue, Green Valley",
    Distance: 3.8,
    OpenClose: "Open",
    Rating: 4.2,
    RatingDescription: "Good",
    Facilities: ["Free Parking", "Conference Rooms", "Restaurant"],
    OriginalPricing: 150,
    OffPricePercentage: 15,
    NetPrice: 127.5,
    Tax: 10.2,
    ImageURLs: [
      "https://picsum.photos/id/1085/200/300",
      "https://picsum.photos/id/1086/200/300",
      "https://picsum.photos/id/1087/200/300",
      "https://picsum.photos/id/1088/200/300",
      "https://picsum.photos/id/1089/200/300",
    ],
  },
  {
    Name: "Hillside Retreat",
    Address: "234 Oak Lane, Green Valley",
    Distance: 5.0,
    OpenClose: "Open",
    Rating: 4.7,
    RatingDescription: "Excellent",
    Facilities: ["Free Cancellation", "Hiking Trails", "Mountain Views"],
    OriginalPricing: 200,
    OffPricePercentage: 25,
    NetPrice: 150,
    Tax: 12,
    ImageURLs: [
      "https://picsum.photos/id/1090/200/300",
      "https://picsum.photos/id/1091/200/300",
      "https://picsum.photos/id/1092/200/300",
      "https://picsum.photos/id/1093/200/300",
      "https://picsum.photos/id/1094/200/300",
    ],
  },

  {
    Name: "Sunset Haven Inn",
    Address: "123 Ocean Drive, Beachtown",
    Distance: 4.0,
    OpenClose: "Open",
    Rating: 4.3,
    RatingDescription: "Excellent",
    Facilities: ["Free Wi-Fi", "Beachfront Views", "Pool"],
    OriginalPricing: 180,
    OffPricePercentage: 15,
    NetPrice: 153,
    Tax: 12.24,
    ImageURLs: [
      "https://picsum.photos/id/1100/200/300",
      "https://picsum.photos/id/1101/200/300",
      "https://picsum.photos/id/1102/200/300",
      "https://picsum.photos/id/1103/200/300",
      "https://picsum.photos/id/1104/200/300",
    ],
  },
  {
    Name: "Mountain View Lodge",
    Address: "456 Summit Road, Mountain Village",
    Distance: 8.5,
    OpenClose: "Open",
    Rating: 4.6,
    RatingDescription: "Excellent",
    Facilities: ["Free Cancellation", "Scenic Views", "Hiking Trails"],
    OriginalPricing: 200,
    OffPricePercentage: 20,
    NetPrice: 160,
    Tax: 12.8,
    ImageURLs: [
      "https://picsum.photos/id/1105/200/300",
      "https://picsum.photos/id/1106/200/300",
      "https://picsum.photos/id/1107/200/300",
      "https://picsum.photos/id/1108/200/300",
      "https://picsum.photos/id/1109/200/300",
    ],
  },
  {
    Name: "City Lights Suites",
    Address: "789 Broadway Avenue, Metropolitan City",
    Distance: 2.5,
    OpenClose: "Close",
    Rating: 3.9,
    RatingDescription: "Good",
    Facilities: ["Free Parking", "City Skyline Views", "Business Center"],
    OriginalPricing: 160,
    OffPricePercentage: 12,
    NetPrice: 140.8,
    Tax: 11.2,
    ImageURLs: [
      "https://picsum.photos/id/1110/200/300",
      "https://picsum.photos/id/1111/200/300",
      "https://picsum.photos/id/1112/200/300",
      "https://picsum.photos/id/1113/200/300",
      "https://picsum.photos/id/1114/200/300",
    ],
  },
  {
    Name: "Metropolitan Grand Hotel",
    Address: "345 Downtown Boulevard, Metropolitan City",
    Distance: 1.2,
    OpenClose: "Open",
    Rating: 4.8,
    RatingDescription: "Excellent",
    Facilities: ["Free Wi-Fi", "Luxury Suites", "Rooftop Lounge"],
    OriginalPricing: 250,
    OffPricePercentage: 20,
    NetPrice: 200,
    Tax: 16,
    ImageURLs: [
      "https://picsum.photos/id/1120/200/300",
      "https://picsum.photos/id/1121/200/300",
      "https://picsum.photos/id/1122/200/300",
      "https://picsum.photos/id/1123/200/300",
      "https://picsum.photos/id/1124/200/300",
    ],
  },
  {
    Name: "City View Suites",
    Address: "567 Skyline Avenue, Metropolitan City",
    Distance: 2.0,
    OpenClose: "Open",
    Rating: 4.5,
    RatingDescription: "Excellent",
    Facilities: ["Free Parking", "City Skyline Views", "Fitness Center"],
    OriginalPricing: 180,
    OffPricePercentage: 15,
    NetPrice: 153,
    Tax: 12.24,
    ImageURLs: [
      "https://picsum.photos/id/1125/200/300",
      "https://picsum.photos/id/1126/200/300",
      "https://picsum.photos/id/1127/200/300",
      "https://picsum.photos/id/1128/200/300",
      "https://picsum.photos/id/1129/200/300",
    ],
  },
  {
    Name: "Metropolitan Residences",
    Address: "789 Main Street, Metropolitan City",
    Distance: 1.5,
    OpenClose: "Open",
    Rating: 4.7,
    RatingDescription: "Excellent",
    Facilities: ["Free Cancellation", "Concierge Service", "Spa"],
    OriginalPricing: 200,
    OffPricePercentage: 18,
    NetPrice: 164,
    Tax: 13.12,
    ImageURLs: [
      "https://picsum.photos/id/1130/200/300",
      "https://picsum.photos/id/1131/200/300",
      "https://picsum.photos/id/1132/200/300",
      "https://picsum.photos/id/1133/200/300",
      "https://picsum.photos/id/1134/200/300",
    ],
  },
];

export default async function SearchPage({
  searchParams: { query },
}: SearchPageProps) {
  // const products = await prisma.product.findMany({
  //   where: {
  //     OR: [
  //       { name: { contains: query, mode: "insensitive" } },
  //       { description: { contains: query, mode: "insensitive" } },
  //     ],
  //   },
  //   orderBy: { id: "desc" },
  // });

  // if (products.length === 0) {
  //   return <div className="text-center">No products found</div>;
  // }
  return (
    // grid grid-cols-1
    <div
      className=" flex flex-col
    max-w-[1080px] mx-auto 
    "
    >
      <SearchResults products={products} query={query} />
    </div>
  );
}
