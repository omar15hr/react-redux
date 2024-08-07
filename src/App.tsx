import { CreateNewUser, ListOfUsers } from "./components";
import { Toaster } from "sonner";

import "./App.css";

function App() {
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">Proyecto con React y Redux</h1>

      <ListOfUsers />
      <CreateNewUser />
      <Toaster richColors />
    </>
  );
}

export default App;
