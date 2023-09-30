import { useContext } from "react"
import { withAuth } from "../../../HOC/withAuth"
import styles from './Basket.module.css'
import { AuthContext } from "../../../providers/AuthProvider"
import ItemBasketDetail from "./basketDetail/ItemBasketDetail"
import { Link } from "react-router-dom"

const Basket = ()=>{
    const {user, setUser} = useContext(AuthContext)
    //опять же, axios - response.data. Но так как only React, то обойдемся 
    const dataBasket = JSON.parse(localStorage.getItem('basket'))
    return(
        <div className={styles.body}>
        <div className={styles.main}>
            {
                dataBasket ?
                dataBasket.map((item, index) => {
                    return <ItemBasketDetail key={index} item={item}/>
                })
                :
                <h1 className={styles.header_name}>
                    Ваша корзина пуста, {user.name}
                </h1>
            }
        </div>
        <Link to = "/" className={styles.linkButton}>На главную</Link>
        </div>
    )
}

export default withAuth(Basket)