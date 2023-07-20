import { Stack } from "@mantine/core";
import { ThemeProvider } from "./ThemeProvider";
import { HeaderMiddle } from "./Components/HeaderMiddle";
import { GetInTouchSimple } from "./Components/GetInTouchSimple";
import { Schedule } from "./Components/Schedule";
import { NewsCarousel } from "./Components/NewsCarousel";
import { BlogCard } from "./Components/BlogCard";
import yourBusinessHere from './assets/yourbusinesshere.png'
import theteam from './data/theteam.json'
import { MeetTheTeam } from "./Components/MeetTheTeam";
import { Notifications } from "@mantine/notifications";

// const links: { link: string; label: string }[] = [ { link: '', label: ''}]
const data = [
  { date: '8-5-2023', team: 'Baltimore Kickers', location: 'Troy Park', result: 'W'},
  { date: '9-8-2023',team: 'Christos FC', location: 'Blandair Park', result: 'W'},
  { date: '10-12-2023', team: 'Liverpool FC', location: 'Anfield', result: 'W'},
]


export default function Welcome() {

  return (
    <ThemeProvider>
      <Notifications position='bottom-center'/>
      <HeaderMiddle/>
      <Stack mt={80}>
        <NewsCarousel />
        <Schedule data={data}/>
        <BlogCard 
          image={yourBusinessHere} 
          category={'news'} 
          title={'Contact CFC for sponsorship opportunites!'}
          date={''}
          author={{name: '', avatar: ''}}
        />
        <MeetTheTeam data={theteam} />
        <GetInTouchSimple />
      </Stack>
    </ThemeProvider>
  );
}