import { Button } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2].map((number) => ({
  value: (currentYear + number).toString(),
  label: (currentYear + number).toString(),
}));

const CreateAcademicSemester = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <PHForm onSubmit={onSubmit}>
        <PHSelect name="name" label="Name" options={semesterOptions} />
        <PHSelect name="year" label="Year" options={yearOptions} />
        <PHSelect
          name="startMonth"
          label="Start Month"
          options={monthOptions}
        />
        <PHSelect name="endMonth" label="End Month" options={monthOptions} />
        <Button htmlType="submit">Submit</Button>
      </PHForm>
    </div>
  );
};

export default CreateAcademicSemester;
