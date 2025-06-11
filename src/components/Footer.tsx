import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-trust-dark-gray text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-trust-blue to-trust-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Д</span>
              </div>
              <div>
                <h3 className="font-bold text-white">Холдинг "Доверие"</h3>
              </div>
            </div>
            <p className="text-sm mb-4">
              Потребительское Общество Международный Кооперативный Холдинг
              "Доверие" — ваш надежный партнер в достижении общих целей.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-trust-blue rounded flex items-center justify-center hover:bg-trust-blue-dark transition-colors"
              >
                <Icon name="Facebook" size={16} className="text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-trust-blue rounded flex items-center justify-center hover:bg-trust-blue-dark transition-colors"
              >
                <Icon name="Twitter" size={16} className="text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-trust-blue rounded flex items-center justify-center hover:bg-trust-blue-dark transition-colors"
              >
                <Icon name="Linkedin" size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-trust-green transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="hover:text-trust-green transition-colors"
                >
                  Новости
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="hover:text-trust-green transition-colors"
                >
                  Проекты
                </a>
              </li>
              <li>
                <a
                  href="/participation"
                  className="hover:text-trust-green transition-colors"
                >
                  Участие
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-trust-green transition-colors"
                >
                  Инвестиционные проекты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-trust-green transition-colors"
                >
                  Кооперативные программы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-trust-green transition-colors"
                >
                  Консультации
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-trust-green transition-colors"
                >
                  Партнерство
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Контакты</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <Icon
                  name="MapPin"
                  size={16}
                  className="text-trust-green mr-2 mt-0.5 flex-shrink-0"
                />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </div>
              <div className="flex items-center">
                <Icon
                  name="Phone"
                  size={16}
                  className="text-trust-green mr-2"
                />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" size={16} className="text-trust-green mr-2" />
                <span>info@doveriye.ru</span>
              </div>
              <div className="flex items-center">
                <Icon
                  name="Clock"
                  size={16}
                  className="text-trust-green mr-2"
                />
                <span>Пн-Пт: 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-trust-gray-dark pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 Холдинг "Доверие". Все права защищены.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <a href="#" className="hover:text-trust-green transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-trust-green transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
