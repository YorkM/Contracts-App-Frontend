import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        })        
    }

    return (
        <nav className="w-full bg-blue-950 min-h-20 flex justify-evenly items-center">
            <h1 className="text-blue-400 text-3xl">Contracts</h1>
            <ul className="flex gap-6">
                <li className="text-cyan-600 hover:text-cyan-300 text-lg">Contratos</li>
                <li className="text-cyan-600 hover:text-cyan-300 text-lg">Portafolios</li>
                <li className="text-cyan-600 hover:text-cyan-300 text-lg">Reportes</li>
            </ul>
            <p className="text-blue-400">Mario Bross</p>
            <BiLogOut className="text-white hover:text-pink-700" fontSize={ 30 } onClick={ onLogout } />
        </nav>         
    )
}
