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
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://cdn.poehali.dev/projects/a943c68c-4c6f-4e54-ac8c-c6ff5ebee83d/bucket/b6627702-8976-4fa4-b262-f66320fc85b0.png"
              alt="Доверие"
              className="h-14 w-auto object-contain"
            />
          </Link>

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