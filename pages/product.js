import MainLayout from "@/layouts/main-layout";
import axios from "axios";
import { useEffect, useState } from "react";
import NextLink from 'next/link'

export default function Product() {
  const [Products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://www.maestromobiljogja.com/wp-json/wp/v2/posts?_embed"
      );
      console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <MainLayout>
      <section className="px-20">
        <div className="grid grid-cols-4 gap-5">
          {Products &&
            Products.map((product, i) => {
              return (
                <NextLink href={`product/${product.slug}?id=${product.id}`} key={i}>
                  <a role="link">
                    <img
                      className="object-cover h-52"
                      height="200"
                      src={product._embedded["wp:featuredmedia"][0].source_url}
                      alt="car"
                    />
                    <h1
                      dangerouslySetInnerHTML={createMarkup(
                        product.title.rendered
                      )}
                    ></h1>
                  </a>
                </NextLink>
              );
            })}
        </div>
      </section>
    </MainLayout>
  );
}

function createMarkup(props) {
  return { __html: props };
}
