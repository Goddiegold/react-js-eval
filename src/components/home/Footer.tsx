import { ActionIcon, Flex, Text, Image, Button, Grid } from "@mantine/core";
import vector2 from "@/assets/vector2.png";
import logo from "@/assets/logo.png";
import { moreLinks } from "@/shared/helpers";

interface ListProps {
    title: string,
    links: string[],
}

const List: React.FC<ListProps> = ({ title, links }) => {
    return (
        <Flex direction={'column'}>
            <Text
                fw={600}
                className="uppercase text-color-11" size="xs">{title}</Text>
            <Flex direction={'column'}>
                {links.map(item => (
                    <Text
                        className="cursor-pointer"
                        my={10} c={"white"} size="sm">{item}</Text>
                ))}
            </Flex>
        </Flex>
    )
}

const Footer = () => {
    return (
        <Flex
            mt={5}
            miw={"100%"}
            style={{
                clipPath: "polygon(0 7%, 100% 0%, 100% 100%, 0% 100%)"
            }}
            className="bg-gradient-to-b
             from-[#0C0C0C]
               to-100% to-[#202229]
               overflow-hidden"
            direction={"column"}
            mih={600} py={20} >

            <Flex direction={'column'} px={60} >
                <Flex className="bg-[#525AA0]
             -skew-y-[3deg]" mih={300} mt={70} mb={50}>
                    <div
                        className="skew-y-[3deg] flex items-center mx-auto flex-col">
                        <Text
                            mt={70}
                            fw={600}
                            className="w-[80%] mx-auto text-center leading-[50px]"
                            size="2.5rem"
                            c={"white"}>
                            Need a job done, and done well? Get started</Text>

                        <ActionIcon
                            mt={20}
                            h={50} w={50}
                            radius={'40%'} color="dark">
                            <Image src={vector2} className="w-[40%] rotate-90" />
                        </ActionIcon>
                    </div>
                </Flex>

                <Flex direction={'row'} my={80}>
                    <Flex
                        className="w-[40%]"
                        direction={'column'}>
                        <div className="w-[120px]">
                            <Image src={logo} className="w-full" />
                        </div>
                        <Text
                            className="w-[70%]"
                            c={"white"}
                            size="sm"
                            mt={40}
                        >We take complex hiring processes - and simplify them.
                            Connecting you to the world’s highly qualified talent pool.</Text>


                        <Text mt={40}
                            fw={600}
                            size="xs"
                            className="text-color-11">LINKS AND REDIRECTS</Text>

                        <Flex mt={20} className="w-[45%] justify-between">
                            <Button
                                size="md"
                                radius={15}
                                className="bg-[#292B34] hover:bg-[#292B34] text-sm">Hire now</Button>
                            <Button
                                size="md"
                                radius={15}
                                className="bg-[#292B34] hover:bg-[#292B34] text-sm">Apply now</Button>
                        </Flex>


                    </Flex>

                    <Flex className="w-[60%]" direction={'column'}>
                        <Text
                            className="leading-[50px] w-[90%]"
                            fw={600}
                            size="2.5rem"
                            c={"white"}>Connecting the right people to the right businesses.</Text>

                        <Grid justify="flex-start" align="stretch" mt={40}>
                            {moreLinks.map(item => (
                                <Grid.Col span={3} >
                                    <List title={item.title} links={item.links} />
                                </Grid.Col>
                            ))}
                        </Grid>
                    </Flex>


                </Flex>

            </Flex>


            <Flex
                className="flex-row justify-between border-t border-color-11 items-center" px={60} py={5} >
                <Text c={"white"} size="sm" fw={600} mt={3}>All rights reserved by Zwilt</Text>

                <Flex mt={3}>
                    <a href="#" className="underline mx-2 text-sm text-color-11 font-semibold">Privacy Policy</a>
                    <a href="#" className="underline text-sm text-color-11 font-semibold">Terms and Conditions</a>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Footer;