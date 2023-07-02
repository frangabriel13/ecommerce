import ProductCard from '../productCard/ProductCard'
import style from './ProductCards.module.css'


export default function ProductCards({currentProducts}){

   
    return(
        <div className={style.container}>
            {
                currentProducts&&currentProducts.map(c=><ProductCard name={c.name} price={c.price} id={c.id} images={c.images} key={c.id}/>)
                
            }
        </div>
    )
}