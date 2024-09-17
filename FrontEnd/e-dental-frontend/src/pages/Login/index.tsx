import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform any login logic here if needed
        navigate('/home');
    };
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-zinc-200 font-rubik w-full max-w-2xl mx-auto rounded-lg shadow-lg overflow-hidden">
                {/* Header */}
                <div className="bg-violet-400">
                    <h1 className="text-3xl text-white flex justify-center font-bold p-5">Login</h1>
                </div>
                
                {/* Body */}
                <div className="p-8">                    
                    <input 
                        className="w-full max-w-sm mx-auto block p-2 border border-gray-300 rounded placeholder:text-center" 
                        type="text" 
                        placeholder="Usuário" 
                    />
                    <div className="p-4">
                        <input 
                            className="w-full max-w-sm mx-auto block p-2 border border-gray-300 rounded placeholder:text-center" 
                            type="text" 
                            placeholder="Senha" 
                        />
                    </div>
                    <div className="p-4">
                        <button onClick={handleLogin} className="w-full max-w-36 mx-auto block p-2 bg-violet-400 text-white font-bold rounded shadow hover:bg-violet-500">
                            Entrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
