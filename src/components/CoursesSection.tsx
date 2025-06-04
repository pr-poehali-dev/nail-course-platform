import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const courses = [
    {
      title: "Базовый курс по маникюру",
      description:
        "Изучите основы маникюра: подготовка ногтей, обработка кутикулы, нанесение покрытия. Идеально для начинающих мастеров.",
      price: "15 990 ₽",
      duration: "4 недели",
      level: "Начальный",
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title: "Курс верхние формы",
      description:
        "Освойте создание идеальных форм ногтей: квадрат, овал, миндаль. Профессиональные техники моделирования.",
      price: "12 990 ₽",
      duration: "3 недели",
      level: "Средний",
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      title: "Курс френч",
      description:
        "Мастерство французского маникюра: классический и современный френч, цветные вариации, безупречная техника.",
      price: "9 990 ₽",
      duration: "2 недели",
      level: "Средний",
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      title: "Классификация верхних форм",
      description:
        "Глубокое изучение всех видов форм ногтей, анатомические особенности, подбор формы под тип руки клиента.",
      price: "7 990 ₽",
      duration: "2 недели",
      level: "Продвинутый",
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 font-montserrat">
          Наши курсы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
