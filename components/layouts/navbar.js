import { Brand } from 'assets'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'

export default function MainNavbar() {

    const {asPath} = useRouter()

    return(
        <header>
            <nav className="h-16 flex justify-between place-items-center px-5 shadow-sm overflow-hidden">
                <Link href="/">
                    <a>
                        <Image draggable={false} className="object-scale-down" alt="brand" width="150px" height="130px" src={Brand} />
                    </a>
                </Link>
                <ul className="flex">
                    {navs.map((nav, i)=> {
                        return(
                            <li className="mx-1" key={i}>
                                <Link href={nav.href}>
                                    <a className={`${asPath === nav.href && 'text-orange-600 font-semibold tracking-wide'}`}>{nav.name}</a>
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
        name: 'Produk',
        href: '/product'
    },
    {
        name: 'Hubungi Kami',
        href: '/contact'
    },
    {
        name: 'Tentang Kami',
        href: '/about'
    },
]