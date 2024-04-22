import { FormPanel, ImagePanel } from "../components";
import { SignInForm } from "../components/signin-form";

const SignInPage = () => {
  return (
    <>
      <FormPanel type="signin">
        <SignInForm />
      </FormPanel>
      <ImagePanel
        imgDirection="right"
        welcomeMessage="Welcome back to"
        motto="Connecting aspiring talent with experienced professionals"
      />
    </>
  );
};

export default SignInPage;
