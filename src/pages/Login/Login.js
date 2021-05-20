import EditBox from "./components/EditBox"
import Button from "./components/Button"
import Header from "./components/Header"



function Login() {
  return (
    <div className="Login">
      <Header></Header>
      <EditBox placeholder ="아이디를 입력해주세요"></EditBox>
      <EditBox placeholder ="비밀번호를 입력해주세요"></EditBox>
      <Button></Button>
    </div>
  );
}

export default Login;