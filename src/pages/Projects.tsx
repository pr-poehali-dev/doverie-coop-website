import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Ассоциация садоводов \"Доверие\"",
    category: "Агропром",
    status: "Активный",
    icon: "Sprout",
    color: "green",
    description:
      "Объединение садоводческих хозяйств под единым брендом. Совместные закупки удобрений, семян и инструментов по оптовым ценам. Общий сбыт урожая через налаженные каналы дистрибуции.",
    details: [
      "Снижение затрат на закупку ресурсов до 30%",
      "Совместный выход на крупные торговые сети",
      "Обучение и обмен опытом между участниками",
      "Страхование урожая на льготных условиях",
    ],
    participants: 87,
    founded: "2021",
  },
  {
    id: 2,
    title: "Кооператив строителей \"Надёжный дом\"",
    category: "Строительство",
    status: "Активный",
    icon: "Building2",
    color: "blue",
    description:
      "Кооператив профессиональных строительных бригад. Совместное участие в тендерах, общая закупка стройматериалов, гарантийное обслуживание объектов. Доступное жильё для участников холдинга.",
    details: [
      "Участие в государственных тендерах",
      "Оптовая закупка стройматериалов со скидкой до 25%",
      "Льготная ипотека для членов кооператива",
      "Гарантия качества и послестроительное обслуживание",
    ],
    participants: 134,
    founded: "2020",
  },
  {
    id: 3,
    title: "Торговый кооператив \"Ярмарка\"",
    category: "Торговля",
    status: "Активный",
    icon: "ShoppingBag",
    color: "orange",
    description:
      "Розничная и оптовая торговля товарами первой необходимости, продуктами питания и промышленными товарами. Собственные торговые точки в нескольких районах города.",
    details: [
      "Сеть из 12 торговых точек",
      "Прямые поставки от производителей",
      "Скидки для членов холдинга до 15%",
      "Программа лояльности с накопительными бонусами",
    ],
    participants: 210,
    founded: "2019",
  },
  {
    id: 4,
    title: "Транспортный кооператив \"Путь\"",
    category: "Логистика",
    status: "Активный",
    icon: "Truck",
    color: "purple",
    description:
      "Грузоперевозки и пассажирский транспорт. Совместное владение автопарком, снижение издержек за счёт кооперации. Перевозки для нужд членов холдинга и внешних заказчиков.",
    details: [
      "Автопарк из 40+ единиц техники",
      "Грузоперевозки в регионе и за его пределами",
      "Льготные тарифы для членов кооператива",
      "Техническое обслуживание собственными силами",
    ],
    participants: 63,
    founded: "2021",
  },
  {
    id: 5,
    title: "Образовательный центр \"Знание\"",
    category: "Образование",
    status: "Активный",
    icon: "GraduationCap",
    color: "teal",
    description:
      "Профессиональная переподготовка и повышение квалификации. Курсы для предпринимателей, бухгалтеров, юристов и специалистов рабочих профессий. Обучение основам кооперативной экономики.",
    details: [
      "Более 30 программ обучения",
      "Онлайн и очный форматы",
      "Государственная лицензия на образовательную деятельность",
      "Бесплатное обучение для членов холдинга",
    ],
    participants: 312,
    founded: "2022",
  },
  {
    id: 6,
    title: "Потребительский кооператив \"Здоровье\"",
    category: "Медицина",
    status: "В разработке",
    icon: "HeartPulse",
    color: "red",
    description:
      "Организация доступной медицинской помощи для членов холдинга. Совместные договоры с клиниками, закупка медикаментов, программы профилактики заболеваний.",
    details: [
      "Партнёрство с 8 медицинскими учреждениями",
      "Скидки на медуслуги до 40%",
      "Оптовые закупки лекарств",
      "Программа диспансеризации участников",
    ],
    participants: 456,
    founded: "2023",
  },
  {
    id: 7,
    title: "IT-кооператив \"ЦифраПро\"",
    category: "Технологии",
    status: "В разработке",
    icon: "Monitor",
    color: "indigo",
    description:
      "Разработка цифровых решений для нужд холдинга и внешних заказчиков. Создание единой цифровой платформы для управления кооперативами, бухгалтерии и коммуникации.",
    details: [
      "Единая ERP-система для холдинга",
      "Разработка сайтов и мобильных приложений",
      "IT-поддержка всех структур холдинга",
      "Обучение цифровым навыкам",
    ],
    participants: 28,
    founded: "2024",
  },
  {
    id: 8,
    title: "Сельскохозяйственный кооператив \"Нива\"",
    category: "Агропром",
    status: "Активный",
    icon: "Wheat",
    color: "yellow",
    description:
      "Коллективное земледелие и животноводство. Совместное использование техники, хранилищ и перерабатывающих мощностей. Прямые поставки фермерской продукции потребителям.",
    details: [
      "Обработка более 1500 га земли",
      "Собственный зерноток и овощехранилище",
      "Прямые продажи в торговый кооператив \"Ярмарка\"",
      "Органическое земледелие без химикатов",
    ],
    participants: 95,
    founded: "2020",
  },
];

