import { recuirementProcess } from "@/shared/helpers";
import { Collapse, Flex, Paper, Text, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Video } from "@phosphor-icons/react";
import React from "react";
import quizImg from "@/assets/quiz.png";


interface ListCardProps {
    step: number,
    stepName: string
}
const ListCard: React.FC<ListCardProps> = ({ step, stepName }) => {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <>
            <Paper
                mb={10}
                shadow={opened ? "md" : ""}
                withBorder
                mih={70} className="cursor-pointer "
                radius={10} px={10} onClick={toggle} >
                <Flex className="flex-1 flex-col " my={10} >
                    <Flex className="items-center">
                        <Flex
                            mr={20}
                            className={`${opened ? "bg-color-14" :
                                "bg-color-13"} h-[50px] w-[50px]
                     items-center justify-center rounded-[50px]`}>
                            <Video size={20} className={`${opened ? "text-white" :
                                "text-color-black"}`} weight="fill" />
                        </Flex>

                        <Flex>
                            <Text>
                                <span className="font-semibold">Step {step}:{" "}</span>
                                {stepName}</Text>
                        </Flex>
                    </Flex>

                    <Collapse in={opened} mt={10}
                    >
                        <Text>Candidates are assessed through skill based questions in a virtual setting.
                            Allowing you to gauge personality and cultural fit.</Text>
                    </Collapse>
                </Flex>
            </Paper >
        </>
    )
}

const SectionFour = () => {
    return (
        <>
            <Flex
                maw={"100%"}
                direction={"column"}
                // mt={100}
                className="bg-white overflow:hidden"
                mih={500} p={20} mt={35}>
                <Flex mt={70} className="w-full justify-between" px={40}>


                    <Flex direction={'column'} className="w-[50%]">
                        <div className="w-[80%]">
                            <Text
                                mb={30}
                                className="leading-[45px]"
                                size="2.5rem"
                                fw={700}>How we ensure you’re in good hands.</Text>
                            <Text className="text-color-12" mb={30}>With our comprehensive screening process, we hand-pick highly
                                skilled candidates so you can onboard them in a matter of days.</Text>

                            {recuirementProcess.map((item, index) => (
                                <ListCard
                                    key={index}
                                    stepName={item}
                                    step={index + 1} />
                            ))}
                        </div>


                    </Flex>

                    <Flex
                        mt={140}
                        className="w-[50%]"
                        direction={'column'}>
                        <div className="w-full h-[70px]">
                            <Image src={quizImg} className="w-[75%]" />
                        </div>
                    </Flex>


                </Flex>
            </Flex>
        </>
    );
}

export default SectionFour;