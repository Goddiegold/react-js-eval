import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import SectionFive from "@/components/home/SectionFive";
import SectionFour from "@/components/home/SectionFour";
import SectionOne from "@/components/home/SectionOne";
import SectionSix from "@/components/home/SectionSix";
import SectionThree from "@/components/home/SectionThree";
import SectionTwo from "@/components/home/SectionTwo";
import { Flex } from "@mantine/core";

const Home = () => {
    return (
        <Flex
            className="bg-color-11 overflow-hidden"
            direction={'column'}
            mih={"100vh"}>
            {/* section one */}
            <SectionOne />

            {/* section two */}
            <SectionTwo />

            {/* section three */}
            <SectionThree />

            {/* section four */}
            <SectionFour />

            {/* section five */}
            <SectionFive />

            {/* section six */}
            <SectionSix />

            {/* faq section */}
            <Faq/>

            {/* footer */}
            <Footer/>

        </Flex>
    )
}

export default Home;