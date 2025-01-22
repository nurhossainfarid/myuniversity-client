import { Table, TableColumnsType, Button } from "antd";
import { TAcademicDepartment, TAcademicFaculty } from "../../../types";
import { useGetAcademicDepartmentsQuery } from "../../../redux/features/admin/academicManagement";

export type TADepartmentTableData = Pick<
  TAcademicDepartment,
  "name" | "academicFaculty"
>;

const AcademicDepartment = () => {
  const { data: departmentsData } = useGetAcademicDepartmentsQuery(undefined);

  const data = departmentsData?.data?.map(
    ({
      _id,
      name,
      academicFaculty,
    }: {
      _id: string;
      name: string;
      academicFaculty: TAcademicFaculty;
    }) => ({
      key: _id,
      name,
      academicFaculty: academicFaculty?.name,
    })
  );

  const columns: TableColumnsType<TADepartmentTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Academic Faculty",
      dataIndex: "academicFaculty",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div>
          <Button>Update</Button>
        </div>
      ),
    },
  ];

  return (
    <Table<TADepartmentTableData>
      columns={columns}
      dataSource={data}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicDepartment;
