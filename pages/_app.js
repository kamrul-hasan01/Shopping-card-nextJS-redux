import { Provider } from "react-redux";
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
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
