import { ProCard, ProForm } from "@ant-design/pro-components";
import { AntPageContainer } from "../../shared/components/AntPageContainer";
import { CategoryType } from "../enums";
import { CategoryFormFields } from "../components/field-groups/CategoryFormFields";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import propertiesApi from "../api";
import {
  CreateCategoryFormState,
  toApiRequest,
} from "../form-state/create-category-form-state";
import { useAuthUser } from "../../auth/hooks/useAuthUser";

export const CreateCategory = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const { user } = useAuthUser();

  return (
    <AntPageContainer>
      {contextHolder}
      <ProCard>
        <ProForm<CreateCategoryFormState>
          grid
          onFinish={async (data) => {
            const request = toApiRequest({ ...data, userId: user?.id || "" });
            await propertiesApi.create(request);

            messageApi.success("Created");
            navigate(-1);
          }}
          initialValues={{
            type: CategoryType.Beginner,
          }}
        >
          <CategoryFormFields />
        </ProForm>
      </ProCard>
    </AntPageContainer>
  );
};
