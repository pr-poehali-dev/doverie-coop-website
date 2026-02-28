import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const steps = [
  {
    num: "01",
    icon: "FileText",
    title: "Подайте заявление",
    desc: "Заполните заявление на вступление в потребительское общество МКХ «Доверие». Заявление можно подать лично в офисе или направить в электронном виде.",
  },
  {
    num: "02",
    icon: "CreditCard",
    title: "Внесите вступительный взнос",
    desc: "Оплатите единовременный вступительный взнос — он покрывает расходы на оформление и регистрацию вашего членства в кооперативе.",
  },
  {
    num: "03",
    icon: "Wallet",
    title: "Внесите паевой взнос",
    desc: "Паевой взнос — это ваша доля в имуществе кооператива. Именно он формирует фонд развития проектов, в которых вы участвуете как пайщик.",
  },
  {
    num: "04",
    icon: "BadgeCheck",
    title: "Получите членскую книжку",
    desc: "После оформления вы получаете членскую книжку пайщика и доступ ко всем льготам, проектам и сервисам холдинга «Доверие».",
  },
];

const contributions = [
  {
    icon: "DoorOpen",
    color: "blue",
    title: "Вступительный взнос",
    amount: "500 ₽",
    label: "единовременно",
    desc: "Оплачивается один раз при вступлении. Покрывает административные расходы на оформление членства. Возврату не подлежит.",
    points: [
      "Оплачивается один раз",
      "Не возвращается при выходе",
      "Подтверждает серьёзность намерений",
    ],
  },
  {
    icon: "PiggyBank",
    color: "green",
    title: "Паевой взнос",
    amount: "от 10 000 ₽",
    label: "минимальный размер",
    desc: "Основной взнос, формирующий вашу долю в имуществе кооператива. Может вноситься единовременно или частями. Возвращается при выходе из кооператива.",
    points: [
      "Формирует вашу долю в кооперативе",
      "Возвращается при выходе",
      "Можно вносить частями",
      "Участвует в финансировании проектов",
    ],
  },
  {
    icon: "RefreshCw",
    color: "orange",
    title: "Членский взнос",
    amount: "по решению совета",
    label: "периодический",
    desc: "Регулярный взнос на текущую деятельность кооператива: административные расходы, содержание офиса, обучение. Размер устанавливается решением общего собрания.",
    points: [
      "Периодичность — раз в год",
      "Идёт на операционную деятельность",
      "Размер принимается на собрании",
      "Не возвращается",
    ],
  },
  {
    icon: "Target",
    color: "purple",
    title: "Целевой взнос",
    amount: "по желанию",
    label: "на конкретный проект",
    desc: "Добровольный взнос для участия в конкретном проекте холдинга — например, в «Славном Граде» или строительном кооперативе. Размер определяется условиями проекта.",
    points: [
      "Направляется в конкретный проект",
      "Добровольный характер",
      "Условия возврата — по договору",
      "Даёт дополнительные права в проекте",
    ],
  },
];

const rights = [
  { icon: "Vote", text: "Голосовать на общих собраниях и участвовать в управлении кооперативом" },
  { icon: "TrendingUp", text: "Получать часть прибыли от деятельности кооператива (кооперативные выплаты)" },
  { icon: "ShoppingBag", text: "Пользоваться скидками и льготами в торговом кооперативе «Ярмарка»" },
  { icon: "GraduationCap", text: "Бесплатно обучаться в образовательном центре «Знание»" },
  { icon: "HeartPulse", text: "Получать льготное медицинское обслуживание через кооператив «Здоровье»" },
  { icon: "Home", text: "Участвовать в жилищных и строительных программах холдинга" },
  { icon: "Leaf", text: "Участвовать в проекте «Славный Град» и других туристических инициативах" },
  { icon: "Info", text: "Получать полную информацию о деятельности и финансах кооператива" },
];

