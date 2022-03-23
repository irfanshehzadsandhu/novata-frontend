import React from "react";
import {Form, Select} from "antd";

const {Option} = Select;
const SelectField = (props) => {
  const {name, label, options} = props;
  return <Form.Item name={name} label={label}>
    <Select>
      {options.map((o) => <Option value={o.title}>{o.title}</Option>)}
    </Select>
  </Form.Item>
}
export default SelectField;