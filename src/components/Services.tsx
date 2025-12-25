import { Eye, Mic, UserCheck, Newspaper, Calendar } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Eye size={40} />,
      title: 'Monitoring Médiatique',
      subtitle: 'Veille stratégique et analyse',
      description: 'Une surveillance complète et une analyse approfondie de votre environnement médiatique pour anticiper et agir au bon moment.',
      features: [
        'Veille presse écrite et digitale en temps réel',
        'Rapports quotidiens ou hebdomadaires personnalisés',
        'Analyse du contexte sociopolitique et économique',
        'Identification des tendances et signaux faibles',
        'Alertes immédiates sur mentions critiques',
        'Cartographie des acteurs médiatiques',
      ],
      color: '#0F2A44',
    },
    {
      icon: <Mic size={40} />,
      title: 'Média Training',
      subtitle: 'Formation à la prise de parole',
      description: 'Développez votre aisance et votre impact face aux médias grâce à nos formations sur-mesure et nos sessions de coaching personnalisées.',
      features: [
        'Formation à la prise de parole publique',
        'Construction d\'éléments de langage percutants',
        'Gestion d\'interviews (TV, radio, presse)',
        'Préparation aux conférences de presse',
        'Gestion des situations sensibles et de crise',
        'Simulations et mises en situation réelles',
      ],
      color: '#1F4E79',
    },
    {
      icon: <UserCheck size={40} />,
      title: 'Personal Branding',
      subtitle: 'Valorisation de l\'image personnelle',
      description: 'Construisez et gérez votre marque personnelle avec une stratégie digitale cohérente et une présence en ligne maîtrisée.',
      features: [
        'Audit et stratégie d\'image personnelle',
        'Gestion de l\'image numérique',
        'Création et modération de contenus',
        'Développement de présence sur réseaux sociaux',
        'Mise en relation avec influenceurs et médias',
        'Coaching en communication personnelle',
      ],
      color: '#0F2A44',
    },
    {
      icon: <Newspaper size={40} />,
      title: 'Relations Presse & Couverture Médiatique',
      subtitle: 'Communication corporate & institutionnelle',
      description: 'Maximisez votre visibilité médiatique avec une stratégie de relations presse efficace et des actions ciblées.',
      features: [
        'Mobilisation et gestion des médias',
        'Rédaction et diffusion de communiqués',
        'Organisation de conférences de presse',
        'Mise en relation avec journalistes clés',
        'Placement d\'articles et tribunes',
        'Gestion de l\'e-réputation',
      ],
      color: '#1F4E79',
    },
    {
      icon: <Calendar size={40} />,
      title: 'Couverture Événementielle',
      subtitle: 'Organisation et coordination',
      description: 'Assurez le succès médiatique de vos événements avec une planification rigoureuse et une exécution sans faille.',
      features: [
        'Organisation et coordination d\'événements',
        'Mobilisation médiatique ciblée',
        'Couverture médiatique avant/pendant/après',
        'Gestion logistique des médias',
        'Production de contenus événementiels',
        'Reporting et monitoring post-événement',
      ],
      color: '#0F2A44',
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#0F2A44] mb-6">Nos Services</h1>
          <div className="w-24 h-1 bg-[#C9A24D] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de services intégrés pour maîtriser votre communication et valoriser votre image
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-lg ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white border-2 border-gray-100'
              }`}
            >
              <div className="md:flex">
                {index % 2 === 0 ? (
                  <>
                    <div
                      className="md:w-2/5 p-12 text-white flex flex-col justify-center"
                      style={{ backgroundColor: service.color }}
                    >
                      <div className="mb-6 text-[#C9A24D]">{service.icon}</div>
                      <h2 className="text-3xl font-bold mb-2 text-white">{service.title}</h2>
                      <p className="text-lg opacity-90 mb-4 text-[#C9A24D]">{service.subtitle}</p>
                      <p className="text-base leading-relaxed opacity-90 text-gray-200">
                        {service.description}
                      </p>
                    </div>
                    <div className="md:w-3/5 p-12">
                      <h3 className="text-2xl font-semibold text-[#0F2A44] mb-6">
                        Ce que nous proposons :
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span
                              className="inline-block w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5"
                              style={{ backgroundColor: service.color }}
                            >
                              <span className="text-white text-sm">✓</span>
                            </span>
                            <span className="text-gray-700 text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-3/5 p-12 order-2 md:order-1">
                      <h3 className="text-2xl font-semibold text-[#0F2A44] mb-6">
                        Ce que nous proposons :
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span
                              className="inline-block w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5"
                              style={{ backgroundColor: service.color }}
                            >
                              <span className="text-white text-sm">✓</span>
                            </span>
                            <span className="text-gray-700 text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className="md:w-2/5 p-12 text-white flex flex-col justify-center order-1 md:order-2"
                      style={{ backgroundColor: service.color }}
                    >
                      <div className="mb-6 text-[#C9A24D]">{service.icon}</div>
                      <h2 className="text-3xl font-bold mb-2 text-white">{service.title}</h2>
                      <p className="text-lg opacity-90 mb-4 text-[#C9A24D]">{service.subtitle}</p>
                      <p className="text-base leading-relaxed opacity-90 text-gray-200">
                        {service.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-[#0F2A44] to-[#1F4E79] rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Notre Approche Intégrée</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 text-gray-200">
            Ce qui nous distingue : une vision globale et cohérente de votre communication. Nos services se complètent et s'articulent pour créer une stratégie harmonieuse et efficace.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-[#C9A24D]">Synergie</h3>
              <p className="opacity-90 text-gray-200">
                Chaque service renforce les autres pour un impact maximal
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-[#C9A24D]">Sur-mesure</h3>
              <p className="opacity-90 text-gray-200">
                Des solutions adaptées à vos besoins et objectifs spécifiques
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-[#C9A24D]">Excellence</h3>
              <p className="opacity-90 text-gray-200">
                Un niveau d'exigence élevé dans chaque intervention
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
