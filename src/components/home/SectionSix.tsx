import { ActionIcon, Card, Center, Flex, Image, Progress, Text } from "@mantine/core";
import category1 from "@/assets/categories/category1.png";
import vector2 from "@/assets/vector2.png";
import { Carousel, Embla } from "@mantine/carousel";
import { useCallback, useEffect, useState } from "react";
import { productReasons } from "@/shared/helpers";


interface CategoryProps {
    title: string,
    labels: string[],
    image: string
}

const Category: React.FC<CategoryProps> = ({ title, labels, image }) => {
    return (
        <Card
            radius={20}
            my={10}
            mih={200}
            mx={40} px={40}>
            <Flex className="w-full flex-row justify-around">
                <Flex direction={'column'}
                    justify={'center'}
                    className="w-[50%]">
                    <Text fw={700} size="2.5rem" className="w-[70%] leading-[50px]">
                        {title}</Text>
                    <Flex direction={'column'} my={30}>
                        {labels.map(item => (
                            <Flex align={'center'}>
                                <div className="bg-color-1 w-[20px] h-[8px] rounded"></div>
                                <Text ml={10}>{item}</Text>
                            </Flex>
                        ))}
                    </Flex>

                    <Flex className="items-center">
                        <ActionIcon h={50} w={50} radius={'40%'} color="dark">
                            <Image src={vector2} className="w-[40%]" />
                        </ActionIcon>
                        <Text fw={600} mx={7}>Learn More</Text>
                    </Flex>
                </Flex>

                <Flex className="h-[450px] w-[50%]" mt={10}>
                    <Image src={image} className="w-full" />
                </Flex>
            </Flex>
        </Card>
    );
}

const SectionSix = () => {
    const [scrollProgress, setScrollProgress] = useState(1);
    const [embla, setEmbla] = useState<Embla | null>(null);

    const handleScroll = useCallback(() => {
        if (!embla) return;
        const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
        setScrollProgress(progress * 100);
    }, [embla, setScrollProgress]);

    useEffect(() => {
        if (embla) {
            embla.on('scroll', handleScroll);
            handleScroll();
        }
    }, [embla]);
    // bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
    return (
        <Flex
            mx={'auto'}
            // align={'center'}
            justify={'center'}
            maw={"100%"}
            className="bg-gradient-to-b from-gray-200 to-gray-500 -skew-y-[3deg] overflow:hidden"
            direction={"column"}
            mih={950} p={20} mt={35}>
            <Flex className="skew-y-[3deg]" direction={'column'} mt={100}>

                <Text fw={600} size="2.5rem"
                    className="text-center mx-auto" my={10}>Why choose Zwilt?</Text>
                <Text
                    my={10}
                    className="text-center w-[40%] mx-auto"
                >We take complex hiring processes - and simplify them.
                    Connecting you to the world’s highly qualified talent pool.</Text>

                <Carousel
                    withControls={false}
                    getEmblaApi={setEmbla}
                    withIndicators={false}
                    mih={200}
                    color="dark"
                    styles={{ indicator: { background: "black" } }}>
                    {productReasons.map((item, key) => (
                        <Carousel.Slide key={key}>
                            <Category
                                title={item.title}
                                labels={item.labels}
                                image={item.image}
                            />
                        </Carousel.Slide>
                    ))}
                </Carousel>

                <Progress
                    className="mx-auto"
                    color="dark"
                    value={scrollProgress}
                    w={320}
                    size="sm"
                    mt={"xl"}
                />
            </Flex>
        </Flex>

    );
}

export default SectionSix;