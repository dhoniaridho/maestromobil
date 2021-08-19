import MainLayout from "@/layouts/main-layout";
import Link from "@/ui/link";
import { Hero } from "assets";
import Image from 'next/image'
import * as Cg from 'react-icons/cg'
import * as Ti from 'react-icons/ti'
import * as Fa from 'react-icons/fa'
import * as Ri from 'react-icons/ri'
import { IconContext } from "react-icons";

export default function Home() {
  return (
    <MainLayout>
      <section id="hero">
        <div className="flex justify-between px-20 h-screen--4rem place-items-center">
          <div className="w-1/2 -mt-20">
            <div>
              <h1 className="text-2xl">Selamat datang di</h1>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent my-3">Maestro Mobil</h1>
            </div>
            <div className="mt-3">
              <h1 className="text-3xl font-semibold text-orange-600">
                Temukan mobil impianmu disini
              </h1>
              <p className="w-3/4 mt-2 text-sm">
                Kami adalah showroom mobil yang beralamat di jogja, dapatkan
                harga dan kualitas terbaik hanya disini.
              </p>
            </div>
            <div className="mt-8">
              <Link className="bg-gradient-to-r from-orange-500 to-yellow-500" type="secondary" size="md" href="/product">
                Lihat Produk
              </Link>
              <Link type="transparent" size="md" href="/contact">
                Hubungi Kami
              </Link>
            </div>
          </div>
          <div className="">
            <Image draggable="false" className="object-scale-down" width="500px" height="500px" alt="hero" src={Hero} />
          </div>
        </div>
      </section>
      <section className="px-20 py-5">
        <div>
          <h1 className="text-3xl text-center">Kenapa harus di <span className="font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent my-3">Maestro Mobil</span> </h1>
          <div className="grid grid-cols-4 mt-8 gap-5">
          <IconContext.Provider value={{ className: "text-6xl" }}>
              {kenapa.map((k, i)=>{
                return(
                  <div className="px-3 py-5 text-orange-400 bg-white shadow-lg hover:bg-cyan-500 group hover:text-white" key={i}>
                    <div className="h-20">{k.icon}</div>
                    <h1 className="text-3xl uppercase text-gray-800 group-hover:text-white">{k.title}</h1>
                    <p className="mt-3 text-sm font-light text-gray-500 group-hover:text-white">{k.descripton}</p>
                  </div>
                )
              })}
            </IconContext.Provider>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

const kenapa = [
  {
    title: 'syariah',
    descripton: 'di maestro mobil hanya melayani kredit melalui bank syariah',
    icon: <Cg.CgCreditCard />
  },
  {
    title: 'cepat',
    descripton: 'di maestro mobil hanya melayani kredit melalui bank syariah',
    icon: <Ti.TiFlashOutline />
  },
  {
    title: 'terjangkau',
    descripton: 'di maestro mobil hanya melayani kredit melalui bank syariah',
    icon: <Fa.FaHandHoldingUsd />
  },
  {
    title: 'aman',
    descripton: 'di maestro mobil hanya melayani kredit melalui bank syariah',
    icon: <Ri.RiSecurePaymentLine />
  },
]
