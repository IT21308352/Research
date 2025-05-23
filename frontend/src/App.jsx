import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputPage from './pages/InputPage';
import ResultPage from './pages/ResultPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PaddyYieldHome from './pages/PaddyYeildHome';
import FieldPreparationPage from './pages/FieldPreparationPage';
import SeedSelectionPage from './pages/SeedSelectionPage';
import CropNurturingPage from './pages/CropNurturingPage';
import PestControlPage from './pages/PestControlPage';
import IrrigationManagementPage from './pages/IrrigationManagementPage';
import HarvestPlanningPage from './pages/HarvestPlaningPage';
import RecommendationsPage from './pages/RecommendationsPage';
import Map from './pages/Map';
import NewFarmer from './pages/NewFarmer';
import ModernLandingPage from './pages/Homepage';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PaddyYieldHome />} />
          <Route path="/home" element={<ModernLandingPage />} />
          <Route path="/input-form" element={<InputPage />} />
          <Route path="/result" element={<ResultPage />} />
          
          <Route path="/field-preparation" element={<FieldPreparationPage />} />
          <Route path="/seed-selection" element={<SeedSelectionPage />} />
          <Route path="/crop-nurturing" element={<CropNurturingPage />} />
          <Route path="/pest-control" element={<PestControlPage />} />
          <Route path="/irrigation-management" element={<IrrigationManagementPage />} />
          <Route path="/harvest-planning" element={<HarvestPlanningPage />} />
          <Route path="/recommendations" element={<RecommendationsPage />} />
          <Route path="/srilanka-map" element={<Map />} />
          <Route path="/new-farmer" element={<NewFarmer />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
