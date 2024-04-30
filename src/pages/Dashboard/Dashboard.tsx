import styles from "./dashboard.module.scss";
import ProfilePic from "../../assets/Images/ProfilePIc.png";
import { Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import BasicDateCalendar from "../../components/Calender/Calender";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Dashboard = () => {
    return (
        <div className={styles.wrappper}>
            <div className={styles.mainContainer}>
                <div className={styles.topContainer}>
                    <img className={styles.profilePic} src={ProfilePic} />
                    <div className={styles.text}>
                        <p className={styles.role}>Super Admin</p>
                        <p className={styles.roleName}>- ABC George Feeman</p>
                    </div>
                    <div className={styles.links}>
                        <button>Feed</button>
                        <button>Activity</button>
                        <button>Profile</button>
                    </div>
                </div>
                <div className={styles.middleContainer}>
                    <div className={styles.chart1}>
                        <Line
                            data={{
                                labels: ["A", "B", "C", "D", "E", "F", "G"],
                                datasets: [
                                    {
                                        label: "Stock",
                                        data: [
                                            100, 200, 300, 400, 500, 600, 700,
                                        ],
                                    },
                                ],
                            }}
                            height={400}
                            width={600}
                        />
                    </div>
                </div>
                <div className={styles.bottomContainer}>
                    <div className={styles.calender}>
                        <BasicDateCalendar />
                    </div>
                    <div className={styles.chart2}>
                        <Doughnut
                            data={{
                                labels: ["A", "B"],
                                datasets: [
                                    {
                                        label: "Stock",
                                        data: [200, 300],
                                    },
                                ],
                            }}
                            height={400}
                            width={600}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
