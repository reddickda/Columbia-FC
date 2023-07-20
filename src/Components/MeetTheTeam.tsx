import { Avatar, Badge, Table, Text, ScrollArea } from '@mantine/core';
import logo from '../assets/image0.jpg'
import { useMediaQuery } from '@mantine/hooks';

interface UsersTableProps {
  data: { avatar: string; name: string; email: string; nationality: string, position: string }[];
}

// const positionData = ['Manager', 'Forward', 'Midfield', 'Defender'];

export function MeetTheTeam({ data }: UsersTableProps) {
  const mobile = useMediaQuery(`(max-width: 500px)`);

  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
          <Avatar size={40} src={logo} radius={40} />

      </td>
      <td>
      <Text fz="sm" fw={500}>
              {item.name}
            </Text>
      </td>

      <td>
        {/* <Select data={positionData} defaultValue={item.position} variant="unstyled" /> */}
        <Text>{item.position}</Text>
      </td>
      <td>{item.nationality}</td>
      {!mobile && <td>
          <Badge fullWidth>Active</Badge>
      </td>}
    </tr>
  ));

  return (
    <ScrollArea>
      <Table miw={300} verticalSpacing="sm">
        <thead>
          <tr>
            <th></th>
            <th style={{textAlign:'center'}}>Player</th>
            <th style={{textAlign:'center'}}>Position</th>
            <th style={{textAlign:'center'}}>Nationality</th>
            {!mobile &&  <th style={{textAlign:'center'}}>Status</th>}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}