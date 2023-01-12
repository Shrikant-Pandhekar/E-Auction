import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

const AddBid = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    phone: "",
    email: "",
    productid: productId,
    bidamt: "",
  };

  const Formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(5, "First Name Should be minimum 5 in length")
        .max(25, "First Name Should be maximum 25 in length")
        .required("First Name is required"),
      lastName: Yup.string()
        .min(5, "Last Name Should be minimum 5 in length")
        .max(30, "Last Name Should be maximum 25 in length")
        .required("Last Name is required"),
      address: Yup.string().required("Addres is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      pin: Yup.number().required("Pin is required"),
      phone: Yup.string()
        .min(10, "Phone Number should be 10 digit")
        .max(10, "Phone Number should be 10 digit")
        .required("Phone Number is required"),
      email: Yup.string()
        .email("Enter Valid Email")
        .required("Email is required"),
      bidamt: Yup.number().required(),
    }),
    onSubmit: (values, action) => {
      axios
        .post("http://localhost:8082/e-auction/api/v1/buyer/place-bid", values)
        .then((response) => {
          if (response.data != null) {
            console.log(response.data);
            alert(response.data);
            navigate("/");
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
      action.resetForm();
    },
  });

  return (
    <div className="container w-100 h-100 px-5">
      <div
        className="card border-0 shadow rounded-3 my-1 mx-auto"
        style={{ maxWidth: "40rem" }}
      >
        <div className="card-body p-3 p-sm-4">
          <h5 className="card-title text-center mb-5 fw-light fs-5">Add Bid</h5>
          <form className="row g-3 mx-5" onSubmit={Formik.handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={Formik.values.firstName}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              {Formik.touched.firstName && Formik.errors.firstName ? (
                <p className="text-danger small px-2 m-0">
                  {Formik.errors.firstName}
                </p>
              ) : null}
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={Formik.values.lastName}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              {Formik.touched.lastName && Formik.errors.lastName ? (
                <p className="text-danger small px-2 m-0">
                  {Formik.errors.lastName}
                </p>
              ) : null}
            </div>
            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder="Address"
                value={Formik.values.address}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              {Formik.touched.address && Formik.errors.address ? (
                <p className="text-danger small px-2 m-0">
                  {Formik.errors.address}
                </p>
              ) : null}
            </div>
            <div className="col-md-6">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                placeholder="City"
                value={Formik.values.city}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              {Formik.touched.city && Formik.errors.city ? (
                <p className="text-danger small px-2 m-0">
                  {Formik.errors.city}
                </p>
              ) : null}
            </div>
            <div className="col-md-4">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="state"
                name="state"
                placeholder="State"
                value={Formik.values.state}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              {Formik.touched.state && Formik.errors.state ? (
                <p className="text-danger small px-2 m-0">
                  {Formik.errors.state}
                </p>
              ) : null}
            </div>
            <div className="col-md-2">
              <label htmlFor="pin" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="pin"
                name="pin"
                placeholder="Pin"
                value={Formik.values.pin}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              {Formik.touched.pin && Formik.errors.pin ? (
                <p className="text-danger small px-2 m-0">
                  {Formik.errors.pin}
                </p>
              ) : null}
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone No
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Phone No"
                value={Formik.values.phone}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              {Formik.touched.phone && Formik.errors.phone ? (
                <p className="text-danger small px-2 m-0">
                  {Formik.errors.phone}
                </p>
              ) : null}
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                value={Formik.values.email}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              {Formik.touched.email && Formik.errors.email ? (
                <p className="text-danger small px-2 m-0">
                  {Formik.errors.email}
                </p>
              ) : null}
            </div>
            <div className="col-12">
              <label htmlFor="bidamt" className="form-label">
                Bid Amount
              </label>
              <input
                type="number"
                className="form-control"
                id="bidamt"
                name="bidamt"
                placeholder="Bid Amount"
                value={Formik.values.bidamt}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              {Formik.touched.bidamt && Formik.errors.bidamt ? (
                <p className="text-danger small px-2 m-0">
                  {Formik.errors.bidamt}
                </p>
              ) : null}
            </div>

            <div className="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn btn-primary">
                Add Bid
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBid;
