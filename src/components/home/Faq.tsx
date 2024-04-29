import { Accordion, Flex, SegmentedControl, Text } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";


const questions = [
    "I want to work part-time, is that possible",
    "How long are the average projects?",
    "How long are the average projects?",
    "How much can I earn?"
]

const Faq = () => {
    const { height, width } = useViewportSize();
    return (
        <Flex
            miw={"100%"}
            className="-skew-y-[3deg] overflow-hidden bg-color-17"
            direction={"column"}
            mih={700} p={20}>
            <Flex className="skew-y-[3deg]" direction={'column'} px={40} mt={100}>

                <Text fw={600}
                    className="text-center"
                    size="2.5rem"
                >Frequently asked questions</Text>

                <SegmentedControl
                    my={40}
                    classNames={{
                        indicator: "bg-color-10",
                    }}
                    orientation={width > 500 ? "horizontal" : "vertical"}
                    className="lg:w-[500px] w-full"
                    mx={'auto'}
                    data={['General', 'Joining Process']} />

                <Accordion
                    className="">
                    {questions.map((item, key) => (
                        <Accordion.Item key={key} value={item} my={20}>
                            <Accordion.Control>{item}</Accordion.Control>
                            <Accordion.Panel>{item}</Accordion.Panel>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Flex>

        </Flex >
    );
}

export default Faq;