import { Brand } from 'assets'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { useState } from 'react'

export default function MainNavbar() {

    const { asPath } = useRouter()
    const [isCollapse, setIsCollapse] = useState(false)

    const handleCollapse = () => {
        setIsCollapse(!isCollapse)
        document.body.style.overflow = 'hidden'
    }
    const handleClose = () => {
        setIsCollapse(!isCollapse)
        document.body.style.overflow = 'auto'
    }

    return (
        <header>
            <nav className="h-16 flex justify-between place-items-center px-5 shadow-sm overflow-hidden">
                <Link href="/">
                    <a>
                        <Image draggable={false} className="object-scale-down" alt="brand" width="150px" height="130px" src={Brand} />
                    </a>
                </Link>
                <button className="text-3xl block sm:hidden" onClick={handleCollapse}>
                    <HiMenuAlt3 />
                </button>
                <ul className="hidden sm:flex">
                    {navs.map((nav, i) => {
                        return (
                            <li className="mx-1" key={i}>
                                <Link href={nav.href}>
                                    <a className={`${asPath === nav.href && 'text-orange-600 font-semibold tracking-wide'}`}>{nav.name}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div className={`z-50 fixed flex justify-between flex-col top-0 w-full h-screen bg-white text-gray-900 transition-transform transform ${isCollapse ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="h-16 flex justify-between px-5 place-items-center">
                <Link href="/">
                    <a>
                        <Image draggable={false} className="object-scale-down" alt="brand" width="150px" height="130px" src={Brand} />
                    </a>
                </Link>
                <button onClick={handleClose} className="text-3xl">
                    <HiX />
                </button>
                </div>
                <ul className="flex-1 flex place-items-center flex-col text-center place-content-center text-2xl mx-auto">
                    {navs.map((nav, i) => {
                        return (
                            <li className="mx-1" key={i}>
                                <Link href={nav.href}>
                                    <a className={`${asPath === nav.href && 'text-orange-600 font-semibold tracking-wide'}`}>{nav.name}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
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