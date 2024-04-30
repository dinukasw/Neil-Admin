import DailyStockTable from "../../components/DailyStockTable/DailyStockTable";
import styles from "./dailyStockReport.module.scss";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";

const DailyStockReport = () => {
    const dailyStockData = [
        {
            productName: "Product A",
            openingStockQty: 100,
            soldStockQty: 20,
            balanceQty: 80,
            pricePerUnit: 10,
            totalSales: 200,
        },
        // Add more data objects as needed
    ];

    const onChange: DatePickerProps["onChange"] = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.mainContainer}>
                <div className={styles.topContainer}>
                    <p>Daily Stock Summary Report</p>
                </div>
                <div className={styles.selectDate}>
                    <DatePicker
                        className={styles.datePicker}
                        onChange={onChange}
                    />
                </div>
                <DailyStockTable data={dailyStockData} />
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.printButton}>Print</button>
                <button className={styles.exportButton}>Generate Excel </button>
            </div>
        </div>
    );
};

export default DailyStockReport;
