import { Target, Eye, Award, Globe } from 'lucide-react';

export default function APropos() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#0F2A44] mb-6">À propos</h1>
          <div className="w-24 h-1 bg-[#C9A24D] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vision Plus est une agence de référence dans la gestion de la communication stratégique, la valorisation d'image et la réputation médiatique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0F2A44] flex items-center justify-center">
                <Target className="text-[#C9A24D]" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0F2A44] mb-3">Notre Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Accompagner nos clients dans la maîtrise de leur communication et la valorisation de leur image publique. Nous transformons les messages en impact et la visibilité en influence durable.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0F2A44] flex items-center justify-center">
                <Eye className="text-[#C9A24D]" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0F2A44] mb-3">Notre Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Être le partenaire stratégique de référence pour toute organisation ou personnalité souhaitant développer une présence médiatique forte, cohérente et maîtrisée, aux niveaux national et international.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0F2A44] flex items-center justify-center">
                <Award className="text-[#C9A24D]" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0F2A44] mb-3">Notre Positionnement</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous nous positionnons comme une agence premium offrant une approche intégrée et sur-mesure, combinant expertise technique, intelligence stratégique et excellence opérationnelle.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0F2A44] flex items-center justify-center">
                <Globe className="text-[#C9A24D]" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0F2A44] mb-3">Notre Portée</h3>
                <p className="text-gray-600 leading-relaxed">
                  Avec une présence nationale et des connexions internationales, nous intervenons auprès d'entreprises privées et publiques, d'institutions gouvernementales, d'ONG et de personnalités de premier plan.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-[#0F2A44] mb-8 text-center">
            Notre Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0F2A44] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#C9A24D]">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                Analyse Médiatique
              </h3>
              <p className="text-gray-600">
                Monitoring en temps réel, analyse du contexte sociopolitique et économique, rapports détaillés pour une vision complète de votre environnement médiatique.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0F2A44] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#C9A24D]">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                Gestion de Réputation
              </h3>
              <p className="text-gray-600">
                Construction et protection de votre image publique, gestion de crise, développement d'une présence digitale cohérente et impactante.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0F2A44] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#C9A24D]">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                Communication Stratégique
              </h3>
              <p className="text-gray-600">
                Élaboration de stratégies de communication sur-mesure, formation à la prise de parole, coordination d'événements et relations médias.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <blockquote className="text-2xl font-medium text-gray-700 italic max-w-4xl mx-auto">
            "Dans un monde où l'information circule instantanément, maîtriser son message n'est plus une option, c'est une nécessité stratégique."
          </blockquote>
          <p className="mt-6 text-lg text-[#0F2A44] font-semibold">
            Vision Plus
          </p>
        </div>
      </div>
    </div>
  );
}
