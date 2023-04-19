import { FlexProps, Flex, Text, HStack, VStack, Box } from "@chakra-ui/layout";
import { Avatar, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, useColorModeValue } from '@chakra-ui/react';

import { FiMenu, FiBell, FiChevronDown } from 'react-icons/fi';


interface MobileProps extends FlexProps {
    onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height={'20'}
            alignItems={'center'}
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth={'1px'}
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}
        >

            <IconButton
                aria-label={'open menu'}
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant={'outline'}
                icon={<FiMenu />}
            />

            <Text
                display={{ base: 'flex', md: 'none' }}
                fontSize={'2xl'}
                fontFamily={'monospace'}
                fontWeight={'bold'}
            >
                Logo
            </Text>

            <HStack spacing={{ base: '0', md: '6' }}>
                <IconButton
                    aria-label="open menu"
                    size={'lg'}
                    variant={'ghost'}
                    icon={<FiBell />}
                />

                <Flex align={'center'}>
                    <Menu>
                        <MenuButton
                            py={2}
                            transition={'all 0.3s'}
                            _focus={{ boxShadow: 'none' }}
                        >

                            <HStack>
                                <Avatar
                                    size={'sm'}
                                    src={'https://picsum.photos/id/1/200/300'}
                                />

                                <VStack
                                    display={{ base: 'none', md: 'flex' }}
                                    alignItems={'flex-start'}
                                    spacing={'1px'}
                                    ml={'2'}
                                >
                                    <Text fontSize={'sm'}>Denis Oduor</Text>
                                    <Text fontSize={'xs'} color={'gray.600'}>Admin</Text>

                                </VStack>

                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown />
                                </Box>

                            </HStack>

                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue('white', 'gray.900')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                        >
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Settings</MenuItem>
                            <MenuItem>Billing</MenuItem>
                            <MenuDivider />
                            <MenuItem>Sign Out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>

            </HStack>

        </Flex>
    );
}

export default MobileNav;