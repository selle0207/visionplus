import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-r from-[#1F4E79] to-[#153554] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/chatgpt_image_dec_25,_2025,_08_26_11_pm.png" 
                alt="Vision Plus Logo" 
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Donner de la visibilité, maîtriser le message. Votre partenaire en communication stratégique et gestion de réputation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#C9A24D]">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('accueil')}
                  className="text-gray-300 hover:text-[#C9A24D] transition-colors text-sm"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('apropos')}
                  className="text-gray-300 hover:text-[#C9A24D] transition-colors text-sm"
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('secteurs')}
                  className="text-gray-300 hover:text-[#C9A24D] transition-colors text-sm"
                >
                  Secteurs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-gray-300 hover:text-[#C9A24D] transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('valeurs')}
                  className="text-gray-300 hover:text-[#C9A24D] transition-colors text-sm"
                >
                  Valeurs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-300 hover:text-[#C9A24D] transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#C9A24D]">Nos Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Monitoring Médiatique</li>
              <li>Média Training</li>
              <li>Personal Branding</li>
              <li>Relations Presse</li>
              <li>Couverture Événementielle</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#C9A24D]">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0 text-[#C9A24D]" />
                <span className="text-gray-300">Avenue de la République, Dakar</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0 text-[#C9A24D]" />
                <span className="text-gray-300">+221 XX XXX XX XX</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0 text-[#C9A24D]" />
                <span className="text-gray-300">contact@visionplus.sn</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold text-sm mb-3 text-[#C9A24D]">Suivez-nous</h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#1F4E79] flex items-center justify-center hover:bg-[#C9A24D] hover:text-[#1F4E79] transition-colors"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#1F4E79] flex items-center justify-center hover:bg-[#C9A24D] hover:text-[#1F4E79] transition-colors"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#1F4E79] flex items-center justify-center hover:bg-[#C9A24D] hover:text-[#1F4E79] transition-colors"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#153554] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 Vision Plus. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#C9A24D] transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-[#C9A24D] transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
