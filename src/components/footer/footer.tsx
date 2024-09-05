import FacebookIcon from "./facebookIcon";
import FooterItem from "./footerItem";
import LinkedInIcon from "./linkedInIcon";
import LocalisationIcon from "./localisationIcon";
import TelIcon from "./tel-icon";
import TwitterIcon from "./twitterIcon";

function Footer() {
    return(

        <div className="bg-blue-950 flex flex-col sm:flex-row gap-10 sm:gap-32 px-24 py-24 justify-center">
        <FooterItem heading="Pages">
            <p>Home</p>
            <p>Product</p>
            <p>Pricing</p>
            <p>About</p>
            <p>Contact</p>
        </FooterItem>

        <FooterItem heading="Tomothy">
            <p>Eleanor Edwards</p>
            <p>Ted Roberston</p>
            <p>Annette Russell</p>
            <p>Jennie Mckinney</p>
            <p>Gloria Richard</p>
        </FooterItem>

        <FooterItem heading="Jane Black">
            <p>Philip Jones</p>
            <p>Product</p>
            <p>Colleen Russell</p>
            <p>Marvin Hawkins</p>
            <p>Bruce Simmmons</p>
        </FooterItem>

        <div className="flex flex-col gap-10">
            <div className="flex justify-items-left flex-col items-center">
                <div className="flex justify-left items-center gap-3">
                    <LocalisationIcon />
                    <p className="text-white">7480 Mockingbird Hill undefined </p>
                </div>

                <div className="flex justify-left items-center gap-3">
                    <TelIcon />
                    <p className="text-white">(239) 555-0108</p>
                </div>
            </div>

            <div className="flex justify-center items-center gap-7">
                <TwitterIcon />
                <FacebookIcon />
                <LinkedInIcon />
            </div>
            </div>
        </div>

    )

}

export default Footer