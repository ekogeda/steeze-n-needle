import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UtilityPage from './pages/UtilityPage';
import FabricListingPage from './pages/FabricListingPage';
import TailoringServicePage from './pages/TailoringServicePage';
import SellerDashboard from './components/SellerDashboard';
import TailorDashboard from './components/TailorDashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<div className='bg-gray-100'>
			<Router>
				<Header />

				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/utility' element={<UtilityPage />} />
					<Route path='/fabrics' element={<FabricListingPage />} />
					<Route path='/tailoring' element={<TailoringServicePage />} />
					<Route path='/seller-dashboard' element={<SellerDashboard />} />
					<Route path='/tailor-dashboard' element={<TailorDashboard />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;

