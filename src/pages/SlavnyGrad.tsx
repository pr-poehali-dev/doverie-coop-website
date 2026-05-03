import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const objects = [
  { icon: "Ferris", label: "Парк развлечений и отдыха", desc: "Тематические зоны в стиле древнерусских сказок, легенд и былин с использованием инновационных технологий" },
  { icon: "ShoppingBag", label: "Торгово-Ярмарочный Комплекс", desc: "Сезонные ярмарки сельхозпроизводителей, фермерских хозяйств и отечественных производителей" },
  { icon: "Tent", label: "База активного отдыха", desc: "Кемпинг и глэмпинг для любителей отдыха на природе. Парк животных с образовательной функцией" },
  { icon: "Music", label: "Площадки для фестивалей", desc: "Открытая площадка для проведения фестивалей, концертов и выступлений народных коллективов" },
  { icon: "Hotel", label: "Парк-Отель со Спа", desc: "Строительство парк-отеля в лесном массиве с сохранением ландшафта в единой архитектурной тематике" },
  { icon: "HeartPulse", label: "Лечебно-Оздоровительный Комплекс", desc: "Основан на курортологии, использует природные лечебные факторы: грязелечение, климатотерапия" },
  { icon: "Wheat", label: "Агропромышленное Хозяйство", desc: "Собственное сельскохозяйственное производство для обеспечения всего кластера свежими продуктами" },
  { icon: "Factory", label: "Производство продукции", desc: "Производство пищевой и сувенирной продукции под брендом «Славный Град»" },
  { icon: "Home", label: "Малоэтажный жилой комплекс", desc: "Современное жильё в экологически чистой зоне для сотрудников и участников холдинга" },
  { icon: "Truck", label: "Транспортное Хозяйство", desc: "Собственный транспортный парк для обслуживания всей инфраструктуры кластера" },
];

const stats = [
  { value: "188 млрд ₽", label: "Планируемые инвестиции", sub: "для запуска одного кластера", icon: "TrendingUp" },
  { value: "6 000–8 000", label: "Рабочих мест", sub: "новые рабочие места", icon: "Users" },
  { value: "2–2.5 года", label: "Срок ввода", sub: "от начала проектирования", icon: "Calendar" },
  { value: "5–7 лет", label: "Срок окупаемости", sub: "от ввода в эксплуатацию", icon: "BarChart2" },
];

const highlights = [
  { icon: "MapPin", title: "Расположение", text: "Московская область. Земельные объекты 150–200 га различного назначения (лесной массив, сельхоз, промышленные, свободного назначения)" },
  { icon: "Train", title: "Транспортная доступность", text: "Возможность подъезда с нескольких федеральных и региональных трасс для предотвращения транспортного коллапса" },
  { icon: "Maximize", title: "Расположение объектов", text: "Земельные объекты находятся на удалённости друг от друга не более 10 километров" },
];

const parkDetails = [
  { icon: "Castle", title: "Концепция парка", text: "Единое древнерусское историческое пространство с переносом в будущее России в стиле фэнтези, легенд и сказок, с применением инновационных технологий" },
  { icon: "Star", title: "Аттракционы", text: "Ценообразование и объекты задуманы как объекты мирового уровня (аналог «Диснея-Лэнда»)" },
];

const spaDetails = [
  "4 корпуса на 150 номеров",
  "20 коттеджей для индивидуального размещения",
  "Фудкорт (кафе, ресторан, баскетбол, конференц-зал)",
  "Спа-комплекс с бассейнами и водоёмами",
  "Сервис «всё включено» не ниже 4 звёзд",
  "Интерьер направлен на расслабление и оздоровление",
];

const rehabDetails = [
  "Медицинская реабилитация для восстановления утраченных функций",
  "Профилактика осложнений заболеваний",
  "Улучшение физического и социального состояния",
  "Физиотерапия, водолечение, климатотерапия, грязелечение",
  "Тренажёрный зал, бассейн, сауна",
];

