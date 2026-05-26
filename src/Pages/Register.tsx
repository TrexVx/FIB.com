import { useState } from "react";
import {Link , useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

export default function Register(){
    const [name, setName] = useState("");
    const [apellidoPaterno, setApellidoPaterno] = useState("");
    const [apellidoMaterno, setApellidoMaterno] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pass, setPass] = useState("");

    const [acceptPolicies, setAcceptPolicies] = useState(false);
    const [acceptMarketing, setAcceptMarketing] = useState(false);

    const { signInWithGoogle } = useAuth();
    const navigate = useNavigate();

    // Función de validación: Acepta solo números
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = e.target.value.replace(/\D/g, '');
        setPhone(numericValue);
    };

    const handleRegister = (e: any) => {
        e.preventDefault();

        if (!acceptPolicies) {
            alert("Debes aceptar las políticas de privacidad para registrarte.");
            return;
        }


        console.log("Registrando usuario:", {
            name,
            apellidoPaterno,
            apellidoMaterno,
            email,
            acceptPolicies,
            acceptMarketing,
        });

        
    };

    const handleGoogleRegister = async () => {
        await signInWithGoogle();
        navigate('/');
    };

    const isRegisterDisabled = !acceptPolicies;

    return (
        <div className="auth-page-container"> {/* ⬅️ CLASE CSS */}
            <div className="auth-card"> {/* ⬅️ CLASE CSS: Contenedor con sombra y padding */}
                {/* Tabs */}
                <div className="flex justify-center space-x-6 mb-8 text-gray-500 text-lg font-medium">
                    <span className="text-black border-b-2 border-red-500 pb-1">
                        Regístrate
                    </span>
                    <Link to="/login" className="hover:text-black">
                        Inicia sesión
                    </Link>
                </div>

                {/* Formulario de Registro por Correo */}
                <form className="space-y-4" onSubmit={handleRegister}> {/* Menos espacio para los campos */}

                    <input type="text" placeholder="Nombre(s)" value={name} onChange={(e) => setName(e.target.value)} className="input-field-auth" required />
                    <input type="text" placeholder="Apellido Paterno" value={apellidoPaterno} onChange={(e) => setApellidoPaterno(e.target.value)} className="input-field-auth" required />
                    <input type="text" placeholder="Apellido Materno" value={apellidoMaterno} onChange={(e) => setApellidoMaterno(e.target.value)} className="input-field-auth" />
                    <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field-auth" required />


                    <input type="password" placeholder="Contraseña" value={pass} onChange={(e) => setPass(e.target.value)} className="input-field-auth" required />

                    <div className="space-y-3 pt-2"> {/* Espacio adicional para separar de los inputs */}
                        <div className="flex items-start space-x-2 text-sm">
                            <input type="checkbox" id="acceptPolicies" checked={acceptPolicies} onChange={(e) => setAcceptPolicies(e.target.checked)} className="mt-1 accent-red-500" required />
                            <label htmlFor="acceptPolicies" className="text-gray-700"> He leído y acepto las <Link to="/privacy" className="text-blue-600 hover:underline">Políticas de Privacidad</Link>. </label>
                        </div>

                        <div className="flex items-start space-x-2 text-sm">
                            <input type="checkbox" id="acceptMarketing" checked={acceptMarketing} onChange={(e) => setAcceptMarketing(e.target.checked)} className="mt-1 accent-red-500" />
                            <label htmlFor="acceptMarketing" className="text-gray-700"> Deseo recibir promociones y novedades por correo electrónico. </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isRegisterDisabled}
                        className="btn-primary-auth mt-4" // ⬅️ CLASE CSS
                    >
                        Registrarse
                    </button>
                </form>

                    

                <div className="flex items-center my-6">
                    <div className="divider-line" /> {/* ⬅️ CLASE CSS */}
                    <span className="px-3 text-gray-500">Acceso rápido con</span>
                    <div className="divider-line" /> {/* ⬅️ CLASE CSS */}
                </div>

                {/* Social login buttons */}
                <div className="flex justify-center space-x-5">
                    <button className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl"> f </button>
                    <button onClick={handleGoogleRegister} className="w-12 h-12 rounded-full bg-white border flex items-center justify-center text-xl">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" className="w-7" alt="Google" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-sky-400 flex items-center justify-center text-white text-xl">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/X_icon.svg/1200px-X_icon.svg.png" className="w-7" alt="X" />
                    </button>
                </div>
            </div>
        </div>

    );

}