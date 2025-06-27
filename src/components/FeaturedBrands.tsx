const brands = [
  {
    name: "Samsung",
    logo: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=150&h=80&fit=crop&crop=center",
    description: "Инновационные технологии стирки",
  },
  {
    name: "LG",
    logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=150&h=80&fit=crop&crop=center",
    description: "Надежность и эффективность",
  },
  {
    name: "Bosch",
    logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=80&fit=crop&crop=center",
    description: "Немецкое качество",
  },
  {
    name: "Whirlpool",
    logo: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=150&h=80&fit=crop&crop=center",
    description: "Проверенный временем бренд",
  },
];

const FeaturedBrands = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Популярные бренды
          </h2>
          <p className="text-lg text-gray-600">
            Работаем только с проверенными производителями
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow bg-gray-50"
            >
              <div className="mb-4">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-20 h-12 mx-auto object-contain rounded"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {brand.name}
              </h3>
              <p className="text-sm text-gray-600">{brand.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
