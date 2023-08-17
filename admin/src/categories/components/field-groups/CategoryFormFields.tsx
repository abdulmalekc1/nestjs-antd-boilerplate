import { ProFormSegmented } from "@ant-design/pro-components";
import { categoryTypeLabels } from "../../enum-labels";
import { GeneralFields } from "./GeneralFields";

export const CategoryFormFields = () => {
  return (
    <>
      <ProFormSegmented
        colProps={{ span: "auto" }}
        name="type"
        label="Category Type"
        valueEnum={categoryTypeLabels}
        rules={[{ required: true, message: "required" }]}
      />
      <GeneralFields />
    </>
  );
};
