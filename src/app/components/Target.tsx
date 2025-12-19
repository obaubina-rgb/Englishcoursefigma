import { Users, Sparkles } from "lucide-react";

export function Target() {
  return (
    <section className="py-16 md:py-24 relative" style={{ backgroundColor: 'var(--navy-800)' }}>
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ backgroundColor: 'var(--yellow-500)', transform: 'translate(-50%, -50%)' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6" style={{ color: 'var(--green-500)' }} />
              <h2 className="text-3xl md:text-5xl" style={{ color: 'var(--white)' }}>Для кого курс</h2>
              <Sparkles className="w-6 h-6" style={{ color: 'var(--yellow-500)' }} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Группа 1 */}
            <div 
              className="p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border"
              style={{ 
                backgroundColor: 'var(--navy-700)',
                borderColor: 'var(--yellow-500)',
                borderWidth: '2px'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{ 
                  backgroundColor: 'var(--yellow-500)',
                  boxShadow: '0 0 20px rgba(255, 184, 0, 0.4)'
                }}>
                  <Users className="w-6 h-6" style={{ color: 'var(--navy-900)' }} />
                </div>
                <h3 className="text-2xl" style={{ color: 'var(--white)' }}>Первая группа</h3>
              </div>
              <div className="text-4xl md:text-5xl mb-2" style={{ color: 'var(--yellow-500)' }}>4–5 класс</div>
              <p className="text-sm md:text-base" style={{ color: 'var(--gray-300)' }}>
                Для младших школьников, начинающих изучать мир путешествий
              </p>
            </div>

            {/* Группа 2 */}
            <div 
              className="p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border"
              style={{ 
                backgroundColor: 'var(--navy-700)',
                borderColor: 'var(--green-500)',
                borderWidth: '2px'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{ 
                  backgroundColor: 'var(--green-500)',
                  boxShadow: '0 0 20px rgba(0, 217, 163, 0.4)'
                }}>
                  <Users className="w-6 h-6" style={{ color: 'var(--navy-900)' }} />
                </div>
                <h3 className="text-2xl" style={{ color: 'var(--white)' }}>Вторая группа</h3>
              </div>
              <div className="text-4xl md:text-5xl mb-2" style={{ color: 'var(--green-500)' }}>6–8 класс</div>
              <p className="text-sm md:text-base" style={{ color: 'var(--gray-300)' }}>
                Для подростков, готовых к более глубокому погружению
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
