import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section 
      id="cta-section" 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, var(--navy-800) 0%, var(--navy-900) 100%)'
      }}
    >
      {/* Decorative elements with glow */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ 
        backgroundColor: 'var(--yellow-500)',
        transform: 'translate(-30%, -30%)'
      }}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ 
        backgroundColor: 'var(--green-500)',
        transform: 'translate(30%, 30%)'
      }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ 
        backgroundColor: 'var(--yellow-400)',
        transform: 'translate(-50%, -50%)'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6" style={{ color: 'var(--white)' }}>
            Готовы <span style={{ color: 'var(--yellow-500)' }}>начать</span>?
          </h2>
          <p className="text-lg md:text-2xl mb-8 md:mb-12" style={{ color: 'var(--gray-300)' }}>
            Запишитесь сейчас — и следующее путешествие станет первым, 
            где ваш ребёнок заговорит по-английски <span style={{ color: 'var(--green-500)' }}>без страха</span>!
          </p>

          {/* CTA Button */}
          <button 
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl text-xl md:text-2xl transition-all duration-300 hover:scale-110 mb-12 shadow-2xl"
            style={{ 
              background: 'linear-gradient(135deg, var(--yellow-500) 0%, var(--yellow-400) 100%)',
              color: 'var(--navy-900)',
              boxShadow: '0 0 40px rgba(255, 184, 0, 0.5)'
            }}
            onClick={() => window.alert('Спасибо за интерес! Для записи на курс свяжитесь с нами по контактам ниже.')}
          >
            Записаться на курс
            <ArrowRight className="w-6 h-6 md:w-7 md:h-7" />
          </button>

          {/* Contact options */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a 
              href="mailto:info@example.com"
              className="flex flex-col items-center gap-2 p-6 rounded-xl transition-all duration-300 hover:scale-105 border shadow-lg"
              style={{ 
                backgroundColor: 'var(--navy-700)',
                borderColor: 'var(--yellow-500)',
                borderWidth: '2px'
              }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ 
                backgroundColor: 'var(--yellow-500)',
                boxShadow: '0 0 20px rgba(255, 184, 0, 0.4)'
              }}>
                <Mail className="w-6 h-6" style={{ color: 'var(--navy-900)' }} />
              </div>
              <span style={{ color: 'var(--white)' }}>Email</span>
              <span className="text-sm" style={{ color: 'var(--gray-300)' }}>info@example.com</span>
            </a>
            
            <a 
              href="tel:+79999999999"
              className="flex flex-col items-center gap-2 p-6 rounded-xl transition-all duration-300 hover:scale-105 border shadow-lg"
              style={{ 
                backgroundColor: 'var(--navy-700)',
                borderColor: 'var(--green-500)',
                borderWidth: '2px'
              }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ 
                backgroundColor: 'var(--green-500)',
                boxShadow: '0 0 20px rgba(0, 217, 163, 0.4)'
              }}>
                <Phone className="w-6 h-6" style={{ color: 'var(--navy-900)' }} />
              </div>
              <span style={{ color: 'var(--white)' }}>Телефон</span>
              <span className="text-sm" style={{ color: 'var(--gray-300)' }}>+7 (999) 999-99-99</span>
            </a>
            
            <a 
              href="https://t.me/example"
              className="flex flex-col items-center gap-2 p-6 rounded-xl transition-all duration-300 hover:scale-105 border shadow-lg"
              style={{ 
                backgroundColor: 'var(--navy-700)',
                borderColor: 'var(--yellow-400)',
                borderWidth: '2px'
              }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ 
                backgroundColor: 'var(--yellow-400)',
                boxShadow: '0 0 20px rgba(255, 201, 51, 0.4)'
              }}>
                <MessageCircle className="w-6 h-6" style={{ color: 'var(--navy-900)' }} />
              </div>
              <span style={{ color: 'var(--white)' }}>Telegram</span>
              <span className="text-sm" style={{ color: 'var(--gray-300)' }}>@example</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 mt-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center pt-8" style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <p className="text-sm" style={{ color: 'var(--gray-300)' }}>
            © 2024 Английский для путешествий. Все права защищены.
          </p>
        </div>
      </div>
    </section>
  );
}
