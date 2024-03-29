import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <nav className="navbar navbar-expand-lg bg-light p-4 shadow">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">React Routing</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="services">Services</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className="container p-5 m-5">
                <Outlet></Outlet>
            </main>

            <footer className="bg-light text-center p-4 mt-auto">
                <p>Copyright © 2024 Developed by Ferangelo Tuason. All rights reserved.</p>
            </footer>
        </div>
        
    );
}