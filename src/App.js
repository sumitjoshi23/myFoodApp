import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import FixedSideBars from './components/FixedSideBars';

function App() {
  return (
    <Provider store={store}>
      <ScrollToTop />
      <div className="flex flex-col">
        <Header />
        <div className="container py-5 mx-auto px-30 min-h-screen">
          <Outlet />
        </div>
        <Footer />
        <FixedSideBars />
      </div>
    </Provider>
  );
}

export default App;
