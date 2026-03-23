import React from "react";
import { useState } from "react";
function Dashboard() {
  const [modal, setModal] = useState(false);

  return (
    <div className="w-full  h-screen bg-slate-100 ">
      <nav className="fixed top-0 z-50 w-full px-4 py-3 flex justify-between items-center bg-white shadow-md">
        <div>
          <h1 className="text-xl font-bold text-gray-500">
            <i className="fas fa-file-invoice text-blue-500 text-xl"></i>
            Fatura oluşturucu
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <button
              className="px-4 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-center flex items-center gap-2 justify-center  transition cursor-pointer"
              onClick={() => setModal(true)}
            >
              <i className="fas fa-plus text-xl"></i>
              yeni fatura olustur
            </button>
          </div>
          <div>
            <div className="flex items-center bg-gray-100 rounded-full ">
              <button className="cursor-pointer px-4 py-1.5 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition">
                s
              </button>
            </div>
          </div>
        </div>
      </nav>
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 relative">
            <button
              onClick={() => setModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition cursor-pointer"
            >
              <i className="fas fa-times text-lg"></i>
            </button>

            <h2 className="text-xl font-semibold text-gray-700 mb-6">
              Fatura oluştur
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ornek@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Müşteri
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Müşteri adı"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Tarih
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  tutar
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  durum
                </label>
                <select
                  name=""
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  id=""
                >
                  <option value="">seçiniz</option>
                  <option value="">Ödendi</option>
                  <option value="">Bekliyor</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2.5 rounded-lg hover:bg-blue-600 transition font-medium cursor-pointer"
              >
                Fatura oluştur
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium text-gray-500">
                toplam faturalar
              </h3>
              <i className="fas fa-file-invoice text-blue-500 text-lg"></i>
            </div>
            <div className="mt-4">
              <span className="text-2xl font-bold text-gray-700">100</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium text-gray-500">
                toplam faturalar
              </h3>
              <i className="fas fa-file-invoice text-blue-500 text-lg"></i>
            </div>
            <div className="mt-4">
              <span className="text-2xl font-bold text-gray-700">100</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium text-gray-500">
                toplam faturalar
              </h3>
              <i className="fas fa-file-invoice text-blue-500 text-lg"></i>
            </div>
            <div className="mt-4">
              <span className="text-2xl font-bold text-gray-700">100</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium text-gray-500">
                toplam faturalar
              </h3>
              <i className="fas fa-file-invoice text-blue-500 text-lg"></i>
            </div>
            <div className="mt-4">
              <span className="text-2xl font-bold text-gray-700">100</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-sm font-bold text-gray-500">Son faturalar</h2>
            <span className="text-xs bg-slate-100 text-gray-500 px-3 py-1 rounded-full"></span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase px-5 py-3">
                    Fatura No
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase px-5 py-3">
                    Müşteri
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase px-5 py-3">
                    E-posta
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase px-5 py-3">
                    Tarih
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase px-5 py-3">
                    Tutar
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase px-5 py-3">
                    Durum
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-gray-100 hover:bg-slate-50 transition">
                  <td className="px-5 py-3 text-sm text-gray-600">#1001</td>
                  <td className="px-5 py-3 text-sm text-gray-700 font-medium">
                    Ahmet Yılmaz
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-500">
                    ahmet@gmail.com
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-500">
                    12.03.2026
                  </td>
                  <td className="px-5 py-3 text-sm font-semibold text-gray-700">
                    ₺2.500
                  </td>
                  <td className="px-5 py-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-600">
                      Ödendi
                    </span>
                  </td>
                </tr>

                <tr className="border-b border-gray-100 hover:bg-slate-50 transition">
                  <td className="px-5 py-3 text-sm text-gray-600">#1002</td>
                  <td className="px-5 py-3 text-sm text-gray-700 font-medium">
                    Mehmet Kaya
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-500">
                    mehmet@gmail.com
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-500">
                    15.03.2026
                  </td>
                  <td className="px-5 py-3 text-sm font-semibold text-gray-700">
                    ₺1.200
                  </td>
                  <td className="px-5 py-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-600">
                      Bekliyor
                    </span>
                  </td>
                </tr>

                <tr className="border-b border-gray-100 hover:bg-slate-50 transition">
                  <td className="px-5 py-3 text-sm text-gray-600">#1003</td>
                  <td className="px-5 py-3 text-sm text-gray-700 font-medium">
                    Ayşe Demir
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-500">
                    ayse@gmail.com
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-500">
                    18.03.2026
                  </td>
                  <td className="px-5 py-3 text-sm font-semibold text-gray-700">
                    ₺3.750
                  </td>
                  <td className="px-5 py-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-red-100 text-red-600">
                      İptal
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
