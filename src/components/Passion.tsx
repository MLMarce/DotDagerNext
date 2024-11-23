'use client'
import { useState } from "react";

type Props = {
    name: string;
    description: string;
    pYoutube: string;
    imgName?: string;
    link?: string;
    nameYT?: string;
}

export default function Passion({ name, description, imgName, link, pYoutube, nameYT }: Props) {


    return (
        <article className="w-full md:w-[40%]  h-2/4 flex flex-col md:items-center justify-around relative ">
            <header className="w-full p-2">
                <h4 className="font-semibold text-primary text-center text-2xl">{name}</h4>
            </header>
            <main className=" p-3 pt-4 h-3/5 flex flex-col gap-2">
                <p>{description}</p>
                <p>{pYoutube}</p>
            </main>
            <footer className="w-full h-16 p-2 px-3 relative">
                {link ? (
                <div className={`relative text-lg font-bold flex w-full h-full backdrop-blur-sm  p-2 rounded-full  hover:shadow-sm hover:shadow-primary  hover:text-primary/70 justify-center transition-all`}>
                    <img src={imgName} alt={name} className="absolute top-0 left-0 w-full h-full rounded-full object-cover" />
                    <a href={link} target="_blank" aria-hidden className={`absolute top-0 left-0 text-lg font-bold flex w-full h-full backdrop-blur-sm backdrop-brightness-50  p-2 rounded-full   hover:text-primary/70 justify-center`}>{nameYT}</a>

                </div>) : null
                }
            </footer>
        </article>
    )
}