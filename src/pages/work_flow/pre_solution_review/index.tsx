import React, { useState, useEffect } from "react";
import {
    Form,
    Button,
    Uploader,
    Input,
    TextArea
} from '@nutui/nutui-react-taro';
import { Dongdong, Loading1, Right, RectUp } from '@nutui/icons-react-taro';
import { FileItemStatus } from "@nutui/nutui-react-taro/dist/types/packages/uploader/uploader.taro";
import Taro from '@tarojs/taro'
import { Picker, Cell } from '@nutui/nutui-react-taro';
import { Row, Col } from '@nutui/nutui-react-taro';
// import Upload from 'static/images/upload_icon.png';
import { IconFont } from '@nutui/icons-react-taro'
import "./index.scss";
import { url } from "inspector";

type FileType<T> = { [key: string]: T }
class FileItem {
    status: FileItemStatus = 'ready'
    message = '准备中..'
    uid: string = new Date().getTime().toString()
    name?: string
    url?: string
    path?: string
    type?: string
    percentage: string | number = 0
    formData: FormData = new FormData()
}
const App = () => {
    const [isWeChat, setIsWeChat] = useState(false);
    const [visible, setIsVisible] = useState(false)
    const [tileDesc, settileDesc] = useState('')
    const [fee, setFee] = useState('')
    const [baseDesc, setBaseDesc] = useState('')


    useEffect(() => {
        setIsWeChat(/MicroMessenger/i.test(navigator.userAgent));
    }, []);

    const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
    var defaultFileList: FileType<React.ReactNode>[] = [
        {
            name: '报审表.pdf',
            url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
            status: 'success',
            message: '上传成功',
            type: 'file',
            uid: '123',
        },
        {
            name: '审批表.pdf',
            url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
            status: 'success',
            message: '上传成功',
            type: 'file',
            uid: '124',
        }
    ]
    const onDelete = (file: FileItem, fileList: FileType<React.ReactNode>[]) => {
        // console.log(translated.ca3903f3, file, fileList)
    }
    const [progressPercent, setProgressPercent] = useState(0)
    const onProgress = ({ event, options, percentage }: any) => {
        setProgressPercent(percentage)
    }
    const choseMsgFile = () => {
        // if (isWeChat) {
            Taro.chooseMessageFile({
                count: 10,
                type: 'file',
                success: function (res) {
                    // tempFilePath can be used as the src property of the img tag to display images.
                    const tempFilePaths = res.tempFilePaths
                }
            })
        // } else {
        //     Taro.chooseImage({
        //         success(res) {
        //             const tempFilePaths = res.tempFilePaths
        //             console.log(res)
        //             if (res != null && res.tempFiles != null && res.tempFiles.length > 0) {
        //                 defaultFileList.push({ 'name': res.tempFiles[0].originalFileObj.name })
        //             }
        //             //   Taro.uploadFile({
        //             //     url: uploadUrl, //仅为示例，非真实的接口地址
        //             //     filePath: tempFilePaths[0],
        //             //     name: 'file',
        //             //     formData: {
        //             //       'user': 'test'
        //             //     },
        //             //     success (res){
        //             //       const data = res.data
        //             //       //do something
        //             //     }
        //             //   })
        //         }
        //     })

        // }
    }
    const pickerOptions = [
        { value: 1, text: '深基坑工程', },
        { value: 2, text: '模板工程及支系', },
        { value: 3, text: '起重吊装及安装拆卸工程', },
        { value: 4, text: '脚手架工程', },
        { value: 5, text: '拆除、爆破工程', },
        { value: 8, text: '建筑幕墙安装工程', },
        { value: 9, text: '钢结构、网架和索膜结构安装工程', },
        { value: 10, text: '地下暗挖、顶管、盾构、水下作业工程', },
        { value: 12, text: '其它' },
    ]
    const changePicker = (list: any[], option: any, columnIndex: number) => {
        console.log(columnIndex, option)
    }

    const confirmPicker = (options: PickerOption[], values: (string | number)[]) => {
        console.log('confirmPicker')
        let description = ''
        options.forEach((option: any) => {
            description += option.text
        })
        setBaseDesc(description)
    }
    const submitForm = () => {
        console.log(111)
        Taro.request({
            url: 'http://130.61.144.130:8080/api/projectManagement/createProjectManagement',
            method: 'POST',
            data: {
                username: 'linrufeng',
                password: '123456'
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                console.log(res.data)
            }
        })
    }
    return (
        <>
            <Form
                        initialValues={{ username: 'LiSi', age: 20 }}

                labelPosition="right"
                footer={
                    <>
                        <Button formType="submit" block type="primary" onClick={submitForm}>
                            提交
                        </Button>
                    </>
                }
            >
                <Form.Item
                    required
                    label="项目名称"
                    name="username"
                >
                    <Input
                        className="nut-input-text"
                        placeholder="请输入项目名称"
                        type="text"
                    />
                </Form.Item>
                <Form.Item
                    required
                    label="项目类型"
                    name="picker"
                    trigger="onConfirm"
                    getValueFromEvent={(...args) => args[1]}
                    onClick={(event, ref: any) => { ref.open() }}
                >
                    <Picker options={[pickerOptions]}
                    // onChange={changePicker}
                    // onConfirm={(list, values) => confirmPicker(list, values)}
                    >
                        {(value: any) => {
                            return (
                                <Cell
                                    style={{
                                        padding: 0,
                                        '--nutui-cell-divider-border-bottom': '0',
                                    }}
                                    className="nutui-cell--clickable"
                                    title={
                                        value.length
                                            ? pickerOptions.filter((po) => po.value === value[0])[0]
                                                ?.text : '请选择类型'
                                    }
                                    extra={<Right />}
                                    align="center"
                                />
                            )
                        }}
                    </Picker>
                </Form.Item>
                <Form.Item
                    required
                    label="费    用"
                    name="num"
                    getValueFromEvent={(...args) => args[0]}
                >
                    <Input placeholder="费用" value={fee} defaultValue="10000.00" />
                </Form.Item>
                <Form.Item
                    required
                    label="报审表"
                    name="files"
                >
                    <Row>
                        <Col span={4}>
                            <Uploader
                                previewType="list"
                                url={uploadUrl} />

                        </Col>
                        <Col span={20}> <Button block icon={<RectUp />} fill="none"
                            iconSize={20} type="default" size="small" onClick={choseMsgFile}>
                            上传
                        </Button>
                            {/* <IconFont size="40"  name={<RectUp/>}/> */}
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item
                    required
                    label="审批表"
                    name="files"
                >
                    <Row>
                        <Col span={4}>
                            <Uploader
                                previewType="list"
                                url={uploadUrl} />
                        </Col>
                        <Col span={20}> <Button block icon={<RectUp />} fill="none"
                            iconSize={20} type="default" size="small" onClick={choseMsgFile}>
                            上传
                        </Button></Col>
                    </Row>
                </Form.Item>
                <Form.Item>
                    <Uploader
                        url={uploadUrl}
                        defaultValue={defaultFileList}
                        maxCount="10"
                        multiple
                        previewType="list"
                    >
                    </Uploader>
                </Form.Item>
                <div className="myDiv">开票信息

                </div>
                <Form.Item
                    required
                    label="纳税号码"
                    name="files"
                >
                    <Input placeholder="请输入纳税号码" />
                </Form.Item>
                <Form.Item
                    required
                    label="单位名称"
                    name="files"
                >
                    <Input placeholder="请输入单位名称" />
                </Form.Item>
                <Form.Item
                    label="开票备注"
                    name="files"
                >
                    <Input placeholder="请输入开票备注" />
                </Form.Item>
            </Form>
        </>
    )
}
export default App;
