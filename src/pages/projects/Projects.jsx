import React from "react";

const Projects = () => {
  return (
    <section id="projects">
        <div className="space-y-12 w-full py-12" >
            <div style= {{
                    opacity: 1,
                    filter: "blur(0px)",
                    transform: "translateY(-6px) translateZ(0px)",
                }}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center" >
                    <div className="space-y-2" >
                        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm" >
                            My Projects
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" >
                            Check out my latest work
                        </h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" >
                            I've worked on a variety of projects, from simple websites to complex web applications. 
                            Here are a few of my favorites.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto" >
                <div style={{
                    opacity: 1,
                    filter: 'blur(0px)',
                    transform: 'translateY(-6px) translateZ(0px)',
                }} >
                    <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden 
                    border hover:shadow-lg transition-all duration-300 ease-out h-full" >
                        <a className="block cursor-pointer" href="https://chatcollect.com/">
                            <video src="https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4" className="pointer-events-none mx-auto h-40 w-full object-cover object-top" >
                            </video>
                        </a>
                        <div className="flex flex-col px-2" >
                            <div className="space-y-1" >
                                <h3 className="font-semibold tracking-tight mt-1 text-base" > 
                                Chat Collect
                                </h3>
                                <time className="font-sans text-xs">Jan 2024 - Feb 2024</time>
                                <div className="hidden font-sans text-xs underline print:visible" ></div>
                                <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert" >
                                    <p>
                                        I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-2" >
                            <div className="mt-2 flex flex-wrap gap-1" >
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Next.js
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Typescript
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Prisma
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Tailwind
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Stripe
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Django
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Mysql
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Typescript
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center pt-2 px-2 pb-2" >
                            <div className="flex flex-row flex-wrap items-start gap-1" >
                                <a  target="_blank" href="https://chatcollect.com/">
                                    <div className="items-center rounded-md border font-semibold transition-colors 
                                    focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                    bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                            class="lucide lucide-globe size-3">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                            <path d="M2 12h20"></path>
                                        </svg>
                                        Website
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    opacity: 1,
                    filter: 'blur(0px)',
                    transform: 'translateY(-6px) translateZ(0px)',
                }} >
                    <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden 
                    border hover:shadow-lg transition-all duration-300 ease-out h-full" >
                        <a className="block cursor-pointer" href="https://magicui.design/">
                            <video src="https://cdn.magicui.design/bento-grid.mp4" autoplay loop muted playsinline 
                            className="pointer-events-auto mx-auto h-40 w-full object-cover object-top" >
                            </video>
                        </a>
                        <div className="flex flex-col px-2" >
                            <div className="space-y-1" >
                                <h3 className="font-semibold tracking-tight mt-1 text-base" > 
                                Chat Collect
                                </h3>
                                <time className="font-sans text-xs">Jan 2024 - Feb 2024</time>
                                <div className="hidden font-sans text-xs underline print:visible" ></div>
                                <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert" >
                                    <p>
                                        I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-2" >
                            <div className="mt-2 flex flex-wrap gap-1" >
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Next.js
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Typescript
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Prisma
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Tailwind
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Stripe
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Django
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Mysql
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Typescript
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center pt-2 px-2 pb-2" >
                            <div className="flex flex-row flex-wrap items-start gap-1" >
                                <a  target="_blank" href="https://chatcollect.com/">
                                    <div className="items-center rounded-md border font-semibold transition-colors 
                                    focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                    bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                            class="lucide lucide-globe size-3">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                            <path d="M2 12h20"></path>
                                        </svg>
                                        Website
                                    </div>
                                </a>
                                <a target="_blank" href="https://github.com/nauvalzuhdy/MyMusic-Landing-Page">
                                <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none 
                                focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground 
                                shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]" >
                                    <svg viewBox="0 0 438.549 438.549" class="size-3"><path fill="currentColor" 
                                    d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 
                                    0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 
                                    13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 
                                    2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 
                                    1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-
                                    8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-
                                    8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-
                                    3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 
                                    3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 
                                    12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 
                                    6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-
                                    5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-
                                    42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 
                                    24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 
                                    35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 
                                    10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 
                                    22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 
                                    13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 
                                    14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 
                                    44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-
                                    9.818-76.454-29.414-110.049z"></path>
                                    </svg>
                                    Source
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    opacity: 1,
                    filter: 'blur(0px)',
                    transform: 'translateY(-6px) translateZ(0px)',
                }} >
                    <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden 
                    border hover:shadow-lg transition-all duration-300 ease-out h-full" >
                        <video src="https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4" className="pointer-events-none mx-auto h-40 w-full object-cover object-top" >
                        </video>
                        <a className="block cursor-pointer" href="https://chatcollect.com/"></a>
                        <div className="flex flex-col px-2" >
                            <div className="space-y-1" >
                                <h3 className="font-semibold tracking-tight mt-1 text-base" > 
                                Chat Collect
                                </h3>
                                <time className="font-sans text-xs">Jan 2024 - Feb 2024</time>
                                <div className="hidden font-sans text-xs underline print:visible" ></div>
                                <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert" >
                                    <p>
                                        I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-2" >
                            <div className="mt-2 flex flex-wrap gap-1" >
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Next.js
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Typescript
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Prisma
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Tailwind
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Stripe
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Django
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Mysql
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Typescript
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center pt-2 px-2 pb-2" >
                            <div className="flex flex-row flex-wrap items-start gap-1" >
                                <a  target="_blank" href="https://chatcollect.com/">
                                    <div className="items-center rounded-md border font-semibold transition-colors 
                                    focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                    bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                            class="lucide lucide-globe size-3">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                            <path d="M2 12h20"></path>
                                        </svg>
                                        Website
                                    </div>
                                </a>
                                <a target="_blank" href="https://github.com/nauvalzuhdy/MyMusic-Landing-Page">
                                <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none 
                                focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground 
                                shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]" >
                                    <svg viewBox="0 0 438.549 438.549" class="size-3"><path fill="currentColor" 
                                    d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 
                                    0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 
                                    13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 
                                    2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 
                                    1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-
                                    8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-
                                    8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-
                                    3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 
                                    3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 
                                    12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 
                                    6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-
                                    5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-
                                    42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 
                                    24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 
                                    35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 
                                    10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 
                                    22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 
                                    13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 
                                    14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 
                                    44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-
                                    9.818-76.454-29.414-110.049z"></path>
                                    </svg>
                                    Source
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    opacity: 1,
                    filter: 'blur(0px)',
                    transform: 'translateY(-6px) translateZ(0px)',
                }} >
                    <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden 
                    border hover:shadow-lg transition-all duration-300 ease-out h-full" >
                        <video src="https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4" className="pointer-events-none mx-auto h-40 w-full object-cover object-top" >
                        </video>
                        <a className="block cursor-pointer" href="https://chatcollect.com/"></a>
                        <div className="flex flex-col px-2" >
                            <div className="space-y-1" >
                                <h3 className="font-semibold tracking-tight mt-1 text-base" > 
                                Chat Collect
                                </h3>
                                <time className="font-sans text-xs">Jan 2024 - Feb 2024</time>
                                <div className="hidden font-sans text-xs underline print:visible" ></div>
                                <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert" >
                                    <p>
                                        I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-2" >
                            <div className="mt-2 flex flex-wrap gap-1" >
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Next.js
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Typescript
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Prisma
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Tailwind
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Stripe
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Django
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Mysql
                                </div>
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors 
                                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]" >
                                    Typescript
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center pt-2 px-2 pb-2" >
                            <div className="flex flex-row flex-wrap items-start gap-1" >
                                <a  target="_blank" href="https://chatcollect.com/">
                                    <div className="items-center rounded-md border font-semibold transition-colors 
                                    focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                    bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                            class="lucide lucide-globe size-3">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                            <path d="M2 12h20"></path>
                                        </svg>
                                        Website
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Projects;