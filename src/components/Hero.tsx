import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-purple-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 font-montserrat">
          Профессиональные курсы маникюра
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-open-sans">
          Освойте искусство маникюра с нашими онлайн-курсами. От базовых навыков
          до продвинутых техник — станьте мастером своего дела
        </p>
        <Button
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
        >
          Начать обучение 💅
        </Button>
      </div>
    </section>
  );
};

export default Hero;
