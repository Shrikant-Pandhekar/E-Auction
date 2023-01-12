import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBid = () => {
  const [updatedBidAmount, setUpdatedBidAmount] = useState(0);
  const { productId, email } = useParams();
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      axios
        .put(
          `http://localhost:8082/e-auction/api/v1/buyer/update-bid/${productId}/${email}/${updatedBidAmount}`
        )
        .then((response) => {
          if (response.data != null) {
            alert("Bid Amount Updated Successfully!!!");
            navigate(`/show-bids/${productId}`);
          }
        })
        .catch(function (error) {
          if (error.response) {
            alert(error.response.data);
            navigate("/");
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="card mb-5">
      <div className="card-body">
        <div className="card-title">
          <h1>Update Bid</h1>
        </div>
        <form>
          <div className="d-flex align-items-end">
            <div className="col-md-6">
              <label htmlFor="updatedBidAmount" className="form-label">
                New Bid Amount*
              </label>
              <input
                type="text"
                className="form-control"
                id="updatedBidAmount"
                name="updatedBidAmount"
                placeholder="Enter New Bid Amount"
                required
                onChange={(e) => {
                  setUpdatedBidAmount(e.target.value);
                }}
              />
            </div>
            <div className="col-md-2 mx-2">
              <button
                type="submit"
                className="btn btn-sm btn-primary"
                onClick={onSubmit}
              >
                Update Bid
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBid;