const categories = ["Все", "Агропром", "Строительство", "Торговля", "Логистика", "Образование", "Медицина", "Технологии"];

const colorMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  green:  { bg: "bg-emerald-50",  text: "text-emerald-700",  border: "border-l-emerald-500",  badge: "bg-emerald-100 text-emerald-700" },
  blue:   { bg: "bg-blue-50",     text: "text-blue-700",     border: "border-l-blue-500",     badge: "bg-blue-100 text-blue-700" },
  orange: { bg: "bg-orange-50",   text: "text-orange-700",   border: "border-l-orange-500",   badge: "bg-orange-100 text-orange-700" },
  purple: { bg: "bg-purple-50",   text: "text-purple-700",   border: "border-l-purple-500",   badge: "bg-purple-100 text-purple-700" },
  teal:   { bg: "bg-teal-50",     text: "text-teal-700",     border: "border-l-teal-500",     badge: "bg-teal-100 text-teal-700" },
  red:    { bg: "bg-rose-50",     text: "text-rose-700",     border: "border-l-rose-500",     badge: "bg-rose-100 text-rose-700" },
  indigo: { bg: "bg-indigo-50",   text: "text-indigo-700",   border: "border-l-indigo-500",   badge: "bg-indigo-100 text-indigo-700" },
  yellow: { bg: "bg-amber-50",    text: "text-amber-700",    border: "border-l-amber-500",    badge: "bg-amber-100 text-amber-700" },
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  const filtered = activeCategory === "Все"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-trust-dark-gray to-trust-blue py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm px-4 py-1.5 rounded-full mb-5">
            <Icon name="FolderOpen" size={15} />
            Все проекты холдинга
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-montserrat mb-4">
            Проекты «Доверия»
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Кооперативы и инициативы, объединяющие более 1 000 участников для совместного роста и взаимной поддержки
          </p>
          <div className="flex justify-center gap-8 mt-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">8</div>
              <div className="text-blue-200 text-sm mt-1">проектов</div>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">1 385</div>
              <div className="text-blue-200 text-sm mt-1">участников</div>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5</div>
              <div className="text-blue-200 text-sm mt-1">лет работы</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-trust-blue text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((project) => {
            const c = colorMap[project.color];
            return (
              <div
                key={project.id}
                onClick={() => setSelected(project)}
                className={`bg-white rounded-2xl border-l-4 ${c.border} shadow-sm hover:shadow-md transition-all cursor-pointer group animate-fade-in`}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 ${c.bg} rounded-xl flex items-center justify-center`}>
                      <Icon name={project.icon} size={22} className={c.text} />
                    </div>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        project.status === "Активный"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className={`text-xs font-semibold uppercase tracking-wider ${c.text} mb-1`}>
                    {project.category}
                  </div>
                  <h3 className="font-bold text-trust-dark-gray text-base leading-snug mb-2 group-hover:text-trust-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-xs text-gray-400 gap-1">
                      <Icon name="Users" size={13} />
                      {project.participants} уч.
                    </div>
                    <div className="flex items-center text-xs text-gray-400 gap-1">
                      <Icon name="Calendar" size={13} />
                      с {project.founded}
                    </div>
                    <span className={`text-xs font-medium ${c.text} flex items-center gap-0.5 group-hover:gap-1.5 transition-all`}>
                      Подробнее <Icon name="ArrowRight" size={12} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const c = colorMap[selected.color];
              return (
                <>
                  <div className={`${c.bg} rounded-t-3xl p-6`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                          <Icon name={selected.icon} size={28} className={c.text} />
                        </div>
                        <div>
                          <div className={`text-xs font-semibold uppercase tracking-wider ${c.text}`}>
                            {selected.category}
                          </div>
                          <h2 className="font-bold text-trust-dark-gray text-lg leading-tight mt-0.5">
                            {selected.title}
                          </h2>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelected(null)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Icon name="X" size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {selected.description}
                    </p>

                    <h4 className="font-semibold text-trust-dark-gray mb-3">Ключевые возможности:</h4>
                    <ul className="space-y-2 mb-6">
                      {selected.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className={`w-5 h-5 ${c.bg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Icon name="Check" size={12} className={c.text} />
                          </div>
                          {d}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-4 py-4 border-t border-gray-100 mb-5">
                      <div className="text-center flex-1">
                        <div className="text-2xl font-bold text-trust-dark-gray">{selected.participants}</div>
                        <div className="text-xs text-gray-400">участников</div>
                      </div>
                      <div className="w-px h-10 bg-gray-200" />
                      <div className="text-center flex-1">
                        <div className="text-2xl font-bold text-trust-dark-gray">{selected.founded}</div>
                        <div className="text-xs text-gray-400">год основания</div>
                      </div>
                      <div className="w-px h-10 bg-gray-200" />
                      <div className="text-center flex-1">
                        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                          selected.status === "Активный"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}>
                          {selected.status}
                        </span>
                      </div>
                    </div>

                    <Button className="w-full bg-trust-blue hover:bg-trust-blue-dark text-white">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Вступить в кооператив
                    </Button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Projects;