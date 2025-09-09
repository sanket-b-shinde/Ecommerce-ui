import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom"; // If you're using routing
import BrandSlider from "./components/BrandSlider";

function Home() {
  const slideHeight = "360px"; // Decreased height

  // Sample categories — update image paths or URLs accordingly
  const categories = [
    { name: "Ethnic Wear", img: "https://images.meesho.com/images/marketing/1744634654837.webp", link: "/ethnic" },
    { name: "Western Dresses", img: "https://images.meesho.com/images/marketing/1744634725496.webp", link: "/western" },
    { name: "Menswear", img: "https://images.meesho.com/images/marketing/1744634780426.webp", link: "/menswear" },
    { name: "Footwear", img: "https://images.meesho.com/images/marketing/1744634814643.webp", link: "/footwear" },
    { name: "Home Decor", img: "https://images.meesho.com/images/marketing/1744634835018.webp", link: "/home-decor" },
    { name: "Beauty", img: "https://images.meesho.com/images/marketing/1744634871107.webp", link: "/beauty" },
    { name: "Accessories", img: "https://images.meesho.com/images/marketing/1744634909968.webp", link: "/accessories" },
    { name: "Grocery", img: "https://images.meesho.com/images/marketing/1744634937295.webp", link: "/grocery" },
  ];
  

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* ===== Carousel Section ===== */}
      <Carousel controls={false} indicators={true} fade={true} interval={3000} pause={false}>
        {/* Slide 1 */}
        <Carousel.Item>
          <div
            className="w-100 d-flex flex-wrap align-items-center justify-content-between"
            style={{
              background: "linear-gradient(to right, #FEE140, #FA709A)",
              height: slideHeight,
              padding: "1.5rem",
              color: "white",
              width: "100%",
            }}
          >
            {/* Left */}
            <div className="text-center text-md-start mb-3 mb-md-0" style={{ flex: "1 1 300px" }}>
              <h2
                className="fw-bold"
                style={{
                  fontSize: "2rem",
                  textShadow: "2px 2px 3px rgba(0,0,0,0.4)",
                }}
              >
                MAHA INDIAN SAVINGS SALE
              </h2>
              <div className="mt-3 px-4 py-2 bg-dark d-inline-block rounded" style={{ fontSize: "1.1rem" }}>
                8–10 SEPT
              </div>
            </div>

            {/* Right */}
            <div className="text-center" style={{ flex: "1 1 300px", fontSize: "1.5rem", fontWeight: "bold" }}>
              <div
                className="bg-info text-dark px-4 py-3 rounded shadow"
                style={{
                  display: "inline-block",
                  border: "3px solid white",
                }}
              >
                UP TO{" "}
                <span style={{ fontSize: "2.5rem", color: "#7b2cbf" }}>70%</span> OFF
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div
            className="bg-dark text-white d-flex align-items-center justify-content-center"
            style={{
              height: slideHeight,
              backgroundImage: "url('https://images.unsplash.com/photo-1589182373728-79b07e6a5b37')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "1.5rem",
              width: "100%",
            }}
          >
            <div className="bg-dark bg-opacity-50 p-4 rounded text-center w-100" style={{ maxWidth: "600px" }}>
              <h1 className="fw-bold fs-3">Welcome to Our Shop</h1>
              <p className="lead fs-6">Find the best products at unbeatable prices.</p>
              <Button variant="warning" size="md">
                Shop Now
              </Button>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              height: slideHeight,
              backgroundImage:
                "url('https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/59da67679812155c.jpg?q=60')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              padding: "1rem",
            }}
          >
            {/* Optional overlay or text goes here */}
          </div>
        </Carousel.Item>
      </Carousel>



      
{/* ===== Category Links Section ===== */}
<div className="py-4 px-2" style={{ background: "#fff" }}>
  <div
    className="category-container"
    style={{
      display: "flex",
      flexDirection: "row", // Default for mobile: horizontal scroll
      overflowX: "auto",
      overflowY: "hidden",
      gap: "1rem",
      paddingBottom: "1rem",
      scrollSnapType: "x mandatory",
    }}
  >
    {categories.map((cat, idx) => (
      <Link
        key={idx}
        to={cat.link}
        className="text-decoration-none text-center category-item"
        style={{
          width: "140px",
          flexShrink: 0,
          scrollSnapAlign: "start",
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            backgroundColor: "#fbe9f0",
            padding: "15px",
            width: "120px",
            height: "120px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={cat.img}
            alt={cat.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "50%",
            }}
          />
        </div>
        <div
          className="mt-3"
          style={{ fontSize: "1rem", fontWeight: "500", color: "#333" }}
        >
          {cat.name}
        </div>
      </Link>
    ))}
  </div>

  {/* Desktop View: Switch to vertical list */}
  <style>
    {`
      @media (min-width: 768px) {
  .category-container {
    /* Keep horizontal scroll on desktop */
    flex-direction: row !important;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 1rem;
  }

  .category-container::-webkit-scrollbar {
    height: 8px;
  }

  .category-container::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }

  .category-item {
    margin: 0 10px;
  }
}

    `}
  </style>
</div>

<BrandSlider/>

    </div>
    
  );
}

export default Home;
