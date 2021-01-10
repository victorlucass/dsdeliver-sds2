import ProductCard from "./product-card";


function ProductsList(){
  return(
    <>
      <div className="orders-list-container">
        <div className="orders-list-items">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </>
  )
}
export default ProductsList;
