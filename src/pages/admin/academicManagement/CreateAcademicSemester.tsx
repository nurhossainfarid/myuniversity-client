import { Button } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";
import { academicSemesterSchema } from "../../../schemas/academicMangement.schema";
import { zodResolver } from "@hookform/resolvers/zod";

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
      <PHForm
        onSubmit={onSubmit}
        resolver={zodResolver(academicSemesterSchema)}
      >
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
