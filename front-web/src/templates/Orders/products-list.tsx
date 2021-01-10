import ProductCard from "./product-card";
import {Product} from '../../types'
type Promps = {
  products : Product[];
}

function ProductsList({products}: Promps){
  return(
    <>
      <div className="orders-list-container">
        <div className="orders-list-items">
          {products.map(
            // O map serve para manipular a lista e converter para html .
            products => (
              <ProductCard key={products.id} product={products} />
              // é obrigatório adicionar esse key sempre que estivermos interando elementos de lista. E deve ser um identificador único, por isso o uso do id.  

            ))}
        </div>
      </div>
    </>
  )
}
export default ProductsList;
