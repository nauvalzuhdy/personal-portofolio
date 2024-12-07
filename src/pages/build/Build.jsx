import React from "react";

const Build = () => {
  return (
    <section id="build">
        <div className="space-y-12 w-full py-12" >
            <div style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "translateY(-6px) translateZ(0px)",
            }}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center" >
                    <div className="space-y-2" >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" >
                            I like building things
                        </h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            During my time in university, I attended 21 + hackathons. People from around the country would 
                            come together and build incredible things in 2-3 days. It was eye-opening to see the endless 
                            possibilities brought to life by a group of motivated and passionate individuals.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "translateY(-6px) translateZ(0px)",
            }}>
                <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                    <div style={{
                        opacity: 1,
                        filter: "blur(0px)",
                        transform: "translateY(-6px) translateZ(0px)",
                    }}>
                        <li className="relative ml-10 py-4">
                            <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
                                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                                        H
                                    </span>
                                </span>
                            </div>
                            <div className="flex flex-1 flex-col justify-start gap-1" >
                                <time className="text-xs text-muted-foreground">November 23rd - 25th, 2018</time>
                                <h2 className="font-semibold leading-none" >Hack Western 5</h2>
                                <p className="text-sm text-muted-foreground">London, Ontario</p>
                                <span className="prose dark:prose-invert text-sm text-muted-foreground">
                                    Developed a mobile application which delivered bedtime stories to children using augmented reality.
                                </span>
                            </div>
                        </li>
                    </div>
                    <div style={{
                        opacity: 1,
                        filter: "blur(0px)",
                        transform: "translateY(-6px) translateZ(0px)",
                    }}>
                        <li className="relative ml-10 py-4">
                            <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
                                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                                        H
                                    </span>
                                </span>
                            </div>
                            <div className="flex flex-1 flex-col justify-start gap-1" >
                                <time className="text-xs text-muted-foreground">November 23rd - 25th, 2018</time>
                                <h2 className="font-semibold leading-none" >Hack Western 5</h2>
                                <p className="text-sm text-muted-foreground">London, Ontario</p>
                                <span className="prose dark:prose-invert text-sm text-muted-foreground">
                                    Developed a mobile application which delivered bedtime stories to children using augmented reality.
                                </span>
                            </div>
                        </li>
                    </div>
                    <div style={{
                        opacity: 1,
                        filter: "blur(0px)",
                        transform: "translateY(-6px) translateZ(0px)",
                    }}>
                        <li className="relative ml-10 py-4">
                            <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
                                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                                        H
                                    </span>
                                </span>
                            </div>
                            <div className="flex flex-1 flex-col justify-start gap-1" >
                                <time className="text-xs text-muted-foreground">November 23rd - 25th, 2018</time>
                                <h2 className="font-semibold leading-none" >Hack Western 5</h2>
                                <p className="text-sm text-muted-foreground">London, Ontario</p>
                                <span className="prose dark:prose-invert text-sm text-muted-foreground">
                                    Developed a mobile application which delivered bedtime stories to children using augmented reality.
                                </span>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </section>
  );
};

export default Build;