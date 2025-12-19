import { MessageCircle, Users, Gamepad2, TrendingUp } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Живая речь, а не грамматика ради грамматики",
    description: "Акцент на практическую коммуникацию и реальные диалоги",
    color: "var(--yellow-500)"
  },
  {
    icon: Users,
    title: "Ситуации из реальной жизни",
    description: "Все темы взяты из опыта настоящих путешественников",
    color: "var(--green-500)"
  },
  {
    icon: Gamepad2,
    title: "Интерактивные задания",
    description: "Ролевые игры, аудиоситуации и увлекательные мини-квесты",
    color: "var(--yellow-400)"
  },
  {
    icon: TrendingUp,
    title: "Выход на уровень A2–B1",
    description: "Ребёнок достигнет уровня Pre-Intermediate за время курса",
    color: "var(--green-400)"
  }
];

export function WhySpecial() {
  return (
    <section className="py-16 md:py-24 relative" style={{ backgroundColor: 'var(--navy-800)' }}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1/2" style={{ 
          background: 'radial-gradient(circle at top left, var(--yellow-500), transparent)' 
        }}></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2" style={{ 
          background: 'radial-gradient(circle at bottom right, var(--green-500), transparent)' 
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--white)' }}>
              Почему этот курс <span style={{ color: 'var(--yellow-500)' }}>особенный</span>?
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ 
              background: 'linear-gradient(90deg, var(--yellow-500), var(--green-500))'
            }}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border"
                  style={{ 
                    backgroundColor: 'var(--navy-700)',
                    borderColor: feature.color,
                    borderWidth: '2px'
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div 
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 shadow-lg"
                      style={{ 
                        backgroundColor: feature.color,
                        boxShadow: `0 0 30px ${feature.color}40`
                      }}
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10" style={{ color: 'var(--navy-900)' }} />
                    </div>
                    <h3 className="text-xl md:text-2xl mb-3" style={{ color: 'var(--white)' }}>
                      {feature.title}
                    </h3>
                    <p className="text-base md:text-lg" style={{ color: 'var(--gray-300)' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
