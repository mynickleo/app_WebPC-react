import { useState } from "react"
import {rams as ramData} from './ram.data.js'
import styles from './Ram.module.css'
import { Link } from "react-router-dom";
import ItemDetail from "../item/ItemDetai.jsx";

const Ram = () => {
    const [ram_data, setRams] = useState(ramData);

    return(
        <div className={styles.main_body}>
            <div className = {styles.main}>
            {
                ram_data.length ? ram_data.map(
                    ram =>
                    <ItemDetail key = {ram.id} item = {ram}/>
                ):
                <p>There are no processors</p>
            }
            </div>
            <Link to = "/" className={styles.linkButton}>На главную</Link>
        </div>
    )
}

export default Ram