import { FormPanel, ImagePanel } from "../components";
import { SignUpForm } from "../components/signup-form";

const SignUp = () => {
  return (
    <>
      <ImagePanel
        imgDirection="left"
        welcomeMessage="Welcome to"
        motto="Connecting aspiring talent with experienced professionals"
      />
      <FormPanel type="signup">
        <SignUpForm />
      </FormPanel>
    </>
  );
};

export default SignUp;
