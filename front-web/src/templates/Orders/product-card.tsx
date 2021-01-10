import { ReactComponent as Pizza } from '../Orders/pizza.svg';
function ProductCard(){
  return (
    <>
      <div className="order-card-container">
        <h3 className="order-card-title">
          Pizza Calabresa
        </h3>
        < Pizza className='order-card-image' />
        <h3 className='order-card-price'>
          R$
        </h3>
        <div className="order-card-description">
          <h3>Descrição</h3>
          <p>
            Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial.
          </p>
        </div>
      </div>
    </>
  )
}
export default ProductCard;