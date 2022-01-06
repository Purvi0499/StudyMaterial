import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Counter from "./components/hoc/Counter";
import Hocred, { Hocblue, Hocgreen } from "./components/hoc/Hoc";
import Register from "./components/HookForm/Register";
import UserForm from "./components/HookForm/UserForm";
import NewUser from "./components/HookForm/NewUser";
import Form from "./components/HookForm/Reset";
import Forms from "./components/HookForm/Forms/Forms";

import { useForm, FormProvider } from "react-hook-form";

function App() {
  const methods = useForm();
  return (
    <div className="App">
      {/* <Form /> */}
      <FormProvider {...methods}>
        <Forms methods={methods} />
      </FormProvider>
      {/* <Register /> */}
      {/* <UserForm />
      <Counter />
      <Hocred cmp={Counter} />
      <Hocgreen cmp={Counter} />
      <Hocblue cmp={Counter} /> */}
    </div>
  );
}

export default App;
