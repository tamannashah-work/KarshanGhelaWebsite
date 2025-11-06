import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

export default function ReelCarousel() {
  const reelUrls = [
    "https://www.instagram.com/reel/C1os5QyoRc5/",
    "https://www.instagram.com/reel/C1EUP-3oEBh/",
    "https://www.instagram.com/reel/DEOqFi8oSWD/",
  ];

  return (
    <section className=" m-5 shadow py-10 px-4 rounded-2xl bg-gradient-to-br from-amber-100 to-green-100">
      <h2 className="text-2xl text-black mb-6 text-center">Video Testimonials</h2>
      <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth p-5 styled-scrollbar">
        {reelUrls.map((url, index) => (
         <div
            key={index}
            className="min-w-[280px] max-w-xs snap-start shrink-0 bg-white rounded-3xl shadow-lg p-3 transition-transform hover:scale-105"
            >
            <InstagramEmbed url={url} width={260} />
            </div>
        ))}
      </div>
    </section>

  );
}