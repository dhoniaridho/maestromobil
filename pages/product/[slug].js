import MainLayout from "@/layouts/main-layout";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Product = () => {
  const [product, setproduct] = useState();
  const router = useRouter();
  const { id } = router.query;
  const fetchPost = async () => {
    try {
      const res = await axios.get(
        `http://www.maestromobiljogja.com/wp-json/wp/v2/posts/${id}`
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
      <h1 className="text-4xl font-semibold" dangerouslySetInnerHTML={createMarkup(product && product.title.rendered)}></h1>
      <div
        dangerouslySetInnerHTML={createMarkup(product && product.content.rendered)}
      ></div>
    </MainLayout>
  );
};

export default Product;

function createMarkup(props) {
  return { __html: props };
}
