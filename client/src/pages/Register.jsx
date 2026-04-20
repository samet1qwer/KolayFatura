import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { apiCall } from "../redux/slices/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, data, success } = useSelector((state) => state.api);

  useEffect(() => {
    if (error) {
      setMessage(error?.message || error);
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      navigate("/auth/login");
    }
  }, [success]);

  useEffect(() => {
    if (message) {
      Swal.fire({
        text: message,
        icon: "info",
        draggable: true,
      });
    }
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !password2) {
      setMessage("Bilgileri eksiksiz doldurunuz");
      return;
    }

    if (password !== password2) {
      setMessage("Şifreler uyuşmuyor");
      return;
    }

    dispatch(
      apiCall({
        url: "/auth/register",
        method: "POST",
        data: { name, email, password },
      }),
    );
  };
  return (
    <div className="w-full h-screen bg-slate-100 flex items-center justify-center text-center">
      <div className=" py-8 px-10 mx-auto w-full max-w-md md:max-w-lg lg:max-w-xl  bg-white rounded-lg shadow-md ">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-row items-center space-x-2 justify-center ">
            <i className="fas fa-file-invoice text-blue-600 text-2xl"></i>
            <h2 className="text-2xl font-bold text-slate-700 mt-2 mb-4">
              Fatura oluşturucu
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <h4 className="text-xl font-bold text-slate-700 mt-2 mb-2 ">
              Hesap oluştur
            </h4>
            <p className="text-sm font-medium text-slate-500 mb-4">
              doğrulama yapmadan hesabınızı oluşturabilirsiniz
            </p>
          </div>
        </div>

        <form className="space-y-4 text-left">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-slate-700"
            >
              kullanıcı adı
            </label>
            <input
              type="username"
              id="username"
              className="bg-slate-50 border border-slate-300 text-slate-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="username"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-slate-50 border border-slate-300 text-slate-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-slate-700"
            >
              Şifre
            </label>
            <input
              type="password"
              id="password"
              className="bg-slate-50 border border-slate-300 text-slate-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Şifre"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="passwordrepeat"
              className="block mb-2 text-sm font-medium text-slate-700"
            >
              Şifre Tekrar
            </label>
            <input
              type="password"
              id="passwordrepeat"
              className="bg-slate-50 border border-slate-300 text-slate-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Şifre Tekrar"
              name="password2"
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-slate-300 rounded bg-slate-50 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="remember"
                  className="font-medium text-slate-700"
                >
                  Beni hatırla
                </label>
              </div>
            </div>
          </div>
        </form>

        <div>
          <button
            className="w-full px-4 py-2.5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 cursor-pointer"
            onClick={handleSubmit}
          >
            hesap oluştur
          </button>
          <span>
            <p className="text-sm font-medium text-slate-500 mt-4">
              Hesabınız var mı?
              <Link
                to="/auth/login"
                className="text-blue-600 hover:underline ml-1"
              >
                giriş yap
              </Link>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
