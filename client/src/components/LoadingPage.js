import React from 'react';
import gokuLogo from '../img/gokuLogo.svg';
export default function LoadingPage() {
  return (
    <div>
      <main className="bg-neutral-950  to-[#000000] px-10 md:px-20 lg:px-40">
        <section className="min-h-screen pb-3">
          <div className="flex flex-col items-center pt-[20%]">
            <h1 className="text-2xl text-slate-200">Loading ...</h1>
            <img className="w-[350px]" src={gokuLogo} />
          </div>
        </section>
      </main>
    </div>
  );
}
