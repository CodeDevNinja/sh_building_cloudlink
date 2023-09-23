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
            name: '项目情况表.pdf',
            url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
            status: 'success',
            message: '上传成功',
            type: 'file',
            uid: '123',
        },
        {
            name: '电子合同.pdf',
            url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
            status: 'success',
            message: '上传成功',
            type: 'file',
            uid: '124',
        },
        {
            name: '签到表.pdf',
            url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
            status: 'success',
            message: '上传成功',
            type: 'file',
            uid: '125',
        },
        {
            name: '专家组意见表.pdf',
            url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
            status: 'success',
            message: '上传成功',
            type: 'file',
            uid: '126',
        }
    ]
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
   
    return (
        <>
            <Form
                labelPosition="right"
                footer={
                    <>
                        <Button formType="submit" block type="primary">
                            提交
                        </Button>
                    </>
                }
            >
              
                <Form.Item
                    required
                    label="项目情况表"
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
                    label="合同"
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
                <Form.Item
                    required
                    label="签到表"
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
                <Form.Item
                    required
                    label="专家意见表"
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
            </Form>
        </>
    )
}
export default App;
