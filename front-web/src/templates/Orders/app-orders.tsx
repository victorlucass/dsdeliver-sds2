import { toast } from "react-toastify";
import HeaderOrders from "./header-orders";
import ProductsList from "./products-list";
import { useEffect, useState } from "react";
import { OrderLocationData, Product } from "../../types";
import { getProducts, saveOrder } from "../../api";
import OrderLocation from "./order-location";
import OrderSummary from "./order-summary";
import FooterApp from "../footer/footer-app";
import { checkIsSelected } from "./helpers";
import "./app-orders.css";


function OrdersApp() {
  const [product, setProduct] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts]=useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  useEffect(() => {
    getProducts()
    .then((response) => {
      return setProduct(response.data);
    })
    .catch((erro) => {
      console.log(erro);
    });
  }, []);
  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  },0);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);
  
    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds
    }
  
    saveOrder(payload).then((response) => {
      toast.error(`Pedido enviado com sucesso! N° ${response.data.id}`);
      setSelectedProducts([]);
    })
      .catch(() => {
        toast.warning('Erro ao listar produtos');
      })
  }

  return (
    <>
      <main className="orders-container">
        <HeaderOrders />
        <ProductsList 
          products={product}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrderLocation
          onChangeLocation={(location) => setOrderLocation(location)}
        />
        <OrderSummary 
          amount={selectedProducts.length} 
          totalPrice={totalPrice}
          onSubmit={handleSubmit}
          />
      </main>
      <FooterApp/>
    </>
  );
}
export default OrdersApp;
