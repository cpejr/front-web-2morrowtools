import { Container, BlueButton } from "./Styles";
import { Upload, Button, message } from "antd";
import { UploadOutlined, EditOutlined, DeleteOutlined, SendOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import techImage from "../../assets/tech.jpeg";

export default function NewTool() {
  const [fileList, setFileList] = useState([]);

  const onChange = (info) => {
    setFileList(info.fileList);
  };

  const onRemove = (file) => {
    setFileList((prev) => prev.filter((f) => f.uid !== file.uid));
  };

  const updateImage = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
      message.success("Imagem enviada com sucesso!");
    }, 1000);
  };

  return (
    <Container>
      <img src={techImage} />
      <Upload
        fileList={fileList}
        customRequest={updateImage}
        onChange={onChange}
        onRemove={onRemove}
        showUploadList={{ showPreviewIcon: false, showRemoveIcon: true }}
      >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
      <BlueButton>
        <EditOutlined />
        Alterar
      </BlueButton>
      <BlueButton>
        <DeleteOutlined />
        Deletar
      </BlueButton>
      <BlueButton>
        <SendOutlined />
        Salvar Imagem
      </BlueButton>
    </Container>
  );
}
