import StockTable from "../../components/StockTable/StockTable";
import styles from "./dailyStockUpdate.module.scss";

const tableData = [
    {
        product: "Product 1",
        availableStock: 100,
        remainingStock: 50,
        soldUnits: 50,
        pricePerUnit: 100,
        totalSales: 5000,
    },
];

const DailyStockUpdate = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.mainContainer}>
                <div className={styles.topContainer}>
                    <p>Daily Stock Update</p>
                </div>
                <div className={styles.middleContainer}>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="">Select product</label>
                        <select name="" id="">
                            <option value="">Select product</option>
                        </select>
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="">Select Date</label>
                        <input type="date" />
                    </div>
                    <br />
                    <div className={styles.inputWrapper}>
                        <label htmlFor="">Available stock</label>
                        <input type="number" />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="">Remaining stock</label>
                        <input type="number" />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="">Sold units</label>
                        <input type="number" />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="">Price per unit</label>
                        <input type="number" />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="">Total sales</label>
                        <input type="number" />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="">Cost of remaining stock</label>
                        <input type="number" />
                    </div>
                </div>
                <button className={styles.addButton}>Add</button>
                <StockTable data={tableData} />
            </div>
            <button className={styles.submitButton}>Submit</button>
        </div>
    );
};

export default DailyStockUpdate;
