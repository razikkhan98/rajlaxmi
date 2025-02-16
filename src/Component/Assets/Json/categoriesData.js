// src/data/categoriesData.js

// Import images
import Images1 from "../../Assets/img/Shopcategory/Rectangle 55.png";
import Images2 from "../../Assets/img/Shopcategory/Soyabean chunk small size.png";
import Images3 from "../../Assets/img/Shopcategory/Organic Jaggery Powder.png";
import Images4 from "../../Assets/img/Shopcategory/Hing Powder.png";
import Images5 from "../../Assets/img/Shopcategory/Organic Barley Atta.png";
import Images6 from "../../Assets/img/Shopcategory/Organic Maize whole.png";
import Images7 from "../../Assets/img/Shopcategory/Organic Black sesame.png";
import Images8 from "../../Assets/img/Shopcategory/Organic Idli Rice.png";
import Images9 from "../../Assets/img/Shopcategory/Organic Coriander powder.png";
import Images10 from "../../Assets/img/Shopcategory/Organic nutmeg whole.png";
import Images11 from "../../Assets/img/Shopcategory/Organic Chaach Masala.png";
import Images12 from "../../Assets/img/Shopcategory/Organic Brown Sugar.png";

export const BestSellers = {
  title: "Best Sellers",
  products: [
    { id: 1, name: "Organic Kabuli Chana", price: "180.00", qty: "500 gm", image: Images1, rating: 3.5, reviews: 312 },
    { id: 2, name: "Soyabean Chunk Small Size", price: "58.00", qty: "500 gm", image: Images2, rating: 4.0, reviews: 210 },
    { id: 3, name: "Organic Jaggery Powder", price: "54.00", qty: "500 gm", image: Images3, rating: 5, reviews: 210 },
    { id: 4, name: "Hing Powder", price: "1200.00", qty: "500 gm", image: Images4, rating: 5, reviews: 210 },
  ],
};

export const EcoEssentials = {
  title: "Eco Essentials",
  products: [
    { id: 9, name: "Organic Coriander powder", price: "125.00", qty: "500 gm", image: Images9, rating: 4.5, reviews: 210 },
    { id: 10, name: "Organic Nutmeg Whole", price: "1,150.00", qty: "500 gm", image: Images10, rating: 4.5, reviews: 210 },
    { id: 11, name: "Organic Chaach Masala", price: "35.00", qty: "500 gm", image: Images11, rating: 4.5, reviews: 210 },
    { id: 12, name: "Organic Brown Sugar", price: "240.00", qty: "500 gm", image: Images12, rating: 4.5, reviews: 210 },
  ],
};

export const SeasonalHarvest = {
  title: "Seasonal Harvest",
  products: [
    { id: 5, name: "Organic Barley Atta", price: "70.00", qty: "500 gm", image: Images5, rating: 4.5, reviews: 210 },
    { id: 6, name: "Organic Maize whole", price: "35.00", qty: "500 gm", image: Images6, rating: 4.5, reviews: 210 },
    { id: 7, name: "Organic Black sesame", price: "240.00", qty: "500 gm", image: Images7, rating: 4.5, reviews: 210 },
    { id: 8, name: "Organic Idli Rice", price: "75.00", qty: "500 gm", image: Images8, rating: 4.5, reviews: 210 },
  ],
};

// Export all categories as a single array
export const BestSellersData = [BestSellers];
export const EcoEssentialsData = [EcoEssentials, ];
export const SeasonalHarvestData = [ SeasonalHarvest];