export default function Footer() {
    return(
        <footer>
            <div className="flex justify-center md:justify-end place-items-center h-16 border-t md:px-20">
                <p className="text-sm"> &copy; {new Date().getFullYear()} Maestro Mobil. Created by <a href="http://dhoniaridho.vercel.app" className="hover:text-blue-600 text-blue-500" target="_blank" rel="noreferrer">dhoniaridho</a></p>
            </div>
        </footer>
    )
}
