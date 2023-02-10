import { Center, Heading } from "native-base";

type TScreenHeaderProps = {
    title: string;
}

export function ScreenHeader({title}: TScreenHeaderProps){
    return (
        <Center bg='gray.600' pb={6} pt={16}>
            <Heading color='gray.200' fontSize='xl' fontFamily='body'> {title} </Heading>
        </Center>
    )
}