import { useState } from "react";
import { Center, ScrollView, VStack, Skeleton } from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserImage } from "@components/UserImage";

export function Profile() {
  const PHOTO_SIZE = 33;
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  return (
    <VStack>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserImage
              alt="Foto do usuário"
              size={PHOTO_SIZE}
              source={{ uri: "https://github.com/rodrigorgtic.png" }}
            />
          )}
        </Center>
      </ScrollView>
    </VStack>
  );
}
