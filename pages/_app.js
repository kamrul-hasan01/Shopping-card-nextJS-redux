import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardLayout from "../components/Layout/Dashboard/DashboardLayout";
import Header from "../components/Layout/Head/Head";
import PublicLayout from "../components/Layout/Public/PublicLayout";
import { store } from "../redux/store";
import "../styles/globals.css";
const layoutList = {
  dashboard: DashboardLayout,
  PublicLayout: PublicLayout,
};
export default function App({ Component, pageProps }) {
  console.log(Component.layout);
  const Layout = layoutList[Component.layout] || PublicLayout;
  return (
    <Provider store={store}>
      <Header />
      <Layout>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
