import Navbar from "../navbar/navbar";


function Header() {
    return (
        <>
        <div className="bg-[url('/public/telBG.png')] max-w-sm h-[639px]">
            <Navbar />
            <div className="px-10">
                <h1 className="title-h1">The best products start with Figma</h1>
                <p className="paragraph">Most calendars are designed for teams.</p>
            </div>
        </div>
        </>
    )
}

export default Header;