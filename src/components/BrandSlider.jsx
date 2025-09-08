import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const brands = [
  { name: "Bata", img: "https://images.meesho.com/images/marketing/1744636599446.webp" },
  { name: "WOW", img: "https://images.meesho.com/images/marketing/1743159302944.webp" },
  { name: "Mamaearth", img: "https://images.meesho.com/images/marketing/1743159322237.webp" },
  { name: "Wild Stone", img: "https://images.meesho.com/images/marketing/1743159363205.webp" },
  { name: "Plum", img: "https://images.meesho.com/images/marketing/1743159377598.webp" },
  { name: "Nivea", img: "https://images.meesho.com/images/marketing/1743159393231.webp" },
  { name: "Himalaya", img: "https://images.meesho.com/images/marketing/1743159415385.webp" },
  { name: "Mi", img: "https://images.meesho.com/images/marketing/1744636558884.webp" },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

function BrandSlider() {
  return (
    <div className="px-2 py-4" style={{ background: "#f4f0ff" }}>
      <h5 className="fw-bold mb-3 text-center">Top Brands</h5>

      {/* ====== Brand Carousel ====== */}
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={1000}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        arrows={false}
      >
        {brands.map((brand, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "10px",
              margin: "5px",
              textAlign: "center",
              boxShadow: "0 0 10px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src={brand.img}
              alt={brand.name}
              style={{ width: "100%", height: "80px", objectFit: "contain" }}
            />
          </div>
        ))}
      </Carousel>

      {/* ====== Image Below Carousel ====== */}
      <div className="mt-4 text-center">
        <img
          src="https://images.meesho.com/images/marketing/1744698265981.webp"
          alt="Banner"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        />
      </div>
    </div>
  );
}

export default BrandSlider;
