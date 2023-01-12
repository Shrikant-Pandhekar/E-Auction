import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddProduct = () => {
  const navigate = useNavigate();
  const initialValues = {
    productName: "",
    shortDesc: "",
    detaileDesc: "",
    category: "",
    startingBid: "",
    bidEndDate: "",
  };

  const Formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      productName: Yup.string()
        .min(3, "Product Name Should be minimum 3 Charater")
        .max(30, "Product Name Should be maxmium 30 Charater")
        .required("Product Name Required"),
      shortDesc: Yup.string().required(),
      detaileDesc: Yup.string().required(),
      category: Yup.string().required(),
      startingBid: Yup.number().required(),
      bidEndDate: Yup.date().required(),
    }),
    onSubmit: (values, action) => {
      console.log(values);
      axios
        .post(
          "http://localhost:8081/e-auction/api/v1/seller/addproduct",
          values
        )
        .then((response) => {
          if (response.data != null) {
            console.log(response.data);
            alert("Product Added Successfully!!!");
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
    <div
      className="card border-0 shadow rounded-3 my--1 mx-auto"
      style={{ maxWidth: "40rem" }}
    >
      <div className="card-body p-4 px-5">
        <h1 className="card-title text-center mb-3 ">Add New Product</h1>
        <form onSubmit={Formik.handleSubmit}>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="text"
              name="productName"
              id="productName"
              placeholder="productName"
              value={Formik.values.productName}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            <label htmlFor="floatingInput">Product Name</label>
            {Formik.touched.productName && Formik.errors.productName ? (
              <p data-testid="nameError" className="text-danger small px-2">
                {Formik.errors.productName}
              </p>
            ) : null}
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="text"
              name="shortDesc"
              id="shortDesc"
              placeholder="shortDesc"
              value={Formik.values.shortDesc}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            <label htmlFor="floatingInput">Short Description</label>
            {Formik.touched.shortDesc && Formik.errors.shortDesc ? (
              <p className="text-danger small px-2">
                {Formik.errors.shortDesc}
              </p>
            ) : null}
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              name="detaileDesc"
              id="detaileDesc"
              cols="30"
              rows="10"
              style={{ height: "70px" }}
              placeholder="Detailed Description"
              value={Formik.values.detaileDesc}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            ></textarea>
            <label htmlFor="floatingTextarea">Detailed Description</label>
            {Formik.touched.detaileDesc && Formik.errors.detaileDesc ? (
              <p className="text-danger small px-2">
                {Formik.errors.detaileDesc}
              </p>
            ) : null}
          </div>
          <div className="form-floating mb-3">
            <select
              className="form-select"
              name="category"
              id="category"
              value={Formik.values.category}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            >
              <option defaultValue="Open this select Category">
                Open this select Category
              </option>
              <option value="Sculptor">Sculptor</option>
              <option value="Painting">Painting</option>
              <option value="Ornament">Ornament</option>
            </select>

            <label htmlFor="floatingInput">Category</label>
            {Formik.touched.category && Formik.errors.category ? (
              <p className="text-danger small px-2">{Formik.errors.category}</p>
            ) : null}
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="number"
              name="startingBid"
              id="startingBid"
              placeholder="startingBid"
              value={Formik.values.startingBid}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            <label htmlFor="floatingInput">Starting Bid</label>
            {Formik.touched.startingBid && Formik.errors.startingBid ? (
              <p className="text-danger small px-2">
                {Formik.errors.startingBid}
              </p>
            ) : null}
          </div>

          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="date"
              name="bidEndDate"
              id="bidEndDate"
              placeholder="bidEndDate"
              value={Formik.values.bidEndDate}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            <label htmlFor="floatingInput">Bid End Date</label>
            {Formik.touched.bidEndDate && Formik.errors.bidEndDate ? (
              <p className="text-danger small px-2">
                {Formik.errors.bidEndDate}
              </p>
            ) : null}
          </div>
          <div className="row">
            <div className="d-grid flex-grow-1">
              <button
                className="btn btn-primary btn-login text-uppercase fw-bold"
                type="submit"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
