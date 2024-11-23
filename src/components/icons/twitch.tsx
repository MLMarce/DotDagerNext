import Link from "next/link";

export default function Twitch() {
    return (
        <div className="w-max h-max relative">
            <svg viewBox="1 4 34 34" fill="currentColor" width="40" height="40" focusable="false">
                <polygon points="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8" ></polygon>
                <polygon points="26 25 30 21 30 10 14 10 14 25 18 25 18 29 22 25" fill="#0a0a0a"></polygon>
                <path d="M20,14 L22,14 L22,20 L20,20 L20,14 Z M27,14 L27,20 L25,20 L25,14 L27,14 Z"></path>
            </svg>
            <Link href="https://www.twitch.tv/dagerxiv" aria-hidden className="absolute top-0 left-0 w-full h-full" target="_blank"/>
        </div>
    )
}