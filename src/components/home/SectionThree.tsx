import { Flex, Image, Text } from "@mantine/core";
import profile2 from "@/assets/profile2.png";
import grooveImg from "@/assets/groovehq.png";
import grooveImg2 from "@/assets/groovehq2.png";

const SectionThree = () => {
    return (
        <Flex
            maw={"100%"}
            direction={"column"}
            // mt={100}
            className="bg-color-2  -skew-y-[3deg] overflow:hidden"
            mih={500} p={20}>
            <Flex className="skew-y-[3deg] flex-row justify-between w-full" mt={150} px={40}>
                <Flex direction={'column'} className="w-[50%]">
                    <Flex className="w-[70%] flex flex-row flex-wrap items-center">
                        <Text
                            fw={600}
                            className=""
                            c={"white"} size="2.5rem">How it worked for Jason </Text>
                        <div className="w-[2.2rem] h-[2.2rem]">
                            <Image src={profile2} className="w-full" />
                        </div>
                        <Text
                            fw={600}
                            size="2.5rem"
                            c={"white"}>at</Text>
                    </Flex>
                    <div className="w-[150px] h-[150px] my-[5px]">
                        <Image src={grooveImg} className="w-full" />
                    </div>
                </Flex>

                <Flex className="w-[50%]" direction={'column'}>
                    <Flex>
                        <div className="flex w-[70px] h-[70px]
                         rounded-[25px] bg-color-8 justify-center items-center px-[10px]">
                            <Image src={grooveImg2} width={"30%"} />
                        </div>
                        <Flex direction={'column'} mx={10}>
                            <Text
                                my={3}
                                fw={600}
                                c={'white'}
                                size="2rem">Jason Makki</Text>
                            <Text
                                my={3}
                                fw={500}
                                size="xs"
                                className="text-color-10">Engineer at GROOVE</Text>
                            <Text
                                size="xs"
                                className="text-color-10">San Francisco</Text>
                        </Flex>
                    </Flex>


                    <Text className="w-[80%] text-white" mt={20}>
                        Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters in our
                        corner since.Zwilt enabled us to deliver on time and they’ve been heavy hitters.
                    </Text>
                </Flex>
            </Flex>
        </Flex >
    );
}

export default SectionThree;