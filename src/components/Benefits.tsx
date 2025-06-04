const Benefits = () => {
  const benefits = [
    {
      icon: "🎓",
      title: "Сертификат",
      description: "Получите официальный сертификат после завершения курса",
    },
    {
      icon: "📱",
      title: "Онлайн обучение",
      description: "Учитесь в удобное время из любой точки мира",
    },
    {
      icon: "👩‍🏫",
      title: "Опытные преподаватели",
      description: "Обучение от топ-мастеров с многолетним опытом",
    },
    {
      icon: "💬",
      title: "Поддержка 24/7",
      description: "Получайте ответы на вопросы в любое время",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 font-montserrat">
          Преимущества обучения
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 font-montserrat">
                {benefit.title}
              </h3>
              <p className="text-gray-600 font-open-sans">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
