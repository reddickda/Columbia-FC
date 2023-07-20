import { createStyles, Paper, Text, ThemeIcon, rem, Avatar, Button } from '@mantine/core';
import logo from './assets/image0.jpg'

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,

    // '&:hover': {
    //   boxShadow: theme.shadows.md,
    //   transform: 'scale(1.02)',
    // },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: rem(6),
      backgroundImage: theme.fn.linearGradient(0, theme.colors.pink[6], theme.colors.orange[6]),
    },
  },
}));

export function About() {
  const { classes } = useStyles();
  return (
      <Paper withBorder radius="md" className={classes.card}>
        <ThemeIcon
          size="xl"
          radius="md"
          variant="gradient"
          gradient={{ deg: 0, from: 'pink', to: 'orange' }}
        >
          <Avatar size={'lg'} src={logo} />

        </ThemeIcon>
        <Text size="xl" weight={500} mt="md">
          A little about us...
        </Text>
        <Text size="sm" mt="sm" color="dimmed">
          Welcome to the heartwarming story of the Columbia United Soccer Club, an extraordinary local amateur team hailing from the picturesque town of Columbia, Maryland. Brimming with camaraderie and a shared passion for soccer, this team embodies the true spirit of community.

          Founded on the belief that soccer can serve as a unifying force, Columbia United is not just a team; it's a family. Comprising players from diverse backgrounds, ages, and skill levels, they come together to promote the beautiful game and foster a sense of togetherness among their fellow Marylanders.

          At the core of their mission is the desire to grow soccer throughout the entire state of Maryland. Their commitment to inclusivity means they actively reach out to underprivileged neighborhoods, organizing soccer clinics and outreach programs to encourage youngsters to embrace the sport they love.

          But it's not just their community-oriented mindset that sets Columbia United apart; their dedication and talent on the field are equally remarkable. With a rich history of triumphant victories in various local and regional competitions, their achievements serve as a testament to the hard work, perseverance, and unwavering team spirit that fuels their success.

          Yet, Columbia United remains humble and grounded, emphasizing sportsmanship, fair play, and respect for their opponents. They firmly believe that victory is even sweeter when accompanied by a shared sense of respect and admiration for the game and its players.

          As they continue their journey, Columbia United Soccer Club seeks to inspire the next generation of soccer enthusiasts, paving the way for a brighter future for the sport in Maryland. Their story is a reminder that when a community comes together, driven by passion and shared values, there are no limits to what they can achieve.
        </Text>
      </Paper>
  );
}