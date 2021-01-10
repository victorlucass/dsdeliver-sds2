import HeaderOrders from "./header-orders";
import ProductsList from "./products-list";
import './app-orders.css'
import { useEffect } from "react";

function OrdersApp(){

  useEffect(() => {
    
  },[]);

  return(
    <>
     <main className='orders-container'>
       <HeaderOrders/>
       <ProductsList/>
     </main>
    </>
  )
}
export default OrdersApp;