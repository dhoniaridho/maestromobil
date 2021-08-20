import MainLayout from "@/layouts/main-layout";
import { Brand } from "assets";
import Image from "next/image";
import Link from '@/ui/link';

export default function About() {
  return (
    <MainLayout>
      <section className="px-20">
        <div className="flex justify-between h-screen--4rem place-items-center">
          <div className="w-1/2">
            <Image
              draggable="false"
              className="object-scale-down"
              width="800px"
              alt="Brand"
              src={Brand}
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl mb-5">Tentang Kami</h1>
            <h3 className="font-bold my-2">Maestro Mobil</h3>
            <p>
                Kami adalah showroom mobil yang beralamat di jogja, showroom kami memiliki harga yang sangat terjangkau, dengan jaminan Sparepart murah
            </p>
            <h3 className="font-bold my-2">Jam Operasional</h3>
            <p>
            *Hari Ahad Tanggal merah* tetap bisa kita layani jika ada yang mau check unit, asalkan sebelumnya konfirmasi terlebih dahulu (karena selalu ada karyawan kami yang tidur dalam).
            </p>
            <div className="mt-5">
            <Link
                className="bg-gradient-to-r from-orange-500 to-yellow-500"
                type="secondary"
                size="md"
                href="/contact"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
