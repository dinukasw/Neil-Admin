import styles from "./navbar.module.scss";
import NotificationIcon from "../../assets/Icons/Message.svg";
import MessageIcon from "../../assets/Icons/Notification.svg";
import ProfileIcon from "../../assets/Images/profile-pic.png";

const Navbar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.navContainer}>
                <img src={MessageIcon} />
                <img src={NotificationIcon} />
                <div className={styles.profileContainer}>
                    <img src={ProfileIcon} />
                    <div className={styles.profileInfo}>
                        <p className={styles.profileName}>Super Admin</p>
                        <p className={styles.profileRole}>ABC George Freeman</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
