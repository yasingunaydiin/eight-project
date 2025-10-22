import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faUsers, faMapPin, faInfoCircle, faMugHot } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Hammer from 'hammerjs'
import dynamic from "next/dynamic";

const RouteMap = dynamic(() => import("../components/RouteMap"), { ssr: false });

const Trips = () => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  if (selectedTrip && modalRef.current) {
    import('hammerjs').then(Hammer => {
      const hammer = new Hammer.default(modalRef.current!);

      hammer.get('swipe').set({ direction: Hammer.DIRECTION_DOWN });

      hammer.on('swipedown', () => setSelectedTrip(null));

      return () => hammer.destroy();
    });
  }
});

    interface Trip {
      date: string;
      time: string;
      title: string;
      group: string;
      distance: string;
      description: string;
      gpxfile: string; 
      koffiestop: string;
    }

    const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);

    const tripData = [
    {
      date: "zo 26 oktober",
      time: "09:00",
      title: "W-07 MAARN2025 100KM",
      group: "D, E",
      distance: "100km",
      description: "Een uitdagende rit door de heuvelachtige regio rond Plasmolen met meerdere klimmetjes.",
      gpxfile: "/gpx/O-14-Gaanderen2025-96km.gpx",
      koffiestop: "Maarn, Reynaert (11u) na 54 km, Reserve: Maarsbergen, La Place (iets buiten de route) na 57 km"
    },
    {
      date: "zo 13 oktober",
      time: "10:00",
      title: "Z-13 Nijmegen",
      group: "A, B",
      distance: "120km",
      description: "Een lange rit richting Nijmegen met prachtige uitzichten langs de Waal.",
      gpxfile: "gpx/Doesburg-Ugchelen-97km.gpx",
      koffiestop: "Maarn, Reynaert (11u) na 54 km"
    },
    {
      date: "zo 13 oktober",
      time: "10:00",
      title: "Z-13 Nijmegen",
      group: "A, B",
      distance: "120km",
      description: "Een lange rit richting Nijmegen met prachtige uitzichten langs de Waal.",
      gpxfile: "gpx/W-07F-Overberg2025-89km.gpx",
      koffiestop: "Maarn, Reynaert (11u) na 54 km"
    }
  ];

  return (
    <div>
        <div className="max-w-4xl mx-auto">
            {/* Header Row */}
            <table className='w-full border-separate border-spacing-y-4'>
            <thead className="flex justify-between text-gray-500 text-sm font-medium px-4">
                <tr className="w-1/5">Datum</tr>
                <tr className="w-1/6">Tijd</tr>
                <tr className="w-1/5">Beschrijving</tr>
                <tr className="w-1/7">Groep</tr>
                <tr className="w-1/6">KM</tr>
            </thead>

                {/* Trip List */}
                <tbody className="space-y-6 mt-4">
                    {tripData.map((trip, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedTrip(trip)}
                        className="bg-white rounded-full border border-gray-200 p-4 cursor-pointer"
                    >
                        <div className="flex justify-between items-start">
                          <h3 className="w-1/5 text-base font-semibold text-gray-800">
                          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                          {trip.date}</h3>
                          <h3 className="w-1/6 text-base text-gray-800">{trip.time}</h3>
                          <h3 className="w-1/4 text-base text-gray-800">{trip.title}</h3>
                          <h3 className="w-1/7 text-base text-gray-800">{trip.group}</h3>
                          <h3 className="w-1/6 text-base text-gray-800">{trip.distance}</h3>
                        </div>
                    </div>
                    ))}
                </tbody>
                </table>
            </div>

        {/* Modal */}
        <AnimatePresence>
      {selectedTrip && (
        <motion.div
          className="fixed inset-0 flex justify-center p-4 bg-black bg-opacity-75 z-50"
          onClick={() => setSelectedTrip(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          ref={modalRef} //hammerjs reference
        >
          <motion.div
            className="bg-white rounded-t-3xl max-w-2xl relative mt-16"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            {/* Close Button */}
            <Button
              onClick={() => setSelectedTrip(null)}
              className="absolute top-4 right-4 bg-white font-medium rounded-full p-4 z-10 border"
              >
            Sluiten
            </Button>

            {/* Content */}
            <div className="p-20">
              <h2 className="text-5xl text-gray-800 mb-2">{selectedTrip.title}</h2>
              <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                  {selectedTrip.date}
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  {selectedTrip.time}
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faUsers} className="mr-2" />
                  {selectedTrip.group}
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faMapPin} className="mr-2" />
                  {selectedTrip.distance}
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faMugHot} className="mr-2" />
                  Koffiestop: {selectedTrip.koffiestop}
                </div>
              </div>
               

              <p className="text-gray-700 mb-6">{selectedTrip.description}</p>
                <div>
                    <p className='font-bold'>Download de GPX file van de route:</p>
                    <a
                      href={selectedTrip.gpxfile}
                      download
                      className="text-blue-600 underline hover:text-blue-800 transition"
                    >
                      <FontAwesomeIcon icon={faMapPin} className="mr-2" />
                      {selectedTrip.title}
                    </a>
                </div>
                {selectedTrip && (
                    <RouteMap gpxUrl={selectedTrip.gpxfile} />
                )}
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>

    
  )
}

export default Trips
