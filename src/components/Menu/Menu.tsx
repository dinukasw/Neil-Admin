import React, { useState } from "react";
import styles from "./menu.module.scss";
import Logo from "../../assets/Logo/logo.png";
import DashboardIcon from "../../assets/Icons/Category.svg";
import ReportsIcon from "../../assets/Icons/Filter.svg";
import ProductIcon from "../../assets/Icons/Wallet.svg";
import StockIcon from "../../assets/Icons/stock.png";
import UserIcon from "../../assets/Icons/user.svg";
import { DownOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Menu: React.FC = () => {
    const [reportsDropdownOpen, setReportsDropdownOpen] =
        useState<boolean>(false);
    const [productsDropdownOpen, setProductsDropdownOpen] =
        useState<boolean>(false);
    const [locationDropdownOpen, setLocationDropdownOpen] =
        useState<boolean>(true);

    const toggleReportsDropdown = () => {
        setReportsDropdownOpen(!reportsDropdownOpen);
    };

    const toggleProductsDropdown = () => {
        setProductsDropdownOpen(!productsDropdownOpen);
    };

    const toggleLocationDropdown = () => {
        setLocationDropdownOpen(!locationDropdownOpen);
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.logoContainer}>
                <img src={Logo} alt="Logo" />
                <p>Neil Bakery</p>
            </div>
            <div className={styles.menuContainer}>
                <div className={styles.dropDownMenuTop}>
                    <div
                        className={styles.dropDownMenuItemTop}
                        onClick={toggleLocationDropdown}
                    >
                        <img
                            className={styles.userIcon}
                            src={UserIcon}
                            alt="Reports Icon"
                        />
                        <p>Locations</p>
                        <DownOutlined className={styles.dropdownIcon} />
                    </div>
                    {locationDropdownOpen && (
                        <div className={styles.dropDownContent}>
                            <ul>
                                <li>Location 1</li>
                                <li>Location 2</li>
                            </ul>
                        </div>
                    )}
                </div>
                <NavLink to={"users"}>
                    <div className={styles.menuItem}>
                        <img className={styles.userIcon} src={UserIcon} />

                        <p>Users</p>
                    </div>
                </NavLink>
                <p className={styles.menuTitle}>Home</p>
                <hr />
                <NavLink to={"/"}>
                    <div className={styles.menuItem}>
                        <img src={DashboardIcon} alt="Dashboard Icon" />
                        <p>Dashboard</p>
                    </div>
                </NavLink>
                <NavLink to={"/daily-stock-update"}>
                    <div className={styles.menuItem}>
                        <img src={StockIcon} alt="Dashboard Icon" />
                        <p>Daily Stock Update</p>
                    </div>
                </NavLink>
                <div className={styles.dropDownMenu}>
                    <div
                        className={styles.dropDownMenuItem}
                        onClick={toggleReportsDropdown}
                    >
                        <img src={ReportsIcon} alt="Reports Icon" />
                        <p>Reports</p>
                        <DownOutlined className={styles.dropdownIcon} />
                    </div>
                    {reportsDropdownOpen && (
                        <div className={styles.dropDownContent}>
                            <ul>
                                <NavLink to={"daily-stock-report"}>
                                    <li>Daily Stock</li>
                                </NavLink>
                                <NavLink to={"weekly-stock-report"}>
                                    <li>Weekly Stock</li>
                                </NavLink>
                                <NavLink to={"monthly-stock-report"}>
                                    <li>Monthly Stock</li>
                                </NavLink>
                            </ul>
                        </div>
                    )}
                </div>
                <div className={styles.dropDownMenu}>
                    <div
                        className={styles.dropDownMenuItem}
                        onClick={toggleProductsDropdown}
                    >
                        <img src={ProductIcon} alt="Product Icon" />
                        <p>Products</p>
                        <DownOutlined className={styles.dropdownIcon} />
                    </div>
                    {productsDropdownOpen && (
                        <div className={styles.dropDownContent}>
                            <ul>
                                <NavLink to={"/products"}>
                                    <li>Product overview</li>
                                </NavLink>
                                <NavLink to={"/add-products"}>
                                    <li>Add Products</li>
                                </NavLink>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Menu;
