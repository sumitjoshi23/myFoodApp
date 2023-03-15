import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="container mx-auto px-36 ">
        <div className="border border-slate-150 px-8 pb-8">
          <Outlet />
        </div>
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
