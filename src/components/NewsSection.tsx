import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Председатель совета на Форуме туристических территорий 2025",
      description:
        "Председатель совета холдинга «Доверие» принял участие в Форуме туристических территорий, прошедшем в московском спорткомплексе «Лужники». Форум объединил инвесторов, девелоперов, поставщиков оборудования и региональные администрации для развития туристической инфраструктуры России. В ходе мероприятия были установлены контакты с ключевыми участниками рынка туристических территорий, представляющими интерес для проекта «Славный Град».",
      date: "25 февраля 2025",
      category: "События",
    },
    {
      id: 2,
      title: "«Славный Град»: новые партнёры после Форума в Лужниках",
      description:
        "По итогам Форума туристических территорий 2025 председатель совета холдинга провёл переговоры с компаниями-участниками в сферах глэмпинга, загородного строительства, благоустройства и туристической инфраструктуры. Полученные контакты с производителями домокомплектов, поставщиками инженерных решений и операторами туристических объектов позволят ускорить реализацию проекта «Славный Град» — кооперативного туристического поселения холдинга «Доверие».",
      date: "26 февраля 2025",
      category: "Проекты",
    },
    {
      id: 3,
      title: "Общее собрание участников холдинга",
      description:
        "Состоялось ежегодное собрание, на котором обсуждались итоги года и планы развития",
      date: "8 марта 2024",
      category: "События",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trust-dark-gray mb-4">
            Последние новости
          </h2>
          <p className="text-trust-gray text-lg max-w-2xl mx-auto">
            Следите за развитием холдинга и новыми возможностями для участников
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {news.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm bg-trust-green/10 text-trust-green px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-sm text-trust-gray">{item.date}</span>
                </div>
                <CardTitle className="text-trust-dark-gray">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-trust-gray mb-4">
                  {item.description}
                </CardDescription>
                <Button
                  variant="ghost"
                  className="text-trust-blue hover:text-trust-blue-dark p-0"
                >
                  Читать далее
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-trust-blue hover:bg-trust-blue-dark">
            <Icon name="Newspaper" size={20} className="mr-2" />
            Все новости
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;