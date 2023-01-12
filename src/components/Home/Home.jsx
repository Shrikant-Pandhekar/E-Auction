import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const res = axios.get(
      "http://localhost:8080/e-auction/api/v1/product/getAllProduct"
    );
    if (res.data != null) {
      setProducts(res.data);
    }
  }, [products]);

  const deleteProduct = (productId) => {
    axios
      .delete(
        `http://localhost:8081/e-auction/api/v1/seller/delete/${productId}`
      )
      .then((response) => {
        alert(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          alert(error.response.data.msg.split(":")[4].split(",")[0]);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  };

  return (
    <>
      <div className="d-flex flex-row  align-content-center  justify-content-between mb-3">
        <h1 data-testid="heading">Aucation Product</h1>
        <Link to={"/add-product"}>
          <button type="button" className="btn btn-success">
            Add Product
          </button>
        </Link>
      </div>
      <div className="card mb-5">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table caption-top table-striped">
              <caption>List of Product</caption>
              <thead className="table-dark">
                <tr>
                  <th scope="col">Sr No</th>
                  <th scope="col">Product Id</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Short Description</th>
                  <th scope="col">Detailed Description</th>
                  <th scope="col">Category</th>
                  <th scope="col">Bid End date</th>
                  <th scope="col">Bid Amount</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.productId}>
                    <td>{index + 1}</td>
                    <td>{product.productId}</td>
                    <td>{product.productName}</td>
                    <td>{product.shortDesc}</td>
                    <td>{product.detaileDesc}</td>
                    <td>{product.category}</td>
                    <td>{product.bidEndDate}</td>
                    <td>{product.startingBid}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          deleteProduct(product.productId);
                        }}
                      >
                        Delete
                      </button>
                      &nbsp;
                      <Link to={`/add-bid/${product.productId}`}>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          Add Bid
                        </button>
                      </Link>
                      &nbsp;
                      <Link to={`/show-bids/${product.productId}`}>
                        <button type="button" className="btn btn-info btn-sm">
                          Show bids
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
