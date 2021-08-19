import Link from 'next/link'

export default function MainNavbar() {
    return(
        <header>
            <nav className="h-16 flex justify-between place-items-center">
                <div>
                    logo
                </div>
                <ul className="flex">
                    {navs.map((nav, i)=> {
                        return(
                            <li className="mx-1" key={i}>
                                <Link href={nav.href}>
                                    <a>{nav.name}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

const navs = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Product',
        href: '/product'
    },
    {
        name: 'Contact',
        href: '/contact'
    },
    {
        name: 'About Me',
        href: '/about'
    },
]