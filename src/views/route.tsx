import Home from './Home'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Login from './Login'
import Signup from './Signup'
import Fruits from './Products/Fruits'
import Greens from './Products/Greens'
import Vegetables from './Products/Vegetables'
import Cart from './Cart'
import Checkout from './Checkout'
import Others from './Products/Others'
import Product from './Products/Product'
import Confirmation from './Confirmation'

const Routes = [
      {
        path: "/",
        element: <Home />,
        private: false
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
        private: false
      },
      {
        path: "/contact",
        element: <Contact />,
        private: false
      },
      {
        path: "/login",
        element: <Login />,
        private: false
      },
      {
        path: "/signup",
        element: <Signup />,
        private: false
      },
      {
        path: "/products/fruits",
        element: <Fruits />,
        private: false
      },
      {
        path: "/products/greens",
        element: <Greens />,
        private: false
      },
      {
        path: "/products/vegetables",
        element: <Vegetables />,
        private: false
      },
      {
        path: "/products/others",
        element: <Others />,
        private: false
      },
      {
        path: "/checkout",
        element: <Checkout />,
        private: false
      },
      {
        path: "/cart",
        element: <Cart />,
        private: false
      },
      {
        path: "/myaccount",
        element: "",
        private: false
      },
      {
        path: "/product/:id",
        element: <Product />,
        private: false
      },
      {
        path: "/checkout/confirmation",
        element: <Confirmation />,
        private: false
      },
]

export const ViewRoutes = Routes