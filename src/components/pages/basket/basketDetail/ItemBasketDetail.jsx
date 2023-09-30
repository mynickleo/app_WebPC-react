import { useRef, useState } from 'react'
import styles from './ItemBasketDetail.module.css'
import ModalInfoAction from '../../Modal_react/ModalInfoAction'

const ItemBasketDetail = ({item})=>{
    const myRef = useRef()
    const refCounter = useRef()
    const [showModalInfo, setShow] = useState('')

    const removeItem = ()=>{
        let dataBasket = JSON.parse(localStorage.getItem('basket'))
        for(let i = 0; i < dataBasket.length; i++){
            if(dataBasket[i].id == item.id){
                if(dataBasket[i].count == 1){
                    dataBasket.splice(i, 1)
                    myRef.current.remove()
                }
                else{
                    dataBasket[i].count = dataBasket[i].count - 1
                    refCounter.current.textContent = 'Количество: ' + dataBasket[i].count
                }
            }
        }
        if(dataBasket.length != 0)
            localStorage.setItem('basket', JSON.stringify(dataBasket))
        else{
            localStorage.removeItem('basket')
            location.reload()
        }
    }

    const showModal = ()=>{
        setShow(true)
        setTimeout(()=> {setShow(false)}, 3000)
    }

    return(
        <div key={item.id} className={styles.item_container} ref = {myRef}>
            <div className={styles.item_picture}
            style = {{
                backgroundImage: `url(${item.image})`
            }}></div>
            <h2>{item.name}</h2>
            <p>{new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(item.price)}</p>
            <p ref = {refCounter}>Количество: {item.count}</p>
            <button className={styles.button} onClick={()=> {showModal(); removeItem()}}>Удалить</button>
            {showModalInfo && <ModalInfoAction textModal='Товар удален из корзины'/>}
        </div>
    )
}

export default ItemBasketDetail