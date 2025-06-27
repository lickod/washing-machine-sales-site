import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Zap" size={24} className="text-blue-400" />
              <span className="text-xl font-bold">WashMart</span>
            </div>
            <p className="text-gray-400 text-sm">
              Ваш надежный партнер в выборе стиральных машин. Качество, сервис,
              доступные цены.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <div className="space-y-2">
              <Link
                to="/catalog"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Каталог
              </Link>
              <Link
                to="/about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                О компании
              </Link>
              <Link
                to="/delivery"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Доставка
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
            <div className="space-y-2">
              <Link
                to="/contacts"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Контакты
              </Link>
              <a
                href="tel:+7-800-123-45-67"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                8 (800) 123-45-67
              </a>
              <a
                href="mailto:info@washmart.ru"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                info@washmart.ru
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="MapPin" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2024 WashMart. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
