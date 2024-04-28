import { ActionIcon, Flex, Image, Text } from "@mantine/core";
import vector2 from "@/assets/vector2.png";
import React from "react";
import { journeyProcess } from "@/shared/helpers";

interface CategoryProps {
    title: string,
    body: string,
    image: string,
    btnText: string,
    bgColor: string,
    stepNumber: number,
}

const Category: React.FC<CategoryProps> = ({ title,
    image,
    body,
    btnText,
    bgColor,
    stepNumber
}) => {
    const stepColor = stepNumber === 1 ?
        "from-color-8 to-color-15" : stepNumber === 2 ?
            "from-color-13 to-color-3" :
            "from-black to-color-17"
    return (
        <Flex
            mb={15}
            mih={200}
            className={`-skew-y-[3deg] overflow-hidden ${bgColor}`}>
            <Flex
                className="flex-row w-full skew-y-[3deg] 
                justify-between"
                px={35}>

                <Flex className="w-[50%]" mt={100}>

                    <Flex direction={'row'} >

                        <Text
                            className={`bg-gradient-to-t ${stepColor} text-transparent bg-clip-text`}
                            size="6.2rem" fw={700}>{stepNumber}</Text>

                        <Flex direction={'column'} className="w-[60%]" mt={6} ml={10}>
                            <Text
                                mb={10}
                                className="leading-[40px]"
                                fw={600}
                                size="2rem"
                            >{title}</Text>
                            <Text mb={10}>{body}</Text>

                            <Flex className="items-center">
                                <ActionIcon h={50} w={50} radius={'40%'} color="dark">
                                    <Image src={vector2} className="w-[40%]" />
                                </ActionIcon>
                                <Text fw={600} mx={7}>{btnText}</Text>
                            </Flex>
                        </Flex>
                    </Flex>

                </Flex>

                <Flex className="w-[50%] flex-col" align={'flex-end'}>
                    <div className="-mt-[30px]">
                        <Image src={image} className="" />
                    </div>
                </Flex>
            </Flex>
        </Flex>
    )
}

const SectionFive = () => {
    return (
        <Flex
            maw={"100%"}
            direction={"column"}
            mih={500} p={20} mt={35}
        >

            <Flex
                direction={'column'}
                mt={70} className="w-full justify-between" px={40}>
                <Text
                    className="text-center"
                    fw={600}
                    mb={70}
                    size="2.5rem">Start your journey today.</Text>

                {
                    journeyProcess.map((item, key) => (
                        <Category
                            stepNumber={key + 1}
                            image={item.image}
                            btnText={item?.btnText ?? "Join Now"}
                            title={item.title}
                            body={item.body}
                            bgColor={item.bgColor}
                        />
                    ))
                }
            </Flex>
        </Flex>
    );
}

export default SectionFive;