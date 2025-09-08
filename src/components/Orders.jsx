import { motion } from "framer-motion";
import { Card, Button, Badge } from "react-bootstrap";
import "./Orders.css"; // <-- custom CSS

const orders = [
  {
    id: "#1001",
    product: "Wireless Headphones",
    date: "08 Sep 2025",
    status: "Delivered",
    amount: "₹8,999",
    img: "https://m.media-amazon.com/images/I/51FNnHjzhQL._UF1000,1000_QL80_.jpg",
  },
  {
    id: "#1002",
    product: "Smart Watch",
    date: "06 Sep 2025",
    status: "Shipped",
    amount: "₹12,499",
    img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500",
  },
  {
    id: "#1003",
    product: "Gaming Laptop",
    date: "01 Sep 2025",
    status: "Processing",
    amount: "₹1,05,000",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
  },
  {
    id: "#1004",
    product: "Bluetooth Speaker",
    date: "28 Aug 2025",
    status: "Delivered",
    amount: "₹4,299",
    img: "https://media.wired.com/photos/683a782e13687d4580a2c63a/4:3/w_960,c_limit/StormBox%202%20ryan%20waniata.png",
  },
  {
    id: "#1005",
    product: "DSLR Camera",
    date: "20 Aug 2025",
    status: "Shipped",
    amount: "₹58,499",
    img: "https://rvrsp.in/wp-content/uploads/2024/09/professional-dslr-camera-with-zoom-lens.jpg",
  },
  {
    id: "#1006",
    product: "Running Shoes",
    date: "15 Aug 2025",
    status: "Delivered",
    amount: "₹6,799",
    img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/5b37ad21-7e13-4eaa-b83a-e48dd57351a5/W+PEGASUS+EASYON+FP.png",
  },
];

export default function Orders() {
  return (
    <div className="orders-page py-5">
      <h2 className="fw-bold text-center text-white mb-5">My Orders</h2>
      <div className="container">
        <div className="row g-4">
          {orders.map((order, index) => (
            <motion.div
              key={order.id}
              className="col-md-6 col-lg-3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="order-card shadow-lg border-0 rounded-4 h-100">
                <Card.Img
                  variant="top"
                  src={order.img}
                  alt={order.product}
                  className="order-img"
                />
                <Card.Body>
                  <h5 className="fw-semibold">{order.product}</h5>
                  <p className="text-muted mb-1">
                    Order ID: <span className="fw-bold">{order.id}</span>
                  </p>
                  <p className="text-muted mb-1">Date: {order.date}</p>
                  <p className="fw-bold mb-2">{order.amount}</p>
                  <Badge
                    bg={
                      order.status === "Delivered"
                        ? "success"
                        : order.status === "Shipped"
                        ? "primary"
                        : "warning"
                    }
                    className="px-3 py-2 rounded-pill"
                  >
                    {order.status}
                  </Badge>
                </Card.Body>
                <Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
                  <Button className="btn-creative" size="sm">
                    View Details
                  </Button>
                  <Button className="btn-creative-dark" size="sm">
                    Track Order
                  </Button>
                </Card.Footer>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
