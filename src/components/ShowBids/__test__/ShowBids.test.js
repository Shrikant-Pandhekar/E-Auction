import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Showbids from "../Showbids";

const mockResponse = {
  data: {
    results: [
      {
        productName: "SRO",
        shortDesc: "Short Desc",
        detailedDesc: "Deatiled desc",
        category: "Painting",
        startingBid: 700,
      },
    ],
  },
};

const MockShowBids = () => {
  return (
    <BrowserRouter>
      <Showbids />
    </BrowserRouter>
  );
};

describe("Show Bid Components", () => {
  beforeEach(() => {
    // console.log("RUNS BEFORE EACH TEST")
    jest.fn().mockResolvedValue(mockResponse);
  });

  it("should be render Show Bid page", async () => {
    render(<MockShowBids />);
    // Wait for page to update with query text
    const heading = await screen.findByTestId(`heading`);
    expect(heading).toBeInTheDocument();
  });
});
