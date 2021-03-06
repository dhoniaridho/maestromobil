import MainLayout from "@/layouts/main-layout";
import Link from "@/ui/link";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Moment from "react-moment";

const Product = () => {
  const [product, setproduct] = useState();
  const router = useRouter();
  const { id } = router.query;
  const fetchPost = async () => {
    try {
      const res = await axios.get(
        `https://www.maestromobiljogja.com/wp-json/wp/v2/posts/${id}?_embed`
      );
      setproduct(res.data);
    } catch (error) {
      Router.push("/product");
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <MainLayout>
      <section className="px-5 sm:px-10 md:px-20 py-10">
        <img
          className="object-cover w-full"
          height="200"
          src={product && product._embedded["wp:featuredmedia"][0].source_url}
          alt="car"
        />
        <h1
          className="text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold my-5 text-transparent bg-clip-text"
          dangerouslySetInnerHTML={createMarkup(
            product && product.title.rendered
          )}
        ></h1>
        <Link 
        className="bg-gradient-to-r from-yellow-500 to-orange-500"
          type="secondary"
          size="md" href="/contact">
          Hubungi Kami
        </Link>
        <h1 className="text-sm font-light my-5 text-orange-700"><Moment fromNow interval={30000} date={product && product.date} /></h1>
        <div
          className="text-sm"
          dangerouslySetInnerHTML={createMarkup(
            product && product.content.rendered
          )}
        ></div>
      </section>
    </MainLayout>
  );
};

export default Product;

function createMarkup(props) {
  return { __html: props };
}
