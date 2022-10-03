import imgProduct1 from "../../../../assets/images/product-1.jpg";
import imgProduct2 from "../../../../assets/images/product-2.jpg";
import imgProduct3 from "../../../../assets/images/product-3.jpg";
import imgProduct4 from "../../../../assets/images/product-4.jpg";
import imgProduct5 from "../../../../assets/images/product-5.jpg";
import imgProduct6 from "../../../../assets/images/product-6.jpg";
import imgProduct7 from "../../../../assets/images/product-7.jpg";
import imgProduct8 from "../../../../assets/images/product-8.jpg";
import imgProduct9 from "../../../../assets/images/product-9.jpg";
import imgProduct10 from "../../../../assets/images/product-10.jpg";

export interface ProductItem {
  badge?: string;
  isBadgeNew?: boolean;
  src: string;
  name: string;
  price: number;
  priceOff?: number;
}

export const dataList: ProductItem[] = [
  {
    badge: "-25%",
    src: imgProduct1,
    name: "Varsi Leather Bag",
    price: 48.75,
    priceOff: 65.0,
  },
  {
    isBadgeNew: true,
    src: imgProduct2,
    name: "Fit Twill Shirt for Woman",
    price: 62.0,
  },
  {
    src: imgProduct3,
    name: "Grand Atlantic Chukka Boots",
    price: 32.0,
  },
  {
    src: imgProduct4,
    name: "Women's Faux-Trim Shirt",
    price: 84.0,
  },
  {
    src: imgProduct5,
    name: "Soft Touch Interlock Polo",
    price: 45.0,
  },
  {
    src: imgProduct6,
    name: "Casmart Smart Watch",
    price: 30.0,
    priceOff: 38.0,
  },
  {
    src: imgProduct7,
    name: "Casmart Smart Glass",
    price: 25.0,
    priceOff: 39.0,
  },
  {
    src: imgProduct8,
    name: "Cotton Shirt for Men",
    price: 85.0,
    priceOff: 99.0,
  },
  {
    src: imgProduct9,
    name: "Double-breasted Blazer",
    price: 32.0,
  },
  {
    isBadgeNew: true,
    src: imgProduct10,
    name: "Ribbed Cotton Bodysuits",
    price: 71.0,
  },
];
