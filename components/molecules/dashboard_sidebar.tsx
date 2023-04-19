import {
    Box, useColorModeValue, Drawer, DrawerContent, useDisclosure
} from '@chakra-ui/react';
import { FiHome, FiTrendingUp, FiCompass, FiSettings } from 'react-icons/fi';
import { RxDashboard } from 'react-icons/rx';
import { BsCalendarEvent, BsWallet2, BsTag } from 'react-icons/bs';
import SidebarContent from '../atoms/sidebar_content';
import MobileNav from './mobile_nav';

const menuLinks = [    
    {
        name: 'Overview',
        icon: RxDashboard,
    },    
    {
        name: 'Events',
        icon: BsCalendarEvent,
    },
    {
        name: 'Transactions',
        icon: BsWallet2,
    },
    {
        name: 'Settlement',
        icon: BsTag,
    },
];

const DashboardSidebar = ({ children }: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH={'100vh'} bg={useColorModeValue('gray.100', 'gray.900')}>

            <SidebarContent
                menus={menuLinks}
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />

            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                autoFocus={false}
                placement='left'
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size={'full'}
            >
                <DrawerContent>
                    <SidebarContent menus={menuLinks} onClose={onClose} />
                </DrawerContent>
            </Drawer>

            {/* mobilenav */}
            <MobileNav onOpen={onOpen} />

            <Box ml={{ base: 0, md: 60 }} p={'4'}>
                {children}
            </Box>
        </Box>
    );
}

export default DashboardSidebar;