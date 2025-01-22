import { Col, Flex, Button } from "antd";
import PHForm from "../../../components/form/PHForm";
import { toast } from "sonner";
import { SubmitHandler, FieldValues } from "react-hook-form";
import {
  useAddAcademicDepartmentMutation,
  useGetAcademicFacultiesQuery,
} from "../../../redux/features/admin/academicManagement";
import PHSelect from "../../../components/form/PHSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicDepartmentSchema } from "../../../schemas/academicMansgement.schema";
import PHInput from "../../../components/form/PHInput";
import {
  TAcademicDepartment,
  TAcademicFaculty,
  TResponse,
} from "../../../types";

const CreateAcademicDepartment = () => {
  const { data: facultiesData } = useGetAcademicFacultiesQuery(undefined);
  const [addADepartment] = useAddAcademicDepartmentMutation();

  const facultiesOptions = facultiesData?.data?.map(
    (faculty: TAcademicFaculty) => ({
      value: faculty._id,
      label: faculty.name,
    })
  );

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    try {
      const res = (await addADepartment(
        data
      )) as TResponse<TAcademicDepartment>;

      if (res?.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Department Create", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={24}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicDepartmentSchema)}
        >
          <PHInput type="text" label="Name" name="name" />
          <PHSelect
            label="Academic Faculty"
            name="academicFaculty"
            options={facultiesOptions}
          />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicDepartment;
