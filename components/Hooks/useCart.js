import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../redux/slices/cartSlice";
import { fetchProducts } from "../../redux/slices/productSlice";

const useCart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  // user shopping cart
  const { cart } = useSelector((state) => state.cart);
  //   all products
  const { products } = useSelector((state) => state.products);

  //  total price count
  const totalPrice = cart?.reduce(
    (previous, product) => previous + product?.price * product?.quantity,
    0
  );
  // delete item from cart
  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.key !== id);
    saveDataToLocalStorage(newCart);
    dispatch(setCart(newCart));
  };
  //    save to localStorage
  const saveDataToLocalStorage = (data) => {
    const cartItem = data.map((item) => {
      return {
        key: item.key,
        quantity: item.quantity,
      };
    });
    localStorage.setItem("cart", JSON.stringify(cartItem));
  };
  const handleAddCart = (product) => {
    let exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      newCart = cart.map((item) => {
        if (item.key === product.key) {
          let newProduct = { ...item };
          newProduct.quantity = newProduct.quantity + 1;
          return newProduct;
        } else return item;
      });
    } else {
      let newProduct = { ...product };
      newProduct.quantity = 1;
      newCart = [...cart, newProduct];
    }
    saveDataToLocalStorage(newCart);
    dispatch(setCart(newCart));
  };
  //   item quantity changing  handle
  const handleQuantity = (key, type) => {
    const newCart = cart.map((item) => {
      if (item.key === key) {
        let newProduct;
        if (type === "plus" && item.quantity < item.stock) {
          newProduct = { ...item };
          newProduct.quantity = newProduct.quantity + 1;
        } else if (type === "minus" && item.quantity > 1) {
          newProduct = { ...item };

          newProduct.quantity = newProduct.quantity - 1;
        } else return item;
        return newProduct;
      } else return item;
    });
    saveDataToLocalStorage(newCart);
    dispatch(setCart(newCart ? newCart : []));
  };
  //   checkout handle
  const handleCheckout = () => {
    const confirm = window.confirm("sure");
    if (confirm) {
      dispatch(setCart([]));
      localStorage.removeItem("cart");
    }
  };

  // get data from local storage
  const getDataFromLocalStorage = () => {
    const getData = JSON.parse(localStorage.getItem("cart"));
    let newCart = [];
    if (getData) {
      products.filter((item) =>
        getData.find((local_item) => {
          let newItem;
          if (local_item.key === item.key) {
            newItem = { ...item };
            newItem.quantity = local_item.quantity;
            newCart = [...newCart, newItem];
          }
        })
      );
      dispatch(setCart(newCart));
    }
  };
  useEffect(() => {
    getDataFromLocalStorage();
  }, [products, router]);
  //  load all products if product null
  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [router, products]);
  return {
    handleDelete,
    totalPrice,
    cart,
    handleAddCart,
    handleCheckout,
    handleQuantity,
  };
};

export default useCart;
