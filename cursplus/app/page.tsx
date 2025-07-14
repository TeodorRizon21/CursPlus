"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      
      // Parallax effect for hero video
      const parallaxElement = document.getElementById('parallax-video');
      if (parallaxElement) {
        const speed = 0.5;
        parallaxElement.style.transform = `translateY(${currentScrollY * speed}px)`;
      }

      // Parallax effect for course section elements
      const parallaxElements = [
        document.getElementById('parallax-element-1'),
        document.getElementById('parallax-element-2'),
        document.getElementById('parallax-element-3')
      ];

      parallaxElements.forEach((element, index) => {
        if (element) {
          const speed = 0.3 + (index * 0.1); // Different speeds for each element
          element.style.transform = `translateY(${currentScrollY * speed}px)`;
        }
      });

      // Navbar hide/show effect
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className={`bg-white shadow-sm sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="/logo-rosu.png" alt="CursPlus Logo" className="h-12 w-auto" />
            </div>
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#cursuri" className="text-gray-700 hover:text-red-600 transition-colors text-sm font-medium">Cursuri</a>
              <a href="#despre" className="text-gray-700 hover:text-red-600 transition-colors text-sm font-medium">Despre Noi</a>
              <a href="#inscriere" className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors">Înscrie-te</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Video Background with Parallax */}
        <div className="absolute inset-0 z-0 transform translate-y-0 transition-transform duration-1000 ease-out" id="parallax-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video-vero.mp4" type="video/mp4" />
          </video>
          {/* Overlay pentru lizibilitate */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
            Adaptează-te la
            <span className="font-semibold block text-white">viitorul digital</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Cursuri practice pentru viața cotidiană și înțelegerea tehnologiei. 
            Transformă provocările digitale în oportunități.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#cursuri"
              className="bg-red-600 text-white px-8 py-4 rounded-md font-medium hover:bg-red-700 transition-colors text-lg"
            >
              Vezi Cursurile
            </a>
            <a
              href="#inscriere"
              className="bg-white bg-opacity-20 backdrop-blur-sm border border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors text-lg"
            >
              Înscrie-te
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Curs Special pentru Adulți și Seniori */}
      <section className="relative py-20 bg-gradient-to-br from-red-50 to-pink-50 overflow-hidden">
        {/* Parallax Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full opacity-20 transform translate-y-0 transition-transform duration-1000 ease-out" id="parallax-element-1"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-red-200 rounded-full opacity-30 transform translate-y-0 transition-transform duration-1000 ease-out" id="parallax-element-2"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-red-100 rounded-full opacity-25 transform translate-y-0 transition-transform duration-1000 ease-out" id="parallax-element-3"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🎯</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Curs Special pentru
              <span className="font-semibold block text-red-600">Adaptarea la tehnologie</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Program de formare practică, conceput special pentru persoanele care doresc să se adapteze la tehnologie. 
              Metode personalizate, ritm adaptat și suport dedicat.
            </p>
          </div>

          <div className="space-y-8">
            {/* Beneficii și Structură */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Beneficii */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-red-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-semibold text-sm">✓</span>
                  </span>
                  Beneficii Cheie
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-red-600 font-semibold text-xs">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Platforme de Comunicare</h4>
                      <p className="text-gray-600 text-sm">WhatsApp, Facebook, Zoom - navigare sigură și eficientă</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-red-600 font-semibold text-xs">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Gestionarea Digitală</h4>
                      <p className="text-gray-600 text-sm">Organizarea fișierelor, email-urilor și documentelor</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-red-600 font-semibold text-xs">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Inteligență Artificială</h4>
                      <p className="text-gray-600 text-sm">Utilizarea AI pentru sarcini zilnice și productivitate</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-red-600 font-semibold text-xs">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Securitate Online</h4>
                      <p className="text-gray-600 text-sm">Protecția datelor personale și navigarea sigură</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Structura cursului */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-red-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-semibold text-sm">📋</span>
                  </span>
                  Structura Programului
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-red-50 rounded-lg">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-red-600 font-semibold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Săptămâni</h4>
                      <p className="text-gray-600 text-sm">Program intensiv și eficient</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-red-50 rounded-lg">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-red-600 font-semibold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Sesiuni pe săptămână</h4>
                      <p className="text-gray-600 text-sm">Program flexibil și adaptabil</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-red-50 rounded-lg">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-red-600 font-semibold">90</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Minute per sesiune</h4>
                      <p className="text-gray-600 text-sm">Sesiuni concentrate și practice</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section - Centrat */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white text-center shadow-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">
                Începe Transformarea Digitală
              </h3>
              <p className="text-red-100 mb-6">
                Fă primul pas spre înțelegerea tehnologiei moderne. 
                Suport personalizat și rezultate garantate.
              </p>
              <a
                href="#inscriere"
                className="inline-block bg-white text-red-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Înscrie-te Acum
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cursuri Section */}
      <section id="cursuri" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Alte Cursuri Disponibile
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Programe suplimentare pentru a-ți extinde cunoștințele tehnologice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Curs 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">💻</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Bazele Tehnologiei
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Învață conceptele fundamentale ale tehnologiei moderne și cum să le folosești în viața de zi cu zi.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Navigare pe internet în siguranță</li>
                <li>• Gestionarea conturilor online</li>
                <li>• Protecția datelor personale</li>
              </ul>
              <a href="#inscriere" className="text-red-600 font-medium text-sm hover:text-red-700 transition-colors">
                Află mai multe →
              </a>
            </div>

            {/* Curs 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">📱</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Smartphone & Aplicații
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Stăpânește telefonul inteligent și descoperă aplicațiile care îți fac viața mai ușoară.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Configurarea telefonului</li>
                <li>• Aplicații utile pentru ziua cu zi</li>
                <li>• Comunicare digitală</li>
              </ul>
              <a href="#inscriere" className="text-red-600 font-medium text-sm hover:text-red-700 transition-colors">
                Află mai multe →
              </a>
            </div>

            {/* Curs 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏠</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Tehnologie pentru Casă
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Transformă casa ta într-un spațiu inteligent cu dispozitive și sisteme moderne.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Dispozitive smart home</li>
                <li>• Automatizări pentru confort</li>
                <li>• Economie de energie</li>
              </ul>
              <a href="#inscriere" className="text-red-600 font-medium text-sm hover:text-red-700 transition-colors">
                Află mai multe →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Despre Noi Section */}
      <section id="despre" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Despre CursPlus
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Suntem dedicați să ajutăm oamenii să se adapteze la schimbările tehnologice rapide din jurul nostru. 
                Cursurile noastre sunt concepute pentru a fi accesibile, practice și relevante pentru viața cotidiană.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm">Instructori experimentați</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm">Metode practice de învățare</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm">Suport continuu după curs</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* AICI ADUGI O IMAGINE DESPRE ECHIPA SAU DESPRE CURSURI */}
              <div className="bg-red-50 rounded-lg p-8 text-center border border-red-100">
                <div className="w-24 h-24 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Echipa Noastră</h3>
                <p className="text-gray-600 text-sm">
                  Instructori pasionați care înțeleg provocările tehnologice moderne
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formular de Înscriere */}
      <section id="inscriere" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Înscrie-te la Cursuri
            </h2>
            <p className="text-gray-600">
              Fă primul pas spre viitorul digital. Completează formularul și te vom contacta în curând.
            </p>
          </div>

          <form className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="nume" className="block text-sm font-medium text-gray-700 mb-2">
                  Nume și Prenume *
                </label>
                <input
                  type="text"
                  id="nume"
                  name="nume"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Introdu numele tău"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="email@exemplu.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="07XX XXX XXX"
                />
              </div>
              
              <div>
                <label htmlFor="curs" className="block text-sm font-medium text-gray-700 mb-2">
                  Cursul dorit *
                </label>
                <select
                  id="curs"
                  name="curs"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Selectează un curs</option>
                  <option value="baze-tehnologie">Bazele Tehnologiei</option>
                  <option value="smartphone-aplicatii">Smartphone & Aplicații</option>
                  <option value="tehnologie-casa">Tehnologie pentru Casă</option>
                  <option value="toate">Toate cursurile</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="mesaj" className="block text-sm font-medium text-gray-700 mb-2">
                Mesaj (opțional)
              </label>
              <textarea
                id="mesaj"
                name="mesaj"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Spune-ne despre nevoile tale specifice..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
              >
                Trimite Înscrierea
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
            <div className="flex items-center">
              <img src="/logo-rosu.png" alt="CursPlus Logo" className="h-12 w-auto" />
            </div>
              <p className="pt-4 text-gray-400 text-sm">
                Cursuri practice pentru adaptarea la viața cotidiană și înțelegerea tehnologiei.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-sm">Contact</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>📧 contact@cursplus.ro</p>
                <p>📞 0722 438 098</p>
                <p>📍 București, România</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-sm">Urmărește-ne</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 CursPlus. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
