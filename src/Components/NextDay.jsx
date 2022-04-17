import { createMemo } from "solid-js";
import { HStack, Text, Button, useColorMode } from "@hope-ui/solid";

import data from "../Misc/data";
import styles from "./NextDay.module.css";

function NextDay({ nextDay }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const next = createMemo(() => data[nextDay() - 1]);

  return (
    <HStack>
      <div className={styles.nextDay}>
        <Text size={"2xl"} mb={"$2"}>
          Mata Pelajaran Selanjutnya
        </Text>
        <Text>
          Hari Belajar Selanjutnya adalah hari <b>{next().hari}</b>
        </Text>
        <Text>
          Mapel:{" "}
          {next()
            .mapel.filter((x) => x !== undefined)
            .filter((x) => x !== null)
            .join(", ")}
          .
        </Text>
      </div>
 <body class="font-sans dark:bg-gray-700">
    <section id="bg-particles" class="relative bg-white rounded-b-lg lg:rounded-b-2xl container max-w-5xl mx-auto p-4 h-screen min-h-full dark:bg-gray-800">
      <div class="relative z-10 h-full">
        <div class="flex justify-between px-5 pt-5">
          <a class="toggle-dark mr-5" href="#" onclick="darkMode()">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
              <path
                d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
              />
            </svg>
          </a>

      <div className={styles.buttonDiv}>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode() === "light" ? "dark" : "light"}
        </Button>
      </div>
    </HStack>
  );
}

export default NextDay;
