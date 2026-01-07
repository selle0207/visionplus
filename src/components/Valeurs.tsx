import { Shield, Zap, Eye, Lightbulb, Heart } from 'lucide-react';

export default function Valeurs() {
  const valeurs = [
    {
      icon: <Shield size={48} />,
      title: 'Professionnalisme',
      description:
        'Nous plaçons l\'excellence au cœur de chaque intervention. Notre équipe d\'experts combine compétences techniques, rigueur méthodologique et éthique professionnelle pour garantir des résultats de haute qualité. Chaque mission est traitée avec le plus grand sérieux et dans le respect des standards les plus élevés.',
      color: 'from-[#1F4E79] to-[#153554]',
    },
    {
      icon: <Zap size={48} />,
      title: 'Proactivité',
      description:
        'Nous anticipons plutôt que nous réagissons. Notre approche proactive nous permet d\'identifier les opportunités avant qu\'elles n\'émergent et de prévenir les risques avant qu\'ils ne se matérialisent. Nous sommes constamment à l\'affût des tendances, des signaux faibles et des moments clés pour agir au meilleur moment.',
      color: 'from-[#153554] to-[#1F4E79]',
    },
    {
      icon: <Eye size={48} />,
      title: 'Transparence',
      description:
        'La confiance se construit sur la transparence. Nous croyons en une communication claire et honnête avec nos clients. Nos recommandations sont franches, nos rapports détaillés et nos processus transparents. Vous savez toujours où vous en êtes et pourquoi nous prenons telle ou telle décision.',
      color: 'from-[#1F4E79] to-[#153554]',
    },
    {
      icon: <Lightbulb size={48} />,
      title: 'Innovation',
      description:
        'Le monde de la communication évolue rapidement. Nous restons à la pointe des nouvelles pratiques, outils et tendances médiatiques. Notre capacité d\'innovation nous permet de proposer des solutions créatives et adaptées aux défis contemporains, tout en intégrant les dernières technologies de monitoring et d\'analyse.',
      color: 'from-[#153554] to-[#1F4E79]',
    },
    {
      icon: <Heart size={48} />,
      title: 'Engagement',
      description:
        'Votre succès est notre succès. Nous nous engageons pleinement dans chaque projet, comme s\'il s\'agissait du nôtre. Cette implication totale se traduit par une disponibilité constante, une écoute attentive de vos besoins et une détermination sans faille à atteindre vos objectifs. Nous sommes à vos côtés sur le long terme.',
      color: 'from-[#1F4E79] to-[#153554]',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1F4E79] mb-6">Nos Valeurs</h1>
          <div className="w-24 h-1 bg-[#C9A24D] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Les principes qui guident notre action et définissent notre identité
          </p>
        </div>

        <div className="space-y-12">
          {valeurs.map((valeur, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="md:flex items-center">
                <div
                  className={`md:w-1/4 p-12 flex flex-col items-center justify-center text-white bg-gradient-to-br ${valeur.color}`}
                >
                  <div className="mb-4 text-[#C9A24D]">{valeur.icon}</div>
                  <h2 className="text-3xl font-bold text-center text-white">
                    {valeur.title}
                  </h2>
                </div>
                <div className="md:w-3/4 p-12">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {valeur.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-[#1F4E79] to-[#153554] rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">
              Des valeurs qui font la différence
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 text-gray-200">
              Ces cinq valeurs ne sont pas de simples mots. Elles constituent le fondement de notre culture d'entreprise et se reflètent dans chaque action, chaque décision et chaque interaction avec nos clients.
            </p>
            <div className="grid md:grid-cols-5 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2 text-[#C9A24D]">100%</div>
                <p className="text-sm opacity-90 text-gray-200">Engagement client</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-[#C9A24D]">24/7</div>
                <p className="text-sm opacity-90 text-gray-200">Disponibilité</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-[#C9A24D]">+15</div>
                <p className="text-sm opacity-90 text-gray-200">Années d'expérience</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-[#C9A24D]">200+</div>
                <p className="text-sm opacity-90 text-gray-200">Clients satisfaits</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-[#C9A24D]">5★</div>
                <p className="text-sm opacity-90 text-gray-200">Excellence</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-2xl font-medium text-gray-700 italic max-w-4xl mx-auto">
            "Nos valeurs ne sont pas négociables. Elles définissent qui nous sommes et comment nous travaillons. C'est ce qui fait de Vision Plus un partenaire de confiance pour les organisations les plus exigeantes."
          </blockquote>
        </div>
      </div>
    </div>
  );
}
