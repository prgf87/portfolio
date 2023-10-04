import React from 'react';

export default function Projects() {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative overflow-hidden flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute text-center top-24 uppercase tracking-[8px] pl-4 md:pl-0 text-gray-400 text-3xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-10">
        {projects.map((p) => {
          <article className="w-screen flex-shrink-0 snap-center" key={p}>
            {/* <img src="/ak-logo.png" alt="/" /> */}
            <div>
              <h4>Case Study 1 of 3: E-Commerce website for AnaKnits</h4>
            </div>
          </article>;
        })}
      </div>

      <div className="w-full absolute top-[27%] bg-lime-500/20 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}
