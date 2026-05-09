import { useParams } from "react-router-dom";

export default function ProductPage() {
  // :id matches the dynamic segment in your route
  const { id } = useParams();

  // Here you would typically fetch product details from an API or filter a local array using the ID.

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Product Details</h1>
      <p>Viewing product ID: {id}</p>
    </div>
  );
}
