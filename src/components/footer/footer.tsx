import FooterItem from "./footerItem";
import LocalisationIcon from "./localisationIcon";
import TelIcon from "./tel-icon";

function Footer() {
    return(

        <>
        <FooterItem heading="Annette Steward">
            <p>Jennie Cooper</p>
            <p>Julie Henry</p>
            <p>Johnny Murphy</p>
            <p>Gregory Mccoy</p>
            <p>Marvin Mckinney</p>
        </FooterItem>

        <FooterItem heading="Annette Steward">
            <p>Jennie Cooper</p>
            <p>Julie Henry</p>
            <p>Johnny Murphy</p>
            <p>Gregory Mccoy</p>
            <p>Marvin Mckinney</p>
        </FooterItem>

        <FooterItem heading="Annette Steward">
            <p>Jennie Cooper</p>
            <p>Julie Henry</p>
            <p>Johnny Murphy</p>
            <p>Gregory Mccoy</p>
            <p>Marvin Mckinney</p>
        </FooterItem>

        <div>
            <LocalisationIcon />
            <p>7480 Mockingbird Hill undefined </p>
        </div>

        <div>
            <TelIcon />
            <p>(239) 555-0108</p>
        </div>

        <div>
            <img src="/public/twitter-icon" alt="" />
            <img src="/public/facebook-icon.png" alt="" />
            <img src="/public/linkdIn-icon.png" alt="" />
        </div>
        </>
    )

}

export default Footer