import {
    Box, Container, Link, SimpleGrid,
    Stack, Text, useColorModeValue
} from '@chakra-ui/react';
import NextImage from 'next/image';
import FooterListHeader from '../atoms/footer_list_header';

const Footer = () => {
    return (
        <Box
            borderTop={'1px solid'}
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>

            <Container as={Stack} maxW={'6xl'} py={10}>

                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
                    spacing={8}>

                    <Stack spacing={6}>
                        <Box>
                            <NextImage src={'/logo.svg'} alt={'logo'} width={60} height={120} />
                        </Box>

                        <Text fontSize={'sm'}>
                            © 2023 Tikets4U. All rights reserved
                        </Text>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <FooterListHeader>Products</FooterListHeader>
                        <Link href={'#'}>Overview</Link>
                        <Link href={'#'}>Features</Link>
                        <Link href={'#'}>Tutorials</Link>
                        <Link href={'#'}>Pricing</Link>
                        <Link href={'#'}>Releases</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <FooterListHeader>Company</FooterListHeader>
                        <Link href={'#'}>About</Link>
                        <Link href={'#'}>Press</Link>
                        <Link href={'#'}>Careers</Link>
                        <Link href={'#'}>Contact</Link>
                        <Link href={'#'}>Partners</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <FooterListHeader>Support</FooterListHeader>
                        <Link href={'#'}>Help Center</Link>
                        <Link href={'#'}>Terms of Service</Link>
                        <Link href={'#'}>Legal</Link>
                        <Link href={'#'}>Privacy Policy</Link>
                        <Link href={'#'}>Status</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <FooterListHeader>Follow Us</FooterListHeader>
                        <Link href={'#'}>Facebook</Link>
                        <Link href={'#'}>Twitter</Link>
                        <Link href={'#'}>Dribbble</Link>
                        <Link href={'#'}>Instagram</Link>
                        <Link href={'#'}>LinkedIn</Link>
                    </Stack>

                </SimpleGrid>
            </Container>

        </Box>
    );
}

export default Footer;