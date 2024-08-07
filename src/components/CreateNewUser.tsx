import { Button, Card, TextInput, Title, Badge } from "@tremor/react";
import { useUsersActions } from "../hooks/useUsersActions";
import { useState } from "react";

export function CreateNewUser() {
  const { addUser } = useUsersActions();
  const [result, setResult] = useState<'ok' | 'ko' | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const github = formData.get("github") as string;

    if ( !name || !email || !github ) {
      return setResult('ko');
    }

    addUser({ name, email, github });
    setResult('ok');
    form.reset();
  };

  return (
    <Card className="mt-8">
      <Title className="p-2">Create new user</Title>

      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput name="name" placeholder="Enter your name" />
        <TextInput name="email" placeholder="Enter your email" />
        <TextInput name="github" placeholder="Enter your github username" />
        <div>
          <Button
            type="submit"
            className="rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Create user
          </Button>
          <span className="space-x-2">
            {result === 'ok' && <Badge className="text-green-700 bg-green-100 font-bold p-2 ml-2 rounded w-40">User created</Badge>}
            {result === 'ko' && <Badge className="text-red-700 bg-red-100 font-bold p-2 ml-2 rounded w-40">User not created</Badge>}
          </span>
        </div>
      </form>
    </Card>
  );
}
