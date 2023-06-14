import ProductCard from "../ProductCard/ProductCard";

const products = [
  {
    title: "Cama de Pelúcia para Cães e Gatos",
    isPromo: false,
    price: 59.99,
    mainImage: "cama_pelucia.jpg",
    description:
      "Uma cama extremamente macia e confortável para o seu animal de estimação.",
  },
  {
    title: "Cama Redonda com Laterais Altas",
    isPromo: true,
    price: 79.99,
    promoPrice: 59.99,
    mainImage: "cama_redonda.jpg",
    description:
      "Uma cama aconchegante com laterais altas para o seu pet se sentir seguro.",
  },
  {
    title: "Cama Refrescante para Cães",
    isPromo: false,
    price: 34.99,
    mainImage: "cama_refrescante.jpg",
    description:
      "Uma cama com material refrescante para manter o seu cão fresco nos dias quentes.",
  },
  {
    title: "Cama Confortável para Gatos",
    isPromo: true,
    price: 44.99,
    promoPrice: 39.99,
    mainImage: "cama_confortavel.jpg",
    description:
      "Uma cama suave e aconchegante para o seu gato relaxar e tirar sonecas.",
  },
  {
    title: "Cama Dupla para Cães e Gatos",
    isPromo: false,
    price: 69.99,
    mainImage: "cama_dupla.jpg",
    description:
      "Uma cama espaçosa com dois compartimentos para acomodar múltiplos animais de estimação.",
  },
  {
    title: "Cama Ergonômica para Cães de Grande Porte",
    isPromo: false,
    price: 129.99,
    mainImage: "cama_ergonomica.jpg",
    description:
      "Uma cama com design ergonômico especialmente projetada para cães de grande porte.",
  },
];

export default function ProductsList() {
  return (
    <div className="flex max-h-screen w-10/12 m-8 rounded-xl bg-white">
      <div>
        <div className="flex flex-wrap m-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              isPromo={product.isPromo}
              price={product.price}
              promoPrice={product.promoPrice}
              mainImage={product.mainImage}
              description={product.description}
            />
          ))}
        </div>
        <ul className="bg-red-400 flex items-center justify-between mx-12 my-6 w-1/2">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <p>...Ver mais</p>
        </ul>
      </div>
      <div className="w-2/5 bg-red-600 rounded-xl"></div>
    </div>
  );
}
