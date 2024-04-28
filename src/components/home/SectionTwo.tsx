import {
    Flex, Text,
    Image,
    Paper,
    ActionIcon,
} from "@mantine/core";
import { jobsList } from "@/shared/helpers";
import { MedalMilitary, SquaresFour, User } from "@phosphor-icons/react";
import vector1 from "@/assets/vector1.png";
import vector2 from "@/assets/vector2.png";

interface ListCardProps {
    data: [],
    title: string,
    firstItem: boolean,
}

const ListCard: React.FC<ListCardProps> = ({
    data,
    title, firstItem }) => {
    return (<>
        <Paper
            mih={200} p={20} radius={10} className="w-[90%]" mb={20}>
            <Flex className="flex-1 justify-between flex-col">
                <Text my={10} fw={600}>{title}</Text>
                {/* <ScrollArea> */}
                <Flex className="flex-row justify-between">
                    {firstItem &&
                        <Flex direction={'column'} align={'center'}>
                            <Flex
                                className="bg-color-9 h-[70px]
                         w-[70px] rounded-[25px]
                         "
                            >
                                <div className="flex items-center justify-center w-full h-full">
                                    <Image src={vector1} className="w-[40%] rotate-180" />
                                </div>
                            </Flex>
                        </Flex>
                    }
                    {data.map(item => (
                        <Flex direction={'column'} align={'center'} w={100}>
                            <Flex
                                className="bg-color-9 h-[70px]
                                         w-[70px] rounded-[70px] justify-center
                                          items-center">
                                <div className="flex items-center justify-center w-full h-full">
                                    <Image src={item?.image} className="w-[40%]" />
                                </div>
                            </Flex>
                            <Text
                                maw={"80%"}
                                my={10}
                                fw={600}
                                className="text-center">{item?.label}</Text>
                        </Flex>
                    ))}
                    {!firstItem &&
                        <Flex
                            className="bg-color-9 h-[70px]
                         w-[70px] rounded-[25px]
                         "
                        >
                            <div className="flex items-center justify-center w-full h-full">
                                <Image src={vector1} className="w-[40%]" />
                            </div>
                        </Flex>
                    }

                </Flex>
                {/* </ScrollArea> */}
            </Flex>
        </Paper>
    </>)
}

const SectionTwo = () => {
    return (
        <>
            <Flex
                maw={"100%"}
                direction={"column"}
                mt={100}
                className="bg-color-7 -skew-y-[3deg] overflow:hidden"
                mih={600} p={20}>
                <Flex className="skew-y-[3deg]" direction={'column'} mt={100} px={40}>
                    <Text
                        fw={600}
                        size="2.5rem"
                        className="w-[70%]
                        leading-[50px]
                        text-color-2
                     mx-auto text-center"
                    >Your one-stop marketplace for finding
                        the talent your business needs.</Text>

                    <Flex direction={'column'} my={70}>
                        <Flex className="flex flex-row justify-between !w-full">

                            <Flex className="w-[40%]" direction={'column'} justify={'center'}>
                                <Text
                                    className="w-[80%]"
                                    mb={30}
                                    fw={500}
                                    size="1.5rem"
                                >Find Dev and IT professionals to scale your business.</Text>

                                <div className="grid grid-cols-2 w-[80%]">
                                    <Flex my={5}><MedalMilitary
                                        weight="fill"
                                        size={20}
                                        className="text-color-8" /> <Text>989 Skills</Text></Flex>
                                    <Flex my={5}><SquaresFour
                                        weight="fill"
                                        size={20}
                                        className="text-color-8" /> <Text>989 Skills</Text></Flex>
                                    <Flex my={5}>
                                        <User
                                            weight="fill"
                                            size={20}
                                            className="text-color-8"
                                        /> <Text>989 Skills</Text></Flex>
                                </div>

                                <Text
                                    className="w-[80%]"
                                    my={30}
                                    fw={500}
                                    size="1.5rem"
                                >Explore Creative individuals with a keen eye for detail.</Text>

                                <div className="grid grid-cols-2 w-[80%]">
                                    <Flex my={5}><MedalMilitary
                                        weight="fill"
                                        size={20}
                                        className="text-color-8" /> <Text>989 Skills</Text></Flex>
                                    <Flex my={5}><SquaresFour
                                        weight="fill"
                                        size={20}
                                        className="text-color-8" /> <Text>989 Skills</Text></Flex>
                                    <Flex my={5}>
                                        <User
                                            weight="fill"
                                            size={20}
                                            className="text-color-8"
                                        /> <Text>989 Skills</Text></Flex>
                                </div>
                            </Flex>


                            <Flex className="w-[60%]" direction={'column'} align={'flex-end'}>
                                <ListCard
                                    title="IT & Developement"
                                    data={jobsList.slice(0, 5)} />
                                <ListCard
                                    firstItem
                                    title="Design & Creative"
                                    data={jobsList.slice(5)} />
                            </Flex>

                        </Flex>

                        <Flex className="flex-row justify-between w-full items-center" >
                            <Flex className="w-[51%] items-center">
                                <ActionIcon h={60} w={60} radius={'30%'} color="dark">
                                    <Image src={vector2} className="w-[40%]" />
                                </ActionIcon>
                                <Text fw={600} mx={7}>Explore More</Text>
                            </Flex>


                            <Flex align={'flex-end'} className="w-[60%]" >
                                <Text className="">
                                    <span className="font-semibold">30 more</span> to epxlore</Text>
                            </Flex>
                        </Flex>

                    </Flex>

                </Flex>
            </Flex>
        </>
    );
}

export default SectionTwo;