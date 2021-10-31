import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Placeorder from './components/Placeorder/Placeorder';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrder from './components/MyOrder/MyOrder';
import AddNewPlace from './components/AddNewPlace/AddNewPlace';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';
import Singleorder from './components/Singleorder/Singleorder';
import ManageAllOrder from './components/ManageAllOrder/ManageAllOrder';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/myorder">
              <Singleorder></Singleorder>
            </Route>
            <Route exact path="/manageallorder">
              <ManageAllOrder></ManageAllOrder>
            </Route>
            <Route exact path="/addnewplace">
              <AddNewPlace></AddNewPlace>
            </Route>
            <PrivateRoute exact path="/Placeorder/:serviceId">
              <Placeorder></Placeorder>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
