import { Link, NavLink } from 'react-router-dom'
import './Navbar.css';
export default function Navbar({ cartCount = 0, userName = null }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary sticky-top shadow-sm">
      <div className="container">
        {/* Brand / Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          
          <span className="fw-bold">Ecommerce-UI</span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          {/* Left Nav */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>
            </li>

            {/* Categories Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/categories">
                    All Categories
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink to="/orders" className="nav-link">
                Orders
              </NavLink>
            </li>
          </ul>

          {/* Search */}
          <form className="d-flex me-lg-3 my-2 my-lg-0" role="search" onSubmit={(e)=>e.preventDefault()}>
            <input
              className="form-control rounded-start-pill"
              type="search"
              placeholder="Search products"
              aria-label="Search"
            />
            <button className="btn btn-dark rounded-end-pill ms-1 " type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

          {/* Right side: Cart + User */}
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-lg-center">
            {/* Cart */}
            <li className="nav-item me-lg-2">
              <NavLink to="/cart" className="btn btn-outline-light position-relative">
                <i className="bi bi-cart3 me-1"></i>
                Cart
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                    <span className="visually-hidden">items in cart</span>
                  </span>
                )}
              </NavLink>
            </li>

            {/* User Menu */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle fs-5 me-1"></i>
                {userName ? <span>{userName}</span> : <span>Account</span>}
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                {!userName ? (
                  <>
                    <li>
                      <NavLink className="dropdown-item" to="/login">
                        <i className="bi bi-box-arrow-in-right me-2"></i>Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/signup">
                        <i className="bi bi-person-plus me-2"></i>Sign Up
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink className="dropdown-item" to="/profile">
                        <i className="bi bi-gear me-2"></i>Profile
                      </NavLink>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item" type="button">
                        <i className="bi bi-box-arrow-right me-2"></i>Logout
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
