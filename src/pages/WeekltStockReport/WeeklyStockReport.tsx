import styles from "./weeklyStockReport.module.scss";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import WeeklyStockTable from "../../components/WeeklyStockTable/WeeklyStockTable";
import {useEffect, useState} from "react";

const WeeklyStockReport = () => {
    const [stocks, setStocks] = useState([]);
    const [date, setDate] = useState<string>();

    useEffect(() => {
        if(!(date===undefined || date === '' || date === null)){
            fetch(`http://localhost:3000/report/weekly/662fcea5b132c05a8b41653e/${date}`)
                .then((result) => {
                    return result.json();
                })
                .then((jsonData) => {
                    setStocks(jsonData.data);
                });
        }
    }, [date]);
    const onChange: DatePickerProps["onChange"] = (_date, dateString) => {
        setDate(dateString.toString())
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
                <WeeklyStockTable data={stocks} />
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.printButton}>Print</button>
                <button className={styles.exportButton}>Generate Excel </button>
            </div>
        </div>
    );
};

export default WeeklyStockReport;
