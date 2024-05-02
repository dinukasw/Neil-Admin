import FileUpload from "../../components/FileUploader/FileUploader";
import styles from "./addProducts.module.scss";

const AddProducts: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.topContainer}>
                <p className={styles.pageTitle}>New product</p>
            </div>
            <div className={styles.middleContainer}>
                <div className={styles.inputContainer}>
                    <div className={styles.inputWrapper}>
                        <label>Product Name</label>
                        <input type="text" />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label>SKU</label>
                        <input type="text" />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label>Price</label>
                        <input type="text" />
                    </div>
                </div>
                <div className={styles.inputWrapper}>
                    <label className={styles.descriptionText}>Description</label>
                    <textarea />
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <FileUpload />
            </div>
            <button className={styles.submitButton}>Submit</button>
        </div>
    );
};

export default AddProducts;
