import { BrowserRouter, Route, Switch } from "react-router-dom";
import FooterApp from "./templates/footer/footer-app";
import HomeApp from "./templates/home/app-home";
import NavbarApp from "./templates/navbar/app-navbar";
import OrdersApp from './templates/Orders/app-orders'
function Router(){
  return(
      <BrowserRouter>
        <NavbarApp/>
        <Switch>
          <Route path='/orders'>
            <OrdersApp />
          </Route>
          <Route path='/'>
            <HomeApp />
          </Route>
        </Switch>
        <FooterApp/>
      </BrowserRouter>  
  )
}
export default Router;