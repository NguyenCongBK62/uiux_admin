import React, { useState , useEffect }from 'react';

import {
    Modal,
    Button,
    Row,
    Col,
    Form,
    Select,
    Input,
    Tag,
    Space
} from 'antd';

import {
    MinusCircleOutlined,
    PlusOutlined
} from '@ant-design/icons';

import { persons } from '../../../../resources/persons';
import {listTask} from '../../../../resources/works';
import { devices, garment_materials } from '../../../../resources/products';
import Diagram from '../../CrProLine/components/Diagram';

const { Option } = Select;

const ModalStep2 = (props) => {

    const [diagram, setDiagram] = useState(props.diagram? props.diagram:{
        name_work: '',
        time_work: '',
        weight_work: '',
        person_works: [],
        device_works: [],
        resource_works: [],
    });

    const onhandleChange = (works) => {

        let dia = diagram;
        dia = {...diagram, works: works,};

        setDiagram(dia);
    }

    const tagRender = (props) => {
        const { label, closable, onClose } = props;

        const onPreventMouseDown = event => {
            event.preventDefault();
            event.stopPropagation();
        };
        return (
            <Tag
                color={'cyan'}
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={{ marginRight: 3 }}
            >
                {label}
            </Tag>
        );
    }

    const handleSave = () => {
        if (!diagram.prd_id) {
            props.handleSaveStep2(diagram);
        } else {
            props.handleEdit(diagram);
        }
    }

    return (
        <div>
            <Modal
                title="Thêm mới chuyền" 
                visible={props.isVisibleStep2} 
                onOk={
                    props.handleSaveStep2
                } 
                onCancel={props.handleCancelStep2}
                centered
                width={1500}
                footer={[
                    <Button key="back" type="danger" onClick={props.handleCancelStep2}>
                        Huỷ
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleSave}>
                        Lưu
                    </Button>,
                ]}
            >
                <Row>
                    <Col span={12}>
                        <Diagram works={diagram.works} onChange={onhandleChange} />
                    </Col>
                    <Col span={1}>
                        <div className="vertical-line"></div>
                    </Col>
                    <Col span={11}>
                        <h4>Chi tiết công việc</h4>
                        <Form name="dynamic_form_nest_item" layout="vertical" autoComplete="off">
                            <Space key={`1000`} style={{ display: 'flex', marginBottom: 1 }} >
                                <Form.Item
                                    name={['cde', 'device_works']}
                                    label={`Danh sách dụng cụ`}
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Select 
                                        showSearch
                                        mode="multiple"
                                        allowClear
                                        showArrow
                                        tagRender={tagRender}
                                        placeholder="Chọn dụng cụ"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        { 
                                            devices.map(device => (
                                                <Option value={device.name} key={device.id}>{device.name}</Option>
                                            ))
                                        }
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name={['abc','resource_works']}
                                    label={`Danh sách nguyên liệu`}
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Select 
                                        showSearch
                                        mode="multiple"
                                        allowClear
                                        showArrow
                                        tagRender={tagRender}
                                        placeholder="Chọn nguyên liệu"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        { 
                                            garment_materials.map(g_m => (
                                                <Option value={g_m.name} key={g_m.id}>{g_m.name}</Option>
                                            ))
                                        }
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name='weight_work'
                                    label={`Tải trọng`}
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input placeholder={`Nhập tải trọng`} value={`101%`}/>
                                </Form.Item>
                            </Space>
                            <Space key={`1011`} style={{ display: 'flex', marginBottom: 1 }} align="baseline">
                                <Form.Item
                                    name='stt'
                                    label={`STT`}
                                    style={{width: '3rem'}}
                                    rules={[{ required: true, message: 'Missing first name' }]}
                                >
                                    <Input placeholder="STT" defaultValue={'1'} />
                                </Form.Item>
                                <Form.Item
                                    name='task_works'
                                    label={`Công việc`}
                                    style={{width: '12rem'}}
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Select 
                                        showSearch
                                        allowClear
                                        showArrow
                                        tagRender={tagRender}
                                        defaultValue={`Ủi gấp viền túi`}
                                        placeholder="Chọn công việc"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        { 
                                            listTask.map(item => 
                                                <Option value={item.name} key={item.id}>{item.name}</Option>
                                            )
                                        }
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name='person_works'
                                    label={`Công nhân`}
                                    style={{width: '12rem'}}
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Select 
                                        showSearch
                                        mode="multiple"
                                        allowClear
                                        showArrow
                                        tagRender={tagRender}
                                        placeholder="Chọn người tham gia"
                                        defaultValue={'Bùi Như Phú'}
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        { 
                                            persons.map(person => (
                                                <Option value={person.name} key={person.id}>{person.name}</Option>
                                            ))
                                        }
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    label={`Thời gian(giây)`}
                                    rules={[{ required: true, message: 'Missing first name' }]}
                                >
                                    <Input placeholder="Thời gian" value={`26`} />
                                </Form.Item>
                            </Space>
                            <Form.List name="dynamic">
                                {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 1 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name='stt'
                                                label={`STT`}
                                                fieldKey={[fieldKey, 'stt']}
                                                style={{width: '3rem'}}
                                                rules={[{ required: true, message: 'Missing first name' }]}
                                            >
                                                <Input placeholder="STT" defaultValue={key+2} />
                                            </Form.Item>
                                            <Form.Item
                                                name={[name, 'task_works']}
                                                label={`Công việc`}
                                                style={{width: '12rem'}}
                                                fieldKey={[fieldKey, 'task']}
                                                rules={[
                                                    {
                                                        required: true,
                                                    },
                                                ]}
                                            >
                                                <Select 
                                                    showSearch
                                                    allowClear
                                                    showArrow
                                                    tagRender={tagRender}
                                                    placeholder="Chọn công việc"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                                >
                                                    { 
                                                        listTask.map(item => 
                                                            <Option value={item.name} key={item.id}>{item.name}</Option>
                                                        )
                                                    }
                                                </Select>
                                            </Form.Item>
                                            <Form.Item
                                                name={[name, 'person_works']}
                                                label={`Công nhân`}
                                                style={{width: '12rem'}}
                                                fieldKey={[fieldKey, 'person']}
                                                {...restField}
                                                rules={[
                                                    {
                                                        required: true,
                                                    },
                                                ]}
                                            >
                                                <Select 
                                                    showSearch
                                                    mode="multiple"
                                                    allowClear
                                                    showArrow
                                                    tagRender={tagRender}
                                                    placeholder="Chọn người tham gia"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                                >
                                                    { 
                                                        persons.map(person => (
                                                            <Option value={person.name} key={person.id}>{person.name}</Option>
                                                        ))
                                                    }
                                                </Select>
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                label={`Thời gian(giây)`}
                                                name={[name, 'time']}
                                                fieldKey={[fieldKey, 'time']}
                                                rules={[{ required: true, message: 'Missing first name' }]}
                                            >
                                                <Input placeholder="Thời gian" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Add field
                                        </Button>
                                    </Form.Item>
                                </>
                                )}
                            </Form.List>
                        </Form>
                    </Col>
                </Row>
            </Modal>
        </div>
    );
}

export default ModalStep2;
