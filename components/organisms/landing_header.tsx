import {
    Box, Flex, IconButton, Button, Stack,
    Collapse, useColorModeValue, useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextImage from 'next/image';
import NextLink from 'next/link';
import LandingDesktopNav from '../molecules/landing_desktop_nav';
import LandingMobileNav from '../molecules/landing_mobile_nav';
import { ReactElement } from 'react';
import Footer from '../molecules/footer';

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Inspiration',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'Find Work',
        children: [
            {
                label: 'Job Board',
                subLabel: 'Find your dream design job',
                href: '#',
            },
            {
                label: 'Freelance Projects',
                subLabel: 'An exclusive list for contract work',
                href: '#',
            },
        ],
    },
    {
        label: 'Learn Design',
        href: '#',
    },
    {
        label: 'Hire Designers',
        href: '#',
    },
];

interface LandingHeaderProps {
    children: ReactElement;
}

const LandingHeader = ({ children }: LandingHeaderProps) => {

    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
            <Box>
                <Flex
                    bg={useColorModeValue('white', 'gray.800')}
                    color={useColorModeValue('gray.600', 'white')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    pos="relative"
                    position="static"
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}>

                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', md: 'none' }}>

                        <IconButton
                            aria-label={'Toggle Navigation'}
                            variant={'ghost'}
                            onClick={onToggle}
                            icon={
                                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            } />

                    </Flex>

                    <Flex
                        flex={{ base: 1 }}
                        align={'center'}
                        justify={{ base: 'center', md: 'start' }}>

                        <Box as={NextLink} href={{ pathname: '/' }}>
                            <NextImage src={'/logo.svg'} alt={'logo'} width={100} height={120} />
                        </Box>

                        <Box>
                            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                                <LandingDesktopNav navItems={NAV_ITEMS} />
                            </Flex>
                        </Box>

                    </Flex>

                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}>

                        <Button
                            as={NextLink}
                            fontSize={'sm'}
                            fontWeight={400}
                            variant={'link'}
                            href={{ pathname: '/signin' }}>
                            Sign In
                        </Button>

                        <Button
                            as={NextLink}
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'sm'}
                            fontWeight={600}
                            color={'white'}
                            bg={'blue.400'}
                            _hover={{
                                bg: 'blue.300',
                            }}
                            href={{ pathname: '/signup' }}>
                            Sign Up
                        </Button>

                    </Stack>

                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <LandingMobileNav navItems={NAV_ITEMS} />
                </Collapse>
            </Box>

            <Box>
                {children}
            </Box>

            <Box>
                <Footer />
            </Box>
        </Box>
    );

}

export default LandingHeader;