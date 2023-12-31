import { useState } from 'react';
import { createStyles, Card, Table, ScrollArea, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

interface TableScrollAreaProps {
  data: { date: string, team: string; location: string; result: string }[];
}

export function Schedule({ data }: TableScrollAreaProps) {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <tr key={row.team}>
      <td>{row.date}</td>
      <td>{row.team}</td>
      <td>{row.location}</td>
      <td>{row.result}</td>
    </tr>
  ));

  console.log(rows)

  return (
    <Card>
    <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      Schedule coming soon...
      {<Table captionSide='top' miw={300}>
      <caption>Schedule and Results 2023/2024</caption>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th style={{textAlign:'center'}}>Date</th>
            <th style={{textAlign:'center'}}>Team</th>
            <th style={{textAlign:'center'}}>Location</th>
            <th style={{textAlign:'center'}}>Result</th>
          </tr>
        </thead>
        {/* <tbody>{rows}</tbody> */}
      </Table>}
    </ScrollArea>
    </Card>
  );
}