import MainLayout from "@/layouts/main-layout";
import axios from "axios";
import { useEffect, useState } from "react";
import NextLink from "next/link";

export default function Product() {
  const [orderBy, setOrderBy] = useState("");
  const [Products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://www.maestromobiljogja.com/wp-json/wp/v2/posts?_embed&per_page=44&${
          orderBy && "order="
        }${orderBy}`
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
      <section className="flex min-h-screen">
        <div className="hidden sm:block w-1/4 px-7 py-20">
          <h1 className="font-bold uppercase mb-5">Filter</h1>
          <div>
            <h1 className="font-bold text-sm my-2">Urutkan Dari</h1>
            <ul className="text-xs mb-5">
              <li
                role="button"
                className={`${
                  orderBy === "asc" ? "font-bold text-orange-600" : ""
                }`}
                onClick={() => setOrderBy("asc")}
              >
                Terlama
              </li>
              <li
                role="button"
                className={`${
                  orderBy === "desc" ? "font-bold text-orange-600" : ""
                }`}
                onClick={() => setOrderBy("desc")}
              >
                Terbaru
              </li>
            </ul>
            <button
              className="text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white"
              onClick={fetchData}
            >
              TERAPKAN
            </button>
          </div>
        </div>
        <div className="flex-1 grid md:grid-cols-3 gap-5 md:px-16 px-5 py-10">
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
                        <div>
                        <img
                          className="object-cover w-full h-full md:h-56"
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
      </section>
    </MainLayout>
  );
}

function createMarkup(props) {
  return { __html: props };
}

const Loading = ()=> {
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
}
