import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
    Image,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './styles.module.css';
import { HouseLine } from '@phosphor-icons/react';
import logo from "@/assets/logo.png";

const mockdata = [
    {
        icon: HouseLine,
        title: 'Open source',
        description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
        icon: HouseLine,
        title: 'Free for everyone',
        description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
        icon: HouseLine,
        title: 'Documentation',
        description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
        icon: HouseLine,
        title: 'Security',
        description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
        icon: HouseLine,
        title: 'Analytics',
        description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
        icon: HouseLine,
        title: 'Notifications',
        description: 'Combusken battles with the intensely hot flames it spews',
    },
];

export function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();

    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
                </ThemeIcon>
                <div>
                    <Text size="sm" fw={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" c="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));

    return (
        <Box
            p={10}
            bg={'dark'}
            // pb={120}
            className='rounded-[15px]'>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <Image src={logo} width={100}/>

                    <Group h="100%" gap={0} visibleFrom="sm">
                        <a href="#" className={classes.link}>
                            Find Work
                        </a>
                        <a href="#" className={classes.link}>
                            Find Talent
                        </a>
                        <a href="#" className={classes.link}>
                            Articles
                        </a>
                        <a href="#" className={classes.link}>
                            About Us
                        </a>
                        <a href="#" className={classes.link}>
                            Contact Us
                        </a>
                    </Group>

                    <Group visibleFrom="sm" >
                        {/* <Button variant='transparent' color='white'>Log in</Button>
                        <Button>Sign up</Button> */}
                        <Button variant="transparent" color='white'>Log in</Button>
                        <Button className='text-color-1 bg-white' radius={13}>
                            Join Now
                        </Button>
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm" />

                    <a href="#" className={classes.link}>
                        Home
                    </a>
                    <UnstyledButton className={classes.link} onClick={toggleLinks}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                Features
                            </Box>
                            {/* <IconChevronDown
                                style={{ width: rem(16), height: rem(16) }}
                                color={theme.colors.blue[6]}
                            /> */}
                            <HouseLine style={{ width: rem(16), height: rem(16) }}
                                color={theme.colors.blue[6]} />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                    <a href="#" className={classes.link}>
                        Learn
                    </a>
                    <a href="#" className={classes.link}>
                        Academy
                    </a>

                    <Divider my="sm" />

                    <Group justify="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                        <Button className='text-color-1 bg-white'>Sign up</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}