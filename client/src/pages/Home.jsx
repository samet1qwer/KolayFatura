import React from "react";
import arkaPlan from "../assets/arka-plan.png";
import Navbar from "../companets/navbar";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <section
        id="home"
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={arkaPlan}
            className="w-full h-full object-cover hidden md:block opacity-60"
            alt=""
          />
        </div>

        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2 rounded-full mb-6">
          <i className="fas fa-star text-blue-500 text-xs"></i>
          Freelancerlar için özel tasarlandı
        </div>

        <div className="flex flex-col items-center gap-2 mb-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Fatura oluşturmak
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold text-blue-500 leading-tight">
            hiç bu kadar kolay olmamıştı
          </h1>
        </div>

        <p className="max-w-xl text-gray-500 text-lg leading-relaxed mb-8">
          Dakikalar içinde profesyonel faturalar oluşturun. PDF olarak indirin,
          müşterilerinize gönderin ve ödemeleri takip edin.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
            Ücretsiz başlat
          </button>
          <button className="px-6 py-3 bg-white text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            Özellikleri keşfet
          </button>
        </div>
      </section>

      <section
        id="features"
        className="w-full py-24 bg-gray-50 flex flex-col items-center text-center px-4"
      >
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            İhtiyacınız olan her şey tek bir yerde
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Faturalarınızı oluşturun, PDF olarak indirin, müşterilerinize
            gönderin ve ödemeleri takip edin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-left hover:shadow-md transition">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <i className="fas fa-file-invoice text-blue-500 text-lg"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Fatura Oluştur
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Dakikalar içinde profesyonel görünümlü faturalar hazırlayın.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-left hover:shadow-md transition">
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mb-4">
              <i className="fas fa-file-pdf text-red-500 text-lg"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">PDF İndir</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Faturalarınızı tek tıkla PDF formatında indirin ve saklayın.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-left hover:shadow-md transition">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
              <i className="fas fa-chart-line text-green-500 text-lg"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Ödeme Takibi
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Hangi faturaların ödendiğini, beklendiğini kolayca takip edin.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-left hover:shadow-md transition">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <i className="fas fa-book text-orange-500 text-lg"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Raporlama</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Aylik ve yillik gelir raporlarinizi goruntuleyin, islerinizi
              analiz edin.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-left hover:shadow-md transition">
            <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center mb-4">
              <i className="fas fa-lightbulb text-yellow-500 text-lg"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Hizli Olusturma
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Dakikalar icinde fatura olusturun. Otomatik hesaplamalar ile
              zamandan tasarruf edin.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-left hover:shadow-md transition">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
              <i className="fas fa-shield text-gray-500 text-lg"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Guvenli Depolama
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Hangi faturaların ödendiğini, beklendiğini kolayca takip edin.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-24 bg-gray-50 flex flex-col items-center text-center px-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Basit ve şeffaf fiyatlandırma
          </h2>
          <p className="text-gray-500 mt-2">
            İhtiyacınıza uygun planı seçin. Gizli ücret yok.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full mx-auto mt-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-left hover:shadow-md transition flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-gray-900">
                Ücretsiz başlat
              </h4>
              <p className="text-gray-500 text-sm mt-1">
                Dakikalar içinde profesyonel görünümlü faturalar hazırlayın.
              </p>

              <h3 className="text-2xl font-bold text-blue-500 mt-4">
                Ücretsiz
              </h3>

              <ul className="mt-4 space-y-2 text-gray-500 text-sm">
                <li className="flex items-start">
                  <i className="fas fa-check text-blue-500 mr-2 mt-1"></i>
                  Ayda 3 fatura
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-blue-500 mr-2 mt-1"></i>
                  PDF indirme
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-blue-500 mr-2 mt-1"></i>
                  Temel şablonlar
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-blue-500 mr-2 mt-1"></i>
                  E-posta desteği
                </li>
              </ul>
            </div>

            <button className="mt-6 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition w-full">
              Ücretsiz başlat
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-blue-500 p-6 text-left hover:shadow-md transition flex flex-col justify-between relative">
            <div>
              <h4 className="text-lg font-bold text-gray-900">Premium</h4>
              <p className="text-gray-500 text-sm mt-1">Profesyoneller için</p>

              <h3 className="text-2xl font-bold text-gray-900 mt-4">
                50 TL <span className="text-sm text-gray-500">/ ay</span>
              </h3>

              <ul className="mt-4 space-y-2 text-gray-500 text-sm">
                <li className="flex items-start">
                  <i className="fas fa-check text-blue-500 mr-2 mt-1"></i>
                  Sınırsız fatura
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-blue-500 mr-2 mt-1"></i>
                  PDF indirme
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-blue-500 mr-2 mt-1"></i>
                  Özel şablonlar
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-blue-500 mr-2 mt-1"></i>
                  Öncelikli destek
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-blue-500 mr-2 mt-1"></i>
                  Müşteri yönetimi
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-blue-500 mr-2 mt-1"></i>
                  Raporlama
                </li>
              </ul>
            </div>

            <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition w-full">
              Ücretsiz başlat
            </button>
          </div>
        </div>
      </section>

      <footer className="mt-12 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent">
          <div className="px-4 py-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-xs text-gray-400 text-center  cursor-pointer"
              onClick={() => navigate("/")}
            >
              Fatura Takip Sistemi
            </p>
            <p className="text-xs text-gray-400">
              © 2026 Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
