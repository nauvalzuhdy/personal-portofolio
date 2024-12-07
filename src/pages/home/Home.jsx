import React from "react";
import zuhdy from '../../assets/zuhdy_profil.png';
import Education from '../../pages/education/Education';
import Skills from '../../pages/skills/Skills';
import Projects from '../../pages/projects/Projects';
import Build from "../build/Build";
import BottomNavbar from "../../components/bottomNavbar/BottomNavbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6 __variable_36bd41">
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <div className="flex">
                  <span className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    style={{
                      opacity: 1,
                      filter: 'blur(0px)',
                      transform: 'translateY(-8px) translateZ(0px)',
                    }} 
                  >
                  Hi, I'm Zuhdy 👋
                  </span>
                </div>
                <div className="flex">
                  <span className="inline-block max-w-[600px] md:text-xl" 
                  style= {{
                      opacity: 1,
                      filter: 'blur(0px)',
                      transform: 'translateY(-8px) translateZ(0px)',
                    }}
                  >Industrial Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.
                  </span>
                </div>
              </div>
              <div style={{
                  opacity: 1,
                  filter: 'blur(0px)',
                  transform: 'translateY(-6px) translateZ(0px)'
                }}>
                <span className="relative flex shrink-0 overflow-hidden rounded-full size-28 border">
                  <img className="aspect-square h-full w-full" src={zuhdy} alt="Nauval Zuhdy" />
                </span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div style={{
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateY(-6px) translateZ(0px)",
          }}>
            <h2 className="text-xl font-bold">About</h2>
          </div>
          <div style={{
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateY(-6px) translateZ(0px)",
          }}>
            <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              <p>
                At the beginning of 2024, I decided to delve deeper into the field of technology, 
                focusing on digital innovation, deep tech (advanced technologies driven by extensive 
                research to address significant societal challenges), and innovations that enhance system 
                efficiency and effectiveness. Currently, I am pursuing a degree in Industrial Engineering 
                while honing my skills as a full-stack developer. I would also be delighted to join teams 
                that work on projects or opportunities to bring these ideas to life through real-world applications.
              </p>
            </div>
          </div>
        </section>
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <div style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "translateY(-6px) translateZ(0px)",
              }}>
                <h2 className="text-xl font-bold">
                  Work Experience
                </h2>
            </div>
            <div style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "translateY(-6px) translateZ(0px)",
              }}>
                <a className="block cursor-pointer" href="https://atomic.finance/">
                  <div className="rounded-lg bg-card text-card-foreground flex">
                    <div className="flex-none">
                      <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                        <img className="aspect-square h-full w-full object-contain" src="" alt="Atomic Finance" />
                      </span>
                    </div>
                    <div className="flex-grow ml-4 items-center flex-col group">
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between gap-x-2 text-base">
                          <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                          Atomic Finance
                          <span className="inline-flex gap-x-1"></span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 rotate-0"><path d="m9 18 6-6-6-6"></path></svg>
                          </h3>
                          <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                            May 2021 - Oct 2022
                          </div>
                        </div>
                        <div className="font-sans text-xs">Bitcoin Protocol Engineer</div>
                      </div>
                      <div className="mt-2 text-xs sm:text-sm" style={{
                          opacity: 0,
                          height: 0,
                        }}>
                        Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.
                      </div>
                    </div>
                  </div>
                </a>
            </div>
            <div style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "translateY(-6px) translateZ(0px)",
              }}>
                <a className="block cursor-pointer" href="https://atomic.finance/">
                  <div className="rounded-lg bg-card text-card-foreground flex">
                    <div className="flex-none">
                      <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                        <img className="aspect-square h-full w-full object-contain" src="" alt="Atomic Finance" />
                      </span>
                    </div>
                    <div className="flex-grow ml-4 items-center flex-col group">
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between gap-x-2 text-base">
                          <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                          Atomic Finance
                          <span className="inline-flex gap-x-1"></span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 rotate-0"><path d="m9 18 6-6-6-6"></path></svg>
                          </h3>
                          <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                            May 2021 - Oct 2022
                          </div>
                        </div>
                        <div className="font-sans text-xs">Bitcoin Protocol Engineer</div>
                      </div>
                      <div className="mt-2 text-xs sm:text-sm" style={{
                          opacity: 0,
                          height: 0,
                        }}>
                        Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.
                      </div>
                    </div>
                  </div>
                </a>
            </div>
            <div style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "translateY(-6px) translateZ(0px)",
              }}>
                <a className="block cursor-pointer" href="https://atomic.finance/">
                  <div className="rounded-lg bg-card text-card-foreground flex">
                    <div className="flex-none">
                      <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                        <img className="aspect-square h-full w-full object-contain" src="" alt="Atomic Finance" />
                      </span>
                    </div>
                    <div className="flex-grow ml-4 items-center flex-col group">
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between gap-x-2 text-base">
                          <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                          Atomic Finance
                          <span className="inline-flex gap-x-1"></span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 rotate-0"><path d="m9 18 6-6-6-6"></path></svg>
                          </h3>
                          <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                            May 2021 - Oct 2022
                          </div>
                        </div>
                        <div className="font-sans text-xs">Bitcoin Protocol Engineer</div>
                      </div>
                      <div className="mt-2 text-xs sm:text-sm" style={{
                          opacity: 0,
                          height: 0,
                        }}>
                        Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.
                      </div>
                    </div>
                  </div>
                </a>
            </div>
          </div>
        </section>
        <Education />
        <Skills />
        <Projects />
        <Build/>
      </main>
      <BottomNavbar/>
    </div>
  );
};

export default Home;
