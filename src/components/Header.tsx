import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Zap" size={24} className="text-blue-600" />
            <span className="text-xl font-bold text-gray-900">WashMart</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/catalog"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Каталог
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              О нас
            </Link>
            <Link
              to="/delivery"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Доставка
            </Link>
            <Link
              to="/contacts"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </Link>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Войти
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Регистрация
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
