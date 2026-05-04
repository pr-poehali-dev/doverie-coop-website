import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { value: "188 млрд ₽", label: "Планируемые инвестиции", sub: "для запуска одного кластера", icon: "TrendingUp" },
  { value: "6 000–8 000", label: "Рабочих мест", sub: "новые рабочие места", icon: "Users" },
  { value: "2–2.5 года", label: "Срок ввода", sub: "от начала проектирования", icon: "Calendar" },
  { value: "5–7 лет", label: "Срок окупаемости", sub: "от ввода в эксплуатацию", icon: "BarChart2" },
];

const objects = [
  { num: "01", icon: "Ferris", color: "amber", label: "Тематический парк развлечений", desc: "Центральный объект мирового уровня — аналог «Дисней-Лэнда». Древнерусский город с инновационными технологиями." },
  { num: "02", icon: "ShoppingBag", color: "green", label: "Торгово-Ярмарочный Комплекс", desc: "Круглогодичный комплекс с фермерской, народной и промышленной продукцией. Сезонные ярмарки и народные гуляния." },
  { num: "03", icon: "Tent", color: "blue", label: "База активного отдыха", desc: "Кемпинг, глэмпинг, трассы для квадроциклов, пит-байков, баггов, снегоходов. Парк диких животных и птиц." },
  { num: "04", icon: "Music", color: "purple", label: "Фестивальные площадки", desc: "Крытая и открытая площадки для культурно-развлекательных фестивалей и массовых мероприятий под открытым небом." },
  { num: "05", icon: "Hotel", color: "indigo", label: "Парк-Отель со Спа", desc: "4 корпуса на 150 номеров, 20 коттеджей, ресторан, конференц-зал, спа-комплекс с бассейнами. Сервис 4 звезды." },
  { num: "06", icon: "HeartPulse", color: "rose", label: "Лечебно-Оздоровительный Комплекс", desc: "Курортология, грязелечение, климатотерапия, реабилитационный центр на 150 пациентов. Физиотерапия и восстановление." },
  { num: "07", icon: "Wrench", color: "slate", label: "Ремонтно-Эксплуатационный Комплекс", desc: "Собственные коммуникации, очистные сооружения, тепло- и электроснабжение, дороги, утилизация отходов." },
  { num: "08", icon: "Wheat", color: "lime", label: "Агропромышленное Хозяйство", desc: "Тепличное и фермерское хозяйства, животноводство, рыбоводство. Обеспечивает весь кластер свежей продукцией." },
  { num: "09", icon: "Package", color: "orange", label: "Производство продукции", desc: "Пищевой, сувенирный и швейно-текстильный комплексы. Продукция с тематикой парка, народные орнаменты." },
  { num: "10", icon: "Home", color: "teal", label: "Малоэтажный жилой комплекс", desc: "Комфортное жильё для персонала с применением инновационных технологий и экологических материалов." },
  { num: "11", icon: "Truck", color: "cyan", label: "Транспортное Хозяйство", desc: "Доставка посетителей и персонала по всему кластеру. Рациональная организация — основа работы всей системы." },
];

const colorMap: Record<string, { bg: string; text: string; badge: string }> = {
  amber:  { bg: "bg-amber-50",   text: "text-amber-700",   badge: "bg-amber-100"   },
  green:  { bg: "bg-emerald-50", text: "text-emerald-700", badge: "bg-emerald-100" },
  blue:   { bg: "bg-blue-50",    text: "text-blue-700",    badge: "bg-blue-100"    },
  purple: { bg: "bg-purple-50",  text: "text-purple-700",  badge: "bg-purple-100"  },
  indigo: { bg: "bg-indigo-50",  text: "text-indigo-700",  badge: "bg-indigo-100"  },
  rose:   { bg: "bg-rose-50",    text: "text-rose-700",    badge: "bg-rose-100"    },
  slate:  { bg: "bg-slate-50",   text: "text-slate-700",   badge: "bg-slate-100"   },
  lime:   { bg: "bg-lime-50",    text: "text-lime-700",    badge: "bg-lime-100"    },
  orange: { bg: "bg-orange-50",  text: "text-orange-700",  badge: "bg-orange-100"  },
  teal:   { bg: "bg-teal-50",    text: "text-teal-700",    badge: "bg-teal-100"    },
  cyan:   { bg: "bg-cyan-50",    text: "text-cyan-700",    badge: "bg-cyan-100"    },
};

