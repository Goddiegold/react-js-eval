import {
    ActionIcon, Flex, Text,
    TextInput,
    Image,
    SegmentedControl,
    Grid
} from "@mantine/core";
import { Header } from "../header";
import vector1 from "@/assets/vector1.png";
import { jobs } from "@/shared/helpers";
import profilex from "@/assets/profilex.png";
import { useViewportSize } from "@mantine/hooks";

const SectionOne = () => {
    const { height, width } = useViewportSize();
    return (
        <>
            <Flex direction={'column'} mih={500} className="" p={width < 500 ? 15 : 40} bg={'gray'}>
                <Header />

                <Flex className="w-full" mt={80} direction={'column'} justify={'space-between'}>
                    <Text className="block w-[90%] md:w-[70%] lg:w-[40%] mx-auto sm:leading-[50px] leading-[40px]"
                        fw={600}
                        c={"dark"}
                        size="2.5rem"> Finding the right fit
                        <div className="w-[3rem] h-[3rem] mx-[4px] inline-block">
                            <Image src={profilex} className="w-full" mt={15} />
                        </div> has never been easier.</Text>

                    <Text
                        my={30}
                        className=" text-color-2 text-[19px]
                         mx-auto w-[90%] md:w-[70%] lg:w-[40%] text-center"
                    >With our rigorous pre-vetting proces, you'll never have to worry about finding the ideal candidate ever again.</Text>

                    <Flex className="w-[90%] md:w-[400px] mx-auto" my={15}>
                        <TextInput
                            placeholder="design |"
                            // rightSectionWidth={50}
                            size="lg"
                            className="w-full" radius={10}
                            rightSection={<ActionIcon
                                h={"97%"}
                                className="bg-color-3 hover:bg-color-3 w-full"
                                size="lg"
                                radius={10} mr={2}>
                                <Image src={vector1} width={30} />
                            </ActionIcon>}
                        />
                    </Flex>

                    <Flex
                        p={10}
                        my={15}
                        direction={'column'}
                        className="bg-color-5 rounded-[10px] w-[90%] md:w-[60%] mx-auto">
                        <SegmentedControl
                            orientation={width < 500 ? "vertical" : "horizontal"}
                            my={10}
                            className="mx-auto"
                            radius={10}
                            data={['IT & Development', 'Design and Creative']}
                            classNames={{
                                indicator: "bg-color-4"
                            }}
                        />


                        <Grid my={10} className="text-center">
                            <Grid.Col span={{ base: 12, lg: 4, md: 2 }}>
                                <Text
                                    fw={700}
                                    className="text-black">Python Developer</Text>
                            </Grid.Col>
                            {jobs.map(item => (
                                <Grid.Col span={{ base: 12, lg: 4, md: 2 }} >
                                    <Text className="text-color-6">{item}</Text>
                                </Grid.Col>
                            ))}
                            <Grid.Col span={{ base: 12, lg: 4, md: 2 }}>
                                <Text
                                    fw={700}
                                    className="text-black">Explore Data</Text>
                            </Grid.Col>
                        </Grid>

                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

export default SectionOne;