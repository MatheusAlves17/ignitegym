import { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  Center,
  ScrollView,
  VStack,
  Skeleton,
  Text,
  Heading,
} from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserImage } from "@components/UserImage";
import { Button } from "./Button";
import { Input } from "./Input";

export function Profile() {
  const PHOTO_SIZE = 33;
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView contentContainerStyle={{ paddingBottom: 56 }}>
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
          <TouchableOpacity>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input bg="gray.600" placeholder="Nome do usuário" />
          <Input bg="gray.600" placeholder="E-mail" isDisabled />
          <Heading
            color="gray.200"
            fontSize="md"
            mb={2}
            mt={12}
            alignSelf="flex-start"
          >
            Alterar senha
          </Heading>
          <Input bg="gray.600" placeholder="Senha antiga" secureTextEntry />
          <Input bg="gray.600" placeholder="Nova senha" secureTextEntry />
          <Input
            bg="gray.600"
            placeholder="Confirme nova senha"
            secureTextEntry
          />
          <Button title="Atualizar" mt={4} />
        </Center>
      </ScrollView>
    </VStack>
  );
}
