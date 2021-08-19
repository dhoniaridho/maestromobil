export default function Footer() {
    return(
        <footer>
            <div className="flex md:justify-end place-items-center h-16 border-t">
                <p> &copy; {new Date().getFullYear()} Maestro Mobil</p>
            </div>
        </footer>
    )
}