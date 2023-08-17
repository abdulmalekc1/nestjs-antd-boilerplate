import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { ProTable, ProTableProps } from "@ant-design/pro-components";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { AntPageContainer } from "../../shared/components/AntPageContainer";
import { getPaginationParams } from "../../shared/utils/common";
import categoriesApi from "../api";
import { categoryTypeLabels } from "../enum-labels";
import {
  ListCategoryRequest,
  ListCategorySortFields,
  Category,
} from "../types";

export const ListCategories = () => {
  const fetchCategories: ProTableProps<
    Category,
    ListCategoryRequest
  >["request"] = async (params, sort, _) => {
    console.log(
      '🚀 ~ file: ListCategory.tsx:20 ~ >["request"]= ~ params:',
      params
    );
    const request: ListCategoryRequest = {
      id: params.id,
      title: params.title,
      type: params.type,
      sortField: ListCategorySortFields.CreatedAt,
      sortOrder: "ascend",
      ...getPaginationParams(params),
    };

    if (sort?.createdAt) {
      params.sortField = ListCategorySortFields.CreatedAt;
      params.sortOrder = sort.createdAt;
    }

    if (sort?.updatedAt) {
      params.sortField = ListCategorySortFields.UpdatedAt;
      params.sortOrder = sort.updatedAt;
    }

    return categoriesApi.index(request);
  };

  return (
    <AntPageContainer>
      <ProTable<Category, ListCategoryRequest>
        request={fetchCategories}
        form={{ syncToUrl: true }}
        rowSelection={{}}
        toolBarRender={(action, rows) => [
          <Link to="create">
            <Button icon={<PlusOutlined />} type="primary">
              Create
            </Button>
          </Link>,
        ]}
        rowKey="id"
        columns={[
          {
            key: "id",
            dataIndex: "id",
            title: "ID",
          },
          {
            key: "title",
            title: "Title",
            dataIndex: "title",
          },
          {
            key: "type",
            title: "Type",
            dataIndex: "type",
            valueEnum: categoryTypeLabels,
          },
          {
            key: "description",
            title: "Description",
            render: (_, entity) => {
              return entity.description;
            },
            hideInSearch: true,
          },
          {
            key: "actions",
            valueType: "option",
            title: "Actions",
            render: (dom, row, index) => [
              <Link to={`edit/${row.id}`}>
                <EditOutlined />
              </Link>,
            ],
          },
        ]}
      />
    </AntPageContainer>
  );
};
