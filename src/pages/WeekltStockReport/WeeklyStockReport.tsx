import styles from "./weeklyStockReport.module.scss";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import WeeklyStockTable from "../../components/WeeklyStockTable/WeeklyStockTable";

const WeeklyStockReport = () => {
    const weeklyStockData = [
        {
            productName: "Product A",
            openingStockQty: 100,
            soldStockQty: 20,
            balanceQty: 80,
            pricePerUnit: 10,
            totalSales: 200,
        },
        {
            productName: "Product B",
            openingStockQty: 50,
            soldStockQty: 10,
            balanceQty: 40,
            pricePerUnit: 20,
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
                    <p>Weekly Stock Summary Report</p>
                </div>
                <div className={styles.selectDate}>
                    <DatePicker
                        className={styles.datePicker}
                        onChange={onChange}
                        picker="week"
                    />
                </div>
                <WeeklyStockTable data={weeklyStockData} />
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.printButton}>Print</button>
                <button className={styles.exportButton}>Generate Excel </button>
            </div>
        </div>
    );
};

export default WeeklyStockReport;
