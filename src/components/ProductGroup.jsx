import Product from "./Product";

export default function ProductGroup({ heading, description, products }) {
  return (
    <div className="xs:grid-cols-2 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      <div className="col-span-full">
        {heading && (
          <h1>
            <span className="font-syne from-brand-mid to-accent mb-4 bg-linear-to-r bg-clip-text text-xl font-bold text-transparent md:text-2xl">
              {heading}
            </span>
          </h1>
        )}
        {description && (
          <p className="text-text2 mb-4 text-sm">{description}</p>
        )}
      </div>
      {products &&
        products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            productName={product.name}
            productImgLink={product.link}
            price={product.price}
          />
        ))}
    </div>
  );
}
