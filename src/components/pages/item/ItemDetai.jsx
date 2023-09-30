import { useState } from 'react';
import ModalInfoAction from '../Modal_react/ModalInfoAction';
import styles from './ItemDetail.module.css'

const ItemDetail = ({item})=>{

    const [showModalInfo, setShow] = useState('')
    
    const buyItem = ()=>{
        let items = JSON.parse(localStorage.getItem('basket'))
        if(items){
            let counter_update = false;
            items.map((itemData)=>{
                if(itemData.id == item.id){
                    itemData.count = itemData.count+1
                    counter_update = true;
                }
            })
            if(!counter_update){
                items.push({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    count: 1
                })
            }
            localStorage.setItem('basket', JSON.stringify(items))
        }
        else{
            items = []
            items.push({
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                count: 1
            })
            localStorage.setItem('basket', JSON.stringify(items))
        }
    }

    const showModal = ()=>{
        setShow(true)
        setTimeout(()=> {setShow(false)}, 3000)
    }

    return(
        <div key={item.id} className={styles.item_container}>
            <div className={styles.item_picture}
            style = {{
                backgroundImage: `url(${item.image})`
            }}></div>
            <h2>{item.name}</h2>
            <p>{new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(item.price)}</p>
            <button className={styles.button} onClick={()=> {showModal(), buyItem()}}>В корзину</button>
            {showModalInfo && <ModalInfoAction textModal='Товар успешно добавлен в корзину'/>}
        </div>
    )
}

export default ItemDetail