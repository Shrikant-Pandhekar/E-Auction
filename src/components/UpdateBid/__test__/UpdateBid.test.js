import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import UpdateBid from "../UpdateBid";

const MockUpdateBid = () => {
  return (
    <BrowserRouter>
      <UpdateBid />
    </BrowserRouter>
  );
};

describe("Update Bid Component", () => {
  it("should render input element", () => {
    render(<MockUpdateBid />);
    const inputElement = screen.getByPlaceholderText(/Enter New Bid Amount/i);
    expect(inputElement).toBeInTheDocument();
  });
});
