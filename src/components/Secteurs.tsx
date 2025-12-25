import { Building2, Landmark, Heart, UserCircle } from 'lucide-react';

export default function Secteurs() {
  const secteurs = [
    {
      icon: <Building2 size={48} />,
      title: 'Entreprises',
      description: 'Nous accompagnons les entreprises privées et publiques dans la gestion de leur communication corporate, le développement de leur notoriété et la protection de leur réputation.',
      services: [
        'Communication institutionnelle et corporate',
        'Gestion de crise et réputation',
        'Relations médias et presse',
        'Veille concurrentielle et sectorielle',
        'Communication de direction générale',
      ],
    },
    {
      icon: <Landmark size={48} />,
      title: 'Institutions & Organisations Internationales',
      description: 'Nous soutenons les institutions gouvernementales et organisations internationales dans leurs stratégies de communication publique et leur rayonnement institutionnel.',
      services: [
        'Communication institutionnelle',
        'Gestion de l\'image publique',
        'Coordination de campagnes d\'information',
        'Relations avec les médias nationaux et internationaux',
        'Monitoring du climat sociopolitique',
      ],
    },
    {
      icon: <Heart size={48} />,
      title: 'ONG & Fondations',
      description: 'Nous aidons les ONG, fondations et associations à amplifier leur impact, mobiliser leurs publics et renforcer leur visibilité médiatique.',
      services: [
        'Stratégies de plaidoyer',
        'Campagnes de sensibilisation',
        'Relations presse et médias',
        'Mobilisation des parties prenantes',
        'Storytelling et valorisation d\'impact',
      ],
    },
    {
      icon: <UserCircle size={48} />,
      title: 'Personnalités Publiques & Leaders d\'Opinion',
      description: 'Nous accompagnons les dirigeants, personnalités publiques et influenceurs dans la construction et la gestion de leur image personnelle et professionnelle.',
      services: [
        'Personal branding et image personnelle',
        'Média training et coaching',
        'Gestion de présence digitale',
        'Conseil en prise de parole publique',
        'Gestion de réputation en ligne',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#0F2A44] mb-6">
            Secteurs d'Intervention
          </h1>
          <div className="w-24 h-1 bg-[#C9A24D] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous intervenons auprès de publics diversifiés, avec une expertise adaptée à chaque secteur et une compréhension approfondie de leurs enjeux spécifiques.
          </p>
        </div>

        <div className="space-y-12">
          {secteurs.map((secteur, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-[#0F2A44] to-[#1F4E79] p-12 flex flex-col items-center justify-center text-white">
                  <div className="mb-6 text-[#C9A24D]">{secteur.icon}</div>
                  <h2 className="text-3xl font-bold text-center text-white">
                    {secteur.title}
                  </h2>
                </div>
                <div className="md:w-2/3 p-8">
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {secteur.description}
                  </p>
                  <h3 className="text-xl font-semibold text-[#0F2A44] mb-4">
                    Nos interventions :
                  </h3>
                  <ul className="space-y-3">
                    {secteur.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-[#C9A24D] mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-xl p-12 shadow-md text-center">
          <h2 className="text-3xl font-bold text-[#0F2A44] mb-6">
            Votre secteur n'est pas listé ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Chaque client est unique. Nous adaptons nos services à vos besoins spécifiques, quel que soit votre domaine d'activité.
          </p>
          <button className="bg-[#0F2A44] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#1F4E79] transition-colors">
            Discutons de vos besoins
          </button>
        </div>
      </div>
    </div>
  );
}
