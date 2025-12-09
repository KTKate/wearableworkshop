import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import Policies from './pages/Policies';
import Chatbot from './pages/Chatbot';
import OrgChart from './pages/OrgChart';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/org-chart" element={<OrgChart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
