//? Icons / Vector
import ArrowRightIcon from "../../vectors/ArrowRightIcon";

interface ProductPromoInfo {
    description?: string;
    price?: number;
    promoPrice?: number;
}

export function ProductPromoInfo({description, price, promoPrice}:ProductPromoInfo) {
  return (
    <div className="h-32 border border-solid border-[var(--border-blue)] rounded-b-xl flex flex-col items-center">
      <div className="flex items-center justify-between px-2">
        <p className="m-2 text-xs text-left font-medium">
          {description}
        </p>
        <p className="m-2 text-xs text-left font-medium text-[var(--light-grey)]">
          Parcele em até 12x sem juros
        </p>
      </div>
      <div className="flex items-center">
        <p className="m-2 font-medium">
          <s>R${price}</s>
        </p>
        <ArrowRightIcon />
        <p className="m-2 text-xl font-bold text-[var(--promo-price-color)]">
          R${promoPrice}
        </p>
      </div>
    </div>
  );
}
