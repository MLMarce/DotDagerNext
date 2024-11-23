import Discord from "./icons/discord";
import GitHub from "./icons/github";
import Instagram from "./icons/instagram";
import LinkedIn from "./icons/linkedin";
import Twitch from "./icons/twitch";


export default function Networks() {
    return (
        <div className="w-full md:w-[70%] h-max p-2 flex justify-center gap-2">
            <GitHub/>
            <LinkedIn/>
            <Twitch/>
            <Discord/>
            <Instagram/>
        </div>
    )
}