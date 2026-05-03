import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const objects = [
  { icon: "Ferris", label: "Тематический парк развлечений", desc: "Центральный объект мирового уровня, аналог «Дисней-Лэнда»" },
  { icon: "ShoppingBag", label: "Торгово-Ярмарочный Комплекс", desc: "Круглогодичные ярмарки и народные гуляния" },
  { icon: "Tent", label: "База активного отдыха", desc: "Кемпинг, глэмпинг, парк диких животных" },
  { icon: "Hotel", label: "Парк-Отель со Спа", desc: "150 номеров, 20 коттеджей, сервис 4 звезды" },
  { icon: "HeartPulse", label: "Лечебно-Оздоровительный Комплекс", desc: "Реабилитационный центр на 150 пациентов" },
  { icon: "Wheat", label: "Агропромышленное Хозяйство", desc: "Тепличное и фермерское хозяйство" },
  { icon: "Music", label: "Фестивальные площадки", desc: "Крытая и открытая площадки для мероприятий" },
  { icon: "Package", label: "Производство продукции", desc: "Сувениры, текстиль, пищевые продукты" },
  { icon: "Home", label: "Жилой комплекс", desc: "Малоэтажное жильё для персонала кластера" },
  { icon: "Wrench", label: "Ремонтно-Эксплуатационный Комплекс", desc: "Инфраструктура жизнеобеспечения" },
  { icon: "Truck", label: "Транспортное Хозяйство", desc: "Логистика и перевозки внутри кластера" },
];

const stats = [
  { value: "188 млрд ₽", label: "Планируемые инвестиции", icon: "TrendingUp" },
  { value: "6 000–8 000", label: "Новых рабочих мест", icon: "Users" },
  { value: "150–200 га", label: "Площадь кластера", icon: "Maximize2" },
  { value: "5–7 лет", label: "Срок окупаемости", icon: "BarChart2" },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-trust-dark-gray via-[#1b3a20] to-[#1a3060] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-trust-green blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-trust-blue blur-3xl" />
        </div>
        <div className="container mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm px-4 py-1.5 rounded-full mb-5">
            <Icon name="FolderOpen" size={15} />
            Проекты холдинга
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-montserrat mb-4">
            Проекты «Доверия»
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
            Флагманский проект холдинга — Инновационный Социально-Экономический Кластер «Славный Град», реализуемый в рамках программы развития до 2040 года
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                <div className="w-8 h-8 bg-trust-green/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Icon name={s.icon} size={15} className="text-trust-green" />
                </div>
                <div className="text-lg font-bold text-white">{s.value}</div>
                <div className="text-green-200 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Главная карточка проекта */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            {/* Шапка карточки */}
            <div className="bg-gradient-to-br from-trust-dark-gray via-[#1b3a20] to-[#1a3060] p-8 md:p-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-trust-green/20 border border-trust-green/30 text-green-300 text-xs px-3 py-1 rounded-full">
                  <Icon name="Star" size={11} />Флагманский проект
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full">
                  <Icon name="MapPin" size={11} />Московская область
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full">
                  <Icon name="Calendar" size={11} />Программа до 2040 г.
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Кластер «Славный Град»
              </h2>
              <p className="text-green-100 text-base leading-relaxed max-w-2xl mb-6">
                Инновационный Социально-Экономический Кластер — единая система взаимосвязанных объектов на 150–200 га. Тематический парк мирового уровня, парк-отель, лечебный комплекс, ярмарочный комплекс, база отдыха и агрохозяйство.
              </p>
              <Link to="/projects/slavny-grad">
                <Button size="lg" className="bg-trust-green hover:bg-trust-green-dark text-white px-8">
                  <Icon name="ArrowRight" size={17} className="mr-2" />
                  Открыть полное описание
                </Button>
              </Link>
            </div>

            {/* Объекты */}
            <div className="p-8 md:p-10">
              <h3 className="font-bold text-trust-dark-gray text-lg mb-5">
                11 объектов кластера
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {objects.map((obj, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-trust-green/30 hover:bg-trust-green/5 transition-colors">
                    <div className="w-9 h-9 bg-trust-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={obj.icon} size={16} className="text-trust-green" />
                    </div>
                    <div>
                      <div className="font-semibold text-trust-dark-gray text-sm leading-tight">{obj.label}</div>
                      <div className="text-gray-400 text-xs mt-0.5">{obj.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ключевые параметры */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="font-bold text-trust-dark-gray text-lg mb-5">Ключевые параметры</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { icon: "TrendingUp", label: "Инвестиции", value: "188 млрд ₽", color: "text-trust-green" },
                    { icon: "Users", label: "Рабочих мест", value: "6 000–8 000", color: "text-trust-blue" },
                    { icon: "Calendar", label: "Срок ввода", value: "2–2.5 года", color: "text-amber-600" },
                    { icon: "BarChart2", label: "Окупаемость", value: "5–7 лет", color: "text-purple-600" },
                  ].map((item, i) => (
                    <div key={i} className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <Icon name={item.icon} size={20} className={`${item.color} mx-auto mb-2`} />
                      <div className={`text-xl font-bold ${item.color}`}>{item.value}</div>
                      <div className="text-gray-500 text-xs mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link to="/projects/slavny-grad">
                  <Button variant="outline" size="lg" className="border-trust-green text-trust-green hover:bg-trust-green hover:text-white px-10">
                    <Icon name="BookOpen" size={17} className="mr-2" />
                    Подробная презентация проекта
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
