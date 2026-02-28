import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ParticipationSection = () => {
  const benefits = [
    {
      icon: "TrendingUp",
      title: "Экономические выгоды",
      description:
        "Участие в прибыли от совместных проектов и инвестиций холдинга",
    },
    {
      icon: "Shield",
      title: "Социальная защита",
      description:
        "Программы поддержки участников в трудных жизненных ситуациях",
    },
    {
      icon: "Users",
      title: "Сообщество единомышленников",
      description: "Networking и сотрудничество с активными предпринимателями",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-trust-blue/5 to-trust-green/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trust-dark-gray mb-4">
            Участие в холдинге
          </h2>
          <p className="text-trust-gray text-lg max-w-2xl mx-auto">
            Присоединяйтесь к нашему сообществу и получайте преимущества участия
            в кооперативном холдинге
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-trust-blue to-trust-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={benefit.icon}
                    size={28}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-trust-dark-gray">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-trust-gray">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-trust-dark-gray mb-4">
                Готовы присоединиться?
              </h3>
              <p className="text-trust-gray mb-6">
                Заполните заявку на участие, и наши специалисты свяжутся с вами
                для консультации
              </p>
              <div className="space-y-3 text-sm text-trust-gray">
                <div className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-trust-green mr-2"
                  />
                  Минимальный взнос от 10 000 рублей
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-trust-green mr-2"
                  />
                  Возможность участия в управлении
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-trust-green mr-2"
                  />
                  Доступ ко всем проектам холдинга
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link to="/participation">
                <Button
                  size="lg"
                  className="bg-trust-green hover:bg-trust-green-dark w-full md:w-auto px-8 py-3"
                >
                  <Icon name="UserPlus" size={20} className="mr-2" />
                  Узнать об участии
                </Button>
              </Link>
              <p className="text-sm text-trust-gray mt-3">
                Или позвоните нам: +7 (495) 123-45-67
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipationSection;