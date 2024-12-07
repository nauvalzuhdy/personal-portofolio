import React from "react";
import MAN from "../../assets/MAN.png"
import rise from "../../assets/rise.png"

const Education = () => {
    return (
        <section id="education">
            <div className="flex min-h-0 flex-col gap-y-3">
                <div style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    transform: "translateY(-6px) translateZ(0px)"
                    }}>
                    <h2 className="text-xl font-bold" >Education</h2>
                </div>
                <div style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    transform: "translateY(-6px) translateZ(0px)"
                    }}>
                    <a className="block cursor-pointer" href="https://www.man2kotakediri.sch.id/">
                    <div className="rounded-lg bg-card text-card-foreground flex" >
                        <div className="flex-none" >
                            <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground" >
                                <img className="aspect-square h-full w-full object-contain" src={MAN} alt="Man2" />
                            </span>
                        </div>
                        <div className="flex-grow ml-4 items-center flex-col group" >
                            <div className="flex flex-col" >
                                <div className="flex items-center justify-between gap-x-2 text-base" >
                                    <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm" >
                                       MAN 2 Kediri City
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 rotate-0"><path d="m9 18 6-6-6-6"></path>
                                       </svg>
                                    </h3>
                                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right" >
                                    2019 - 2022
                                    </div>
                                </div>
                                <div className="font-sans text-xs" >
                                    High School Diploma
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
                <div style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    transform: "translateY(-6px) translateZ(0px)"
                    }}>
                    <a className="block cursor-pointer" href="https://www.btu.edu.tr/">
                    <div className="rounded-lg bg-card text-card-foreground flex" >
                        <div className="flex-none" >
                            <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground" >
                                <img className="aspect-square h-full w-full object-contain" src="https://upload.wikimedia.org/wikipedia/tr/0/04/Bursa_Teknik_%C3%9Cniversitesi_Logosu.png" alt="BTU" />
                            </span>
                        </div>
                        <div className="flex-grow ml-4 items-center flex-col group" >
                            <div className="flex flex-col" >
                                <div className="flex items-center justify-between gap-x-2 text-base" >
                                    <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm" >
                                       Bursa Teknik University
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 rotate-0"><path d="m9 18 6-6-6-6"></path>
                                       </svg>
                                    </h3>
                                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right" >
                                      2023 - now 
                                    </div>
                                </div>
                                <div className="font-sans text-xs" >
                                    Industrial Engineer
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
                <div style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    transform: "translateY(-6px) translateZ(0px)"
                    }}>
                    <a className="block cursor-pointer" href="https://www.harisenin.com/">
                    <div className="rounded-lg bg-card text-card-foreground flex" >
                        <div className="flex-none" >
                            <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground" >
                                <img className="aspect-square h-full w-full object-contain" src={rise} alt="rise" />
                            </span>
                        </div>
                        <div className="flex-grow ml-4 items-center flex-col group" >
                            <div className="flex flex-col" >
                                <div className="flex items-center justify-between gap-x-2 text-base" >
                                    <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm" >
                                       Rise
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 rotate-0"><path d="m9 18 6-6-6-6"></path>
                                       </svg>
                                    </h3>
                                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right" >
                                    2024
                                    </div>
                                </div>
                                <div className="font-sans text-xs" >
                                Full-Stack Developer
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        </section>
    );
};
  
export default Education;