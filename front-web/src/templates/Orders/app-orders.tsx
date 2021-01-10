import HeaderOrders from "./header-orders";
import ProductsList from "./products-list";
import "./app-orders.css";
import { useEffect, useState } from "react";
import { OrderLocationdata, Product } from "../../types";
import { getProducts } from "../../api";
import OrderLocation from "./order-location";

function OrdersApp() {
  const [product, setProduct] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();
  useEffect(() => {
    getProducts()
      .then((response) => {
        return setProduct(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <>
      <main className="orders-container">
        <HeaderOrders />
        <ProductsList products={product} />
        <OrderLocation
          onChangeLocation={(location) => setOrderLocation(location)}
        />
      </main>
    </>
  );
}
export default OrdersApp;
