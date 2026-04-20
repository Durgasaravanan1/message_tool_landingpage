import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WynReachLanding from './Landing';
import Checkout from './Checkout'; // your combined checkout + thank you component
import CheckoutPage from './Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WynReachLanding />} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        {/* Add any other routes here, e.g., /dashboard, /pricing, etc. */}
      </Routes>
    </Router>
  );
}

export default App;