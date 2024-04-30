import styles from "./monthlyStockReport.module.scss";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import MonthlyStockTable from "../../components/MonthlyStockTable/MonthlyStockTable";

const MonthlystockReport = () => {
    const monthlyStockData = [
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
        {
            productName: "Product C",
            openingStockQty: 200,
            soldStockQty: 50,
            balanceQty: 150,
            pricePerUnit: 15,
            totalSales: 750,
        }
        // Add more data objects as needed
    ];

    const onChange: DatePickerProps["onChange"] = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.mainContainer}>
                <div className={styles.topContainer}>
                    <p>Monthly Stock Summary Report</p>
                </div>
                <div className={styles.selectDate}>
                    <DatePicker
                        className={styles.datePicker}
                        onChange={onChange}
                        picker="month"
                    />
                </div>
                <MonthlyStockTable data={monthlyStockData} />
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.printButton}>Print</button>
                <button className={styles.exportButton}>Generate Excel </button>
            </div>
        </div>
    );
};

export default MonthlystockReport;
