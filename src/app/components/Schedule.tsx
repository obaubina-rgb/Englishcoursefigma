import { Calendar, Clock } from "lucide-react";

const scheduleItems = [
  {
    day: "Четверг",
    time: "15:00 (МСК)",
    group: "группа 4–5 класс",
    color: "var(--yellow-500)"
  },
  {
    day: "Пятница",
    time: "15:30 (МСК)",
    group: "группа 6–8 класс",
    color: "var(--green-500)"
  }
];

export function Schedule() {
  return (
    <section className="py-16 md:py-24 relative" style={{ backgroundColor: 'var(--navy-800)' }}>
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full blur-3xl opacity-10" style={{ 
        backgroundColor: 'var(--yellow-500)',
        transform: 'translateY(-50%)'
      }}></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full blur-3xl opacity-10" style={{ 
        backgroundColor: 'var(--green-500)',
        transform: 'translateY(-50%)'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Clock className="w-8 h-8" style={{ color: 'var(--yellow-500)' }} />
              <h2 className="text-3xl md:text-5xl" style={{ color: 'var(--white)' }}>
                Расписание
              </h2>
              <Clock className="w-8 h-8" style={{ color: 'var(--green-500)' }} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {scheduleItems.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border"
                style={{ 
                  backgroundColor: 'var(--navy-700)',
                  borderColor: item.color,
                  borderWidth: '2px'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6" style={{ color: item.color }} />
                  <h3 className="text-2xl md:text-3xl" style={{ color: 'var(--white)' }}>
                    {item.day}
                  </h3>
                </div>
                <div className="mb-4">
                  <div className="text-3xl md:text-4xl" style={{ color: item.color }}>
                    {item.time}
                  </div>
                </div>
                <div 
                  className="inline-block px-4 py-2 rounded-full text-sm md:text-base shadow-lg"
                  style={{ 
                    backgroundColor: item.color,
                    color: 'var(--navy-900)',
                    boxShadow: `0 0 20px ${item.color}40`
                  }}
                >
                  {item.group}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
