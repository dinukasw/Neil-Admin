import styles from "./navbar.module.scss";
import NotificationIcon from "../../assets/Icons/Message.svg";
import MessageIcon from "../../assets/Icons/Notification.svg";
import ProfileIcon from "../../assets/Images/profile-pic.png";
import {useEffect, useState} from "react";

const Navbar = () => {

    const [user, setUser] = useState<any>({});

    useEffect(() => {
        fetch("http://localhost:3000/temporary/user", {credentials: 'include'})
            .then((result) => {
                return result.json();
            })
            .then((jsonData) => {
                console.log(JSON.stringify(jsonData.data));
                setUser(jsonData.data);
            });
    }, []);
    return (
        <div className={styles.wrapper}>
            <div className={styles.navContainer}>
                <img src={MessageIcon} />
                <img src={NotificationIcon} />
                <div className={styles.profileContainer}>
                    <img src={ProfileIcon} />
                    <div className={styles.profileInfo}>
                        <p className={styles.profileName}>{user.username}</p>
                        <p className={styles.profileRole}>{user.isSuperAdmin?'Super Admin': 'Admin'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
