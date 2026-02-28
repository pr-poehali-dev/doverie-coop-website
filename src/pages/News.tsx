import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const allNews = [
  {
    id: 1,
    title: "Председатель совета — участник FTT-2025 в Лужниках",
    category: "События",
    date: "16 октября 2025",
    icon: "MapPin",
    color: "blue",
    short: "Председатель совета холдинга «Доверие» принял участие в ежегодном Форуме туристических территорий FTT-2025, прошедшем в олимпийском комплексе «Лужники».",
    full: `С 15 по 16 октября 2025 года в Москве, на территории олимпийского комплекса «Лужники», прошёл ежегодный «FTT-2025: Форум туристических территорий» — одна из крупнейших отраслевых площадок страны для диалога государства и бизнеса в сфере туризма.

Председатель совета холдинга «Доверие» посетил форум с рабочей миссией — найти партнёров и подрядчиков для проекта «Славный Град», кооперативного туристического поселения холдинга.

Форум объединил более 5 000 участников: представителей федеральных и региональных органов власти, инвесторов, девелоперов, отельеров, технологических компаний и производителей. Деловая программа включала 50 круглых столов, 36 отраслевых сессий и выступления более 200 спикеров.

В пленарных заседаниях участвовали руководители АО «Корпорация Туризм.РФ», АО «КАВКАЗ.РФ», представители Министерства экономического развития РФ и Министерства промышленности и торговли РФ, а также делегации из более чем 10 стран — ОАЭ, Турции, Китая, Беларуси, Казахстана и других.

Ключевые темы форума: инвестиционные лоты и меры государственной поддержки, инфраструктурное развитие туристических территорий и курортов, цифровые решения для отрасли, импортозамещение, событийный туризм и поддержка народных промыслов.

На площадке работала специализированная B2B-выставка площадью 5 000 кв.м на двух этажах, где были представлены производители модульных домов, поставщики инженерных решений, операторы глэмпинг-объектов и туристической инфраструктуры.`,
    tags: ["FTT-2025", "Лужники", "Туризм", "Славный Град"],
  },
  {
    id: 2,
    title: "«Славный Град»: контакты и партнёры с Форума туристических территорий",
    category: "Проекты",
    date: "17 октября 2025",
    icon: "Handshake",
    color: "green",
    short: "По итогам FTT-2025 председатель совета провёл переговоры с потенциальными партнёрами для проекта «Славный Град» в сферах строительства, туристической инфраструктуры и глэмпинга.",
    full: `По итогам участия в «FTT-2025: Форуме туристических территорий» председатель совета холдинга «Доверие» сформировал пул контактов с компаниями, представляющими ключевой интерес для реализации проекта «Славный Град».

**Направления, по которым найдены партнёры:**

— Производители модульных и каркасных домокомплектов для туристических объектов. На форуме были представлены несколько российских производителей, специализирующихся на быстровозводимых конструкциях для глэмпинга и загородного размещения.

— Поставщики инженерных решений: автономные системы водоснабжения, канализации и энергоснабжения для объектов, удалённых от центральных коммуникаций.

— Операторы управления туристическими объектами. На форуме присутствовали представители управляющих компаний, специализирующихся на загородных кластерах и глэмпинг-парках по всей России.

— Ассоциация горнолыжных комплексов, территорий и сервиса, Российский союз туриндустрии (РСТ), Федерация рестораторов и отельеров России (ФРИО) — от этих профессиональных объединений получены контакты с профильными специалистами отрасли.

— Корпорация «Туризм.РФ» презентовала действующие меры государственной поддержки и инвестиционные лоты, часть из которых потенциально применима к проекту «Славный Град».

Все собранные контакты переданы рабочей группе проекта. В ближайшее время запланированы встречи с наиболее перспективными партнёрами для обсуждения условий сотрудничества.

Проект «Славный Град» — кооперативное туристическое поселение холдинга «Доверие», объединяющее загородное размещение, фермерский туризм и рекреационную инфраструктуру.`,
    tags: ["Славный Град", "Партнёры", "Глэмпинг", "Инфраструктура"],
  },
  {
    id: 3,
    title: "Расширение международного сотрудничества",
    category: "Партнёрство",
    date: "15 марта 2025",
    icon: "Globe",
    color: "purple",
    short: "Холдинг «Доверие» подписал соглашения о партнёрстве с новыми международными кооперативными организациями из стран СНГ.",
    full: `Холдинг «Доверие» продолжает выстраивать международные связи в кооперативном движении. В марте 2025 года были подписаны соглашения о партнёрстве с кооперативными объединениями из Беларуси и Казахстана.

Соглашения предусматривают взаимный обмен опытом в области организации потребительских кооперативов, совместные закупочные программы и возможность обмена кадрами между структурами холдингов.

Международное сотрудничество — один из приоритетов стратегии развития холдинга «Доверие» на 2025–2027 годы.`,
    tags: ["Партнёрство", "СНГ", "Международное сотрудничество"],
  },
  {
    id: 4,
    title: "Запуск образовательного центра «Знание»",
    category: "Проекты",
    date: "10 февраля 2025",
    icon: "GraduationCap",
    color: "teal",
    short: "Образовательный центр «Знание» получил государственную лицензию и запускает первые курсы для предпринимателей и специалистов рабочих профессий.",
    full: `Образовательный центр «Знание» в составе холдинга «Доверие» получил государственную лицензию на образовательную деятельность и официально начинает работу.

В первом квартале 2025 года запускаются следующие программы:
— Основы кооперативной экономики и управления
— Бухгалтерский учёт для малого бизнеса
— Юридическое сопровождение кооперативной деятельности
— Профессиональные рабочие специальности (строитель, сварщик, электрик)

Обучение доступно в очном и онлайн-форматах. Для членов холдинга «Доверие» — бесплатно.`,
    tags: ["Образование", "Знание", "Курсы"],
  },
  {
    id: 5,
    title: "Общее собрание участников холдинга",
    category: "События",
    date: "25 января 2025",
    icon: "Users",
    color: "orange",
    short: "Состоялось ежегодное собрание участников, на котором были подведены итоги 2024 года и приняты планы развития на 2025 год.",
    full: `25 января 2025 года состоялось ежегодное общее собрание участников холдинга «Доверие». В мероприятии приняли участие более 300 членов из всех кооперативов и подразделений холдинга.

Ключевые решения собрания:
— Утверждены итоги деятельности холдинга за 2024 год
— Принята стратегия развития на 2025–2027 годы
— Одобрено создание нового кооператива «Здоровье» в направлении медицинских услуг
— Утверждён бюджет на развитие проекта «Славный Град»
— Избран обновлённый состав наблюдательного совета

Следующее общее собрание запланировано на январь 2026 года.`,
    tags: ["Собрание", "Итоги", "Планы"],
  },
];

