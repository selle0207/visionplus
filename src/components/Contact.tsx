import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    organisation: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nom: '',
        organisation: '',
        email: '',
        telephone: '',
        sujet: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#0F2A44] mb-6">Contact</h1>
          <div className="w-24 h-1 bg-[#C9A24D] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Parlons de vos besoins en communication stratégique. Notre équipe est à votre écoute pour vous accompagner dans vos projets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <h2 className="text-3xl font-bold text-[#0F2A44] mb-8">
                Envoyez-nous un message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2A44] focus:border-transparent outline-none transition"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2A44] focus:border-transparent outline-none transition"
                    placeholder="Votre entreprise ou institution"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2A44] focus:border-transparent outline-none transition"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2A44] focus:border-transparent outline-none transition"
                    placeholder="+33 X XX XX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2A44] focus:border-transparent outline-none transition"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="monitoring">Monitoring médiatique</option>
                    <option value="media-training">Média training</option>
                    <option value="personal-branding">Personal branding</option>
                    <option value="relations-presse">Relations presse</option>
                    <option value="evenementiel">Couverture événementielle</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2A44] focus:border-transparent outline-none transition resize-none"
                    placeholder="Décrivez votre projet ou vos besoins..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0F2A44] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1F4E79] transition-colors flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#0F2A44] to-[#1F4E79] rounded-2xl shadow-lg p-10 text-white">
              <h2 className="text-3xl font-bold mb-8">Coordonnées</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <MapPin size={24} className="text-[#C9A24D]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-[#C9A24D]">Adresse</h3>
                    <p className="opacity-90 text-gray-200">
                      Avenue de la République<br />
                      Dakar, Sénégal
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Phone size={24} className="text-[#C9A24D]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-[#C9A24D]">Téléphone</h3>
                    <p className="opacity-90 text-gray-200">+221 XX XXX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Mail size={24} className="text-[#C9A24D]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-[#C9A24D]">Email</h3>
                    <p className="opacity-90 text-gray-200">contact@visionplus.sn</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-10">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Horaires d'ouverture
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Lundi - Vendredi</span>
                  <span>8h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Samedi</span>
                  <span>9h00 - 13h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Dimanche</span>
                  <span className="text-gray-400">Fermé</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-[#0F2A44]">Service d'urgence :</span> Disponible 24/7 pour nos clients en situation de crise
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-[#0F2A44] mb-3">
                Besoin d'une réponse rapide ?
              </h3>
              <p className="text-gray-600 mb-6">
                Planifiez un rendez-vous téléphonique avec l'un de nos experts
              </p>
              <button className="bg-[#0F2A44] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1F4E79] transition-colors">
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
