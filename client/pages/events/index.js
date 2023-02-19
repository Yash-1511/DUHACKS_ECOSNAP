import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import bgsingup from "public/images/tutorial-01.jpg";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import Layout from "@/layouts/Main";
const index = () => {
  const handleJoinEvent = (eventId) => {
    console.log(`Join event with id ${eventId}`);
  };
  const [{ loading, events }, setEventManagerState] = useState({
    loading: true,
    events: null,
  });
  const fetchAllEvents = async () => {
    try {
      if (events) {
        return;
      }
      const response = await axios.get(`http://localhost:8000/api/events`);

      setEventManagerState({
        loading: false,
        events: response.data.allEvents,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllEvents();
  }, [events]);
  console.log(events);
  return (
    <Layout title="Events - EcoSnap">
      <div>
        <Navbar />
        <main className="flex-1">
          <header className="bg-gray-100 shadow">
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-medium tracking-tight text-gray-900">
                All Events
              </h1>
            </div>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
            {events && events.length > 0 ? (
              events.map((event) => (
                <EventCard
                  key={event.id}
                  name={event.name}
                  description={event.description}
                  startDate={event.startDate}
                  endDate={event.endDate}
                  open={event.open}
                  imageSrc={event.banner}
                  location={event.location}
                  joinEvent={() => handleJoinEvent(event.id)}
                />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default index;
