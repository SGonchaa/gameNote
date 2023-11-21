import React from "react";
import "../App.css";
import "./Product.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Products() {
  var data = [
    {
      name: "ASUS TUF Gaming A15",
      price: 2599,
      img:
        "https://gamenotebaku.az/cdn/storage/product_images/g3udQn3K6LNTMzd7n/fullHD/g3udQn3K6LNTMzd7n.png",
    },
    {
      name: "ASUS TUF Gaming A15",
      price: 2599,
      img:
        "https://gamenotebaku.az/cdn/storage/product_images/g3udQn3K6LNTMzd7n/fullHD/g3udQn3K6LNTMzd7n.png",
    },
    {
      name: "ASUS TUF Gaming A15",
      price: 2599,
      img:
        "https://gamenotebaku.az/cdn/storage/product_images/g3udQn3K6LNTMzd7n/fullHD/g3udQn3K6LNTMzd7n.png",
    },
    {
      name: "ASUS TUF Gaming A15",
      price: 2599,
      img:
        "https://gamenotebaku.az/cdn/storage/product_images/g3udQn3K6LNTMzd7n/fullHD/g3udQn3K6LNTMzd7n.png",
    },
    {
      status: true,
      name: "ASUS ROG Strix G16",
      price: 3499,
      img:
        "https://gamenotebaku.az/cdn/storage/product_images/kDP4SavZFqDvJa2C3/fullHD/kDP4SavZFqDvJa2C3.png",
    },
    {
      status: true,
      name: "ASUS ROG Strix G16",
      price: 3499,
      img:
        "https://gamenotebaku.az/cdn/storage/product_images/kDP4SavZFqDvJa2C3/fullHD/kDP4SavZFqDvJa2C3.png",
    },
    {
      status: true,
      name: "ASUS ROG Strix G16",
      price: 3499,
      img:
        "https://gamenotebaku.az/cdn/storage/product_images/kDP4SavZFqDvJa2C3/fullHD/kDP4SavZFqDvJa2C3.png",
    },
    {
      status: true,
      name: "ASUS ROG Strix G16",
      price: 3499,
      img:
        "https://gamenotebaku.az/cdn/storage/product_images/kDP4SavZFqDvJa2C3/fullHD/kDP4SavZFqDvJa2C3.png",
    },
    {
      name: "ASUS TUF Gaming A15",
      price: 2599,
      img:
        "https://gamenotebaku.az/cdn/storage/product_images/g3udQn3K6LNTMzd7n/fullHD/g3udQn3K6LNTMzd7n.png",
    },
    {
      name: "ASUS TUF Gaming A15",
      price: 2599,
      img:
        "https://gamenotebaku.az/cdn/storage/product_images/g3udQn3K6LNTMzd7n/fullHD/g3udQn3K6LNTMzd7n.png",
    },
    {
      name: "ASUS TUF Gaming A15",
      price: 2599,
      img:
        "https://gamenotebaku.az/cdn/storage/product_images/g3udQn3K6LNTMzd7n/fullHD/g3udQn3K6LNTMzd7n.png",
    },
    {
      name: "ASUS TUF Gaming A15",
      price: 2599,
      img:
        "https://gamenotebaku.az/cdn/storage/product_images/g3udQn3K6LNTMzd7n/fullHD/g3udQn3K6LNTMzd7n.png",
    },
    {
      status: true,
      name: "ASUS ROG Strix G16",
      price: 3499,
      img:
        "https://gamenotebaku.az/cdn/storage/product_images/kDP4SavZFqDvJa2C3/fullHD/kDP4SavZFqDvJa2C3.png",
    },
    {
      status: true,
      name: "ASUS ROG Strix G16",
      price: 3499,
      img:
        "https://gamenotebaku.az/cdn/storage/product_images/kDP4SavZFqDvJa2C3/fullHD/kDP4SavZFqDvJa2C3.png",
    },
    {
      status: true,
      name: "ASUS ROG Strix G16",
      price: 3499,
      img:
        "https://gamenotebaku.az/cdn/storage/product_images/kDP4SavZFqDvJa2C3/fullHD/kDP4SavZFqDvJa2C3.png",
    },
    {
      status: true,
      name: "ASUS ROG Strix G16",
      price: 3499,
      img:
        "https://gamenotebaku.az/cdn/storage/product_images/kDP4SavZFqDvJa2C3/fullHD/kDP4SavZFqDvJa2C3.png",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="products">
        <div className="products-container">
          <div className="products-title">
            <h1>Məhsullar</h1>
            <p>( 16 )</p>
          </div>
        </div>
        <div className="products-cards">
          {data.map((card) => {
            return (
              <div className="cards">
                <img src={card.img} alt="img" />
                <div className="info">
                  <p>{card.name}</p>
                  <p>{card.price}azn</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
