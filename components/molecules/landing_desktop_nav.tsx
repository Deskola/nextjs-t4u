import { Box, Link, Popover, PopoverContent, PopoverTrigger, Stack, useColorModeValue } from '@chakra-ui/react';
import LandingDesktopSubNav from '../atoms/landing_desktop_sub_nav';


const LandingDesktopNav = ({ navItems }: any) => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popOverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {navItems.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor
                                }}>

                                {navItem.label}

                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={8}
                                boxShadow={'xl'}
                                bg={popOverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>

                                <Stack>
                                    {navItem.children.map((child) => (
                                        <LandingDesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
}

export default LandingDesktopNav;
