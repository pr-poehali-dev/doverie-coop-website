import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLink = (href: string, label: string) => (
    <Link
      to={href}
      className={`transition-colors ${
        location.pathname === href
          ? "text-trust-blue font-semibold"
          : "text-trust-dark-gray hover:text-trust-blue"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="bg-white shadow-sm border-b border-trust-gray-light/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-trust-blue to-trust-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Д</span>
            </div>
            <div>
              <h1 className="font-bold text-trust-dark-gray text-lg">
                Холдинг "Доверие"
              </h1>
              <p className="text-xs text-trust-gray">Кооперативный холдинг</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLink("/", "Главная")}
            {navLink("/news", "Новости")}
            {navLink("/projects", "Проекты")}
            {navLink("/participation", "Участие")}
            <Button className="bg-trust-green hover:bg-trust-green-dark">
              Связаться
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-trust-gray-light/30">
            <nav className="flex flex-col space-y-4">
              {navLink("/", "Главная")}
              {navLink("/news", "Новости")}
              {navLink("/projects", "Проекты")}
              {navLink("/participation", "Участие")}
              <Button className="bg-trust-green hover:bg-trust-green-dark w-full">
                Связаться
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;