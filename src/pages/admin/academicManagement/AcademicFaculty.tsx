import { Button, Table, TableColumnsType } from "antd";
import { TAcademicFaculty } from "../../../types";
import { useGetAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement";

export type TAFacultyTableData = Pick<TAcademicFaculty, "name">;

const AcademicFaculty = () => {
  const { data: facultiesData } = useGetAcademicFacultiesQuery(undefined);

  const data = facultiesData?.data?.map(({ _id, name }: { _id: string; name: string }) => ({
    key: _id,
    name,
  }));

  const columns: TableColumnsType<TAFacultyTableData> = [
    {
      title: "Name",
      dataIndex: "name",
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
    <Table<TAFacultyTableData>
      columns={columns}
      dataSource={data}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicFaculty;
