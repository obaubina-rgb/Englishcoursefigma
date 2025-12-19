import { Check, Tag, TrendingUp } from "lucide-react";

const pricingOptions = [
  {
    title: "Полный курс",
    price: "12 000 ₽",
    description: "10 уроков",
    features: [
      "Все модули программы",
      "Дипломный проект",
      "Сертификат об окончании",
      "Экономия 1 000 ₽"
    ],
    color: "var(--yellow-500)",
    recommended: true
  },
  {
    title: "Абонемент",
    price: "1 300 ₽",
    description: "за 1 урок",
    features: [
      "Гибкость оплаты",
      "Попробуйте курс",
      "Без обязательств",
      "Оплата по уроку"
    ],
    color: "var(--green-500)",
    recommended: false
  }
];

export function Pricing() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--navy-900)' }}>
      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: 'var(--yellow-500)' }}></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: 'var(--green-500)' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Tag className="w-8 h-8" style={{ color: 'var(--green-500)' }} />
              <h2 className="text-3xl md:text-5xl" style={{ color: 'var(--white)' }}>
                Стоимость
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {pricingOptions.map((option, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 relative border ${
                  option.recommended ? 'scale-105' : ''
                }`}
                style={{ 
                  backgroundColor: 'var(--navy-800)',
                  borderColor: option.color,
                  borderWidth: option.recommended ? '3px' : '2px',
                  boxShadow: option.recommended ? `0 0 40px ${option.color}30` : 'none'
                }}
              >
                {option.recommended && (
                  <div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm flex items-center gap-1 shadow-lg"
                    style={{ 
                      backgroundColor: option.color,
                      color: 'var(--navy-900)',
                      boxShadow: `0 0 20px ${option.color}60`
                    }}
                  >
                    <TrendingUp className="w-4 h-4" />
                    Рекомендуем
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl mb-2" style={{ color: 'var(--white)' }}>
                    {option.title}
                  </h3>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-4xl md:text-5xl" style={{ color: option.color }}>
                      {option.price}
                    </span>
                  </div>
                  <p className="text-sm md:text-base" style={{ color: 'var(--gray-300)' }}>
                    {option.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: option.color }}
                      >
                        <Check className="w-3 h-3" style={{ color: 'var(--navy-900)' }} />
                      </div>
                      <span style={{ color: 'var(--white)' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div 
            className="mt-12 p-6 rounded-xl text-center border shadow-xl"
            style={{ 
              backgroundColor: 'var(--navy-700)',
              borderColor: 'var(--green-500)',
              borderWidth: '2px',
              boxShadow: '0 0 30px rgba(0, 217, 163, 0.2)'
            }}
          >
            <p className="text-lg md:text-xl" style={{ color: 'var(--white)' }}>
              <strong style={{ color: 'var(--yellow-500)' }}>Набор открыт!</strong> Группы маленькие — максимум 6 детей, чтобы каждый получил внимание. 
              <span className="block mt-2" style={{ color: 'var(--green-500)' }}>Места ограничены!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
