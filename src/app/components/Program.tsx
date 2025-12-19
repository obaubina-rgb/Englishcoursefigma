import { 
  Plane, 
  Hotel, 
  Utensils, 
  MapPin, 
  ShieldAlert, 
  Ticket, 
  Heart,
  Award 
} from "lucide-react";

const programItems = [
  {
    icon: Plane,
    title: "Аэропорт без стресса",
    description: "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.",
    outcome: "Уверенность уже в первые часы за границей.",
    color: "var(--yellow-500)"
  },
  {
    icon: Hotel,
    title: "В отеле: заселение и помощь",
    description: "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.",
    outcome: "Практика вежливых фраз и повседневной лексики.",
    color: "var(--green-500)"
  },
  {
    icon: Utensils,
    title: "Кафе и рестораны",
    description: "Заказ еды, вопросы про аллергены, счёт и чаевые.",
    outcome: "Развитие гастрономического словаря и уверенности в общении.",
    color: "var(--yellow-400)"
  },
  {
    icon: MapPin,
    title: "На улице: ориентирование и просьбы",
    description: "Как спросить дорогу, вызвать такси или найти аптеку.",
    outcome: "Понимание устной речи и произношения в реальных ситуациях.",
    color: "var(--green-400)"
  },
  {
    icon: ShieldAlert,
    title: "Экстренные случаи",
    description: "Потеря вещей, болезнь, помощь полиции — всё это на английском.",
    outcome: "Важные фразы, которые могут спасти отпуск.",
    color: "var(--yellow-300)"
  },
  {
    icon: Ticket,
    title: "Туризм и развлечения",
    description: "Покупка билетов, экскурсии, общение с гидами, музеи и парки.",
    outcome: "Погружение в культурный контекст через язык.",
    color: "var(--green-300)",
    forOlder: true
  },
  {
    icon: Heart,
    title: "Дружба в путешествиях",
    description: "Как познакомиться с другими детьми или подростками за границей.",
    outcome: "Игровая практика диалогов и неформального общения.",
    color: "var(--green-500)",
    forOlder: true
  },
  {
    icon: Award,
    title: "Дипломный проект: «Мой идеальный отпуск»",
    description: "Ребёнок планирует воображаемое путешествие и представляет его на английском.",
    outcome: "Развитие связной речи и творческого самовыражения.",
    color: "var(--yellow-500)",
    forOlder: true
  }
];

export function Program() {
  return (
    <section id="program" className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--navy-900)' }}>
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: 'var(--green-500)' }}></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: 'var(--yellow-500)' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--white)' }}>
              Программа курса
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'var(--gray-300)' }}>
              Практические модули для реальных жизненных ситуаций
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {programItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-opacity-20"
                  style={{ 
                    backgroundColor: 'var(--navy-800)',
                    borderColor: item.color
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ 
                        backgroundColor: item.color,
                        boxShadow: `0 0 20px ${item.color}40`
                      }}
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: 'var(--navy-900)' }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <h3 className="text-xl md:text-2xl" style={{ color: 'var(--white)' }}>
                          {index + 1}. {item.title}
                        </h3>
                        {item.forOlder && (
                          <span 
                            className="text-xs px-2 py-1 rounded-full whitespace-nowrap"
                            style={{ 
                              backgroundColor: 'var(--green-500)', 
                              color: 'var(--navy-900)' 
                            }}
                          >
                            6-8 класс
                          </span>
                        )}
                      </div>
                      <p className="mb-3" style={{ color: 'var(--gray-300)' }}>
                        {item.description}
                      </p>
                      <div 
                        className="flex items-start gap-2 text-sm"
                        style={{ color: 'var(--gray-200)' }}
                      >
                        <span className="mt-1">👉</span>
                        <span>{item.outcome}</span>
                      </div>
                    </div>
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
