import PropTypes from "prop-types";
import { FaUpload } from "react-icons/fa";
import { Upload } from "./Styles";
import { FormInputBorder } from "../..";
import { useState } from "react";

export default function FormImageInput({ name, placeholder, errors, register }) {
  const [imageURL, setImageURL] = useState();

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  function handleChange(info) {
    const { originFileObj } = info?.fileList[0] || {};
    if (originFileObj) {
      getBase64(originFileObj, (url) => {
        setImageURL(url);
      });
    } else {
      setImageURL(undefined);
    }
  }

  return (
    <Upload name={name} onChange={handleChange} beforeUpload={() => false} maxCount={1}>
      <FormInputBorder
        name={name}
        placeholder={placeholder}
        errors={errors}
        register={register}
        icon={FaUpload}
        value={imageURL}
        readOnly='readonly'
      />
    </Upload>
  );
}

FormImageInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
