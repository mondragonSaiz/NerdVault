import React, { useState } from 'react';
import Auth from '../utils/auth';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

import caruselImg1 from '../img/homeImages/carusel1.png';
import caruselImg2 from '../img/homeImages/carusel2.png';
import caruselImg3 from '../img/homeImages/carusel3.png';
import { Link } from 'react-router-dom';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
export default function MainPage() {
  const [imgIndex, setImgIndex] = useState(0);
  const caruselImages = [
    {
      name: 'imagen1',
      src: caruselImg1,
    },
    {
      name: 'imagen2',
      src: caruselImg2,
    },
    {
      name: 'imagen3',
      src: caruselImg3,
    },
  ];

  const prevSlide = () => {
    const isFirstImg = imgIndex === 0;
    const newIndex = isFirstImg ? caruselImages.length - 1 : imgIndex - 1;
    setImgIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastImg = imgIndex === caruselImages.length - 1;
    const newIndex = isLastImg ? 0 : imgIndex + 1;
    setImgIndex(newIndex);
  };

  const handleDotClick = (index) => {
    setImgIndex(index);
  };
  if (!Auth.loggedIn()) return <Navigate to="/" />;
  return (
    <div>
      <main className="bg-gradient-to-t from-orange-500 to-[#000000] px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Navbar />
          <div className="flex flex-col mt-10 lg:flex-row lg:justify-evenly">
            <div className="text-slate-200  font-medium text-base w-5/6 lg:text-2xl lg:w-3/5 m-3">
              <h1 className="font-poppins">
                Step into a world where the legendary warriors of Dragon Ball
                come to life in a breathtaking display of artistry and
                precision. Behold the Dragon Ball SH Figuarts collection - a
                symphony of meticulously crafted figures that embody the essence
                of your favorite characters. From the fierce determination in
                Goku's eyes as he powers up for battle, to the regal aura of
                Vegeta as he stands poised to defend his pride, each figure is a
                testament to the fusion of design and passion.
              </h1>
              <div className="mt-8">
                {' '}
                <Link
                  to="/collection"
                  className="mt-9 bg-slate-200 text-neutral-950 hover:text-orange-500  hover:bg-orange-200 py-2 px-6 font-bold font-poppins rounded-lg lg:text-lg cursor-pointer hover:scale-125 transition duration-300 ease-in-out "
                >
                  See collection!
                </Link>
              </div>
            </div>
          </div>
          <div className="max-w-[800px] h-[900px] max-[420px]:max-w-[500px] max-[420px]:h-[500px] w-full m-auto py-16 px-4 bg-cover relative group">
            <div
              style={{
                backgroundImage: `url(${caruselImages[imgIndex].src})`,
              }}
              className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            ></div>
            <div className="hidden group-hover:block absolute top-[50%] translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20  text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} />
            </div>
            <div
              onClick={nextSlide}
              className="hidden group-hover:block absolute top-[50%] translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20  text-white cursor-pointer"
            >
              <BsChevronCompactRight />
            </div>
            <div className="flex top-4 justify-center py-2">
              {caruselImages.map((img, index) => (
                <div>
                  <RxDotFilled
                    className="cursor-pointer"
                    onClick={() => handleDotClick(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
