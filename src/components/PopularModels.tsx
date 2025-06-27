import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const models = [
  {
    id: 1,
    brand: "Samsung",
    model: "WW60J3080LW",
    image:
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=300&h=300&fit=crop&crop=center",
    price: "25 990",
    capacity: "6 кг",
    rpm: "1000 об/мин",
    rating: 4.5,
  },
  {
    id: 2,
    brand: "LG",
    model: "F2J5HS4W",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&crop=center",
    price: "32 590",
    capacity: "7 кг",
    rpm: "1200 об/мин",
    rating: 4.7,
  },
  {
    id: 3,
    brand: "Bosch",
    model: "WLG20260OE",
    image:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300&h=300&fit=crop&crop=center",
    price: "28 490",
    capacity: "5 кг",
    rpm: "1000 об/мин",
    rating: 4.6,
  },
];

const PopularModels = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Популярные модели
          </h2>
          <p className="text-lg text-gray-600">
            Топ-3 самых продаваемых стиральных машин
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model) => (
            <div
              key={model.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square">
                <img
                  src={model.image}
                  alt={`${model.brand} ${model.model}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {model.brand}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Icon
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                    <span className="text-sm text-gray-600">
                      {model.rating}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{model.model}</p>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Загрузка:</span>
                    <span>{model.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Отжим:</span>
                    <span>{model.rpm}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">
                    {model.price} ₽
                  </div>
                  <Link
                    to="/catalog"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularModels;
