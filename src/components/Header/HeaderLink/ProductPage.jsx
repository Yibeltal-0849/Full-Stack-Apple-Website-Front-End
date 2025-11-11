import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four404 from "./Four404";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { ProductId } = useParams();
  // console.log(ProductId);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await fetch(`http://localhost:1234/iPhone`);
        const response = await fetch(`https://apple-api-qx05.onrender.com/iPhone`);
        const data = await response.json();

        setProducts(data.products);
        console.log(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false); // Ensure loading is set to false once data is fetched
      }
    };

    fetchProducts();
  }, [ProductId]);

  if (loading) {
    return <div></div>; // Display a empty message instead of Four404
  }

  const filteredProducts = products.filter(
    (product) => product.Product_id === parseInt(ProductId)
  );

  if (filteredProducts.length == 0) {
    return <Four404 />;
  }
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          {filteredProducts.map((product) => (
            <div key={product.Product_id}>
              <div className="row justify-content-center text-center">
                <div className="col-12 mt-5 pt-5">
                  <div className="title-wrapper fw-bold fs-3">
                    {product.product_name}
                  </div>
                  <div className="brief_description 1h-base">
                    {product.Product_brief_description}
                  </div>
                </div>
              </div>
              <div className="row justify-content-center text-center product-holder h-100 m-5">
                <div className="col-sm-12 col-md my-auto">
                  <div className="starting-price">
                    Starting from {product.Starting_price}
                  </div>
                  <div className="price_range mt-1 mt-1">
                    {product.Price_range}
                  </div>
                  <div className="detail_desc">
                    {product.Product_description}
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="product_img">
                    <img src={product.Product_img} alt="Product" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
