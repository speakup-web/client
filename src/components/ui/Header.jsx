import { Navbar } from "./../navigation/navbar/Navbar"

export default function Header() {
    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <Navbar/>
            </header>
        </div>
    )
}
