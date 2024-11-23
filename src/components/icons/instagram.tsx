import Link from "next/link";

export default function Instagram() {
    return (
        <div className="w-max h-max relative">
            <svg viewBox="1 2 20 20" width="40" height="40" focusable="false"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" ></path>
                <path d="M16.5 7.5l0 .01 "></path>
            </svg>
            <Link href="https://github.com/MarianoVilla" aria-hidden className="absolute top-0 left-0 w-full h-full" target="_blank" />
        </div>
    )
}