import { Box, CloseButton, Flex, useColorModeValue, Text, FlexProps } from '@chakra-ui/react';
import NavItem from './nav_item';
import { IconType } from 'react-icons';
import NextImage from 'next/image';

interface MenuProps extends FlexProps {
    menus: Array<{ name: string, icon: IconType }>,
    onClose: () => void

}
const SidebarContent = ({ menus, onClose, ...rest }: MenuProps) => {
    return (
        <Box
            transition={'3s ease'}
            bg={useColorModeValue('white', 'gray.900')}
            borderRight={'1px'}
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos={'fixed'}
            h={'full'}
            {...rest}
        >

            <Flex
                h={'20'}
                alignItems={'center'}
                mx={'8'}
                justifyContent={'space-between'}
            >
                <Box>
                    <NextImage src={'/logo.svg'} alt={'logo'} width={100} height={120} />
                </Box>

                <Box>
                    <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
                </Box>


            </Flex>

            {menus.map((menu) => (
                <NavItem key={menu.name} icon={menu.icon}>
                    {menu.name}
                </NavItem>
            ))}

        </Box>
    );
}

export default SidebarContent;