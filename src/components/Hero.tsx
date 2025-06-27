import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Стиральные машины
          <span className="block text-blue-600">лучших брендов</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Широкий выбор стиральных машин Samsung, LG, Bosch, Whirlpool. Гарантия
          качества, выгодные цены и быстрая доставка.
        </p>
        <Link
          to="/catalog"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Смотреть каталог
        </Link>
      </div>
    </section>
  );
};

export default Hero;
