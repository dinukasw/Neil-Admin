import styles from "./resetPassword.module.scss";
import Logo from "../../assets/Logo/logo.png";

const ResetPassword = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.mainContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.companyDetails}>
                        <img src={Logo} />
                        <p>Neil Bakery</p>
                    </div>
                    <div className={styles.formContainer}>
                        <div className={styles.textContainer}>
                            <p className={styles.title}>Enter New Password</p>
                            <p className={styles.description}>
                                Enter your new password and confirm it to reset your password
                            </p>
                        </div>
                        <form action="" className={styles.form}>
                            <div className={styles.emailConatainer}>
                                <label htmlFor="">New Password</label>
                                <input type="" id="" />
                            </div>
                            <div className={styles.emailConatainer}>
                                <label htmlFor="email">Confirm new passowrd</label>
                                <input type="" id="" />
                            </div>
                            <button className={styles.resetButton}>
                                Reset
                            </button>
                        </form>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <img src={Logo} />
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
