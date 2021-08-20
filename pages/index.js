import MainLayout from "@/layouts/main-layout";
import Link from "@/ui/link";
import { Hero } from "assets";
import Image from "next/image";
import * as Cg from "react-icons/cg";
import * as Ti from "react-icons/ti";
import * as Fa from "react-icons/fa";
import * as Ri from "react-icons/ri";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import axios from "axios";

export default function Home() {
  const [Products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://www.maestromobiljogja.com/wp-json/wp/v2/posts?_embed&per_page=9`
      );
      setIsLoading(false);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <MainLayout>
      <section id="hero">
        <div className="flex md:justify-between flex-col md:flex-row px-10 md:px-20 md:h-screen--4rem place-items-center py-10">
          <div className="md:w-1/2 -mt-20 md:order-1 order-2">
            <div>
              <h1 className="text-2xl">Selamat datang di</h1>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent my-3">
                Maestro Mobil
              </h1>
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
              <Link
                className="bg-gradient-to-r from-orange-500 to-yellow-500"
                type="secondary"
                size="md"
                href="/product"
              >
                Lihat Produk
              </Link>
              <Link type="transparent" size="md" href="/contact">
                Hubungi Kami
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 sm:pb-0 pb-20">
            <Image
              draggable="false"
              className="object-scale-down"
              width="500px"
              height="500px"
              alt="hero"
              src={Hero}
            />
          </div>
        </div>
      </section>
      <section className="px-10 md:px-20 py-5">
        <div>
          <h1 className="text-3xl text-center">
            Kenapa harus di{" "}
            <span className="font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent my-3">
              Maestro Mobil
            </span>{" "}
          </h1>
          <div className="grid md:grid-cols-4 mt-8 gap-5">
            {kenapa.map((k, i) => {
              return (
                <div
                  className="px-3 py-5 text-orange-400 bg-white shadow-lg hover:bg-cyan-500 group hover:text-white"
                  key={i}
                >
                  <div className="h-20 text-6xl">{k.icon}</div>
                  <h1 className="text-3xl uppercase text-gray-800 group-hover:text-white">
                    {k.title}
                  </h1>
                  <p className="mt-3 text-sm font-light text-gray-500 group-hover:text-white">
                    {k.descripton}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex md:justify-between flex-col md:flex-row mt-20">
          <div className="md:w-1/3 flex justify-center place-items-center">
            <h1 className="text-3xl text-center my-5">
              Kenapa kami menggunakan <br />{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-400 font-bold bg-clip-text text-transparent">
                Bank Syariah
              </span>{" "}
            </h1>
          </div>
          <div className="grid grid-cols-1 md:ml-8 gap-8">
            {syariah.map((s, i) => {
              return (
                <div
                  className="p-3 text-orange-400 bg-white shadow-lg hover:bg-orange-600 group hover:text-white"
                  key={i}
                >
                  <h1 className="absolute text-5xl -mt-10 font-semibold text-gray-700">
                    {i + 1}
                  </h1>
                  <p className="mt-3 text-sm text-gray-500 group-hover:text-white">
                    {s.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-10 px-5 sm:px-10 md:px-20">
        <div className="p-4 mt-4">
          <h1 className="text-4xl text-center font-semibold mb-6">
            Syarat kredit syariah
          </h1>
          <ul className="grid gap-4">
            {syarat.map((s, i) => {
              return (
                <li
                  className="bg-white shadow-md p-2 flex place-items-center hover:shadow-lg transform transition-transform"
                  key={i}
                >
                  <h1 className="text-4xl mx-5">{i + 1}</h1>
                  <div>
                    <h1 className="text-xl md:text-2xl text-blue-700 font-semibold">
                      {s.title}
                    </h1>
                    <p className="text-sm font-light mt-2">*{s.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="py-10 px-10 md:px-20">
        <h1 className="text-3xl font-semibold">Produk Kami</h1>
        <div className="flex-1 grid md:grid-cols-3 gap-5 py-10">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {Products &&
                Products.map((product, i) => {
                  return (
                    <NextLink
                      href={`product/${product.slug}?id=${product.id}`}
                      key={i}
                    >
                      <a role="link">
                        <div className="my-4">
                        <img
                          className="object-cover h-full w-full md:h-56 mb-2"
                          src={
                            product._embedded["wp:featuredmedia"][0].source_url
                          }
                          alt="car"
                        />
                        <h1
                          dangerouslySetInnerHTML={createMarkup(
                            product.title.rendered
                          )}
                        ></h1>
                        </div>

                      </a>
                    </NextLink>
                  );
                })}
            </>
          )}
        </div>
        <div className="flex justify-center">
        <Link
          className="bg-gradient-to-r from-orange-500 to-yellow-500"
          type="secondary"
          size="md"
          href="/product"
        >
          Lihat Selengkapnya
        </Link>
        </div>
      </section>
    </MainLayout>
  );
}

const kenapa = [
  {
    title: "syariah",
    descripton: "di maestro mobil hanya melayani kredit melalui bank syariah",
    icon: <Cg.CgCreditCard />,
  },
  {
    title: "cepat",
    descripton: "di maestro mobil hanya melayani kredit melalui bank syariah",
    icon: <Ti.TiFlashOutline />,
  },
  {
    title: "terjangkau",
    descripton: "di maestro mobil hanya melayani kredit melalui bank syariah",
    icon: <Fa.FaHandHoldingUsd />,
  },
  {
    title: "aman",
    descripton: "di maestro mobil hanya melayani kredit melalui bank syariah",
    icon: <Ri.RiSecurePaymentLine />,
  },
];
const syariah = [
  {
    content: "Akadnya jual-beli, sehigga bebas RIBA.",
  },
  {
    content: "Angsuran lebih rendah dibandingkan degan Finance / Leasing.",
  },
  {
    content:
      "Tidak ada denda jika terjadi keterlambatan dalam pembayaran angsuran.",
  },
  {
    content:
      "Jika dilakukan pelunasan di awal waktu, maka tdk ada pihak yg dirugikan (karena menggunakan sistem flat murni, bukan anuitas).",
  },
];

const syarat = [
  {
    title: "Tanda keseriusan Rp.2,5jt",
    description:
      "kalau di ACC oleh bank maka bisa diminta lagi setelah akad dengan bank / bisa juga menjadi pengurang nominal uang mukanya",
  },
  {
    title: "Fotocopy KTP suami + istri",
    description: "bagi yg sudah menikah",
  },
  {
    title: "No WA atau HP",
    description: "wajib",
  },
];

const Loading = () => {
  return (
    <>
      <div className="bg-gray-100 animate-pulse w-full p-5">
        <div className="w-full pl-10 bg-gray-200 animate-pulse h-36"></div>
        <div className="pr-10">
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
        </div>
      </div>
      <div className="bg-gray-100 animate-pulse w-full p-5">
        <div className="w-full pl-10 bg-gray-200 animate-pulse h-36"></div>
        <div className="pr-10">
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
        </div>
      </div>
      <div className="bg-gray-100 animate-pulse w-full p-5">
        <div className="w-full pl-10 bg-gray-200 animate-pulse h-36"></div>
        <div className="pr-10">
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
        </div>
      </div>
      <div className="bg-gray-100 animate-pulse w-full p-5">
        <div className="w-full pl-10 bg-gray-200 animate-pulse h-36"></div>
        <div className="pr-10">
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
        </div>
      </div>
      <div className="bg-gray-100 animate-pulse w-full p-5">
        <div className="w-full pl-10 bg-gray-200 animate-pulse h-36"></div>
        <div className="pr-10">
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
        </div>
      </div>
      <div className="bg-gray-100 animate-pulse w-full p-5">
        <div className="w-full pl-10 bg-gray-200 animate-pulse h-36"></div>
        <div className="pr-10">
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
        </div>
      </div>
      <div className="bg-gray-100 animate-pulse w-full p-5">
        <div className="w-full pl-10 bg-gray-200 animate-pulse h-36"></div>
        <div className="pr-10">
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
        </div>
      </div>
      <div className="bg-gray-100 animate-pulse w-full p-5">
        <div className="w-full pl-10 bg-gray-200 animate-pulse h-36"></div>
        <div className="pr-10">
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
        </div>
      </div>
      <div className="bg-gray-100 animate-pulse w-full p-5">
        <div className="w-full pl-10 bg-gray-200 animate-pulse h-36"></div>
        <div className="pr-10">
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
          <div className="bg-gray-200 animate-pulse h-5 my-1"></div>
        </div>
      </div>
    </>
  );
};
function createMarkup(props) {
  return { __html: props };
}
