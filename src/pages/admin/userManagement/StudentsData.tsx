import { TStudent } from "../../../types";
import { Table, TableColumnsType, TableProps, Button, Space } from "antd";
import { useState } from "react";
import { TQueryParam } from "../../../types";
import { useGetStudentsQuery } from "../../../redux/features/admin/userManagement";

export type TStudentsTableData = Pick<TStudent, "fullName" | "id">;

const StudentsData = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { data: studentsData } = useGetStudentsQuery(params);

  console.log(studentsData);

  const data = studentsData?.data?.map(({ _id, fullName, id }) => ({
    key: _id,
    fullName,
    id,
  }));

  const columns: TableColumnsType<TStudentsTableData> = [
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Roll",
      dataIndex: "id",
    },
    {
      title: "Action",
      key: "x",
      render: () => (
        <div>
          <Space>
            <Button>Details</Button>
            <Button>Update</Button>
            <Button>Block</Button>
          </Space>
        </div>
      ),
      width: "1%",
    },
  ];

  const onChange: TableProps<TStudentsTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];

      filters?.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );

      filters?.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );

      setParams(queryParams);
    }
  };

  return (
    <Table<TStudentsTableData>
      columns={columns}
      dataSource={data}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default StudentsData;
