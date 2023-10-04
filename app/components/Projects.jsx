/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative overflow-hidden flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute text-center top-24 uppercase tracking-[8px] md:pl-0 text-gray-500 text-3xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20">
        {projects.map((p, i) => {
          return (
            <article
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-10 items-center justify-center px-10 md:p-44 h-screen"
              key={p}
            >
              <motion.img
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src="/ak-home.png"
                alt="/"
                className="h-[400px] object-cover"
              />
              <div className="space-y-10 text-center px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl mt-14 font-semibold">
                  <span className="underline decoration-[#eee]/60">
                    Case Study {i + 1} of {projects.length}:
                  </span>{' '}
                  E-Commerce website for AnaKnits
                </h4>
                <p className="text-lg">
                  {' '}
                  Case study summary with examples and explanations of the
                  technology used and what the outcome was Case study summary
                  with examples and explanations of the technology used and what
                  the outcome was{' '}
                </p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="w-full absolute top-[27%] bg-green-800/20 left-0 h-[500px] -skew-y-12 z-0" />
    </div>
  );
}

// import React from 'react';

// export default function Projects() {
//   const projects = [1, 2, 3, 4, 5];
//   return (
//     <div className="h-screen relative overflow-hidden flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
//       <h3 className="absolute text-center top-24 uppercase tracking-[8px] pl-4 md:pl-0 text-gray-500 text-3xl">
//         Projects
//       </h3>

//       <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-10">
//         {projects.map((p) => {
//           <article className="w-screen flex-shrink-0 snap-center" key={p}>
//             {/* <img src="/ak-logo.png" alt="/" /> */}
//             <div>
//               <h4>Case Study 1 of 3: E-Commerce website for AnaKnits</h4>
//             </div>
//           </article>;
//         })}
//       </div>

//       <div className="w-full absolute top-[27%] bg-lime-500/20 left-0 h-[500px] -skew-y-12" />
//     </div>
//   );
// }