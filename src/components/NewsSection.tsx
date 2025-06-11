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
      title: "Расширение международного сотрудничества",
      description:
        "Холдинг 'Доверие' подписал соглашения о партнерстве с новыми международными кооперативными организациями",
      date: "15 марта 2024",
      category: "Партнерство",
    },
    {
      id: 2,
      title: "Запуск нового инвестиционного проекта",
      description:
        "Начинается реализация крупного проекта в сфере устойчивого развития и экологических технологий",
      date: "12 марта 2024",
      category: "Инвестиции",
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