type AccSection = {
  id: string;
  icon: string;
  color: string;
  title: string;
  subtitle: string;
  body: React.ReactNode;
};

const SlavnyGrad = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggle = (id: string) => setOpenSection(openSection === id ? null : id);

  const sections: AccSection[] = [
    {
      id: "park",
      icon: "Ferris",
      color: "amber",
      title: "Тематический парк «Славный Град»",
      subtitle: "Центральный объект — аналог «Дисней-Лэнда» и «Европа-Лэнда»",
      body: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-trust-dark-gray mb-2">Концепция</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Синтез опыта прошлого древнерусской истории с переносом в будущее России — в стиле фэнтези, легенд, былин и сказов Древней Руси с применением инновационных технологий. Парк строится в виде Древнерусского города с тематическими аттракционами и былинными героями, создающими атмосферу чудес и волшебства. В комплекс входят аттракционы, рестораны, кафе, гостиница, аква-парк, зоны для фестивалей и концертов, крытый торгово-ярмарочный комплекс.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-trust-dark-gray mb-2">Воспитательный аспект</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Весь комплекс несёт познавательный и образовательный характер, направленный на социально-культурное развитие. Знакомство с историей Руси, традициями, обрядами и праздниками русской цивилизации с переходом к современным тенденциям — в развлекательной форме. Образы, раскрывающие скрытую мудрость народных былин, сказов и поверий — основные герои парка.
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-trust-dark-gray mb-3">Что включает парк</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {[
                { icon: "Zap", text: "Аттракционы для всех возрастов" },
                { icon: "Theater", text: "Живые шоу и интерактивные мероприятия" },
                { icon: "Waves", text: "Аква-парк и водные развлечения" },
                { icon: "UtensilsCrossed", text: "Рестораны, кафе, гостиница" },
                { icon: "Smartphone", text: "Цифровая платформа и мобильное приложение" },
                { icon: "Trees", text: "Очаровательный ландшафтный дизайн" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700 bg-amber-50 rounded-lg px-3 py-2 border border-amber-100">
                  <Icon name={item.icon} size={14} className="text-amber-600 flex-shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-trust-dark-gray mb-3">Сезонные программы</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { s: "Зима", items: ["Каток", "Горки", "Активный зимний отдых"], icon: "Snowflake" },
                { s: "Весна", items: ["Русские забавы", "Мастер-классы ремёсел", "Народные гуляния"], icon: "Flower2" },
                { s: "Лето", items: ["Уличные аттракционы", "Водные развлечения", "Открытые шоу"], icon: "Sun" },
                { s: "Осень", items: ["Активный отдых", "Тематические праздники", "Мастер-классы"], icon: "Leaf" },
              ].map((season, i) => (
                <div key={i} className="bg-white rounded-xl p-3 border border-amber-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name={season.icon} size={14} className="text-amber-600" />
                    <span className="font-semibold text-sm text-trust-dark-gray">{season.s}</span>
                  </div>
                  {season.items.map((item, j) => (
                    <div key={j} className="text-xs text-gray-500 leading-relaxed">• {item}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong className="text-trust-dark-gray">Цифровые технологии:</strong> комплекс работает круглый год. Предусмотрена разработка цифровой платформы и мобильного приложения с использованием искусственного интеллекта для безопасного, комфортного отдыха, лёгкой покупки билетов и бронирования мест.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "fair",
      icon: "ShoppingBag",
      color: "green",
      title: "Торгово-Ярмарочный Комплекс",
      subtitle: "Круглогодичные ярмарки, фестивали и народные гуляния",
      body: (
        <div className="space-y-5">
          <p className="text-gray-600 text-sm leading-relaxed">
            Организуется тематическое пространство для проведения сезонных ярмарок — сельхозпроизводителей, фермерских хозяйств, отечественных производителей. Ярмарка — один из самых ярких и любимых событий нашего народа: на ярмарках не только торговали, но и пели песни, плясали, силой мерились, ремеслом хвалились.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
              <h4 className="font-bold text-trust-dark-gray mb-3 flex items-center gap-2">
                <Icon name="Store" size={16} className="text-emerald-600" />
                Торговля
              </h4>
              <ul className="space-y-1.5">
                {["Сельхозпроизводители и фермерские хозяйства", "Отечественные производители", "Продукция народного промысла", "Изделия собственного производства кластера"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <Icon name="Check" size={13} className="text-emerald-600 mt-0.5 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
              <h4 className="font-bold text-trust-dark-gray mb-3 flex items-center gap-2">
                <Icon name="Music" size={16} className="text-emerald-600" />
                Развлечения
              </h4>
              <ul className="space-y-1.5">
                {["Фестивали и концерты под открытым небом", "Выступления народных коллективов", "Площадки для самодеятельности", "Цирк-шапито для поддержания атмосферы", "Фольклорные программы"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <Icon name="Check" size={13} className="text-emerald-600 mt-0.5 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white border border-emerald-100 rounded-xl p-4">
            <p className="text-sm text-gray-600 leading-relaxed italic">
              «Фольклор — коллективное творчество народа, вобравшее в себя его вековой жизненный опыт. Обращение к фольклору сегодня имеет глубокий социальный смысл — средство идейно-эстетического, нравственного, патриотического воспитания.»
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "base",
      icon: "Tent",
      color: "blue",
      title: "База активного отдыха",
      subtitle: "Кемпинг, глэмпинг, трассы и парк диких животных",
      body: (
        <div className="space-y-5">
          <p className="text-gray-600 text-sm leading-relaxed">
            Испытать восторг от первого улова рыбы, приготовить ужин на костре, набрать корзинку грибов, отправиться в поход, покататься на квадроцикле — всё это доступно на базе кластера. Формат кемпинга и глэмпинга сегодня очень востребован: многие хотят быть ближе к природе, но не отказываться от комфорта.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "Tent", title: "Кемпинг и глэмпинг", items: ["Домики стандарт и повышенной комфортности", "Комфорт в единении с природой", "Один из самых востребованных форматов"] },
              { icon: "Dumbbell", title: "Активный отдых", items: ["Трассы для квадроциклов", "Пит-байки и багги", "Снегоходы зимой", "Рыбалка, грибы, походы"] },
              { icon: "PawPrint", title: "Парк животных", items: ["Положительные эмоции детей и взрослых", "Воспитательная и образовательная функция", "Познавательные экскурсии", "Знакомство с видами животных"] },
            ].map((block, i) => (
              <div key={i} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name={block.icon} size={16} className="text-blue-600" />
                  <h4 className="font-bold text-trust-dark-gray text-sm">{block.title}</h4>
                </div>
                <ul className="space-y-1">
                  {block.items.map((item, j) => (
                    <li key={j} className="text-xs text-gray-600 flex items-start gap-1.5">
                      <Icon name="Check" size={11} className="text-blue-500 mt-0.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong className="text-trust-dark-gray">Польза для здоровья:</strong> активные виды отдыха способствуют укреплению иммунитета, улучшению настроения, памяти, выносливости и работоспособности. После такого отдыха ощущается прилив сил. Организм восстанавливается быстро, а человек испытывает положительные эмоции.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "hotel",
      icon: "Hotel",
      color: "indigo",
      title: "Парк-Отель со Спа-Комплексом",
      subtitle: "Сервис «всё включено» не ниже 4 звёзд в лесном массиве",
      body: (
        <div className="space-y-5">
          <p className="text-gray-600 text-sm leading-relaxed">
            В непосредственной близости, в лесном массиве, с учётом ландшафта местности. Стилистика в единой архитектурной тематике с использованием современных экологически безопасных материалов. При строительстве максимально сохраняется лесной массив. Из номеров открываются чудесные виды на лесопарковую зону.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <h4 className="font-bold text-trust-dark-gray mb-3">Состав комплекса</h4>
              <ul className="space-y-2">
                {["4 корпуса на 150 одно- и двухместных номеров", "20 коттеджей для индивидуального размещения", "Кафе-столовая, Ресторан, Банкетный зал", "Конференц-зал", "Спа-Комплекс с крытым и открытым бассейнами", "Ландшафтный парк с природными водоёмами"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 list-none">
                    <div className="w-5 h-5 bg-indigo-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={11} className="text-indigo-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-trust-dark-gray mb-3">Спа-Комплекс</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">Широкий выбор процедур и лечебных курсов для красоты тела и оздоровления организма:</p>
              <ul className="space-y-1.5">
                {["Массажи и обёртывания", "Ароматерапия и детокс-программы", "Диетология и уход за кожей", "Сауны и водные процедуры", "Полное погружение в атмосферу отдыха для тела и души"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <Icon name="Sparkles" size={12} className="text-indigo-500 mt-0.5 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
            <h4 className="font-bold text-trust-dark-gray mb-2 text-sm">Ресторанный комплекс</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ежедневное обслуживание постояльцев, площадки для торжественных мероприятий и деловых встреч, индивидуальное обслуживание с широким выбором блюд, высокий уровень сервиса с полным техническим оснащением для разного типа событий.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "health",
      icon: "HeartPulse",
      color: "rose",
      title: "Лечебно-Оздоровительный и Реабилитационный Комплекс",
      subtitle: "Реабилитационный центр на 150 пациентов. Курортология",
      body: (
        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <h4 className="font-bold text-trust-dark-gray mb-3">Лечебно-оздоровительный комплекс</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">Программа основана на курортологии — науке о природных лечебных факторах. Цель: отдых + рекреация + оздоровление + лечение.</p>
              <div className="space-y-2">
                {[
                  { icon: "Droplets", title: "Грязелечение", desc: "Лечение и профилактика с использованием лечебных грязей различного происхождения" },
                  { icon: "Wind", title: "Климатотерапия", desc: "Дозированное воздействие климатопогодных факторов для лечения и профилактики" },
                  { icon: "Dumbbell", title: "Тренажёрный зал, бассейн, сауна", desc: "Полный комплекс оздоровительных мероприятий" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-3 bg-rose-50 rounded-lg border border-rose-100">
                    <Icon name={item.icon} size={15} className="text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-trust-dark-gray text-xs">{item.title}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-trust-dark-gray mb-3">Реабилитационный центр</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">Медицинская реабилитация — скорейшее и наиболее полное восстановление утраченных функций, личного и социального статуса человека.</p>
              <ul className="space-y-1.5">
                {["Восстановление функций органов и систем", "Профилактика осложнений и рецидивов заболеваний", "Восстановление физического состояния", "Развитие моторных и сенсорных навыков", "Физиотерапия и восстановительная терапия", "Возвращение к профессиональной деятельности"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-4 h-4 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={9} className="text-rose-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "rek",
      icon: "Wrench",
      color: "slate",
      title: "Ремонтно-Эксплуатационный Комплекс",
      subtitle: "Инфраструктура жизнеобеспечения всего кластера",
      body: (
        <div className="space-y-5">
          <p className="text-gray-600 text-sm leading-relaxed">
            РЭК — комплекс технических сооружений, коммуникаций и служб технического обслуживания, обеспечивающий функционирование всех объектов кластера. Необходим для бесперебойного обеспечения теплом, водоснабжением, энергоснабжением, газоснабжением, канализацией — чтобы не нагружать существующие мощности региона.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: "Droplets", label: "Водоснабжение и водоочистка" },
              { icon: "Zap", label: "Электроснабжение и освещение" },
              { icon: "Flame", label: "Тепло-энергетический комплекс" },
              { icon: "Route", label: "Подъездные дороги и пути" },
              { icon: "Filter", label: "Очистные сооружения" },
              { icon: "Trash2", label: "Утилизация отходов" },
              { icon: "Settings", label: "Ремонтно-эксплуатационное подразделение" },
              { icon: "Network", label: "Инженерное проектирование коммуникаций" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-slate-50 rounded-lg p-3 border border-slate-100">
                <Icon name={item.icon} size={15} className="text-slate-600 flex-shrink-0" />
                <span className="text-xs text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "agro",
      icon: "Wheat",
      color: "lime",
      title: "Агропромышленное Хозяйство и Производство продукции",
      subtitle: "Тепличное, фермерское хозяйство, сувениры, текстиль, продукты",
      body: (
        <div className="space-y-5">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-lime-50 rounded-xl p-4 border border-lime-100">
              <div className="flex items-center gap-2 mb-3"><Icon name="Sprout" size={16} className="text-lime-600" /><h4 className="font-bold text-trust-dark-gray text-sm">Тепличное хозяйство</h4></div>
              <p className="text-xs text-gray-600 leading-relaxed">Снабжение всех субъектов кластера и посетителей свежими овощами, ягодами, богатыми витаминами. Динамичная и эффективная отрасль.</p>
            </div>
            <div className="bg-lime-50 rounded-xl p-4 border border-lime-100">
              <div className="flex items-center gap-2 mb-3"><Icon name="Tractor" size={16} className="text-lime-600" /><h4 className="font-bold text-trust-dark-gray text-sm">Фермерское хозяйство</h4></div>
              <p className="text-xs text-gray-600 leading-relaxed">Смешанное фермерство: животноводство, рыбоводство, птицеводство. «Отходы» одного производства — сырьё для другого. Автоматизированное производство.</p>
            </div>
            <div className="bg-lime-50 rounded-xl p-4 border border-lime-100">
              <div className="flex items-center gap-2 mb-3"><Icon name="Leaf" size={16} className="text-lime-600" /><h4 className="font-bold text-trust-dark-gray text-sm">Органическое производство</h4></div>
              <p className="text-xs text-gray-600 leading-relaxed">Новейшие разработки, современные машины и механизмы. Возобновляемые ресурсы фермы используются в максимально возможной степени.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
              <div className="flex items-center gap-2 mb-2"><Icon name="Gift" size={15} className="text-orange-600" /><h4 className="font-bold text-trust-dark-gray text-sm">Сувенирный комплекс</h4></div>
              <p className="text-xs text-gray-600 leading-relaxed">Широкий ассортимент сувениров, тематических игрушек и развивающих игр с символикой и героями Тематического Парка.</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
              <div className="flex items-center gap-2 mb-2"><Icon name="Shirt" size={15} className="text-orange-600" /><h4 className="font-bold text-trust-dark-gray text-sm">Швейно-текстильный</h4></div>
              <p className="text-xs text-gray-600 leading-relaxed">Натуральные материалы с традиционными русскими орнаментами. Текстиль и одежда с образами героев Тематического Парка.</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
              <div className="flex items-center gap-2 mb-2"><Icon name="UtensilsCrossed" size={15} className="text-orange-600" /><h4 className="font-bold text-trust-dark-gray text-sm">Пищевой комплекс</h4></div>
              <p className="text-xs text-gray-600 leading-relaxed">Переработка и выпуск полуфабрикатов для всех пунктов общественного питания кластера. Высокое качество и высокотехнологичное оборудование.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "infra",
      icon: "Home",
      color: "teal",
      title: "Жилой комплекс и Транспортное хозяйство",
      subtitle: "Комфортная жизнь персонала и логистика внутри кластера",
      body: (
        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <h4 className="font-bold text-trust-dark-gray mb-3">Малоэтажный жилой комплекс</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">Строительство комфортного жилья для привлечения высококвалифицированных специалистов. Создание им благоприятных, комфортных условий жизни — это напрямую влияет на качество работы всего кластера.</p>
              <ul className="space-y-1.5">
                {["Инновационные технологии малоэтажного строительства", "Современные экологические материалы", "Единая стилистика всего кластера", "Комфортная среда для сотрудников и их семей"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <Icon name="Check" size={13} className="text-teal-600 mt-0.5 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-trust-dark-gray mb-3">Транспортное хозяйство</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">Транспортное хозяйство — артерия кластера, связующая все материальные потоки. Ритмичность и качество транспортных услуг определяют стабильность функционирования всей системы.</p>
              <ul className="space-y-1.5">
                {["Доставка посетителей по всей территории кластера", "Перевозка персонала и грузов", "Рациональная маршрутная сеть", "Собственный автопарк для независимости"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <Icon name="Check" size={13} className="text-teal-600 mt-0.5 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-trust-dark-gray via-[#1b3a20] to-[#1a3060] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-trust-green blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-trust-blue blur-3xl" />
        </div>
        <div className="container mx-auto relative">
          <Link to="/projects" className="inline-flex items-center gap-2 text-green-300 text-sm mb-6 hover:text-white transition-colors">
            <Icon name="ArrowLeft" size={16} />
            Все проекты
          </Link>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-trust-green/20 border border-trust-green/30 text-green-300 text-xs px-3 py-1.5 rounded-full">
              <Icon name="Leaf" size={12} />Туристический кластер
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-full">
              <Icon name="MapPin" size={12} />Московская область
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-full">
              <Icon name="Calendar" size={12} />Программа до 2040 г.
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white font-montserrat mb-3">«Славный Град»</h1>
          <p className="text-green-100 text-xl max-w-3xl mb-2">Инновационный Социально-Экономический Кластер</p>
          <p className="text-gray-400 text-sm max-w-2xl mb-10">
            Реализуется в рамках программы «Социально-Экономического развития ПО МКХ «Доверие» на базе естественной кооперации до 2040 г.»
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
            {stats.map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                <div className="w-8 h-8 bg-trust-green/20 rounded-lg flex items-center justify-center mb-2">
                  <Icon name={s.icon} size={15} className="text-trust-green" />
                </div>
                <div className="text-lg font-bold text-white leading-tight">{s.value}</div>
                <div className="text-green-200 text-xs mt-1 font-medium">{s.label}</div>
                <div className="text-gray-500 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Визуализация объектов */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-trust-green/10 text-trust-green text-xs px-3 py-1 rounded-full mb-3">
              <Icon name="Image" size={13} />Визуализация
            </div>
            <h2 className="text-2xl font-bold text-trust-dark-gray mb-2">Объекты кластера в деталях</h2>
            <p className="text-gray-500 text-sm">Концепция ключевых объектов «Славного Града»</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Тематический парк «Славный Град»",
                desc: "Древнерусский город с аттракционами, живыми шоу и аква-парком мирового уровня",
                img: "https://cdn.poehali.dev/projects/a943c68c-4c6f-4e54-ac8c-c6ff5ebee83d/files/52ae205d-c0eb-4d12-b9b9-a6252ae14a9b.jpg",
                tag: "Объект 01",
              },
              {
                title: "Торгово-Ярмарочный Комплекс",
                desc: "Круглогодичные ярмарки с фермерской, народной и промышленной продукцией",
                img: "https://cdn.poehali.dev/projects/a943c68c-4c6f-4e54-ac8c-c6ff5ebee83d/files/4b0d70c8-a36c-4532-8372-20d505b18fb2.jpg",
                tag: "Объект 02",
              },
              {
                title: "База активного отдыха",
                desc: "Глэмпинг, кемпинг, квадроциклы, снегоходы и парк диких животных",
                img: "https://cdn.poehali.dev/projects/a943c68c-4c6f-4e54-ac8c-c6ff5ebee83d/files/b77f1a81-dac5-4f84-884d-c886a2e29795.jpg",
                tag: "Объект 03",
              },
              {
                title: "Парк-Отель со Спа",
                desc: "4 корпуса, 20 коттеджей, ресторан, конференц-зал и спа-комплекс 4 звезды",
                img: "https://cdn.poehali.dev/projects/a943c68c-4c6f-4e54-ac8c-c6ff5ebee83d/files/75b89e20-3365-4737-9d4d-6cd6e66e462c.jpg",
                tag: "Объект 05",
              },
              {
                title: "Лечебно-Оздоровительный Комплекс",
                desc: "Грязелечение, климатотерапия, реабилитационный центр на 150 пациентов",
                img: "https://cdn.poehali.dev/projects/a943c68c-4c6f-4e54-ac8c-c6ff5ebee83d/files/e02b55a5-27ec-4564-a498-e9fbd14a7059.jpg",
                tag: "Объект 06",
              },
              {
                title: "Агропромышленное Хозяйство",
                desc: "Теплицы, фермерское хозяйство, животноводство и рыбоводство",
                img: "https://cdn.poehali.dev/projects/a943c68c-4c6f-4e54-ac8c-c6ff5ebee83d/files/0ca23c13-4720-4604-8e1d-5aff9cfc9960.jpg",
                tag: "Объект 08",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">{item.tag}</span>
                </div>
                <div className="p-4 bg-white">
                  <h4 className="font-bold text-trust-dark-gray text-sm mb-1 leading-tight">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Концепция */}
      <section className="py-14 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-trust-green/10 text-trust-green text-xs px-3 py-1 rounded-full mb-4">
                <Icon name="Lightbulb" size={13} />Концепция проекта
              </div>
              <h2 className="text-3xl font-bold text-trust-dark-gray mb-4">Что такое кластер?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong className="text-trust-dark-gray">Кластер</strong> — сконцентрированная на некоторой территории группа взаимосвязанных социально-экономических объектов. В «Славном Граде» каждый элемент усиливает остальные: посетители парка пользуются отелем, отель питается продукцией агрохозяйства, ярмарка обеспечивает торговлю — всё связано в единый экономический организм.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-trust-dark-gray">Цель проекта</strong> — создание взаимосвязанных экономических объектов для уменьшения издержек при производстве товаров и услуг, удовлетворения потребностей посетителей и получения ими уникального опыта через развитие новых хозяйствующих субъектов.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { icon: "MapPin", title: "Площадь кластера", text: "150–200 га: лесной массив, сельскохозяйственные, промышленные земли и земли свободного назначения" },
                { icon: "Train", title: "Транспортная доступность", text: "Несколько подъездов с федеральных и региональных трасс — чтобы не создавать транспортный коллапс" },
                { icon: "Maximize2", title: "Расположение объектов", text: "Земельные участки удалены друг от друга не более чем на 10 километров" },
                { icon: "Flag", title: "Пилотный регион", text: "Московская область — здесь остро стоит вопрос организации досуга большого количества человек одновременно" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-9 h-9 bg-trust-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={16} className="text-trust-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-trust-dark-gray text-sm mb-0.5">{item.title}</div>
                    <div className="text-gray-500 text-sm leading-relaxed">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Объекты кластера */}
      <section className="py-14 px-4 bg-gradient-to-br from-trust-green/5 to-trust-blue/5">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-trust-green/10 text-trust-green text-xs px-3 py-1 rounded-full mb-3">
              <Icon name="LayoutGrid" size={13} />11 объектов
            </div>
            <h2 className="text-3xl font-bold text-trust-dark-gray mb-2">Объекты кластера</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">Взаимосвязанная система социально-экономических объектов на 150–200 га</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {objects.map((obj, idx) => {
              const cm = colorMap[obj.color];
              return (
                <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 ${cm.badge} rounded-xl flex items-center justify-center`}>
                      <Icon name={obj.icon} size={18} className={cm.text} />
                    </div>
                    <span className={`text-xs font-bold ${cm.text} opacity-50`}>{obj.num}</span>
                  </div>
                  <h3 className="font-bold text-trust-dark-gray text-sm mb-1.5 leading-tight">{obj.label}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{obj.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Аккордеон с деталями */}
      <section className="py-14 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-trust-dark-gray mb-2">Подробно о каждом объекте</h2>
            <p className="text-gray-500 text-sm">Нажмите на раздел, чтобы раскрыть полное описание</p>
          </div>
          <div className="space-y-3">
            {sections.map((section) => {
              const cm = colorMap[section.color];
              const isOpen = openSection === section.id;
              return (
                <div key={section.id} className={`rounded-2xl border transition-all overflow-hidden ${isOpen ? "border-gray-200 shadow-md" : "border-gray-100"}`}>
                  <button
                    className={`w-full flex items-center justify-between p-5 text-left transition-colors ${isOpen ? cm.bg : "bg-white hover:bg-gray-50"}`}
                    onClick={() => toggle(section.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-11 h-11 ${cm.badge} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon name={section.icon} size={20} className={cm.text} />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-trust-dark-gray">{section.title}</div>
                        <div className="text-gray-500 text-xs mt-0.5">{section.subtitle}</div>
                      </div>
                    </div>
                    <Icon name={isOpen ? "ChevronUp" : "ChevronDown"} size={20} className="text-gray-400 flex-shrink-0 ml-3" />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 pt-4 border-t border-gray-100">
                      {section.body}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Инвестиции */}
      <section className="py-20 px-4 bg-gradient-to-br from-trust-dark-gray to-[#1a3a2a]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-trust-green/20 text-trust-green text-xs px-3 py-1 rounded-full mb-5">
            <Icon name="BarChart2" size={13} />Инвестиции и влияние
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Будущее «Славного Града»</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-sm leading-relaxed">
            Инновационный Социально-Экономический Кластер станет украшением любой территории, стимулируя развитие туризма, экономики и создавая тысячи новых рабочих мест. Строительство кластера позволяет экономически простимулировать широкий спектр промышленных предприятий.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {stats.map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/10">
                <div className="w-10 h-10 bg-trust-green/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon name={s.icon} size={18} className="text-trust-green" />
                </div>
                <div className="text-xl font-black text-white leading-tight mb-1">{s.value}</div>
                <div className="text-green-300 text-xs font-medium">{s.label}</div>
                <div className="text-gray-500 text-xs mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-xs mb-10">* Сумма вложений может увеличиться исходя из экономической ситуации</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/participation">
              <Button size="lg" className="bg-trust-green hover:bg-trust-green-dark text-white px-8">
                <Icon name="UserPlus" size={17} className="mr-2" />
                Стать участником проекта
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white/10 px-8">
                <Icon name="ArrowLeft" size={17} className="mr-2" />
                Все проекты
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SlavnyGrad;