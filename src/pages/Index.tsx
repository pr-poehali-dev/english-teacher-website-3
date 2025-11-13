import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
    setShowBookingForm(true);
  };

  const tariffs = [
    {
      title: "Cours d'essai",
      subtitle: "Пробный урок",
      price: "500 ₽",
      duration: "30 минут",
      features: [
        "Знакомство и определение уровня",
        "Индивидуальный план обучения",
        "Рекомендации по материалам",
        "Консультация по программе"
      ]
    },
    {
      title: "Classique",
      subtitle: "Классический",
      price: "1800 ₽",
      duration: "60 минут",
      features: [
        "Индивидуальные занятия",
        "Грамматика и лексика",
        "Разговорная практика",
        "Домашние задания",
        "Аудио материалы"
      ],
      popular: true
    },
    {
      title: "Intensif",
      subtitle: "Интенсивный",
      price: "12000 ₽",
      duration: "8 занятий",
      features: [
        "2-3 урока в неделю",
        "Погружение в язык",
        "Франкоязычные материалы",
        "Культура и традиции Франции",
        "Подготовка к DELF/DALF",
        "Поддержка 24/7"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Елена Романова",
      text: "За год занятий я смогла переехать во Францию и свободно общаться с местными жителями. Merci beaucoup за ваш профессионализм!",
      rating: 5
    },
    {
      name: "Андрей Волков",
      text: "Прекрасный преподаватель! Уроки проходят увлекательно, много живого общения. Результат заметен уже через месяц.",
      rating: 5
    },
    {
      name: "Мария Соколова",
      text: "Успешно сдала DELF B2 с первого раза! Спасибо за грамотную подготовку и поддержку на каждом этапе.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/30">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-9xl">🗼</div>
          <div className="absolute bottom-20 right-20 text-8xl">🥐</div>
          <div className="absolute top-1/3 right-1/4 text-7xl">🇫🇷</div>
        </div>
        <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Французский язык
            <br />
            <span className="text-primary">с легкостью и удовольствием</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Индивидуальные занятия для тех, кто мечтает говорить по-французски
          </p>
          <Button 
            size="lg" 
            onClick={scrollToBooking}
            className="text-lg px-8 py-6 rounded-full hover-scale shadow-lg"
          >
            Записаться на урок
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">À propos de moi</h2>
              <p className="text-sm text-muted-foreground mb-4 italic">Обо мне</p>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Bonjour! Меня зовут Анна, и я преподаю французский язык уже более 10 лет.
                </p>
                <p>
                  Я получила образование в Сорбонне и влюблена во французскую культуру, 
                  литературу и искусство. Моя цель — не просто научить вас языку, 
                  но и открыть дверь в удивительный мир Франции.
                </p>
                <p>
                  Работаю с учениками всех уровней — от A1 до C2. 
                  Готовлю к международным экзаменам DELF и DALF, 
                  помогаю с деловым французским и разговорной практикой.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Award" className="text-primary" size={24} />
                    <div>
                      <div className="font-semibold text-foreground">Диплом Сорбонны</div>
                      <div className="text-sm">Париж, Франция</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" className="text-primary" size={24} />
                    <div>
                      <div className="font-semibold text-foreground">300+ учеников</div>
                      <div className="text-sm">10 лет опыта</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="BookOpen" className="text-primary" size={24} />
                    <div>
                      <div className="font-semibold text-foreground">DELF/DALF</div>
                      <div className="text-sm">Подготовка к экзаменам</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Globe" className="text-primary" size={24} />
                    <div>
                      <div className="font-semibold text-foreground">Онлайн</div>
                      <div className="text-sm">Из любой точки мира</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in order-1 md:order-2">
              <img 
                src="https://cdn.poehali.dev/projects/7fa4c532-049a-46f4-9ead-59116f781ad2/files/fb158da6-f397-42be-bc8e-d3d273ee9d68.jpg"
                alt="Преподаватель французского языка"
                className="rounded-2xl shadow-xl w-full border-4 border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-24 px-6 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
            Tarifs
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg italic">Тарифы и цены</p>
          <div className="grid md:grid-cols-3 gap-8">
            {tariffs.map((tariff, index) => (
              <Card 
                key={index} 
                className={`hover-scale animate-fade-in border-2 relative ${
                  tariff.popular 
                    ? 'border-primary shadow-xl scale-105' 
                    : 'border-border bg-card'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Populaire
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tariff.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">{tariff.subtitle}</CardDescription>
                  <CardDescription className="text-muted-foreground">{tariff.duration}</CardDescription>
                  <div className="text-4xl font-bold text-primary pt-4">{tariff.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 rounded-full ${
                      tariff.popular ? 'shadow-lg' : ''
                    }`}
                    variant={tariff.popular ? 'default' : 'outline'}
                    onClick={scrollToBooking}
                  >
                    Choisir
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
            Témoignages
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg italic">Отзывы учеников</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover-scale animate-fade-in border-2 border-primary/20 bg-background"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={18} />
                    ))}
                  </div>
                  <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 px-6 bg-gradient-to-b from-secondary/20 via-accent/20 to-background">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
            Réservation
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-4 italic">
            Записаться на урок
          </p>
          <p className="text-center text-muted-foreground mb-12 animate-fade-in">
            Оставьте заявку, и я свяжусь с вами в течение 24 часов
          </p>
          
          {showBookingForm ? (
            <Card className="animate-scale-in border-2 border-primary/30 bg-card shadow-xl">
              <CardContent className="pt-6">
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  alert('Merci! Я свяжусь с вами в ближайшее время.');
                }}>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Ваше имя
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Телефон или Telegram
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                      placeholder="+7 или @username"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Ваш уровень французского
                    </label>
                    <select 
                      className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                    >
                      <option>A1 - Начинающий</option>
                      <option>A2 - Элементарный</option>
                      <option>B1 - Средний</option>
                      <option>B2 - Выше среднего</option>
                      <option>C1 - Продвинутый</option>
                      <option>C2 - Профессиональный</option>
                      <option>Не знаю</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Комментарий (необязательно)
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none resize-none transition-all"
                      placeholder="Расскажите о ваших целях и пожеланиях"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-full shadow-lg">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <div className="text-center animate-fade-in">
              <Button 
                size="lg" 
                onClick={() => setShowBookingForm(true)}
                className="text-lg px-8 py-6 rounded-full hover-scale shadow-lg"
              >
                Открыть форму записи
                <Icon name="ChevronDown" className="ml-2" size={20} />
              </Button>
            </div>
          )}
        </div>
      </section>

      <footer className="py-12 px-6 bg-card border-t-2 border-primary/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-2">
            © 2024 Преподаватель французского языка
          </p>
          <p className="text-sm text-muted-foreground italic mb-6">
            Avec passion pour la langue française
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Mail" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
