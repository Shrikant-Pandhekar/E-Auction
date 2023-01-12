import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Showbids = () => {
  const { productId } = useParams();
  const [bidList, setBidList] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:8081/e-auction/api/v1/seller/show-bids/${productId}`
      )
      .then((response) => {
        if (response.data != null) {
          setBidList(response.data);
        }
      })
      .catch(function (error) {
        if (error.response) {
          alert(error.response.data);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  }, [productId]);

  return (
    <>
      <div className="card mb-5">
        <div className="card-body">
          <div className="card-title">
            <h1 data-testid="heading">Producy Deatils</h1>
          </div>

          <table className="table-borderless mb-3">
            <tbody>
              <tr>
                <td className="col-5">Product Name</td>
                <td className="col-5"> {bidList.productName}</td>
              </tr>
              <tr>
                <td className="col-5">Product Short Description</td>
                <td className="col-5"> {bidList.shortDesc}</td>
              </tr>
              <tr>
                <td className="col-5">Product Deatiled Description</td>
                <td className="col-5"> {bidList.detailedDesc}</td>
              </tr>
              <tr>
                <td className="col-5">Product Category</td>
                <td className="col-5"> {bidList.category}</td>
              </tr>
              <tr>
                <td className="col-5">Product Starting Bid</td>
                <td className="col-5"> {bidList.startingBid}</td>
              </tr>
            </tbody>
          </table>

          <div className="card-title">
            <h1>Buyer Deatils</h1>
          </div>
          {bidList["buyes"]?.length > 0 ? (
            <div className="table-responsive">
              <table className="table caption-top ">
                <caption>List of Buyers</caption>
                <thead className="table-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">City</th>
                    <th scope="col">Pin</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Bid Amount</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bidList["buyes"]?.map((buyer, index) => (
                    <tr key={buyer.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{buyer.firstName}</td>
                      <td>{buyer.lastName}</td>
                      <td>{buyer.address}</td>
                      <td>{buyer.city}</td>
                      <td>{buyer.pin}</td>
                      <td>{buyer.phone}</td>
                      <td>{buyer.email}</td>
                      <td>{buyer.bidamt}</td>
                      <td>
                        {" "}
                        <Link to={`/update-bids/${productId}/${buyer.email}`}>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm"
                          >
                            Update bid
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <h1>No Bid on Product Yet</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Showbids;
