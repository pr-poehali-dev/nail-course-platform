import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            Готовы начать карьеру мастера маникюра?
          </h2>
          <p className="text-gray-300 mb-8 font-open-sans">
            Присоединяйтесь к тысячам успешных выпускников наших курсов
          </p>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg mb-8"
          >
            Выбрать курс
          </Button>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 font-open-sans">
              © 2024 Курсы Маникюра. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
