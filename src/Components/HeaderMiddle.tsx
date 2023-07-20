import { createStyles, Avatar, Header, Group, ActionIcon, Container, Text, rem } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
import {IconBrandInstagram, IconBrandTiktok } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rem(80),

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: rem(260),

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

// interface HeaderMiddleProps {
//   links: { link: string; label: string }[];
// }

// export function HeaderMiddle({ links }: HeaderMiddleProps) {
export function HeaderMiddle() {

  // const [opened, { toggle }] = useDisclosure(false);
  // const [active, setActive] = useState(links[0].link);
  // const { classes, cx } = useStyles();

  const { classes } = useStyles();

  // const items = links.map((link) => (
  //   <a
  //     key={link.label}
  //     href={link.link}
  //     className={cx(classes.link, { [classes.linkActive]: active === link.link })}
  //     onClick={(event) => {
  //       event.preventDefault();
  //       setActive(link.link);
  //     }}
  //   >
  //     {link.label}
  //   </a>
  // ));

  return (
    <Header style={{position: 'absolute', top: 0}} height={80} mb={120}>
      <Container className={classes.inner}>
        <Avatar size={'lg'} src={'src/assets/image0.jpg'} />
        {/* <Group className={classes.links} spacing={5}>
          {items}
        </Group> */}

        <div><Text weight={700} size='large'>Columbia FC</Text>Where Soccer Meets Community</div>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon component="a" href="https://www.tiktok.com/@columbiafcmd" size="lg">
            <IconBrandTiktok size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon component="a" href="https://www.instagram.com/columbiafcmd/?hl=en" size="lg">
            <IconBrandInstagram size="1.1rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}