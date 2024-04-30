import styles from "./signInForm.module.scss";
import Logo from "../../assets/Logo/logo.png";

const SignInForm = () => {
    return (
        <div className={styles.formContainer}>
            <div className={styles.companyDetails}>
                <img src={Logo} />
                <p>Neil Bakery</p>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.title}>Sign In</p>
                <p className={styles.description}>Sign in to stay connected.</p>
            </div>
            <form action="" className={styles.form}>
                <div className={styles.emailConatainer}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                </div>
                <div className={styles.passwordContainer}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className={styles.forgotContainer}>
                    <div className={styles.rememberContainer}>
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me ?</label>
                    </div>
                    <a href="/forgot-password">
                        <p>Forgot Password?</p>
                    </a>
                </div>
                <button className={styles.siginButton}>
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default SignInForm;
