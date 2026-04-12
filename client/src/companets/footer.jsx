import React from "react";

function footer() {
  return (
    <footer className="mt-12 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent">
        <div className="px-4 py-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-gray-400 text-center  cursor-pointer"
            onClick={() => navigate("/")}
          >
            Fatura Takip Sistemi
          </p>
          <p className="text-xs text-gray-400">© 2026 Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

export default footer;
