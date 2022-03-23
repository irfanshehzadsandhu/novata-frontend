import React from "react";
import {Form, Input} from "antd";

const TextField = (props) => {
  const {label, name, rules} = props;
  return <Form.Item
    label={label}
    name={name}
    rules={rules}
  >
    <Input/>
  </Form.Item>
}
export default TextField;