import React, { useState }from 'react';

import {
    Modal,
    Button,
    Row,
    Col,
    Form,
    Select,
    Input,
    Tag
} from 'antd';

import { persons } from '../../../../resources/persons';
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
    console.log(diagram);
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
                width={1200}
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
                    <Col span={16}>
                        <Diagram works={diagram.works} onChange={onhandleChange} />
                    </Col>
                    <Col span={1} offset={1}>
                        <div className="vertical-line"></div>
                    </Col>
                    <Col span={6}>
                        <h4>Chi tiết công việc</h4>
                        <Form layout="vertical">
                            <Form.Item
                                name='name_work'
                                label={`Tên công việc`}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input 
                                    placeholder={`Nhập tên công việc`} 
                                    defaultValue={diagram.name_work} 
                                    onChange={(event)=>{setDiagram({...diagram, name_work: event.target.value});}}
                                />
                            </Form.Item>
                            <Form.Item
                                name='time_work'
                                label={`Thời gian (giây)`}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input 
                                    placeholder={`Nhập thời gian theo giây`} 
                                    defaultValue={diagram.time_work} 
                                    onChange={(event)=>{setDiagram({...diagram, time_work: event.target.value});}}
                                />
                            </Form.Item>
                            <Form.Item
                                name='weight_work'
                                label={`Tải trọng của công việc`}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input 
                                    placeholder={`Nhập tải trọng`} 
                                    defaultValue={diagram.weight_work}
                                    onChange={(event)=>{setDiagram({...diagram, weight_work: event.target.value});}}
                                />
                            </Form.Item>
                            <Form.Item
                                name='person_works'
                                label={`Danh sách người tham gia công việc`}
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
                                    defaultValue={diagram.person_works}
                                    onChange={(value)=>{ setDiagram({...diagram, person_works: value}); }}
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
                                name='device_works'
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
                                    onChange={(value)=>{ setDiagram({...diagram, device_works: value}); }}
                                    placeholder="Chọn dụng cụ"
                                    defaultValue={diagram.device_works}
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
                                name='resource_works'
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
                                    onChange={(value)=>{ setDiagram({...diagram, resource_works: value}); }}
                                    placeholder="Chọn nguyên liệu"
                                    defaultValue={diagram.resource_works}
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
                        </Form>
                    </Col>
                </Row>
            </Modal>
        </div>
    );
}

export default ModalStep2;
