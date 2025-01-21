/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm();
  const [login] = useLoginMutation();

  const defaultValues = {
    userId: "A-0001",
    password: "farid123",
  };

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const token = res.data.accessToken;
      const user = verifyToken(token) as TUser;
      dispatch(setUser({ user: user, token: token }));
      toast.success("Login successful", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("Invalid credentials", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row
      justify="center"
      align={"middle"}
      style={{ height: "100vh", }}
    >
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <h1 style={{marginBottom: '10px'}}>Login</h1>
        <PHInput type="text" name="userId" label="Id:" />
        <PHInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
