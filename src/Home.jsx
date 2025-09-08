import { Button, Carousel } from "react-bootstrap";

function Home() {
  const slideHeight = "530px";  // Fixed height for both slides

  return (
    <div>
      {/* ✅ Carousel Slider with two slides, auto-play */}
      <Carousel
        controls={false}
        indicators={true}
        fade={true}
        interval={3000}
        pause={false}
      >
        {/* Slide 1: MAHA INDIAN SAVINGS SALE Banner */}
        <Carousel.Item>
          <div
            className="w-100 d-flex flex-row align-items-center justify-content-between"
            style={{
              background: "linear-gradient(to right, #FEE140, #FA709A)",
              height: slideHeight,
              padding: "2rem",
              color: "white",
              overflowX: "auto",
            }}
          >
            {/* Left Side */}
            <div className="text-center text-md-start" style={{ flex: 1, minWidth: '300px' }}>
              <h2
                className="fw-bold"
                style={{
                  fontSize: "2.5rem",
                  textShadow: "2px 2px 3px rgba(0,0,0,0.4)",
                }}
              >
                MAHA INDIAN SAVINGS SALE
              </h2>
              <div
                className="mt-3 px-4 py-2 bg-dark d-inline-block rounded"
                style={{ fontSize: "1.25rem" }}
              >
                6–7 SEPT
              </div>
            </div>

            {/* Right Side */}
            <div
              className="text-center"
              style={{
                flex: 1,
                fontSize: "2rem",
                fontWeight: "bold",
                minWidth: '300px',
              }}
            >
              <div
                className="bg-info text-dark px-4 py-3 rounded shadow"
                style={{
                  display: "inline-block",
                  border: "4px solid white",
                }}
              >
                UP TO{" "}
                <span style={{ fontSize: "3rem", color: "#7b2cbf" }}>70%</span> OFF
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2: Welcome to Our Shop Hero */}
        <Carousel.Item>
          <div
            className="bg-dark text-white d-flex align-items-center justify-content-center"
            style={{
              height: slideHeight,
              backgroundImage:
                "url('https://images.unsplash.com/photo-1589182373728-79b07e6a5b37')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "2rem",
              overflowX: "auto",
            }}
          >
            <div
              className="bg-dark bg-opacity-50 p-5 rounded text-center"
              style={{ maxWidth: "600px", minWidth: "300px" }}
            >
              <h1 className="display-4 fw-bold">Welcome to Our Shop</h1>
              <p className="lead">Find the best products at unbeatable prices.</p>
              <Button variant="warning" size="lg">
                Shop Now
              </Button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>



  );
}

export default Home;