const SlavnyGrad = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-trust-dark-gray via-[#1a3a2a] to-trust-green-dark py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-trust-green blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-trust-blue blur-3xl" />
        </div>
        <div className="container mx-auto relative">
          <Link to="/projects" className="inline-flex items-center gap-2 text-green-300 text-sm mb-6 hover:text-white transition-colors">
            <Icon name="ArrowLeft" size={16} />
            Все проекты
          </Link>
          <div className="inline-flex items-center gap-2 bg-trust-green/20 border border-trust-green/30 text-trust-green text-sm px-4 py-1.5 rounded-full mb-5">
            <Icon name="Leaf" size={14} />
            Туристический кластер
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white font-montserrat mb-4">
            «Славный Град»
          </h1>
          <p className="text-green-100 text-xl max-w-3xl mb-3">
            Инновационный Социально-Экономический Кластер
          </p>
          <p className="text-gray-400 text-base max-w-2xl mb-10">
            Реализуется в рамках программы «Социально-Экономического развития МКХ «Доверие» до 2040 года»
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {stats.map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name={s.icon} size={16} className="text-trust-green" />
                </div>
                <div className="text-xl font-bold text-white leading-tight">{s.value}</div>
                <div className="text-green-200 text-xs mt-1">{s.label}</div>
                <div className="text-gray-400 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Концепция */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-trust-green/10 text-trust-green text-sm px-3 py-1 rounded-full mb-4">
                <Icon name="Lightbulb" size={14} />
                Главная идея
              </div>
              <h2 className="text-3xl font-bold text-trust-dark-gray mb-4">Концепция кластера</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Кластер «Славный Град» объединяет социально-экономические объекты различной направленности в единый проект.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong className="text-trust-dark-gray">Цель проекта</strong> — создание взаимосвязанных экономических объектов для уменьшения издержек производства товаров и услуг, удовлетворения потребностей посетителей и развития новых хозяйствующих субъектов.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Концентрированная на некоторой территории группа взаимосвязанных социально-экономических объектов — основа модели кластера.
              </p>
            </div>
            <div className="space-y-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-trust-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={h.icon} size={18} className="text-trust-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-trust-dark-gray text-sm mb-1">{h.title}</div>
                    <div className="text-gray-500 text-sm leading-relaxed">{h.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Объекты кластера */}
      <section className="py-16 px-4 bg-gradient-to-br from-trust-green/5 to-trust-blue/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-trust-green/10 text-trust-green text-sm px-3 py-1 rounded-full mb-4">
              <Icon name="LayoutGrid" size={14} />
              Инфраструктура
            </div>
            <h2 className="text-3xl font-bold text-trust-dark-gray mb-3">Объекты кластера</h2>
            <p className="text-gray-500 max-w-xl mx-auto">10 взаимосвязанных объектов на территории 150–200 га</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {objects.map((obj, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gradient-to-br from-trust-green to-trust-blue rounded-lg flex items-center justify-center mb-3">
                  <Icon name={obj.icon} size={18} className="text-white" />
                </div>
                <h3 className="font-semibold text-trust-dark-gray text-sm mb-2 leading-tight">{obj.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Тематический парк */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm px-3 py-1 rounded-full mb-4">
                <Icon name="Sparkles" size={14} />
                Якорный объект
              </div>
              <h2 className="text-3xl font-bold text-trust-dark-gray mb-4">Тематический парк<br />«Славный Град»</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Единое древнерусское историческое пространство с переносом в будущее России в стиле фэнтези. Герои былин и сказок, атмосфера чудес и волшебства — с применением инновационных технологий.
              </p>
              {parkDetails.map((d, i) => (
                <div key={i} className="flex gap-3 mb-4">
                  <div className="w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={d.icon} size={16} className="text-amber-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-trust-dark-gray text-sm">{d.title}</div>
                    <div className="text-gray-500 text-sm mt-0.5 leading-relaxed">{d.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
              <h3 className="font-bold text-trust-dark-gray mb-4">Ярмарочное пространство</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Ярмарки на Руси были не только местом торговли, но и народных гуляний с песнями, плясками и развлечениями.
              </p>
              <ul className="space-y-2">
                {[
                  "Сезонные ярмарки сельхозпроизводителей",
                  "Фермерские хозяйства и отечественные производители",
                  "Открытая площадка для фестивалей и концертов",
                  "Выступления народных коллективов",
                  "Цирк-шапито для поддержания атмосферы",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <Icon name="Check" size={14} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* База отдыха + Парк-отель */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* База активного отдыха */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full mb-4">
                <Icon name="Tent" size={14} />
                Активный отдых
              </div>
              <h3 className="text-xl font-bold text-trust-dark-gray mb-3">База активного отдыха</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Строительство кемпинга и глэмпинга для любителей отдыха на природе. Этот формат очень востребован.
              </p>
              <div className="space-y-3">
                {[
                  { icon: "Tent", text: "Кемпинг и глэмпинг в лесном массиве" },
                  { icon: "Dumbbell", text: "Трассы для квадроциклов, питбайков, багги, сноубордов" },
                  { icon: "PawPrint", text: "Парк животных с образовательной функцией" },
                  { icon: "Heart", text: "Активные виды отдыха для укрепления здоровья" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-6 h-6 bg-blue-50 rounded flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={12} className="text-blue-600" />
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Парк-отель */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full mb-4">
                <Icon name="Hotel" size={14} />
                Размещение
              </div>
              <h3 className="text-xl font-bold text-trust-dark-gray mb-3">Парк-Отель со Спа-Комплексом</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Строительство парк-отеля в лесном массиве с сохранением ландшафта в единой архитектурной тематике. Эко-материалы.
              </p>
              <ul className="space-y-2">
                {spaDetails.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <Icon name="Check" size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Оздоровление */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 text-sm px-3 py-1 rounded-full mb-4">
                <Icon name="HeartPulse" size={14} />
                Здоровье
              </div>
              <h2 className="text-3xl font-bold text-trust-dark-gray mb-4">Лечебно-Оздоровительный и Реабилитационный Комплекс</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Оснащён на основе курортологии. Использует природные лечебные факторы: грязелечение, климатотерапия. Тренажёрный зал, бассейн, сауна.
              </p>
              <ul className="space-y-3">
                {rehabDetails.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <div className="w-5 h-5 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={10} className="text-rose-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100">
              <h3 className="font-bold text-trust-dark-gray mb-2">Агропромышленное хозяйство</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Собственное сельскохозяйственное производство обеспечивает весь кластер свежими продуктами и создаёт замкнутый экономический цикл.
              </p>
              <div className="space-y-2">
                {[
                  "Прямые поставки в торговый кооператив «Ярмарка»",
                  "Производство пищевой и сувенирной продукции",
                  "Малоэтажный жилищный комплекс для сотрудников",
                  "Собственное транспортное хозяйство",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <Icon name="Leaf" size={13} className="text-trust-green mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Инвестиции */}
      <section className="py-20 px-4 bg-gradient-to-br from-trust-dark-gray to-[#1a3a2a]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-trust-green/20 text-trust-green text-sm px-3 py-1 rounded-full mb-6">
            <Icon name="BarChart2" size={14} />
            Инвестиции и влияние
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Будущее «Славного Града»</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Кластер «Славный Град» станет украшением любой территории, стимулируя туризм, экономику и создавая новые рабочие места
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/10">
                <div className="w-10 h-10 bg-trust-green/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon name={s.icon} size={20} className="text-trust-green" />
                </div>
                <div className="text-2xl font-black text-white leading-tight mb-1">{s.value}</div>
                <div className="text-green-300 text-xs font-medium">{s.label}</div>
                <div className="text-gray-500 text-xs mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
          <Link to="/participation">
            <Button size="lg" className="bg-trust-green hover:bg-trust-green-dark text-white px-10">
              <Icon name="UserPlus" size={18} className="mr-2" />
              Стать участником проекта
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SlavnyGrad;
