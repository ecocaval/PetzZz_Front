//? Libraries
import Image from "next/image";
import { Lato } from "next/font/google";
//? Images
import product from "/public/images/product.png";
//? Icons / Vector
import CommentsIcon from "../vectors/CommentsIcon";
import StarIcon from "../vectors/StarIcon";

import HeartFilledIcon from "../vectors/HeartFilledIcon";
import { ProductPromoInfo } from "./ProductCardInfo/ProductPromoInfo";
import { ProductInfo } from "./ProductCardInfo/ProductInfo";

const latoTextFont = Lato({
  weight: "300",
  subsets: ["latin"],
  style: ["normal"],
});

interface ProductCard {
  title?: string;
  isPromo?: boolean;
  price?: number;
  promoPrice?: number;
  mainImage?: string;
  description?: string;
}

export default function ProductCard({title, isPromo, price, promoPrice, mainImage, description}: ProductCard) {
  return (
    <div className={`${latoTextFont.className} m-6 w-60 h-72 rounded-xl`}>
      <h1 className="w-full truncate text-center font-semibold text-white p-2 bg-[var(--main-blue-bg)] rounded-t-xl">
        {title}
      </h1>
      <div className="relative flex flex-col items-center bg-[var(--light-yellow-bg)] border border-solid border-[var(--product-yellow-border)]">
        <div className="absolute top-3 right-2">
          <HeartFilledIcon />
        </div>
        <Image alt="" src={product} width={195} height={99} className="mt-4" />
        <div className="m-2 w-full px-2 flex items-center justify-between">
          <div className="flex items-center">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <p className="ml-2 text-sm font-medium">4.5</p>
          </div>
          <CommentsIcon />
        </div>
      </div>
      {isPromo ? (
        <ProductPromoInfo
        description={description}
        price={price}
        promoPrice={promoPrice}
        />
      ) : (
        <ProductInfo
          description={description}
          price={price}
        />
      )}
    </div>
  );
}
