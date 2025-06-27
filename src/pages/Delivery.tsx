import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Delivery = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Доставка</h1>
        <div className="text-center py-20">
          <p className="text-xl text-gray-600">
            Информация о доставке в разработке...
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Delivery;
