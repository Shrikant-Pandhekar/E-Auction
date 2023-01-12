import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import AddProduct from "../AddProduct";

const MockAddProduct = () => {
  return (
    <BrowserRouter>
      <AddProduct />
    </BrowserRouter>
  );
};

describe("Add Product Component", () => {
  it("should render input element", () => {
    render(<MockAddProduct />);
    const inputElement = screen.getByPlaceholderText(/productName/i);
    expect(inputElement).toBeInTheDocument();
  });
});
