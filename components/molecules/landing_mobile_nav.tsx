import { Stack, useColorModeValue } from '@chakra-ui/react';
import LandingMobileNavItem from '../atoms/landing_mobile_nav_item';

const LandingMobileNav = ({ navItems }: any) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {navItems.map((navItem) => (
                <LandingMobileNavItem key={navItem.label} {...navItem} />
            ))}

        </Stack>
    );
}

export default LandingMobileNav;