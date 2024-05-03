import styles from "./users.module.scss";
import Logo from "../../assets/Logo/logo.png";
import EditIcon from "../../assets/Icons/pen-icon.svg";
import DeleteIcon from "../../assets/Icons/delete-gray-icon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Users = () => {
    const [openModal, setOpenModal] = useState(false);


    return (
        <div className={styles.wrapper}>
              <DeleteModal open={openModal} onClose={() => setOpenModal(false)} />
            <div className={styles.mainContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.companyDetails}>
                        <img src={Logo} />
                        <p>Neil Bakery</p>
                    </div>
                    <div className={styles.userList}>
                        <div className={styles.user}>
                            <p>Admin 1</p>
                            <div className={styles.action}>
                                <button><img src={EditIcon} /></button>
                                <button onClick={() => setOpenModal(true)}><img src={DeleteIcon} /></button>
                            </div>
                        </div>
                        <div className={styles.user}>
                            <p>Admin 2</p>
                            <div className={styles.action}>
                                <button><img src={EditIcon} /></button>
                                <button onClick={() => setOpenModal(true)}><img src={DeleteIcon} /></button>
                            </div>
                        </div>
                    </div>
                    <Link to={"/add-user"}><button className={styles.addUserButton}>Add User</button></Link>
                </div>
                <div className={styles.rightContainer}>
                    <img src={Logo} />
                </div>
            </div>
            <Link to={"/"}>
                <p className={styles.backtoHome}><ArrowLeftOutlined  className={styles.icon}/>Back to Home </p>
            </Link>
        </div>
    );
};

export default Users;
