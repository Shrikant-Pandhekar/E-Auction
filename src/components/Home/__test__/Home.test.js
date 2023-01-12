import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../Home";

const MockHome = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

describe("Home Components", () => {
  beforeEach(() => {
    // console.log("RUNS BEFORE EACH TEST")
    jest.mock("../../../__mocks__/axios.js");
  });

  it("should be render home page", async () => {
    render(<MockHome />);
    // Wait for page to update with query text
    const heading = await screen.findByTestId(`heading`);
    expect(heading).toBeInTheDocument();
  });
});
