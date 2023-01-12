import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";

const links = [
  { text: "Home", location: "/" },
  { text: "Add Product", location: "/add-product" },
];

const MockNav = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

// I use test.each to iterate the test cases above
test.each(links)("Check if Navbar have %s link.", (link) => {
  render(<MockNav />);
  //Ensure the text is in the dom, will throw error it can't find
  const linkDom = screen.getByText(link.text);
  //use jest assertion to verify the link property
  expect(linkDom.getAttribute("href")).toBe(link.location);
});
