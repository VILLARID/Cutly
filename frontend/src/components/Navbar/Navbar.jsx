import logo from '../../assets/logo.png'
import { Menu } from "lucide-react"

function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 text-white fixed top-0 left-0 w-full z-50">

            {/* Logo */}
            <div className="flex items-center gap-2">
                <img src={logo} alt="Cutly Logo" className="h-10 w-10 object-contain rounded-full bg-orange-300/20" />
                <h1 className="text-xl tracking-wide">
                    Cutly
                </h1>
            </div>

            <button>
                <Menu size={26} />
            </button>

            {/* Desktop links (opcional base) */}
            <div className="hidden md:flex gap-6 text-sm text-white/80">
                <a href="#home" className="hover:text-white transition">Home</a>
                <a href="#services" className="hover:text-white transition">Services</a>
                <a href="#about" className="hover:text-white transition">About</a>
                <a href="#contact" className="hover:text-white transition">Contact</a>
            </div>

        </nav>
    )
}

export default Navbar