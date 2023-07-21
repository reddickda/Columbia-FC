import { createStyles, Paper, Text, ThemeIcon, rem, Avatar } from '@mantine/core';
import logo from '../assets/image0.jpg'

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

export function OurSupporters() {
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
      <Text mb={20}>Columbia FC Supporter Group</Text>
      <Text>Our supporters are the life force behind everything we do. Their unyielding passion and unwavering dedication fuel our mission, propelling us forward to new heights. We are truly humbled and immensely grateful for their spirited enthusiasm, as it inspires us to push boundaries and exceed expectations. Without a doubt, our supporters are the heart and soul of our journey, and we cherish them beyond measure. Together, we create an unstoppable force of positivity and change, and together, we will continue to make a difference that resonates far and wide.</Text>
      <Text mt={20}>Start supporting us today!</Text>
    </Paper>
  );
}