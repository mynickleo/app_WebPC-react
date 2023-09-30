import { useState } from "react"
import {videocards as gpuData} from './gpu.gata.js'
import styles from './Gpu.module.css'
import { Link } from "react-router-dom";
import ItemDetail from "../item/ItemDetai.jsx";

const Gpu = () => {
    const [gpu_data, setVideocards] = useState(gpuData);

    return(
        <div className={styles.main_body}>
            <div className = {styles.main}>
            {
                gpu_data.length ? gpu_data.map(
                    gpu =>
                    <ItemDetail key = {gpu.id} item = {gpu}/>
                ):
                <p>There are no processors</p>
            }
            </div>
            <Link to = "/" className={styles.linkButton}>На главную</Link>
        </div>
    )
}

export default Gpu