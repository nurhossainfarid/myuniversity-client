import { Button, Row } from "antd";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { useChangePasswordMutation } from "../redux/features/admin/userManagement";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks/hooks";
import { logout } from "../redux/features/auth/authSlice";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [changePassword] = useChangePasswordMutation();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await changePassword(data);

    if (res?.data?.success) {
      dispatch(logout());
      navigate("/login");
    }
  };
  return (
    <Row justify="center" align={"middle"} style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit}>
        <h1 style={{ marginBottom: "10px" }}>Set Your New Password</h1>
        <PHInput type="text" name="oldPassword" label="Old Password" />
        <PHInput type="text" name="newPassword" label="New Password" />
        <Button htmlType="submit">Change</Button>
      </PHForm>
    </Row>
  );
};

export default ChangePassword;
