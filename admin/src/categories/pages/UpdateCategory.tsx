import { ProCard, ProForm } from "@ant-design/pro-components";
import { message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { AntPageContainer } from "../../shared/components/AntPageContainer";
import categoriesApi from "../api";
import { CategoryFormFields } from "../components/field-groups/CategoryFormFields";
import {
  toApiRequest,
  toFormState,
  UpdateCategoryFormState,
} from "../form-state/update-category-form-state";
import { useAuthUser } from "../../auth/hooks/useAuthUser";

export const UpdateCategory = () => {
  const { id } = useParams();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const { user } = useAuthUser();

  return (
    <AntPageContainer>
      {contextHolder}
      <ProCard>
        <ProForm<UpdateCategoryFormState>
          grid
          onFinish={async (data) => {
            const request = toApiRequest({ ...data, userId: user?.id || "" });

            await categoriesApi.update(id!, request);

            messageApi.success("updated");
            navigate(-1);
          }}
          request={() => categoriesApi.findOne(id!).then(toFormState)}
        >
          <CategoryFormFields />
        </ProForm>
      </ProCard>
    </AntPageContainer>
  );
};
