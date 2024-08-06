import { Button, Card, TextInput, Title } from "@tremor/react";

export function CreateNewUser() {
  return (
    <Card className="mt-8">
      <Title>Create new user</Title>

      <form action="">
        <TextInput placeholder="Aquí el nombre" />
        <TextInput placeholder="Aquí el email" />
        <TextInput placeholder="Aquí el usuario degithub" />
        <div>
          <Button type="submit">Create user</Button>
        </div>
      </form>
    </Card>
  );
}
