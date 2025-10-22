"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Trips from "@/components/Trips";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="bg-black">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-start items-center gap-6">
            <motion.svg
            width="141"
            height="17"
            viewBox="0 0 141 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ y: 0, filter: "brightness(1)" }}
            whileHover={{ y: -0.5, filter: "brightness(0.8)" }}
            className="cursor-pointer"
            ><path d="M0 15.9768L6.80983 0.277094C6.80983 0.277094 40.2709 0.233758 41.1097 0.184232C42.6048 0.0913702 43.5396 0.744495 42.9669 2.04146C42.3943 3.33842 41.1097 6.71548 40.6299 7.46456C40.3398 7.96415 39.9334 8.3863 39.4451 8.6951C38.9568 9.0039 38.4012 9.19022 37.8255 9.23821C36.0488 9.33416 32.78 9.23821 32.78 9.23821L39.2277 15.9676C39.2277 15.9676 26.2271 16.3421 26.0507 16.0604C25.8743 15.7787 18.6682 6.80834 18.6682 6.80834H28.1308C28.8799 6.80834 30.8423 2.97626 29.6259 2.97626C28.4094 2.97626 17.9439 2.8834 17.9439 2.8834L12.8984 15.884L0 15.9768Z" fill="white"></path><path d="M45.2377 0.275879H102.898C101.778 1.20449 100.657 3.17315 100.657 3.17315H93.7422L88.7896 15.697L75.1452 15.7899L80.4723 3.17315L56.3625 3.26601L55.2388 6.25614L75.1452 6.16329L73.9318 9.4351H53.8335C53.8335 9.4351 53.1804 11.2087 53.0876 11.4904C52.9947 11.7721 52.713 12.7038 53.6478 12.7038C54.5826 12.7038 72.9011 12.611 72.9011 12.611L71.7774 15.7899H45.1417C42.4333 15.7899 40.1891 12.611 41.4056 9.62082C42.6221 6.63069 45.2377 0.275879 45.2377 0.275879Z" fill="white"></path><path d="M106.075 0.275724C107.57 0.207625 137.103 0.182861 138.32 0.182861C139.536 0.182861 140.653 1.95651 139.907 3.6404C139.161 5.32428 136.261 12.617 135.515 13.7313C135.063 14.404 134.449 14.9531 133.731 15.3288C133.013 15.7045 132.212 15.8948 131.401 15.8826C129.439 15.8826 101.775 15.9755 100.373 15.7897C98.9711 15.604 97.2779 14.2947 98.318 11.8648C99.358 9.43494 101.59 4.85379 102.429 3.07704C103.267 1.30029 104.02 0.368585 106.075 0.275724ZM107.849 5.60286C107.514 6.50362 106.92 7.84392 106.261 9.62685C105.849 10.7505 106.357 11.4841 107.849 11.4841H127.659C129.25 11.4841 129.621 10.0819 130.086 9.23993C130.588 8.20972 131.025 7.14902 131.395 6.06408C131.909 4.72997 131.677 3.91279 130.467 3.91279H110.093C109.05 3.92208 108.13 4.85069 107.849 5.60286Z" fill="white"></path></motion.svg>
            <nav>
              <ul className="flex space-x-6 text-white items-center">
                <li><a href="#">Wielrennen</a></li>
                <li><a href="#">Kalender</a></li>
                <li><a href="#">Nieuws</a></li>
                <li><a href="#">Clubkleding</a></li>
                <li><a href="#">Over RETO</a></li>
                <Button variant="outline">Lid worden</Button>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/reto-hero.webp"
          alt="RETO Cycling Club"
          fill
          className="object-cover brightness-75"
          style={{
            clipPath: "polygon(-1px -1px, calc(100% + 1px) -1px, calc(100% + 1px) calc(100% - 24px), -1px calc(100% + 1px))",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl mb-4">KALENDER</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Alle activiteiten, trainingen en clubritten die RETO organiseert voor de verschillende disciplines.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center space-x-4 mt-10">
        <Button variant="outline" className="text-blue-600">Clubritten</Button>
        <Button variant="outline" className="text-blue-600">Activiteiten</Button>
      </div>

      {/* Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-gray-800 mb-4">CLUBRITTEN</h2>
          <p className="text-gray-600 text-lg">
            Let op: de route (gpx) is vrijdagavond na 20.00 uur definitief! Download routes dus pas na dit tijdstip.
          </p>
        </div>

        {/* Trips */}
        <Trips />
      </section>
    </div>
  );
}
