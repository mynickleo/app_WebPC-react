import { useState } from "react"
import {processors as cpuData} from './cpu.data.js'
import styles from './Cpu.module.css'
import { Link } from "react-router-dom";
import ItemDetail from "../item/ItemDetai.jsx";

const Cpu = () => {
    const [cpu_data, setProccesors] = useState(cpuData);

    return(
        <div className={styles.main_body}>
            <div className = {styles.main}>
            {
                cpu_data.length ? cpu_data.map(
                    cpu =>
                    <ItemDetail key = {cpu.id} item = {cpu}/>
                ):
                <p>There are no processors</p>
            }
            </div>
            <Link to = "/" className={styles.linkButton}>На главную</Link>
        </div>
    )
}

export default Cpu