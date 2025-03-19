import { NavLink } from "react-router-dom";

export const Headers = () => {
    return (
        <div className="bg-gray-800 p-4 shadow-md">
            <nav className="flex justify-between items-center">
                {/* Logo Section */}
                <div className="text-white text-2xl font-bold">
                    <h1>Neer Mehta</h1>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <li className="list-none">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-green-500" : "text-white"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="list-none">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "text-green-500" : "text-white"
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="list-none">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "text-green-500" : "text-white"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li className="list-none">
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                isActive ? "text-green-500" : "text-white"
                            }
                        >
                            Cart
                        </NavLink>
                    </li>
                    <li className="list-none">
                        <NavLink
                            to="/orders"
                            className={({ isActive }) =>
                                isActive ? "text-green-500" : "text-white"
                            }
                        >
                            Order
                        </NavLink>
                    </li>
                    <li className="list-none">
                        <NavLink to="/login">
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                                Log-In
                            </button>
                        </NavLink>
                    </li>
                </div>
            </nav>
        </div>
    );
};
