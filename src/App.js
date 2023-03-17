import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col">
        <Header />
        <div className="container py-8 mx-auto px-36 min-h-screen">
          <Outlet />
        </div>
        <Footer className="self-end	" />
      </div>
    </Provider>
  );
}

export default App;
