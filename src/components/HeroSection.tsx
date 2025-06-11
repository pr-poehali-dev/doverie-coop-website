import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-trust-blue via-trust-blue-light to-trust-green py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Совместными усилиями к Успеху!
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Холдинг Доверие — маяк для объединения!
          </p>
          <p className="text-lg mb-10 opacity-80 max-w-2xl mx-auto">
            Потребительское Общество Международный Кооперативный Холдинг
            "Доверие" объединяет людей для достижения общих экономических и
            социальных целей
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-trust-blue hover:bg-gray-100 px-8 py-3"
            >
              <Icon name="Users" size={20} className="mr-2" />
              Стать участником
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-trust-blue px-8 py-3"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <Icon name="Handshake" size={80} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Icon name="Target" size={60} />
      </div>
    </section>
  );
};

export default HeroSection;
