import { Card, TextInput, Textarea, SimpleGrid, Group, Title, Button } from '@mantine/core';
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

export function GetInTouchSimple() {
  const form = useRef(null);

  // const form = useForm({
  //   initialValues: {
  //     name: '',
  //     email: '',
  //     subject: '',
  //     message: '',
  //   },
  //   validate: {
  //     name: (value) => value.trim().length < 2,
  //     email: (value) => !/^\S+@\S+$/.test(value),
  //     subject: (value) => value.trim().length === 0,
  //   },
  // });


  if(!form) {
    return;
  }
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if(!form.current){
      return;
    }
    
    emailjs.sendForm('service_alck8gn', 'template_rcey5s5', form.current, 'Cc6XZRzrs2B-yS2DH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
  };

  return (
    <Card>
    <form ref={form} onSubmit={sendEmail}>
      <Title
        order={2}
        size="h6"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={900}
        align="center"
      >
        We would love to hear from you.
        Join the team or partner with us!
      </Title>

      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          label="Name"
          placeholder="Your name"
          name="from_name"
          variant="filled"
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="from_email"
          variant="filled"
        />
      </SimpleGrid>
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
      />

      <Group position="center" mt="xl">
        <Button type="submit" size="md">
          Send message
        </Button>
      </Group>
    </form>
    </Card>
  );
}