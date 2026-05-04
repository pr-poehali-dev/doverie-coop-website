import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const objects = [
  { icon: "Ferris", label: "Тематический парк" },
  { icon: "ShoppingBag", label: "Ярмарочный комплекс" },
  { icon: "Hotel", label: "Парк-Отель со Спа" },
  { icon: "HeartPulse", label: "Лечебный комплекс" },
  { icon: "Tent", label: "База отдыха" },
  { icon: "Wheat", label: "Агрохозяйство" },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-trust-dark-gray mb-4">
            Наши проекты
          </h2>
          <p className="text-trust-gray text-lg max-w-2xl mx-auto">
            Флагманский проект холдинга — Инновационный Социально-Экономический Кластер
          </p>
        </div>

        {/* Карточка Славного Града */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative bg-gradient-to-br from-trust-dark-gray via-[#1b3a20] to-[#1a3060] rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-trust-green blur-3xl" />
              <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-trust-blue blur-3xl" />
            </div>
            <div className="relative p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 bg-trust-green/20 border border-trust-green/30 text-green-300 text-xs px-3 py-1 rounded-full">
                      <Icon name="Star" size={11} />Флагманский проект
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full">
                      <Icon name="MapPin" size={11} />Московская область
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    Кластер «Славный Град»
                  </h3>
                  <p className="text-green-100 text-base leading-relaxed mb-6">
                    Единая система из 11 социально-экономических объектов на 150–200 га. Тематический парк мирового уровня, парк-отель, лечебный комплекс, ярмарки и агрохозяйство.
                  </p>
                </div>
                <div className="w-full md:w-64 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
                  <img
                    src="https://cdn.poehali.dev/projects/a943c68c-4c6f-4e54-ac8c-c6ff5ebee83d/files/7feab339-0fdc-475c-8191-197a3171aba0.jpg"
                    alt="Кластер Славный Град"
                    className="w-full h-44 object-cover"
                  />
                </div>
              </div>

              {/* Объекты */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
                {objects.map((obj, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                    <Icon name={obj.icon} size={14} className="text-trust-green flex-shrink-0" />
                    <span className="text-white text-xs">{obj.label}</span>
                  </div>
                ))}
              </div>

              {/* Цифры */}
              <div className="flex flex-wrap gap-6 mb-8">
                {[
                  { val: "188 млрд ₽", label: "инвестиции" },
                  { val: "6–8 тыс.", label: "рабочих мест" },
                  { val: "11", label: "объектов" },
                  { val: "5–7 лет", label: "окупаемость" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-xl font-bold text-white">{s.val}</div>
                    <div className="text-gray-400 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>

              <Link to="/projects/slavny-grad">
                <Button size="lg" className="bg-trust-green hover:bg-trust-green-dark text-white px-8">
                  <Icon name="BookOpen" size={17} className="mr-2" />
                  Подробнее о проекте
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/projects">
            <Button variant="outline" className="border-trust-green text-trust-green hover:bg-trust-green hover:text-white">
              <Icon name="FolderOpen" size={18} className="mr-2" />
              Все проекты
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;