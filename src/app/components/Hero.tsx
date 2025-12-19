import { Plane, Globe2, Sparkles } from "lucide-react";

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--navy-900)' }}>
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--yellow-500)' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--green-500)' }}></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Plane className="w-16 h-16 md:w-24 md:h-24" style={{ color: 'var(--yellow-400)' }} />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <Globe2 className="w-20 h-20 md:w-32 md:h-32" style={{ color: 'var(--green-400)' }} />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-50">
          <Sparkles className="w-12 h-12 md:w-16 md:h-16" style={{ color: 'var(--yellow-300)' }} />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 rounded-full border-2" style={{ 
            borderColor: 'var(--yellow-500)',
            backgroundColor: 'rgba(255, 184, 0, 0.1)'
          }}>
            <span className="text-sm md:text-base uppercase tracking-wider" style={{ color: 'var(--yellow-500)' }}>
              Курс «Английский для путешествий»
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 md:mb-8" style={{ color: 'var(--white)' }}>
            Свободно <span style={{ color: 'var(--yellow-500)' }}>общайтесь</span><br />
            за <span style={{ color: 'var(--green-500)' }}>границей</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 leading-relaxed" style={{ color: 'var(--gray-300)' }}>
            Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
            Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится 
            в отпуске, поездках и будущих путешествиях!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={onCTAClick}
              className="px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg shadow-lg"
              style={{ 
                backgroundColor: 'var(--yellow-500)',
                color: 'var(--navy-900)',
                boxShadow: '0 0 30px rgba(255, 184, 0, 0.3)'
              }}
            >
              Записаться на курс
            </button>
            <a 
              href="#program" 
              className="px-8 py-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 text-lg"
              style={{ 
                borderColor: 'var(--green-500)', 
                color: 'var(--green-500)',
                backgroundColor: 'transparent'
              }}
            >
              Узнать программу
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
              <div className="text-3xl md:text-4xl mb-2" style={{ color: 'var(--yellow-500)' }}>10</div>
              <div className="text-sm md:text-base" style={{ color: 'var(--gray-300)' }}>уроков курса</div>
            </div>
            <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
              <div className="text-3xl md:text-4xl mb-2" style={{ color: 'var(--green-500)' }}>до 6</div>
              <div className="text-sm md:text-base" style={{ color: 'var(--gray-300)' }}>детей в группе</div>
            </div>
            <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
              <div className="text-3xl md:text-4xl mb-2" style={{ color: 'var(--yellow-400)' }}>A2-B1</div>
              <div className="text-sm md:text-base" style={{ color: 'var(--gray-300)' }}>уровень по итогу</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: 'var(--green-500)' }}>
          <div className="w-1 h-3 mt-2 rounded-full" style={{ backgroundColor: 'var(--green-500)' }}></div>
        </div>
      </div>
    </section>
  );
}
