import MainLayout from "@/layouts/main-layout";
import * as Fa from "react-icons/fa";

export default function Contact() {
  return (
    <MainLayout>
      <section className="min-h-screen flex flex-col px-5 sm:px-10 md:px-20 py-10">
        <div className="w-full">
          <div className="gmap_canvas">
            <iframe
              className="w-full h-72"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=MAESTRO%20MOBIL-2&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder={0}
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
            />
          </div>
        </div>

        <div className="mt-5">
          <h1 className="font-semibold">Jam Operasional</h1>
          <p>Setiap Hari Jam 08.00 – 17.00 WIB</p>
        </div>
        <div className="grid grid-cols-1">
          <h1 className="font-semibold my-3">Hubungi Kami</h1>
          <a
            className="inline-flex place-items-center p-2"
            href="http://wa.me/6281393690220"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Fa.FaWhatsapp size="30px" />
            <h1 className="pl-2">Whatsapp</h1>
          </a>
          <a
            className="inline-flex place-items-center p-2"
            href="http://instagram.com/maestromobil.jogja"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Fa.FaInstagram size="30px" />
            <h1 className="pl-2">Instagram</h1>
          </a>
          <a
            className="inline-flex place-items-center p-2"
            href="mailto:maestromobilyogyakarta@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Fa.FaMailBulk size="30px" />
            <h1 className="pl-2">Email</h1>
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
