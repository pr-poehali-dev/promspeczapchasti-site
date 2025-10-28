import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const addresses = [
    {
      title: "Юридический адрес",
      address: "г. Краснодар, Плановый проезд, д. 9",
      coords: [45.0448, 38.9760]
    },
    {
      title: "Магазин-склад",
      address: "г. Краснодар, ул. Придорожная, д. 45",
      coords: [45.0355, 38.9746]
    },
    {
      title: "Ремонтная база-склад",
      address: "г. Краснодар, ул. Круговая, д. 24/10",
      coords: [45.0401, 39.0403]
    }
  ];

  const brands = [
    "John Deere", "Hidromek", "JCB", "Manitou", "Caterpillar", 
    "Case", "Sennebogen", "Terex", "Bobcat", "Komatsu", 
    "Hitachi", "Volvo", "New Holland", "Sany", "Lovol", 
    "Fucks", "Liebherr", "Hyundai", "Кировец"
  ];

  const services = [
    { icon: "Wrench", text: "Техническое обслуживание" },
    { icon: "Search", text: "Диагностика оборудования" },
    { icon: "Settings", text: "Ремонт всех видов техники" },
    { icon: "Package", text: "Поставка оригинальных запчастей" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-primary">
                ООО "ПРОМСПЕЦЗАПЧАСТЬ"
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Поставка запчастей и ремонт спецтехники
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 text-sm">
              {addresses.map((location, index) => (
                <a 
                  key={index}
                  href={`https://yandex.ru/maps/?text=${encodeURIComponent(location.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Icon name="MapPin" size={16} className="flex-shrink-0 group-hover:text-accent" />
                  <span className="text-xs hidden xl:inline">{location.title}:</span>
                  <span className="underline decoration-dotted">{location.address}</span>
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg"
                asChild
              >
                <a href="tel:+79890111000">
                  <Icon name="Phone" className="mr-2" size={20} />
                  +7 989 0 111 000
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&h=900&fit=crop" 
            alt="Экскаватор" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in backdrop-blur-sm bg-white/80 p-8 rounded-lg">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Профессиональное обслуживание дорожно-строительной техники
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ООО "ПРОМСПЕЦЗАПЧАСТЬ" осуществляет поставку запасных частей и выполняет все виды ремонтных работ дорожно-строительной и строительной спецтехники от ведущих мировых марок.
              </p>
              <div className="flex flex-wrap gap-2">
                {brands.slice(0, 10).map((brand) => (
                  <span 
                    key={brand} 
                    className="px-3 py-1 bg-white rounded-full text-sm font-medium text-foreground border shadow-sm"
                  >
                    {brand}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                и многие другие марки...
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center backdrop-blur-sm bg-white/60">
                <div className="text-center p-8">
                  <Icon name="Truck" size={120} className="text-primary/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Профессиональное оборудование для ремонта спецтехники
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Наши услуги
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-shadow border-primary/10 hover:border-primary/30"
              >
                <Icon 
                  name={service.icon} 
                  size={48} 
                  className="mx-auto mb-4 text-primary" 
                />
                <p className="font-semibold text-foreground">{service.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Наша техническая экспертиза
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Наши технические специалисты обладают навыками и оборудованием для проведения технического обслуживания, диагностики и ремонта:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              "Бульдозеры",
              "Экскаваторы-погрузчики",
              "Гусеничные экскаваторы",
              "Грейдеры",
              "Телескопические погрузчики",
              "Тракторы",
              "Фронтальные погрузчики",
              "Автокраны",
              "Прочая дорожно-строительная техника"
            ].map((equipment, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border"
              >
                <Icon name="CheckCircle" className="text-primary flex-shrink-0" size={20} />
                <span className="text-foreground">{equipment}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Наши адреса в Краснодаре
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {addresses.map((location, index) => (
              <a
                key={index}
                href={`https://yandex.ru/maps/?text=${encodeURIComponent(location.address)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="p-6 border-primary/20 hover:border-primary hover:shadow-lg transition-all cursor-pointer h-full">
                  <Icon name="MapPin" className="text-accent mb-3" size={32} />
                  <h3 className="font-bold text-lg mb-2">{location.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{location.address}</p>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium">
                    <span>Открыть на карте</span>
                    <Icon name="ExternalLink" size={14} />
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                ООО "ПРОМСПЕЦЗАПЧАСТЬ"
              </h3>
              <div className="space-y-2 text-white/90">
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  г. Краснодар, Плановый проезд, д. 9
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 989 0 111 000
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Button 
                size="lg" 
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold"
                asChild
              >
                <a href="https://wa.me/79890111000" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  WhatsApp
                </a>
              </Button>
              <Button 
                size="lg" 
                className="bg-[#0088cc] hover:bg-[#006699] text-white font-semibold"
                asChild
              >
                <a href="https://t.me/79890111000" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" className="mr-2" size={20} />
                  Telegram
                </a>
              </Button>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/70">
            <p>© {new Date().getFullYear()} ООО "ПРОМСПЕЦЗАПЧАСТЬ". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;