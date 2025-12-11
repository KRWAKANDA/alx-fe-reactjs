import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div style={{ display: "flex", gap: "50px", padding: "40px" }}>
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
