/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { 
    Row, 
    Col,
    Card,
    Button, 
    Table,
    notification,
    Modal,
    Spin,
    Form,
    Checkbox,
    Select,
    Tag,
    Radio,
    Input,
    Typography
} from 'antd';

import {
    CheckCircleTwoTone,
    CloseCircleTwoTone
} from '@ant-design/icons';

import useTimer from './useTime';

const { Option } = Select;
const { Title } = Typography;

const formatTime = (timer) => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    return `${getHours} : ${getMinutes} : ${getSeconds}`
}

const openNotificationWithIcon = (type, text) => {
    notification[type]({
        message: 'Thông báo',
        description: text,
    });
};

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

const genzai_data = [
    {
        id: 1,
        name: 'Dây kéo'
    },
    {
        id: 2,
        name: 'Vải lót'
    }
];
const device_data = [
    {
        id: 1,
        name: 'Thiết bị đếm 1'
    },
    {
        id: 2,
        name: 'Thiết bị đếm 2'
    },
    {
        id: 3,
        name: 'Máy cắt rập'
    },
    {
        id: 4,
        name: 'Kéo cắt'
    },
];

const Process = () => {

    const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0);

    const countRef = React.useRef(null)

    const [data, setData] = React.useState([]);
    const [dataBC, setDataBC] = React.useState([]);
    const [isVisible, setIsVisible] = React.useState(false);
    const [isVisibleError, setIsVisibleError] = React.useState(false);
    const [isVisibleBC, setIsVisibleBC] = React.useState(false);
    const [checkDevice, setCheckDevice] = React.useState(false);
    const [isDevice, setIsDevice] = React.useState(false);
    const [isGenZai, setIsGenZai] = React.useState(false);
    const [good, setGood] = React.useState(0);
    const [maxGood, setMaxGood] = React.useState(good);
    const [bad, setBad] = React.useState(0);
    const [maxBad, setMaxBad] = React.useState(bad);
    const [badIn, setBadIn] = React.useState(0);
    const [maxBadIn, setMaxBadIn] = React.useState(badIn);
    const [STT, setSTT] = React.useState(1);
    const [maxTimer, setMaxTimer] = React.useState(0);
    const [isVisibleDoc, setIsVisibleDoc] = React.useState(false);
    
    const [checkPin, setCheckPin] = React.useState({
        one: 0,
        two: 0,
    });
    const [sensor, setSensor] = React.useState({
        one: 0,
        two: 0,
    });
    const [checkSensor, setCheckSensor] = React.useState({
        sensor_1: false,
        sensor_2: false,
    });

    const columns = [
        {
            title: 'STT bó',
            dataIndex: 'stt',
            key: 'stt'
        },
        {
            title: 'Sản phẩm tốt',
            dataIndex: 'sp_good',
            key: 'good'
        },
        {
            title: 'Sản phẩm lỗi',
            dataIndex: 'sp_bad',
            key: 'bad'
        },
        {
            title: 'Sản phẩm lỗi đầu vào',
            dataIndex: 'sp_bad_in',
            key: 'bad_in'
        },
        {
            title: 'Thời gian',
            dataIndex: 'time_line',
            key: 'time',
            render: text => <p style={{fontSize: 13, textAlign: 'start'}}>{`${formatTime(text)}`}</p>
        },
    ];

    React.useEffect(()=>{
        if((good+bad) >= 20) {
            handleReport();
        }
    }, [good, bad])

    const startDemSp = () => {
        countRef.current = setInterval(() => {
            const random = Math.floor(Math.random() * 10);
            
            if (random % 2 === 0) {
                setGood((good) => good + 1);
                setCheckSensor({
                    sensor_1: true,
                    sensor_2: false
                });
            } else {
                setBad((bad)=> bad + 1);
                setCheckSensor({
                    sensor_1: false,
                    sensor_2: true
                });
            }
        }, 2000); // 20000 (s) chuan nhat
    }

    const handleStartWork = () => {
        if (!checkDevice) {
            openNotificationWithIcon('warning', 'Phải kiểm tra nguyên liệu, thiết bị');
            return;
        }
        handleStart();
        startDemSp();
    }

    const handleReport = () => {
        setIsVisibleBC(true);
        handlePause();
        clearInterval(countRef.current);
    }

    const handleCheckDevice = () => {
        setIsVisible(true);
        setTimeout(() =>{
            setCheckPin({
                one: 1,
                two: 1,
            });
            setSensor({
                one: 1,
                two: 1,
            });
        }, 800);
    }

    const handleFinish = () => {
        setDataBC([...data]);
        clearInterval(countRef.current);
        setGood(0);
        setBad(0);
        setBadIn(0);
        setSTT(1);
        handleReset();
        setIsVisible(false);
        setIsVisibleError(false);
        setIsVisibleBC(false);
        setCheckDevice(false);
        setIsDevice(false);
        setCheckSensor({
            sensor_1: false,
            sensor_2: false,
        });

        setIsVisibleDoc(true);
    }

    const handleReportError = () => {
        setIsVisibleError(true);
    }

    const handleOk = () => {
        setCheckDevice(true);
        setIsVisible(false);
    }

    const handleBaoCao = () => {
        let list = data;
        handleResume();
        const item = {
            stt: STT,
            sp_good: good,
            sp_bad: bad,
            sp_bad_in: badIn,
            time_line: timer
        };
        list.push(item);
        setData([...list]);
        setMaxGood(maxGood + good);
        setGood(0);
        setMaxBad(maxBad + bad);
        setBad(0);
        setMaxBadIn(maxBadIn + parseInt(badIn));
        setSTT(STT + 1);
        setMaxTimer(maxTimer + timer);
        setIsVisibleBC(false);
        startDemSp();
    }

    const handleOkReportError = () => {
        setIsVisibleError(false);
        setCheckDevice(true);
    }

    const handleCancel = () => {
        setIsVisible(false);
    }

    const handleOpenReport = (value, checked) => {
        switch (value) {
            case 'genzai':
                setIsGenZai(checked);
                break;
            case 'device':
                setIsDevice(checked);
                break;
            default:
                break;
        }
    }

    return (
        <div style={{margin: `10px 0px`}}>
            <Row>
                <Col span={16} style={{marginRight: '2px'}}>
                    <Card 
                        headStyle={{backgroundColor: '#e2e2e2'}}
                        title={
                            <p className="card-title">{`Báo cáo công việc`}</p>
                        } 
                    >
                        <Row>
                            <Col span={5} offset={1}>
                                <Card 
                                    type={`inner`}
                                    title={
                                        <p style={{fontSize: 12, textAlign: 'start'}}>Sản phẩm tốt</p>
                                    }
                                >
                                    <p style={{fontSize: 12}}>{good}</p>
                                </Card>
                            </Col>
                            <Col span={5} offset={1}>
                                <Card 
                                    type={`inner`}
                                    title={
                                        <p style={{fontSize: 12}}>Sản phẩm xấu</p>
                                    }
                                >
                                    <p style={{fontSize: 12}}>{bad}</p>
                                </Card>
                            </Col>
                            <Col span={5} offset={1}>
                                <Card 
                                    type={`inner`}
                                    title={
                                        <p style={{fontSize: 12}}>Cần hoàn thành</p>
                                    }
                                >
                                    <p style={{fontSize: 12}}>{2000} sản phẩm</p>
                                </Card>
                            </Col>
                            <Col span={5} offset={1}>
                                <Card 
                                    type={`inner`}
                                    title={
                                        <p style={{fontSize: 12}}>Thời gian</p>
                                    }
                                >
                                    <p style={{fontSize: 12}}>{formatTime(timer)}</p>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{marginTop: 20, marginBottom: 25, textAlign: 'start', marginLeft: 25}}>
                            <Col span={12}>
                                <Card 
                                    type={`inner`} 
                                    title={
                                        <p style={{fontSize: 14}}>Sản phẩm 1 bó</p>
                                    }
                                >
                                    <p style={{fontSize: 13}}>{`${20} (sản phẩm/bó)`}</p>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card 
                                    type={`inner`} 
                                    title={
                                        <p style={{fontSize: 14}}>Thời gian hoàn thành 1 bó</p>
                                    }
                                >
                                    <p style={{fontSize: 13}}>{`${25} (phút/bó)`}</p>
                                </Card>
                            </Col>
                        </Row>
                        <div className="center-div">
                            {/* <Button size={`large`} style={{marginRight: 10}}>Phản hồi</Button> */}
                            {
                                !isActive && !isPaused?
                                    <Button size={`large`} 
                                        style={{marginRight: 10}}
                                        onClick={handleStartWork}
                                    >Thực hiện</Button>
                                :(
                                    isPaused? 
                                    <Button size={`large`} 
                                        style={{marginRight: 10}}
                                        onClick={handleReport}
                                    >Báo cáo</Button> 
                                    :     
                                    ''
                                ) 
                            }
                            <Button 
                                size={`large`} 
                                disabled={!isActive} 
                                onClick={handleFinish}
                            >Kết thúc</Button>
                        </div>
                    </Card>
                    {/* Bảng tiến độ */}
                    <div className="table-td">
                        <Card 
                            headStyle={{backgroundColor: '#e2e2e2'}}
                            title={
                                <p className="card-title">{`Bảng tiến độ`}</p>
                            }
                            extra={
                                <Button 
                                    size={`middle`}
                                    disabled={maxGood === 0}
                                    onClick={() => {setIsVisibleDoc(true)}}
                                >Hoàn thành</Button>
                            }
                        >
                            <Table bordered columns={columns} dataSource={data} />
                        </Card>
                    </div>
                </Col>
                <Col span={7}>
                    {/* List kiểm tra */}
                    <div className="div-check">
                        <Card 
                            headStyle={{backgroundColor: '#e2e2e2'}}
                            title={
                                <p className="card-title">{`Kiểm tra đầu vào`}</p>
                            } 
                            extra={
                                <Button 
                                    size={`middle`}
                                    onClick={handleReportError}
                                >Báo lỗi</Button>
                            }
                        >
                            <div style={{display: 'flex'}}>
                                <p style={{fontSize: 17, float: 'left'}}>{`Thiết bị`}</p>
                                <Button 
                                    size={`middle`} 
                                    style={{marginLeft: 100}} 
                                    onClick={handleCheckDevice}
                                >Kiểm tra</Button>
                            </div>
                        </Card>
                    </div>
                    <hr />
                    {/* Thiết bị đếm */}
                    {
                        checkDevice? 
                        <div className="div-device">
                            <Card 
                                headStyle={{backgroundColor: '#e2e2e2'}}
                                title={
                                    <p className="card-title">{`Bộ đếm sản phẩm`}</p>
                                } 
                            >
                                <div style={{display: 'flex'}}>
                                    <p style={{fontSize: 14, float: 'left'}}>
                                        {`Thiết bị 1`} <small>(Sản phẩm tốt)</small>
                                    </p>
                                    <Radio style={{marginLeft: 100}}  disabled={!checkSensor.sensor_1} checked={checkSensor.sensor_1}></Radio>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <p style={{fontSize: 14, float: 'left'}}>
                                        {`Thiết bị 2`} <small>(Sản phẩm lỗi)</small>
                                    </p>
                                    <Radio style={{marginLeft: 105}}  disabled={!checkSensor.sensor_2} checked={checkSensor.sensor_2}></Radio>
                                </div>
                            </Card>
                        </div>
                        : ''
                    }
                </Col>
            </Row>
            {/* Modal kiểm tra */}
            <Modal 
                visible={isVisible}
                title={`Kiểm tra thiết bị`}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div>
                    <h3>Công cụ phụ trợ</h3>
                    <Row>
                        <Col span={20}>Máy cắt rập</Col>
                        <Col span={4}>{
                            checkPin.one === 0? 
                            <Spin /> 
                            :(
                                checkPin.one === 1? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <CloseCircleTwoTone twoToneColor="#ff3333"/>
                            ) 
                        }</Col>
                        <Col span={20}>Kéo cắt</Col>
                        <Col span={4}>{
                            checkPin.two === 0? 
                            <Spin /> 
                            :(
                                checkPin.two === 1? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <CloseCircleTwoTone twoToneColor="#ff3333"/>
                            ) 
                        }</Col>
                    </Row>
                </div>
                <div style={{marginTop: 20, marginBottom: 20}}>
                    <h3>Thiết bị đếm</h3>
                    <Row>
                        <Col span={20}>Thiết bị số 1</Col>
                        <Col span={4}>{
                            sensor.one === 0? 
                            <Spin /> 
                            :(
                                sensor.one === 1? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <CloseCircleTwoTone twoToneColor="#ff3333"/>
                            ) 
                        }</Col>
                        <Col span={20}>Thiết bị số 2</Col>
                        <Col span={4}>{
                            sensor.two === 0? 
                            <Spin /> 
                            :(
                                sensor.two === 1? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <CloseCircleTwoTone twoToneColor="#ff3333"/>
                            ) 
                        }</Col>
                    </Row>
                </div>
            </Modal>
            {/* Modal báo lỗi */}
            <Modal
                title={`Báo lỗi`}
                visible={isVisibleError}
                onOk={handleOkReportError}
                onCancel={()=>{setIsVisibleError(false)}}
                footer={[
                    <Button key="back" onClick={()=> {setIsVisibleBC(false);}}>Huỷ</Button>,
                    <Button key="submit" type="primary" onClick={handleBaoCao}>Báo cáo</Button>
                ]}
            >
                <Form layout="vertical">
                    <Form.Item label="Hình thức lỗi" name="checkbox-group">
                        <Checkbox.Group
                            style={{width: '100%'}}
                        >
                            <Row>
                                <Col span={6}>
                                    <Checkbox
                                        value={1}
                                        onChange={(event)=>{handleOpenReport('device', event.target.checked)}}
                                        style={{lineHeight: `32px`}}
                                    >
                                        Thiết bị
                                    </Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox
                                        value={2}
                                        onChange={(event)=>{handleOpenReport('genzai', event.target.checked)}}
                                        style={{lineHeight: `32px`}}
                                    >
                                        Nguyên liệu
                                    </Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                    {!isGenZai? '':
                        <Form.Item
                            name="genzai"
                            label={`Nguyên liệu`}
                            style={{width: '80%'}}
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
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {genzai_data.map(item=> <Option value={item.id} key={item.id}>{item.name}</Option>)}
                            </Select>
                        </Form.Item>
                    }
                    {
                        !isDevice? '' :
                        <Form.Item
                            name="device"
                            label={`Thiết bị`}
                            style={{width: '80%'}}
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
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {device_data.map(item=> <Option value={item.id} key={item.id}>{item.name}</Option>)}
                            </Select>
                        </Form.Item>
                    }
                </Form>
            </Modal>
            {/* Modal báo cáo */}
            <Modal
                title="Báo cáo"
                onOk={handleBaoCao}
                visible={isVisibleBC}
                onCancel={()=>{
                    setIsVisibleBC(false);
                }}
                footer={[
                    <Button key="back" onClick={()=> {setIsVisibleBC(false);}}>Huỷ</Button>,
                    <Button key="submit" type="primary" onClick={handleBaoCao}>Báo cáo</Button>
                ]}
            >
                <Form layout="vertical">
                    <Form.Item
                        label="Sản phẩm 1 bó"
                        name="bo"
                    >
                        <Input defaultValue="20" disabled={true} />
                    </Form.Item>
                    <Form.Item
                        label="Sản phẩm tốt"
                        name="sp_good"
                    >
                        <Input 
                            defaultValue={`${good}`} 
                            onChange={(event)=> {setGood(event.target.value);}}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Sản phẩm lỗi"
                        name="sp_bad"
                    >
                        <Input 
                            defaultValue={`${bad}`} 
                            onChange={(event)=> {setBad(event.target.value);}}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Sản phẩm lỗi đầu vào"
                        name="bad_in"
                    >
                        <Input onChange={(event)=> {setBadIn(event.target.value)}} />
                    </Form.Item>
                </Form>
            </Modal>
            <Modal 
                title="Tổng hợp báo cáo"
                visible={isVisibleDoc}
                onOk={()=>{setIsVisibleDoc(false)}} 
                onCancel={()=>{setIsVisibleDoc(false)}}
                width={900}
                footer={[
                    <Button key="back" onClick={()=>{
                        setIsVisibleDoc(false);
                    }}>Huỷ</Button>,
                    <Button key="submit" type="primary" 
                        onClick={()=>{
                            setData([]);
                            setMaxGood(0);
                            setMaxBadIn(0);
                            setMaxBad(0);
                            setMaxTimer(0);
                            setIsVisibleDoc(false);
                        }} 
                    >Báo cáo</Button>
                ]}
            >
                <Row>
                    <Col span={12} offset={6}>
                        <Title level={4} style={{marginLeft: 100}}>Báo cáo kết thúc công việc</Title>
                    </Col>
                    <Col span={16} offset={4} style={{marginBottom: '10px'}}>
                        <Title level={5}># CHI TIẾT CÔNG VIỆC</Title>
                        <Row>
                            <Col span={8}>Mã hàng</Col>
                            <Col span={16}>241</Col>
                            <Col span={8}>Tên công việc</Col>
                            <Col span={16}>{`Xẻ miệng túi bấm góc`}</Col>
                            <Col span={8}>Thời gian 1(sp/giây)</Col>
                            <Col span={16}>{`20 giây`}</Col>
                            <Col span={8}>Thời gian 1(bó/phút)</Col>
                            <Col span={16}>{`25 phút`}</Col>
                            <Col span={8}>Số sản phẩm yêu cầu</Col>
                            <Col span={16}>{`2000 sản phẩm`}</Col>
                            <Col span={8}>Số sản phẩm 1 bó</Col>
                            <Col span={16}>{`20 sản phẩm`}</Col>
                            <Col span={8}>Công cụ phụ trợ</Col>
                            <Col span={16}>{`Máy cắt rập, Kéo cắt`}</Col>
                            <Col span={8}>Nguyên liệu</Col>
                            <Col span={16}>{`Dây kéo, Vải lót`}</Col>
                        </Row>
                    </Col>
                    <Col span={16} offset={4}>
                        <Title level={5}># CHI TIẾT THỰC HIỆN (Tổng)</Title>
                        <Row>
                            <Col span={8}>Số bó hoàn thành</Col>
                            <Col span={16}>{dataBC.length} bó</Col>
                            <Col span={8}>Số sản phẩm tốt</Col>
                            <Col span={16}>{maxGood} sản phẩm</Col>
                            <Col span={8}>Số sản phẩm lỗi</Col>
                            <Col span={16}>{maxBad} sản phẩm</Col>
                            <Col span={8}>Số sản phẩm lỗi đầu vào</Col>
                            <Col span={16}>{maxBadIn} sản phẩm</Col>
                            <Col span={8}>Thời gian hoàn thành</Col>
                            <Col span={16}>{(maxTimer/60)} Phút</Col>
                            <Col span={8}>Độ hoàn thành</Col>
                            <Col span={16}>{((maxGood+maxBad)/2000)} %</Col>
                        </Row>
                    </Col>
                </Row>
            </Modal>
        </div>
    );
}

export default Process;
