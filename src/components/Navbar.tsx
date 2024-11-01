import React from 'react';
import { Brain, Menu, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  setActiveSection: (section: string) => void;
}

function Navbar({ isMenuOpen, setIsMenuOpen, setActiveSection }: NavbarProps) {
  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'Mood Tracker', section: 'mood' },
    { name: 'Resources', section: 'resources' },
    { name: 'Journal', section: 'journal' },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2" onClick={() => setActiveSection('home')} role="button">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="font-bold text-xl">MindfulCampus</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => setActiveSection(item.section)}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pb-4">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => {
                    setActiveSection(item.section);
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;