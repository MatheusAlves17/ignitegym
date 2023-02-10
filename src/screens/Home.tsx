import { VStack, FlatList, HStack, Heading, Text } from "native-base";
import { useState } from "react";

import { ExerciseCard } from "@components/ExerciseCard";
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";

export function Home() {
  const [groups, setGroups] = useState([
    "costas",
    "peito",
    "tríceps",
    "bíceps",
    "perna",
    "ombro",
  ]);
  const [exercise, setExercise] = useState([
    "Remada unilateral",
    "Remada baixa",
    "Puxada frontal",
    "Puxada articulada",
  ]);
  const [groupSelected, setGroupSelected] = useState("Costas");

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toUpperCase() === item.toUpperCase()}
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
            {exercise.length}
          </Text>
        </HStack>
        <FlatList
          data={exercise}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ExerciseCard name={item} series="3 séries x 12 repetições" />
          )}
          _contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </VStack>
    </VStack>
  );
}
