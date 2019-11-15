import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Checkbox } from 'antd';

const mapStateToProps = state => {
  return {
    type: state.gov.type,
    info: state.gov.info
  }
}

const mapDispstchToProps = dispatch => {
  return {
    addGov: payload => {
      dispatch({
        type: 'gov/addGov',
        payload
      })
    }
  }
}
@connect(mapStateToProps, mapDispstchToProps)

@Form.create()

class NewGov extends React.Component {
  handleSubmit = e => {
    console.log('提交表单...');
    this.props.form.validateFields((err, vals) => {
      console.log('errr...', err, vals);
      if (err) { } else {
        confirm({
          title: `${this.props.type == 'new' ? '您确定要添加机构吗?' : '您确定要修改机构信息吗?'}`,
          onOk() {
            console.log('vals...', vals);
            this.props.addGov(vals);
          }
        })
      }
    })
  }

  resetForm = e => {
    this.props.form.resetFields();
  }

  componentDidMount() {
    let { id, ...info } = this.props.info;
    if (!Object.keys(info).length) {
      let storage = window.localStorage.getItem('info');
      if (storage) {
        info = JSON.parse(storage);
      }
    }
    this.props.form.setFieldsValue(info);

  }

  get disabled() {
    return this.props.type === 'detail'
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return <>
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="机构名称">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请输入你的机构名称',
              },
            ],
          })(<Input disabled={this.disabled} />)}
        </Form.Item>

        <Form.Item label="所在地区">
          {getFieldDecorator('area', {
            rules: [
              {
                required: true,
                message: '请输入你的所在地区',
              },
            ],
          })(<Input  disabled={this.disabled}/>)}
        </Form.Item>

        <Form.Item label="所在地址">
          {getFieldDecorator('area', {
            rules: [
              {
                required: true,
                message: '请输入你的所在地址',
              },
            ],
          })(<Input disabled={true} />)}
        </Form.Item>

        <Form.Item label="校长姓名">
          {getFieldDecorator('master', {
            rules: [
              {
                required: true,
                message: '请输入你的校长姓名',
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="校长手机号">
          {getFieldDecorator('phone', {
            rules: [
              {
                required: true,
                message: '请输入你的校长手机号',
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item >
          <span>合同信息</span>
        </Form.Item>

        <Form.Item label='合同编号'>
          {getFieldDecorator('num')(<Input />)}
        </Form.Item>

        <Form.Item label='是否可用'>
          {getFieldDecorator('enable', {
            valuePropName: 'checked'
          })(<Checkbox disabled={this.disabled} />)}
        </Form.Item>

        {
          this.disabled ? null : <Form.Item {...tailFormItemLayout}>
            <Button onClick={this.resetForm}>取消</Button>
            <Button type="primary" htmlType="submit" >提交</Button>
          </Form.Item>
        }

      </Form>
    </>
  }
}
export default NewGov;
















// import React from 'react';
// import { connect } from 'dva';
// import {
//   Form,
//   Input,
//   Tooltip,
//   Icon,
//   Cascader,
//   Select,
//   Row,
//   Col,
//   Checkbox,
//   Button,
//   AutoComplete,
// } from 'antd';

// // const { Option } = Select;
// // const AutoCompleteOption = AutoComplete.Option;

// const mapStateToProps = state => {
//   return {
//     type: state.gov.type,
//     info: state.gov.info
//   }
// }

// @connect(mapStateToProps)
// class NewGov extends React.Component {
//   render() {
//     return <div>
//       {/* <p>新增机构</p> */}
//       <Form onSubmit={this.handleSubmit}>
//         <Form.Item label="Password" hasFeedback>
//           <Input.Password />
//         </Form.Item>
//         <Form.Item label="Confirm Password" hasFeedback>
//           <Input.Password onBlur={this.handleConfirmBlur} />
//         </Form.Item>
//         <Form.Item
//           label={
//             <span>
//               Nickname&nbsp;
//               <Tooltip title="What do you want others to call you?">
//                 <Icon type="question-circle-o" />
//               </Tooltip>
//             </span>
//           }
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item label="Habitual Residence">
//           <Cascader />
//         </Form.Item>
//         <Form.Item label="Phone Number">
//           <Input style={{ width: '100%' }} />
//         </Form.Item>
//         <Form.Item label="Website">

//             <AutoComplete

//               onChange={this.handleWebsiteChange}
//               placeholder="website"
//             >
//               <Input />
//             </AutoComplete>,

//         </Form.Item>
//         <Form.Item label="Captcha">
//           <Row gutter={8}>
//             <Col span={12}>
//               <Input />
//             </Col>
//             <Col span={12}>
//               <Button>Get captcha</Button>
//             </Col>
//           </Row>
//         </Form.Item>
//         <Form.Item>
//             <Checkbox>
//               I have read the <a href="">agreement</a>
//             </Checkbox>,
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             Register
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   }
// }

// export default NewGov;







// import React from 'react';
// import { Table, Divider, Tag } from 'antd';

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: text => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: tags => (
//       <span>
//         {tags.map(tag => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </span>
//     ),
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (text, record) => (
//       <span>
//         <a>Invite {record.name}</a>
//         <Divider type="vertical" />
//         <a>Delete</a>
//       </span>
//     ),
//   },
// ];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

// class NewGov extends React.Component{
//   render(){
//     return <>
//       <p>新增机构</p>
//       <Table columns={columns} dataSource={data} />
//     </>
//   }
// }

// export default NewGov;
