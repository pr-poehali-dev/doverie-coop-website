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

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Экологические инициативы",
      description:
        "Проекты в области возобновляемой энергетики и устойчивого развития",
      status: "Активный",
      participants: 150,
      icon: "Leaf",
    },
    {
      id: 2,
      title: "Социальное жилье",
      description: "Строительство доступного жилья для участников кооператива",
      status: "В разработке",
      participants: 89,
      icon: "Home",
    },
    {
      id: 3,
      title: "Образовательные программы",
      description: "Курсы повышения квалификации и профессиональной подготовки",
      status: "Активный",
      participants: 230,
      icon: "GraduationCap",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trust-dark-gray mb-4">
            Наши проекты
          </h2>
          <p className="text-trust-gray text-lg max-w-2xl mx-auto">
            Совместные инициативы для улучшения жизни участников и развития
            общества
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="hover:shadow-lg transition-shadow border-l-4 border-l-trust-green"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-trust-green/10 rounded-lg flex items-center justify-center">
                    <Icon
                      name={project.icon}
                      size={24}
                      className="text-trust-green"
                    />
                  </div>
                  <span
                    className={`text-sm px-2 py-1 rounded ${
                      project.status === "Активный"
                        ? "bg-trust-green/10 text-trust-green"
                        : "bg-trust-blue/10 text-trust-blue"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <CardTitle className="text-trust-dark-gray">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-trust-gray mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-trust-gray">
                    <Icon name="Users" size={16} className="mr-1" />
                    {project.participants} участников
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-trust-blue hover:text-trust-blue-dark"
                  >
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/projects">
            <Button className="bg-trust-green hover:bg-trust-green-dark">
              <Icon name="FolderOpen" size={20} className="mr-2" />
              Все проекты
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;