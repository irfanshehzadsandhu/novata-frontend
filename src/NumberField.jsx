import React from "react";
import {Form, InputNumber} from "antd";

const NumberField = (props) => {
  const {label, name, rules} = props;
  return <Form.Item
    label={label}
    name={name}
    rules={rules}
  >
    <InputNumber/>
  </Form.Item>
}
export default NumberField;