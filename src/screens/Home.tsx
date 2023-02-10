import { VStack, FlatList, HStack, Heading, Text } from "native-base";
import { useState } from "react";

import { ExerciseCard } from "@components/ExerciseCard";
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";

export function Home() {
  const [groups, setGroups] = useState([
    "peito",
    "tríceps",
    "bíceps",
    "costas",
    "perna",
    "ombro",
  ]);
  const [groupSelected, setGroupSelected] = useState("peito");

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
      />
      <VStack flex={1} px={8}>
        <HStack justifyContent={"space-between"} mb={5}>
          <Heading color={"gray.200"} fontSize={"md"}>
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize={"sm"}>
            4
          </Text>
        </HStack>
        <ExerciseCard />
      </VStack>
    </VStack>
  );
}
