import { Brand } from 'assets'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'

export default function MainNavbar() {

    const {asPath} = useRouter()

    return(
        <header>
            <nav className="h-20 flex justify-between place-items-center px-5">
                <Link href="/">
                    <a>
                        <Image draggable={false} className="object-scale-down" alt="brand" width="150px" src={Brand} />
                    </a>
                </Link>
                <ul className="flex">
                    {navs.map((nav, i)=> {
                        return(
                            <li className="mx-1" key={i}>
                                <Link href={nav.href}>
                                    <a className={`${asPath === nav.href && 'text-blue-500'}`}>{nav.name}</a>
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