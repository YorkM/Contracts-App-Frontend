import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";


export const LoginPage = () => {


    const onsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }


    return (
        <div className="h-screen bg-blue-900 flex flex-col items-center">
            <div className="w-3/4 min-h-72 bg-blue-700 m-auto rounded-md shadow-sm shadow-slate-100">
                <h2 className="text-center mt-2 text-white text-3xl tracking-wide font-black">INGRESO</h2>
                <form onSubmit={ onsSubmit }>
                    <div className="flex justify-center items-center mt-10">
                        <input 
                            className="w-9/12 h-10 rounded-md outline-none bg-blue-900 border-l-2 placeholder:text-slate-300 p-6 font-light text-lg focus:bg-blue-800 text-white" 
                            type="text " 
                            placeholder="Correo" 
                        />
                        <MdOutlineEmail className="ml-2 text-slate-300" fontSize={ 30 } />
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <input 
                            className="w-9/12 h-10 rounded-md outline-none bg-blue-900 border-l-2 placeholder:text-slate-300 p-6 font-light text-lg focus:bg-blue-800 text-white" 
                            type="password" 
                            placeholder="Contraseña" 
                        />
                        <RiLockPasswordLine className="ml-2 text-slate-300" fontSize={ 30 } />
                    </div>               
                    <div className="flex justify-center mt-5">
                        <input 
                            className="w-1/2 text-white bg-blue-900 hover:text-slate-300 hover:bg-blue-950 active:bg-blue-300 transition duration-700 text-2xl p-2 rounded-md" 
                            type="submit" 
                            value="Iniciar sesión"
                        />
                    </div>
                </form>
                <p className="text-right m-10 text-blue-300">¿No tienes una cuenta? <Link className="text-white" to="/register">Crea una!</Link></p>
            </div>
        </div>
    )
}
