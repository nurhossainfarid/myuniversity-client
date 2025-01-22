import { useGetAcademicSemestersQuery } from "../../../redux/features/admin/academicManagement";

const AcademicSemester = () => {
  const { data } = useGetAcademicSemestersQuery(undefined);
  console.log(data);
  return <div>Academic Semester</div>;
};

export default AcademicSemester;
