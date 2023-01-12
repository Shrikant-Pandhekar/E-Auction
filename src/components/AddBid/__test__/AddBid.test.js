import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import AddBid from "../AddBid";

const MockAddBid = () => {
  return (
    <BrowserRouter>
      <AddBid />
    </BrowserRouter>
  );
};

describe("Add Bid Component", () => {
  it("should render input element", () => {
    render(<MockAddBid />);
    const inputElement = screen.getByPlaceholderText(/First Name/i);
    expect(inputElement).toBeInTheDocument();
  });
});