const categories = ["Все", "События", "Проекты", "Партнёрство"];

const colorMap: Record<string, { bg: string; text: string; badge: string; dot: string }> = {
  blue:   { bg: "bg-blue-50",   text: "text-blue-700",   badge: "bg-blue-100 text-blue-700",   dot: "bg-blue-500" },
  green:  { bg: "bg-emerald-50", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-500" },
  purple: { bg: "bg-purple-50", text: "text-purple-700", badge: "bg-purple-100 text-purple-700", dot: "bg-purple-500" },
  teal:   { bg: "bg-teal-50",   text: "text-teal-700",   badge: "bg-teal-100 text-teal-700",   dot: "bg-teal-500" },
  orange: { bg: "bg-orange-50", text: "text-orange-700", badge: "bg-orange-100 text-orange-700", dot: "bg-orange-500" },
};

const News = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [selected, setSelected] = useState<typeof allNews[0] | null>(null);

  const filtered = activeCategory === "Все"
    ? allNews
    : allNews.filter((n) => n.category === activeCategory);

  const featured = allNews[0];
  const fc = colorMap[featured.color];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-trust-dark-gray to-trust-blue-dark py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm px-4 py-1.5 rounded-full mb-5">
            <Icon name="Newspaper" size={15} />
            Новости холдинга
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-montserrat mb-4">
            Жизнь «Доверия»
          </h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            События, проекты и решения, которые формируют будущее нашего кооперативного холдинга
          </p>
        </div>
      </section>

      {/* Featured */}
      <div className="container mx-auto px-4 -mt-6 mb-8">
        <div
          className={`${fc.bg} rounded-3xl p-6 md:p-8 cursor-pointer shadow-md hover:shadow-lg transition-shadow border border-white`}
          onClick={() => setSelected(featured)}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0`}>
              <Icon name={featured.icon} size={28} className={fc.text} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${fc.badge}`}>
                  {featured.category}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Icon name="Pin" size={11} />
                  Главная новость
                </span>
              </div>
              <h2 className={`font-bold text-xl text-trust-dark-gray mb-2 group-hover:${fc.text}`}>
                {featured.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">{featured.short}</p>
            </div>
            <div className="flex-shrink-0">
              <div className={`flex items-center gap-1 text-sm font-medium ${fc.text}`}>
                Читать <Icon name="ArrowRight" size={16} />
              </div>
              <div className="text-xs text-gray-400 mt-1 text-right">{featured.date}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 py-3 overflow-x-auto">
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

      {/* News list */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map((item) => {
            const c = colorMap[item.color];
            return (
              <div
                key={item.id}
                onClick={() => setSelected(item)}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 ${c.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon name={item.icon} size={20} className={c.text} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.badge}`}>
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                    <h3 className={`font-bold text-trust-dark-gray text-base leading-snug mb-2 group-hover:${c.text} transition-colors`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                      {item.short}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
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
            className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl animate-fade-in max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const c = colorMap[selected.color];
              return (
                <>
                  <div className={`${c.bg} rounded-t-3xl p-6 flex-shrink-0`}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0">
                          <Icon name={selected.icon} size={24} className={c.text} />
                        </div>
                        <div>
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>
                            {selected.category}
                          </span>
                          <h2 className="font-bold text-trust-dark-gray text-lg leading-tight mt-1.5">
                            {selected.title}
                          </h2>
                          <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                            <Icon name="Calendar" size={12} />
                            {selected.date}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelected(null)}
                        className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                      >
                        <Icon name="X" size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="p-6 overflow-y-auto">
                    <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                      {selected.full}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {selected.tags.map((tag) => (
                        <span key={tag} className={`text-xs px-2.5 py-1 rounded-full ${c.badge}`}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-6 pb-6 flex-shrink-0">
                    <Button
                      className="w-full bg-trust-blue hover:bg-trust-blue-dark text-white"
                      onClick={() => setSelected(null)}
                    >
                      Закрыть
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

export default News;
