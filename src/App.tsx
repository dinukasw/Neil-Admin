import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import AllProducts from "./pages/AllProducts/AllProducts";
import AddProducts from "./pages/AddProducts/AddProducts";
import DailyStockUpdate from "./pages/DailyStockUpdate/DailyStockUpdate";
import SignIn from "./pages/Signin/SignIn";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

function App() {
    const Layout = () => {
        return (
            <div className="main">
                <div className="menuContainer">
                    <Menu />
                </div>
                <div className="contentContainer">
                    <Navbar />
                    <div className="outlet">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        );
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Dashboard />,
                },
                {
                    path: "/products",
                    element: <AllProducts />,
                },
                {
                    path: "/add-products",
                    element: <AddProducts />,
                },
                {
                    path: "/daily-stock-update",
                    element: <DailyStockUpdate />,
                },
            ],
        },
        {
            path: "/signin",
            element: <SignIn />,
        },
        {
            path: "/forgot-password",
            element: <ForgotPassword />,

        }
    ]);

    return <RouterProvider router={router} />;
}

export default App;
