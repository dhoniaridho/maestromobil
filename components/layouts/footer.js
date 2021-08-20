export default function Footer() {
    return(
        <footer>
            <div className="flex md:justify-end place-items-center h-16 border-t px-20">
                <p> &copy; {new Date().getFullYear()} Maestro Mobil</p>
            </div>
        </footer>
    )
}