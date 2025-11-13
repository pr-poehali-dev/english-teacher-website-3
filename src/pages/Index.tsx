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
      title: "Пробный урок",
      price: "500 ₽",
      duration: "30 минут",
      features: [
        "Знакомство и оценка уровня",
        "Индивидуальный план обучения",
        "Рекомендации по материалам"
      ]
    },
    {
      title: "Базовый",
      price: "1500 ₽",
      duration: "60 минут",
      features: [
        "Индивидуальные занятия",
        "Домашние задания",
        "Учебные материалы",
        "Поддержка между уроками"
      ]
    },
    {
      title: "Интенсив",
      price: "10000 ₽",
      duration: "8 занятий",
      features: [
        "2 урока в неделю",
        "Углубленная программа",
        "Разговорная практика",
        "Проверка домашних заданий",
        "Онлайн-поддержка 24/7"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "За полгода занятий я смогла уверенно общаться с коллегами из других стран. Очень благодарна за терпение и профессионализм!",
      rating: 5
    },
    {
      name: "Дмитрий Соколов",
      text: "Отличный преподаватель! Занятия проходят интересно, много практики. Заметил прогресс уже после первого месяца.",
      rating: 5
    },
    {
      name: "Елена Иванова",
      text: "Подготовка к собеседованию прошла на высшем уровне. Получила работу мечты! Спасибо за помощь!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Английский язык
            <br />
            <span className="text-primary">с удовольствием</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Индивидуальные занятия для тех, кто хочет говорить свободно и уверенно
          </p>
          <Button 
            size="lg" 
            onClick={scrollToBooking}
            className="text-lg px-8 py-6 rounded-full hover-scale"
          >
            Записаться на урок
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/7fa4c532-049a-46f4-9ead-59116f781ad2/files/b1586a7d-dbbb-49cd-88e0-1ab933908011.jpg"
                alt="Преподаватель английского языка"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Обо мне</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Привет! Меня зовут Мария, и я преподаю английский язык уже более 8 лет.
                </p>
                <p>
                  Моя специализация — разговорный английский и подготовка к международным экзаменам. 
                  Я помогу вам преодолеть языковой барьер и начать говорить свободно.
                </p>
                <p>
                  Работаю с учениками всех уровней — от начинающих до продвинутых. 
                  Каждая программа составляется индивидуально под ваши цели и интересы.
                </p>
                <div className="flex gap-6 pt-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Award" className="text-primary" size={24} />
                    <span className="font-semibold">CELTA сертификат</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" className="text-primary" size={24} />
                    <span className="font-semibold">200+ учеников</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-24 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground animate-fade-in">
            Тарифы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tariffs.map((tariff, index) => (
              <Card 
                key={index} 
                className="hover-scale animate-fade-in border-border bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{tariff.title}</CardTitle>
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
                    className="w-full mt-6 rounded-full" 
                    onClick={scrollToBooking}
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground animate-fade-in">
            Отзывы учеников
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover-scale animate-fade-in border-border bg-background"
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

      <section id="booking" className="py-24 px-6 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground animate-fade-in">
            Записаться на урок
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 animate-fade-in">
            Оставьте заявку, и я свяжусь с вами в течение 24 часов
          </p>
          
          {showBookingForm ? (
            <Card className="animate-scale-in border-border bg-card">
              <CardContent className="pt-6">
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  alert('Спасибо за заявку! Я свяжусь с вами в ближайшее время.');
                }}>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Ваше имя
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
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
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                      placeholder="+7 или @username"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Ваш уровень английского
                    </label>
                    <select 
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                    >
                      <option>Начинающий (Beginner)</option>
                      <option>Элементарный (Elementary)</option>
                      <option>Ниже среднего (Pre-Intermediate)</option>
                      <option>Средний (Intermediate)</option>
                      <option>Выше среднего (Upper-Intermediate)</option>
                      <option>Продвинутый (Advanced)</option>
                      <option>Не знаю</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Комментарий (необязательно)
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                      placeholder="Расскажите о ваших целях и пожеланиях"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-full">
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
                className="text-lg px-8 py-6 rounded-full hover-scale"
              >
                Открыть форму записи
                <Icon name="ChevronDown" className="ml-2" size={20} />
              </Button>
            </div>
          )}
        </div>
      </section>

      <footer className="py-12 px-6 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Преподаватель английского языка. Все права защищены.
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
