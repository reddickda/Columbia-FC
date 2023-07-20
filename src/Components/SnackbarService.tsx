import { notifications } from '@mantine/notifications';
import { IconX, IconCheck } from '@tabler/icons-react';

export interface Snack {
  title: string;
  message: string;
  color: string;
  icon?: JSX.Element;
  durationMillis?: number;
}

export const errorSnack = (message: string): Snack => {
  return {
    title: 'An error has occurred.',
    message: message,
    color: 'red',
    icon: <IconX />,
    durationMillis: 5000,
  };
};

export const successSnack = (message: string) => {
  return {
    title: 'Success.',
    message: message,
    color: 'green',
    icon: <IconCheck />,
  };
};

export const pushSnackbar = (snack: Snack) => {
  const { durationMillis, ...rest } = snack;
  const id = Date.now().toString();

  notifications.show({ id, ...rest });
  setTimeout(() => notifications.hide(id), durationMillis || 2500);
};
