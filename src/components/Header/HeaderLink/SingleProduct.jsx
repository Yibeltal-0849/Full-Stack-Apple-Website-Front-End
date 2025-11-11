import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four404 from "./Four404";

function SingleProduct() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { ProductId } = useParams();
  //   console.log(ProductId);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          // `http://localhost:1234/iPhone/${ProductId}`
          `https://apple-api-qx05.onrender.com/iPhone/${ProductId}`
        );

        if (!response.ok) {
          throw new Error(`Product not found (${response.status})`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [ProductId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <Four404 />;
  }
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div key={products.Product_id}>
            <div className="row justify-content-center text-center">
              <div className="col-12 mt-5 pt-5">
                <div className="title-wrapper fw-bold fs-3">
                  {products.product_name}
                </div>
                <div className="brief_description 1h-base">
                  {products.Product_brief_description}
                </div>
              </div>
            </div>
            <div className="row justify-content-center text-center product-holder h-100 m-5">
              <div className="col-sm-12 col-md my-auto">
                <div className="starting-price">
                  Starting from {products.Starting_price}
                </div>
                <div className="price_range mt-1 mt-1">
                  {products.Price_range}
                </div>
                <div className="detail_desc">
                  {products.Product_description}
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="product_img">
                  <img src={products.Product_img} alt="Product" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingleProduct;
