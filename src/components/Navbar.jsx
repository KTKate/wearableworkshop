import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            {/* Logo Placeholder - Replace with actual logo */}
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xs">LOGO</span>
            </div>
            <span className="text-2xl font-bold">[COMPANY_NAME]</span>
          </Link>
          <div className="flex space-x-6">
            <Link
              to="/"
              className="hover:bg-blue-700 px-3 py-2 rounded-md transition-colors"
            >
              Home
            </Link>
            <Link
              to="/onboarding"
              className="hover:bg-blue-700 px-3 py-2 rounded-md transition-colors"
            >
              Onboarding
            </Link>
            <Link
              to="/policies"
              className="hover:bg-blue-700 px-3 py-2 rounded-md transition-colors"
            >
              Policies
            </Link>
            <Link
              to="/chatbot"
              className="hover:bg-blue-700 px-3 py-2 rounded-md transition-colors"
            >
              HR Chatbot
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
