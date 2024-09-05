import Navbar from "../navbar/navbar";


function Header() {
    return (
        <>
        <div className="bg-[url('/public/telBG.png')] bg-center sm:bg-[url('/public/header-desktopt.png')] sm:bg-center h-[639px] sm:h-[57.9rem] bg-cover xl:h-[73rem]">
            <Navbar />
            <div className="px-10 pt-28">
                <h1 className="title-h1">The best products start with Figma</h1>
                <p className="paragraph flex sm:hidden">Most calendars are designed for teams.</p>
                <p className="text-white hidden sm:flex w-[26.5rem] text-center m-auto pt-6">Most calendars are designed for teams. Slate is designed for freelancers</p>

            </div>
        </div>
        </>
    )
}

export default Header;