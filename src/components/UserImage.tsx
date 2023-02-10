import { Image, IImageProps } from "native-base";

export type TUserImageProps = IImageProps & {
  size: number;
};

export function UserImage({ size, ...rest }: TUserImageProps) {
  return (
    <Image
      w={size}
      height={size}
      rounded="full"
      borderWidth={2}
      borderColor="gray.200"
      {...rest}
    />
  );
}
