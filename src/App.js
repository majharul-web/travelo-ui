import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Pages/Login/Login/AuthProvider';
import Login from './Pages/Login/Login/Login';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import TopMenu from "./Pages/Shared/TopMenu/TopMenu";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute"
import Footer from './Pages/Shared/Footer/Footer';
import Packages from './Pages/Home/Packages/Packages';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <TopMenu></TopMenu>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute exact path='/packages'>
              <Packages></Packages>
            </PrivateRoute>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute exact path='/orders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
