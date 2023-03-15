import { useContext, useMemo } from "react";
import Chart from "../../components/Chart/Chart";
import SocketContext from "../../contexts/socket.context";
import styles from './index.module.css'

const Dashboard = () => {
  const { blue, orange } = useContext(SocketContext).SocketState;
  const chartResult = useMemo(() => {
    return <Chart orangeClick={orange} blueClick={blue}/>
  }, [blue, orange])
  return (
    <div className={styles['wrapper']}>
      {chartResult}
    </div>
  );
};

export default Dashboard;
