import React from "react";
import Image from "next/image";
import howto from "public/images/howto.png"
const Howto = () => {
  return (
    <section className="pt-16 pb-14 sm:pb-20 sm:pt-32 lg:pb-32" id="howto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            How EcoSnap Works.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Because you’d probably be a little confused if we suggested you
            complicate your everyday business tasks instead.
          </p>
        </div>
      </div>
      <div className="pt-8">
        <Image src={howto} alt="howtoimage" className="w-full"/>
      </div>
    </section>
  );
};

export default Howto;
