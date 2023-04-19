import { Text } from '@chakra-ui/react';

const FooterListHeader = ({ children }: any) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
}

export default FooterListHeader;