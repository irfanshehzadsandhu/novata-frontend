import {useEffect, useState} from "react";
import {getFormDetails, saveFormDetails} from "./Service";
import {Button, Col, Form, Row} from "antd";
import TextField from "./TextField";
import NumberField from "./NumberField";
import "antd/dist/antd.css";
import SelectField from "./SelectField";


function App() {
  const [formConfiguration, setFormConfiguration] = useState({});
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    getFormDetails().then((response) => {
      setFormConfiguration(response.data);
    })
  }, [])

  useEffect(() => {

    for (let configuration in formConfiguration) {
      if (configuration === "properties") {
        const inputs = []
        const properties = formConfiguration[configuration];
        for (let property in properties) {
          const input = {
            name: property,
            label: properties[property].title,
            type: properties[property].anyOf ? "enum" : properties[property].type,
            rules: formConfiguration["required"].includes(property) ? [
              {
                required: true,
                message: `Please input your ${property}`,
              },
            ] : []
          }
          if (properties[property].anyOf) {
            input['options'] = properties[property].anyOf;
          }
          inputs.push(input)
        }
        setInputs(inputs);
      }
    }
  }, [formConfiguration])

  const onFinish = (values) => {
    saveFormDetails(values).then(() => {
    })
  }

  return <Row justify="center" align="middle" style={{marginTop: 30}}>
    <Col>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        {inputs.map((i) => {
          if (i.type === "string") {
            return <TextField label={i.label} name={i.name} rules={i.rules}/>
          }
          if (i.type === "number") {
            return <NumberField label={i.label} name={i.name} rules={i.rules}/>
          }
          if (i.type === "enum") {
            return <SelectField label={i.label} name={i.name} options={i.options}/>
          }
        })}


        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Col>
  </Row>

}

export default App;
