import React from "react";
import Navbar from "../companets/navbar";
function Notfound() {
  return (
    <div className="w-full h-screen bg-slate-100 flex items-center justify-center text-center">
      <Navbar />
      <div>
        <h1 className="text-5xl font-bold text-gray-900">404</h1>
        <h1 className="text-4xl md:text-6xl font-bold text-blue-500 leading-tight">
          Sayfa bulunamadı
        </h1>
      </div>
    </div>
  );
}

export default Notfound;
