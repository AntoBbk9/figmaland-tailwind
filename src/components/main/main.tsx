import SectionItem from "./sectionItem";

function Main() {
    return (
        <>
            <section className="pb-20">
                <SectionItem>
                    <div className="py-10 sm:py-20">
                        <h3 className="title-h1-black">Features</h3>
                        <p className="block sm:hidden paragraph-black">Most calendars are designed for teams.</p>
                        <p className="hidden sm:block paragraph-black-sm">Most calendars are designed for teams. Slate is designed for freelancers</p>
                    </div>
                </SectionItem>

                    <img src="/video_screen.png" alt="" className="block sm:hidden"/>

                <div className="flex flex-col sm:flex-row gap-16 justify-center">
                    <SectionItem>
                        <div className="flex items-center flex-col">               
                            <img src="/Vector1.png" alt="" className="w-10 h-10"/>
                            <h3 className="font-bold text-center pt-6">OpenType features Variable fonts</h3>
                            <p className="paragraph-black">Slate helps you see how 
                                many more days you need 
                                to work to reach your 
                                financial goal.</p>

                        </div>
    
                    </SectionItem>

                        <SectionItem>
                        <div className="flex items-center flex-col">               
                            <img src="/mdi_draw.png" alt="" className="w-10 h-10" />
                                <h3 className="font-bold text-center pt-6">Design with real data</h3>
                                <p className="paragraph-black">Slate helps you see how 
                                    many more days you need 
                                    to work to reach your 
                                    financial goal.</p>
                        </div>
                    </SectionItem>

                    <SectionItem>
                        <div className="flex items-center flex-col">               
                            <img src="/mdi_brush.png" alt="" className="w-10 h-10" />
                                <h3 className="font-bold text-center pt-6">Fastest way to take action</h3>
                                <p className="paragraph-black">Slate helps you see how 
                                    many more days you need 
                                    to work to reach your 
                                    financial goal.</p>
                        </div>
                    </SectionItem>
                </div>


                <img src="/video-screen.png" alt="" className= "hidden sm:block w-[74rem] h-[45rem] m-auto pt-20"/>
                
                <div>
                    <SectionItem>
                        <h3 className="title-h1-black">Partners</h3>
                        <p className="paragraph-black-3">Most calendars are designed for teams. Slate is designed for freelancers</p>
                    </SectionItem>

                    <SectionItem>
                        <div className="parteners">                        
                            <div className="btn-parteners">
                                <h5>Client Name</h5>
                                <img src="/logos_google.png" alt="" className="w-[150px] h-[45px]"/>
                            </div>

                            <div className="btn-parteners">
                                <h5>Client Name</h5>
                                <img src="/partner-1.png" alt="" className="w-[150px] h-[45px]"/>
                            </div>

                            <div className="btn-parteners">
                                <h5>Client Name</h5>
                                <img src="/microsoft.png" alt="" className="w-[150px] h-[45px]"/>
                            </div>

                            <div className= "btn-parteners-hiden">
                                <h5>Client Name</h5>
                                <img src="/uber.png" alt="" className="w-[150px] h-[45px]"/>
                            </div>

                            <div className= "btn-parteners-hiden">
                                <h5>Client Name</h5>
                                <img src="/dropbox.png" alt="" className="w-[150px] h-[45px]"/>
                            </div>

                            <div className= "btn-parteners-hiden">
                                <h5>Client Name</h5>
                                <img src="/logos_google.png" alt="" className="w-[150px] h-[45px]"/>
                            </div>

                            <div className= "btn-parteners-hiden">
                                <h5>Client Name</h5>
                                <img src="/uber.png" alt="" className="w-[150px] h-[45px]"/>
                            </div>

                            <div className= "btn-parteners-hiden">
                                <h5>Client Name</h5>
                                <img src="/partner-1.png" alt="" className="w-[150px] h-[45px]"/>
                            </div>
                        </div>


                    </SectionItem>

                    <h1 className="title-h1-black">Testimonials</h1>

                    <SectionItem>
                        <div className="flex items-center flex-col justify-around">
                            <div className="pt-16 pb-6">
                                <img src="/IBM.png" alt="" className="w-[50px] h-[25px]"/>
                            </div>
                            <p className="paragraph-black-2 py-10">Most calendars are designed for teams. 
                                Slate is designed for freelancers who want a 
                                simple way to plan their schedule.</p>

                            <div className="flex items-center gap-4">
                                <img src="/avatar.png" alt="" />
                                <div>
                                    <p className="font-bold">Organize across</p>
                                    <p className="font-bold">Ui designer</p>
                                </div>
                            </div>
                        </div>
                    </SectionItem>
                </div> 
            </section>
        </>
    )
}

export default Main;