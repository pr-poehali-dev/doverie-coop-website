import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const photos = [
  {
    url: "https://cdn.poehali.dev/projects/a943c68c-4c6f-4e54-ac8c-c6ff5ebee83d/bucket/b2373f13-fac1-4f2f-8b53-05e4638cb24e.jpg",
    caption: "Форум туристических территорий"
  },
  {
    url: "https://cdn.poehali.dev/projects/a943c68c-4c6f-4e54-ac8c-c6ff5ebee83d/bucket/151e7d90-a178-42e1-863b-af15bac67e8a.jpg",
    caption: "Деловые переговоры"
  },
  {
    url: "https://cdn.poehali.dev/projects/a943c68c-4c6f-4e54-ac8c-c6ff5ebee83d/bucket/1481943c-5e06-4792-8401-61b731b4341b.jpg",
    caption: "Программа форума"
  },
  {
    url: "https://cdn.poehali.dev/projects/a943c68c-4c6f-4e54-ac8c-c6ff5ebee83d/bucket/43652167-4079-4757-9cde-f2563eecb944.jpg",
    caption: "Пленарное заседание"
  },
];

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-trust-blue via-trust-blue-light to-trust-green py-20 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Совместными усилиями к Успеху!
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              Холдинг Доверие — маяк для объединения!
            </p>
            <p className="text-lg mb-10 opacity-80">
              Потребительское Общество Международный Кооперативный Холдинг
              "Доверие" объединяет людей для достижения общих экономических и
              социальных целей
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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

          <div className="grid grid-cols-2 gap-3">
            {photos.map((photo, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium leading-tight">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;