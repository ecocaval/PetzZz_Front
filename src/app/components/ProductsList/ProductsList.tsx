import ProductCard from "../ProductCard/ProductCard";

const products = [
  {
    title: "Cama de Pelúcia para Cães e Gatos",
    isPromo: false,
    price: 59.99,
    mainImage: "cama_pelucia.jpg",
    description: "Uma cama extremamente macia e confortável para o seu animal de estimação.",
  },
  {
    title: "Cama Redonda com Laterais Altas",
    isPromo: true,
    price: 79.99,
    promoPrice: 59.99,
    mainImage: "cama_redonda.jpg",
    description: "Uma cama aconchegante com laterais altas para o seu pet se sentir seguro.",
  },
  {
    title: "Cama Refrescante para Cães",
    isPromo: false,
    price: 34.99,
    mainImage: "cama_refrescante.jpg",
    description: "Uma cama com material refrescante para manter o seu cão fresco nos dias quentes.",
  },
  {
    title: "Cama Confortável para Gatos",
    isPromo: true,
    price: 44.99,
    promoPrice: 39.99,
    mainImage: "cama_confortavel.jpg",
    description: "Uma cama suave e aconchegante para o seu gato relaxar e tirar sonecas.",
  },
  {
    title: "Cama Dupla para Cães e Gatos",
    isPromo: false,
    price: 69.99,
    mainImage: "cama_dupla.jpg",
    description: "Uma cama espaçosa com dois compartimentos para acomodar múltiplos animais de estimação.",
  },
  {
    title: "Cama Ergonômica para Cães de Grande Porte",
    isPromo: false,
    price: 129.99,
    mainImage: "cama_ergonomica.jpg",
    description: "Uma cama com design ergonômico especialmente projetada para cães de grande porte.",
  },
];

export default function ProductsList() {
  return (
    <main className="flex w-10/12 h-fit m-8 rounded-xl bg-white">
      <div className="flex flex-wrap">
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
      <div className="w-8/12 h-m bg-red-600 rounded-xl"></div>
    </main>
  );
}
