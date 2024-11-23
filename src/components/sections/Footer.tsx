import Image from "next/image";
import Networks from "../Networks";

export default function Footer() {
    return (
        <footer id="footer" className="w-full h-max p-2 pt-5 flex flex-col gap-2 md:justify-between items-center relative border-t">
            <Networks />
            <div className="flex items-center w-full justify-center gap-8">
                <Image src='/Dot.webp' alt="dot dager logo" width={40} height={40} className="rounded-lg" />
                <h5>&copy; Dot Dager</h5>
            </div>
        </footer>
    )
}