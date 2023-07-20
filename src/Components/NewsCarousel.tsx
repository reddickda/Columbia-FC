import { Carousel } from '@mantine/carousel';
import { createStyles, Paper, Text, Title, Button, rem, Card } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(200),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
  link: string;
}

function CardCarousel({ image, title, category, link }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url('${image}')` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Card style={{opacity:'.9'}}>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
        </Card>
      </div>
      <Button component="a" href={link} variant="white" color="dark">
        Go to source
      </Button>
    </Paper>
  );
}

const data = [
  {
    image:
      '/Capture.PNG',
    title: 'Kings of Columbia',
    category: 'sports',
    link: 'https://www.protagonistsoccer.com/features/2019/7/26/the-kings-of-columbia'
  },
  {
    image:
      '/fredfront.jpg',
    title: 'Find us on Facebook!',
    category: 'social',
    link: 'https://www.facebook.com/ColumbiaFCMD/'
  },
];

export function NewsCarousel() {
  const mobile = useMediaQuery(`(max-width: 500px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <CardCarousel {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="100%"
      style={{width: mobile ? 350 : undefined}}
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={1}
    >
      {slides}
    </Carousel>
  );
}