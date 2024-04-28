import { ActionIcon, Flex, Image, Text } from "@mantine/core";
import profile2 from "@/assets/profile2.png";
import grooveImg from "@/assets/groovehq.png";
import grooveImg2 from "@/assets/groovehq2.png";
import vector3 from "@/assets/vector3.png";
import doubleQuotation from "@/assets/doublequotation.svg";

const SectionThree = () => {
    return (
        <Flex
            maw={"100%"}
            direction={"column"}
            // mt={100}
            className="bg-color-2  -skew-y-[3deg] overflow:hidden"
            mih={500} p={20}>
            <Flex direction={'column'}>
                <Flex justify={'flex-end'} mt={-20}>
                    <Image src={doubleQuotation} width={100} />
                </Flex>
                <Flex className="skew-y-[3deg] flex-row justify-between w-full" mt={100} px={40}>
                    <Flex direction={'column'} className="w-[50%]">
                        <Flex className="w-[50%] flex-col overflow-hidden">
                            <Text className="block"
                                fw={600}
                                c={"white"}
                                size="2.5rem">How it worked for Jason
                                <div className="w-[2.2rem] h-[2.2rem] mx-2 inline-block mt-[5px]">
                                    <Image src={profile2} className="w-full" />
                                </div> at</Text>
                        </Flex>
                        <div className="w-[150px] my-[20px]">
                            <Image src={grooveImg} className="w-full" />
                        </div>

                        <Text
                            my={20}
                            c={"white"}
                            className="w-[80%] md:w-[60%]">Zwilt enabled us to deliver on time and
                            they’ve been heavy hitters in our corner since.</Text>

                        <Flex className="justify-between w-[22%]">
                            <ActionIcon h={60} w={60} radius={'40%'} color="white">
                                <Image src={vector3} className="w-[40%] rotate-180" />
                            </ActionIcon>
                            <ActionIcon h={60} w={60} radius={'40%'} color="white">
                                <Image src={vector3} className="w-[40%]" />
                            </ActionIcon>
                        </Flex>
                    </Flex>

                    <Flex className="w-[50%]" direction={'column'} mt={30}>
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


                        <Text className="w-[80%] text-white leading-[30px]" mt={20}>
                            Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.{" "}
                            Zwilt enabled us to deliver on time and they’ve been heavy hitters in our
                            corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters.
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex >
    );
}

export default SectionThree;