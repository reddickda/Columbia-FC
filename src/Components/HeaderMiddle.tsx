import { createStyles, Avatar, Header, Group, ActionIcon, Container, Text, rem, Burger, Transition, Paper } from '@mantine/core';
import { IconBrandInstagram, IconBrandTiktok } from '@tabler/icons-react';
import logo from '../assets/image0.jpg'
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';

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
    [theme.fn.smallerThan('sm')]: {
      marginLeft: 10    
    },
    marginRight: theme.spacing.md,
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
  dropdown: {
    position: 'absolute',
    top: 80,
    left: 300,
    right: 0,
    zIndex: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
    width: 300,
    [theme.fn.smallerThan('sm')]: {
      left: 80,
    },
  },
}));

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
  routes: { link: string; label: string}[];
}

export function HeaderMiddle({ links, routes }: HeaderMiddleProps) {

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  routes.map((route) => {
    items.push(<Link
      key={route.label}
      className={cx(classes.link, { [classes.linkActive]: active === route.link })}
      to={route.link}
    >
      {route.label}
    </Link>)
  })

  return (
    <Header style={{ position: 'absolute', top: 0 }} height={80} mb={120}>
      <Container className={classes.inner}>
        <Avatar size={'lg'} src={logo} />
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>

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