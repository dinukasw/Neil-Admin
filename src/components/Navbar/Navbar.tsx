import React, { useState, useRef, useEffect } from 'react';
import styles from "./navbar.module.scss";
import ProfileIcon from "../../assets/Images/profile-pic.png";
import { CaretDownOutlined } from "@ant-design/icons";

const Navbar: React.FC = () => {
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
    const [isRotated, setIsRotated] = useState<boolean>(false); // Add state for rotation
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                // Clicked outside the dropdown, close it
                setDropdownVisible(false);
                setIsRotated(false); // Reset rotation state
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
        setIsRotated(!isRotated); // Toggle rotation state
    };

    const handleSignOut = () => {
        // Handle sign out logic here
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.navContainer}>
                <div className={styles.profileContainer}>
                    <img src={ProfileIcon} alt="Profile" />
                    <div className={styles.profileInfo}>
                        <p className={styles.profileName}>Super Admin</p>
                        <p className={styles.profileRole}>ABC George Freeman</p>
                    </div>
                    <CaretDownOutlined className={`${styles.downArrow} ${isRotated ? styles.rotated : ''}`} onClick={toggleDropdown} />
                </div>
                {dropdownVisible && (
                    <div ref={dropdownRef} className={styles.dropdownContainer}>
                        <button className={styles.signoutButton} onClick={handleSignOut}>Sign Out</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
