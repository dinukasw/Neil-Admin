import React, { useState } from 'react';
import styles from "./menu.module.scss";
import Logo from "../../assets/Logo/logo.png";
import DashboardIcon from '../../assets/Icons/Category.svg';
import ReportsIcon from '../../assets/Icons/Filter.svg';
import ProductIcon from '../../assets/Icons/Wallet.svg';
import StockIcon from '../../assets/Icons/stock.png';
import { DownOutlined } from "@ant-design/icons";
import { NavLink } from 'react-router-dom';

const Menu: React.FC = () => {
    const [reportsDropdownOpen, setReportsDropdownOpen] = useState<boolean>(false);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState<boolean>(false);

    const toggleReportsDropdown = () => {
        setReportsDropdownOpen(!reportsDropdownOpen);
    };

    const toggleProductsDropdown = () => {
        setProductsDropdownOpen(!productsDropdownOpen);
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.logoContainer}>
                <img src={Logo} alt="Logo" />
                <p>Neil Bakery</p>
            </div>
            <div className={styles.menuContainer}>
                <p className={styles.menuTitle}>Home</p>
                <hr />
                <div className={styles.menuItem}>
                    <img src={DashboardIcon} alt="Dashboard Icon" />
                    <p>Dashboard</p>
                </div>
                <NavLink to={'/daily-stock-update'}>
                    <div className={styles.menuItem}>
                        <img src={StockIcon} alt="Dashboard Icon" />
                        <p>Daily Stock Update</p>
                    </div>
                </NavLink>
                <div className={styles.dropDownMenu}>
                    <div className={styles.dropDownMenuItem} onClick={toggleReportsDropdown}>
                        <img src={ReportsIcon} alt="Reports Icon" />
                        <p>Reports</p>
                        <DownOutlined className={styles.dropdownIcon} />
                    </div>
                    {reportsDropdownOpen && (
                        <div className={styles.dropDownContent}>
                            <ul>
                                <li>Daily Stock</li>
                                <li>Weekly Stock</li>
                                <li>Monthly Stock</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className={styles.dropDownMenu}>
                    <div className={styles.dropDownMenuItem} onClick={toggleProductsDropdown}>
                        <img src={ProductIcon} alt="Product Icon" />
                        <p>Products</p>
                        <DownOutlined className={styles.dropdownIcon} />
                    </div>
                    {productsDropdownOpen && (
                        <div className={styles.dropDownContent}>
                            <ul>
                                <NavLink to={'/products'}>
                                    <li>Product overview</li>
                                </NavLink>
                                <NavLink to={'/add-products'}>
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
