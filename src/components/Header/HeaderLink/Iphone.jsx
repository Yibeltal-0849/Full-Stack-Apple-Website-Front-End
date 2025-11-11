import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [products, setProducts] = useState([]);

 useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://apple-api-qx05.onrender.com/iPhone");
      const data = await response.json();
      console.log("Fetched data:", data); // Add this to confirm

      // ✅ Fix: Capital "P"
      setProducts(data.Products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchProducts();
}, []);

  console.log(products);

  let flip = false;
  return (
    <>
      <section className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 mt-5">
            <h1 className="fw-bold mt-4">iPhone</h1>
            <div className="fs-4 mb-2">The best for the brightness</div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            {products.map((product, index) => {
              console.log("Product Data:", product);

              const order2 = flip ? 1 : 2;
              const order1 = flip ? 2 : 1;
              flip = !flip;

              return (
                <div
                  key={product.product_url}
                  className="justify-content-center text-center row  "
                >
                  <div
                    className={`col-sm-12 col-md-6 order-${order2} mt-3  d-flex align-items-center  justify-content-center`}
                  >
                    <div>
                      <h5 className="card-title fs-4 ">
                        {product.product_name}
                      </h5>
                      <p className="card-text">
                        {product.Product_brief_description}
                      </p>
                      <h6 className="text-muted">{`Starting at ${product.Starting_price}`}</h6>
                      <p className="text-muted">{product.Price_range}</p>
                      <div className="mt-3">
                        <Link
                          to={`/iPhones/${product.Product_id}`}
                          className="btn btn-primary"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`col-sm-12 col-md-6 order-${order1} d-flex justify-content-center mt-5`}
                  >
                    <div className="product-image  w-100 h-100 ">
                      <img src={product.Product_img} className="img-fluid" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Iphone;
