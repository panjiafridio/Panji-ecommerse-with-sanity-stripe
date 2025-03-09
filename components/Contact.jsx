import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4 md:px-10  w-[95%] mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center luckiest-guy-regular">
        Informasi Kontak Owner
      </h1>

      <div className="w-full flex flex-col md:flex-row justify-between items-center ">
        {/* Foto Ikonik */}
        <div className="mb-6">
            <img
            src="/chef.jpg"
            alt="Toko Ikonik"
            className="w-full h-64 object-cover rounded-lg"
            />
        </div>

        <div className="flex flex-col justify-between items-center">
            {/* Informasi Kontak */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4 luckiest-guy-regular">Kontak Kami</h2>
                <ul className="space-y-3">
                <li><strong>📞 WhatsApp:</strong> <a href="https://wa.me/628123456789" className="text-blue-600 luckiest-guy-regular">+62 812-3456-789</a></li>
                <li><strong>📷 Instagram:</strong> <a href="https://instagram.com/username" className="text-blue-600 luckiest-guy-regular">@username</a></li>
                <li><strong>🎵 TikTok:</strong> <a href="https://tiktok.com/@username" className="text-blue-600 luckiest-guy-regular">@username</a></li>
                <li><strong>📘 Facebook:</strong> <a href="https://facebook.com/username" className="text-blue-600 luckiest-guy-regular">Facebook Page</a></li>
                </ul>
            </div>

            {/* Alamat Kantor */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl mt-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4 luckiest-guy-regular">Alamat Kantor</h2>
                <p className="luckiest-guy-regular"><strong>🏢 Kantor Utama:</strong> Jl. Sudirman No. 1, Jakarta</p>
                <p className="luckiest-guy-regular"><strong>🏬 Kantor Cabang:</strong> Jl. Malioboro No. 45, Yogyakarta</p>
            </div>
        </div>
      </div>


    </div>
  );
};

export default Contact;
