import ProductCard from "./product-card";
import {Product} from '../../types'
import { checkIsSelected } from "./helpers";
type Promps = {
  products : Product[];
  selectedProducts: Product[];
  onSelectProduct: (product: Product)=> void;
}

function ProductsList({products, selectedProducts, onSelectProduct}: Promps){
  return(
    <>
      <div className="orders-list-container">
        <div className="orders-list-items">
          {products.map(
            // O map serve para manipular a lista e converter para html .
            product => (
              <ProductCard 
                key={product.id} 
                product={product}
                onSelectProduct={onSelectProduct}
                isSelected={checkIsSelected(selectedProducts, product)}
              />
              // é obrigatório adicionar esse key sempre que estivermos interando elementos de lista. E deve ser um identificador único, por isso o uso do id.  

            ))}
        </div>
      </div>
    </>
  )
}
export default ProductsList;
