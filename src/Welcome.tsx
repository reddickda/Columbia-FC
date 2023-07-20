import { Stack, Text } from "@mantine/core";
import { ThemeProvider } from "./ThemeProvider";
import { HeaderMiddle } from "./Components/HeaderMiddle";
import { GetInTouchSimple } from "./Components/GetInTouchSimple";
import { Schedule } from "./Components/Schedule";

const links: { link: string; label: string }[] = [ { link: '', label: ''}]
const data = [
  { date: '8-5-2023', team: 'Baltimore Kickers', location: 'Troy Park', result: 'W'},
  { date: '9-8-2023',team: 'Christos FC', location: 'Blandair Park', result: 'W'},
  { date: '10-12-2023', team: 'Liverpool FC', location: 'Anfield', result: 'W'},
]


export default function Welcome() {

  return (
    <ThemeProvider>
      <HeaderMiddle links={links}/>
      <Stack>
        <Text mt={10}>Welcome to the homepage of Columbia FC</Text>
        <Text>The official football team of Columbia, Maryland</Text>
        <Text>Results 2023/2024:</Text>
        <Schedule data={data}/>
        <GetInTouchSimple />
      </Stack>
    </ThemeProvider>
  );
}