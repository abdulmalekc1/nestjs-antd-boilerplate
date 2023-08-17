import {
  ProFormGroup,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-components";

export const GeneralFields = () => {
  return (
    <ProFormGroup title="General" collapsible>
      <ProFormText
        colProps={{ span: "auto" }}
        name="title"
        label="Title"
        rules={[{ required: true, message: "required" }]}
      />

      <ProFormTextArea
        name="description"
        label="Description"
        rules={[{ required: true, message: "required" }]}
      />
    </ProFormGroup>
  );
};
