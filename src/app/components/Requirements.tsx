import { Monitor, Headphones, Wifi } from "lucide-react";

const requirements = [
  {
    icon: Monitor,
    title: "Стационарный компьютер или ноутбук",
    description: "Для комфортного участия в онлайн-уроках",
    color: "var(--yellow-500)"
  },
  {
    icon: Headphones,
    title: "Наушники и микрофон",
    description: "Качественная гарнитура для чёткого общения",
    color: "var(--green-500)"
  },
  {
    icon: Wifi,
    title: "Стабильный интернет и Zoom",
    description: "Надёжное подключение для видеоконференций",
    color: "var(--yellow-400)"
  }
];

export function Requirements() {
  return (
    <section className="py-16 md:py-24 relative" style={{ backgroundColor: 'var(--navy-900)' }}>
      {/* Decorative gradient */}
      <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ backgroundColor: 'var(--green-500)' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--white)' }}>
              Что потребуется
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {requirements.map((req, index) => {
              const Icon = req.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border"
                  style={{ 
                    backgroundColor: 'var(--navy-800)',
                    borderColor: req.color,
                    borderWidth: '2px'
                  }}
                >
                  <div className="text-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                      style={{ 
                        backgroundColor: req.color,
                        boxShadow: `0 0 25px ${req.color}40`
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: 'var(--navy-900)' }} />
                    </div>
                    <h3 className="text-lg md:text-xl mb-2" style={{ color: 'var(--white)' }}>
                      {req.title}
                    </h3>
                    <p className="text-sm md:text-base" style={{ color: 'var(--gray-300)' }}>
                      {req.description}
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
