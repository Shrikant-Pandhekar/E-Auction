import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AddProduct from "./components/AddProduct/AddProduct";
import Navbar from "./components/Navbar/Navbar";
import Showbids from "./components/ShowBids/Showbids";
import AddBid from "./components/AddBid/AddBid";
import UpdateBid from "./components/UpdateBid/UpdateBid";

function App() {
  return (
    <>
      <Navbar />
      <div className="container w-100 h-100 py-5">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add-product" element={<AddProduct />} />
          <Route exact path={`show-bids/:productId`} element={<Showbids />} />
          <Route exact path={`/add-bid/:productId`} element={<AddBid />} />
          <Route
            exact
            path={`/update-bids/:productId/:email`}
            element={<UpdateBid />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
