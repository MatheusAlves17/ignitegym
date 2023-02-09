import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";

type TButtonProps = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: TButtonProps) {
  return (
    <NativeBaseButton
        w="full"
        h={14}
        bg="green.700"
        rounded="sm"
        _pressed={
            {
                bg: 'green.500'
            }
        }
        {...rest}
    >
        <Text
            color="white"
            fontFamily="heading"
            fontSize="sm"
        >
            {title}
        </Text>
    </NativeBaseButton>
  );
}
