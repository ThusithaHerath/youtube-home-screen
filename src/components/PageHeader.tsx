import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react"
import logo from "../assets/yt.png"
import { Button } from "../components/Button"
import { useState } from "react"

export function PageHeader() {
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

    return (
        <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
            <div className={`gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden":"flex"}`}>
                <Button variant="ghost" size="icon">
                    <Menu/>
                </Button>
                <a href="/">
                    <img src={logo} alt="" className="h-6" />
                </a>
            </div>
            <form className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex":"md:flex hidden"}`}>
                    {showFullWidthSearch && (<Button className="flex-shrink-0" type="button" size="icon" variant="ghost" onClick={()=>setShowFullWidthSearch(false)}> 
                        <ArrowLeft/>
                    </Button>)}
                <div className="flex flex-grow max-w-[600px]">
                    <input type="text" placeholder="Search" className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"/>
                    <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-1-0 flex-shrink-0"> 
                        <Search/>
                    </Button>
                </div>
                <Button type="button" className="flex-shrink-0" size="icon">
                    <Mic/>
                </Button>
            </form>
            <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden":"flex"}`}>
                <Button variant="ghost" size="icon" className="md:hidden" onClick={()=>setShowFullWidthSearch(true)}>
                    <Search/>
                </Button>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Mic/>
                </Button>
                <Button variant="ghost" size="icon">
                    <Upload/>
                </Button>
                <Button variant="ghost" size="icon">
                    <Bell/>
                </Button>
                <Button variant="ghost" size="icon">
                    <User/>
                </Button>
            </div>
        </div>
    )

}