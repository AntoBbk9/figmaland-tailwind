import SectionItem from "./sectionItem";

function Main() {
    return (
        <>
            <section className="max-w-sm">
                <SectionItem>
                    <h3 className="title-h1-black">Features</h3>
                    <p className="paragraph-black">Most calendars are designed for teams.</p>
                    </SectionItem>

                    <img src="/public/video_screen.png" alt="" />

                <SectionItem>
                <img src="/public/vector.png" alt="" />
                    <h3>OpenType features Variable fonts</h3>
                    <p className="paragraph-black">Slate helps you see how 
                        many more days you need 
                        to work to reach your 
                        financial goal.</p>
                </SectionItem>

                <SectionItem>
                <img src="/mdi_draw.png" alt="" />
                    <h3>Design with real data</h3>
                    <p >Slate helps you see how 
                        many more days you need 
                        to work to reach your 
                        financial goal.</p>
                </SectionItem>

                <SectionItem>
                <img src="/public/mdi_brush.png" alt="" />
                    <h3>Fastest way to take action</h3>
                    <p>Slate helps you see how 
                        many more days you need 
                        to work to reach your 
                        financial goal.</p>
                </SectionItem>

                    <SectionItem>
                        <h3>Partners</h3>
                        <p>Most calendars are designed for teams. Slate is designed for freelancers</p>
                    </SectionItem>

                    <SectionItem>
                        <div>
                            <h5>Client Name</h5>
                            <img src="/public/logos_google.png" alt="" />
                        </div>

                        <div>
                            <h5>Client Name</h5>
                            <img src="/public/partner-1.png" alt="" />
                        </div>

                        <div>
                            <h5>Client Name</h5>
                            <img src="/public/microsoft.png" alt="" />
                        </div>

                    </SectionItem>

                    <h1>Testimonials</h1>

                <SectionItem>
                <img src="/public/IBM.png" alt="" />
                    <p>Most calendars are designed for teams. 
                        Slate is designed for freelancers who want a 
                        simple way to plan their schedule.</p>

                    <div>
                        <img src="/public/avatar.png" alt="" />
                        <p>Organize across</p>
                        <p>Ui designer</p>
                    </div>
                </SectionItem>
            </section>
        </>
    )
}

export default Main;