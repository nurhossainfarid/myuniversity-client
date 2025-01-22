import { Table, TableColumnsType } from "antd";
import { TAcademicFaculty } from "../../../types";
import { useGetAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement";

export type TTableData = Pick<TAcademicFaculty, "name">;

const AcademicFaculty = () => {
  const { data: semesterData } = useGetAcademicFacultiesQuery(undefined);

  const data = semesterData?.data?.map(
    ({ _id, name }) => ({
      key: _id,
      name,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
    },
  ];

  return (
    <Table<TTableData>
      columns={columns}
      dataSource={data}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicFaculty;
