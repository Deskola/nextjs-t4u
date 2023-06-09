import { Flex, Stack, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';


interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement
}

const CarouselFeature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
}

export default CarouselFeature;