const colorMap: Record<string, { bg: string; text: string; badge: string; border: string }> = {
  blue:   { bg: "bg-blue-50",   text: "text-blue-700",   badge: "bg-blue-100 text-blue-700",   border: "border-blue-200" },
  green:  { bg: "bg-emerald-50", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700", border: "border-emerald-200" },
  orange: { bg: "bg-orange-50", text: "text-orange-700", badge: "bg-orange-100 text-orange-700", border: "border-orange-200" },
  purple: { bg: "bg-purple-50", text: "text-purple-700", badge: "bg-purple-100 text-purple-700", border: "border-purple-200" },
};

const faq = [
  {
    q: "Можно ли вернуть паевой взнос?",
    a: "Да. При добровольном выходе из кооператива паевой взнос возвращается в полном размере в течение 3 месяцев после подачи заявления о выходе. Вступительный и членский взносы возврату не подлежат.",
  },
  {
    q: "Обязателен ли целевой взнос?",
    a: "Нет, целевой взнос — добровольный. Он нужен только если вы хотите участвовать в конкретном проекте (например, «Славный Град» или строительный кооператив). Без него вы всё равно остаётесь полноправным пайщиком.",
  },
  {
    q: "Как часто платится членский взнос?",
    a: "Один раз в год. Размер устанавливается на общем годовом собрании пайщиков. О размере взноса на следующий год вы узнаёте заблаговременно.",
  },
  {
    q: "Можно ли вносить паевой взнос частями?",
    a: "Да. Минимальный первоначальный взнос — 10 000 рублей. Оставшуюся часть можно вносить частями по согласованному графику. Условия рассрочки обсуждаются индивидуально.",
  },
  {
    q: "Что даёт участие в холдинге обычному человеку?",
    a: "Доступ к скидкам в магазинах сети «Ярмарка», бесплатное обучение, льготная медицина, участие в прибыли от совместных проектов и право голоса в управлении. Это не инвестиционный фонд — это сообщество взаимной помощи.",
  },
];

const Participation = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-trust-dark-gray via-trust-blue-dark to-trust-green-dark py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-20 w-80 h-80 rounded-full bg-trust-green blur-3xl" />
        </div>
        <div className="container mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm px-4 py-1.5 rounded-full mb-5">
            <Icon name="UserPlus" size={15} />
            Стать пайщиком
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-montserrat mb-4">
            Участие в кооперативе
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
            Стать пайщиком холдинга «Доверие» — значит войти в сообщество людей, которые строят экономику взаимной поддержки и совместного развития
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { val: "1 385", label: "пайщиков" },
              { val: "8", label: "кооперативов" },
              { val: "5 лет", label: "на рынке" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-white">{s.val}</div>
                <div className="text-blue-200 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trust-dark-gray mb-3">Как вступить — 4 шага</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Процесс вступления занимает один рабочий день</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative">
                <div className="text-5xl font-black text-gray-100 absolute top-4 right-4 leading-none select-none">
                  {step.num}
                </div>
                <div className="w-11 h-11 bg-gradient-to-br from-trust-blue to-trust-green rounded-xl flex items-center justify-center mb-4">
                  <Icon name={step.icon} size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-trust-dark-gray mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributions */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trust-dark-gray mb-3">Виды взносов</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              В кооперативе предусмотрены разные виды взносов — каждый выполняет свою роль и регулируется уставом ПО МКХ «Доверие»
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {contributions.map((c, i) => {
              const cm = colorMap[c.color];
              return (
                <div key={i} className={`rounded-2xl border ${cm.border} ${cm.bg} p-6`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={22} className={cm.text} />
                    </div>
                    <div>
                      <h3 className="font-bold text-trust-dark-gray text-lg">{c.title}</h3>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className={`text-xl font-black ${cm.text}`}>{c.amount}</span>
                        <span className="text-xs text-gray-400">{c.label}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{c.desc}</p>
                  <ul className="space-y-1.5">
                    {c.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className={`w-4 h-4 rounded-full ${cm.badge} flex items-center justify-center flex-shrink-0`}>
                          <Icon name="Check" size={10} className={cm.text} />
                        </div>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Summary table */}
          <div className="mt-8 bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
            <div className="bg-trust-dark-gray px-6 py-4">
              <h3 className="text-white font-semibold">Итог: минимальные расходы при вступлении</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {[
                { name: "Вступительный взнос", amount: "500 ₽", note: "единовременно, не возвращается" },
                { name: "Паевой взнос (минимум)", amount: "10 000 ₽", note: "возвращается при выходе" },
                { name: "Членский взнос", amount: "по решению совета", note: "раз в год" },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4">
                  <div>
                    <div className="font-medium text-trust-dark-gray">{row.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{row.note}</div>
                  </div>
                  <div className="font-bold text-trust-dark-gray text-right">{row.amount}</div>
                </div>
              ))}
              <div className="flex items-center justify-between px-6 py-4 bg-trust-green/5">
                <div className="font-bold text-trust-dark-gray">При вступлении (первый платёж)</div>
                <div className="font-black text-trust-green text-xl">от 10 500 ₽</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rights */}
      <section className="py-16 px-4 bg-gradient-to-br from-trust-blue/5 to-trust-green/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trust-dark-gray mb-3">Права пайщика</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Всё, что вы получаете, став членом ПО МКХ «Доверие»</p>
          </div>
          <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {rights.map((r, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="w-9 h-9 bg-trust-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={r.icon} size={18} className="text-trust-green" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-trust-dark-gray mb-3">Частые вопросы</h2>
          </div>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-trust-dark-gray text-sm">{item.q}</span>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={18}
                    className="text-gray-400 flex-shrink-0 ml-3"
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-trust-dark-gray">
        <div className="container mx-auto max-w-xl text-center">
          <div className="w-16 h-16 bg-trust-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="UserPlus" size={30} className="text-trust-green" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Готовы вступить?</h2>
          <p className="text-gray-400 mb-8">
            Запишитесь на консультацию — мы расскажем обо всех деталях, поможем выбрать подходящий проект и оформим документы
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-trust-green hover:bg-trust-green-dark text-white px-8">
              <Icon name="UserPlus" size={18} className="mr-2" />
              Подать заявку
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white/10 px-8">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить нам
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-5">+7 (495) 123-45-67 · Пн–Пт 9:00–18:00</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Participation;
