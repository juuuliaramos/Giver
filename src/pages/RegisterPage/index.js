import { HomePageLayout } from "./styles";
import UserRegister from "../../components/CardRegister";

const RegisterPage = () => {
  return (
    <>
      <HomePageLayout>
          <UserRegister />
      </HomePageLayout>
    </>
  );
};

export default RegisterPage;
