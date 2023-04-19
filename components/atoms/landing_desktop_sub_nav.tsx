import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, Icon, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';

const LandingDesktopSubNav = ({ label, href, subLable }: any) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}>

            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'blue.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLable}</Text>
                </Box>

                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>

                    <Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
}

export default LandingDesktopSubNav;