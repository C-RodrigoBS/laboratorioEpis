import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "../components/Alert";
import 'firebase/auth'

export function Register() {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

 
  return (
    <div>
      {error && <Alert message={error} />}

      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://www.unsa.edu.pe/wp-content/uploads/2022/09/MG_5829-1-878x426.jpg"
                class="img-fluid" alt="Phone image"></img>
            </div>

            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h3>Laboratorio Epis Registro</h3>
              <hr></hr>
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Correo electronico
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="nombre.email@gmail.com"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Contrase??a
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="*************"
                  />
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit}>
                  Registro
                </button>
                <div>
                  <p className="my-4 text-sm flex justify-between px-3">
                    Ya esta registrado? volver a 
                    <Link to="/login" className="text-blue-700 hover:text-blue-900">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
