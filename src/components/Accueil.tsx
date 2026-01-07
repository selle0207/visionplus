import { Eye, Target, Users, TrendingUp } from 'lucide-react';

interface AccueilProps {
  onNavigate: (section: string) => void;
}

export default function Accueil({ onNavigate }: AccueilProps) {
  const services = [
    {
      icon: <Eye size={32} />,
      title: 'Monitoring Médiatique',
      description: 'Veille presse et analyse du contexte médiatique en temps réel',
    },
    {
      icon: <Target size={32} />,
      title: 'Média Training',
      description: 'Formation à la prise de parole et gestion des situations sensibles',
    },
    {
      icon: <Users size={32} />,
      title: 'Personal Branding',
      description: 'Gestion stratégique de votre image numérique et personnelle',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Relations Presse',
      description: 'Couverture médiatique et coordination événementielle',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center text-white">
        {/* Image de fond */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/imagefondaccueil.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        {/* Couche de superposition bleue avec opacité réduite */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F4E79] to-[#153554] opacity-60 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Donner de la visibilité,<br />maîtriser le message
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Agence de référence en gestion de communication stratégique,<br />valorisation d'image et réputation médiatique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#C9A24D] text-[#1F4E79] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E0B973] transition-colors"
            >
              Demander un rendez-vous
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Découvrir nos services
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F4E79] mb-4">
              Vision Plus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous accompagnons les entreprises, institutions et personnalités publiques dans la maîtrise de leur communication et la valorisation de leur image, au niveau national et international.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-200 hover:border-[#C9A24D] hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => onNavigate('services')}
              >
                <div className="text-[#1F4E79] group-hover:text-[#C9A24D] transition-colors mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#1F4E79] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-[#C9A24D] mb-3">+15</div>
              <p className="text-xl text-[#1F4E79]">Années d'expertise</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#C9A24D] mb-3">200+</div>
              <p className="text-xl text-[#1F4E79]">Clients accompagnés</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#C9A24D] mb-3">24/7</div>
              <p className="text-xl text-[#1F4E79]">Veille médiatique</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1F4E79] mb-6">
            Prêt à maîtriser votre image médiatique ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contactez-nous pour discuter de vos besoins en communication stratégique
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gradient-to-r from-[#1F4E79] to-[#153554] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-[#153554] hover:to-[#1F4E79] transition-all"
          >
            Prendre contact
          </button>
        </div>
      </section>
    </div>
  );
}
