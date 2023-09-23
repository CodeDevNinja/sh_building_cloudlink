import React, { useState, useEffect } from "react";
import {
    Form,
    Button,
    Uploader,
    Input,
    TextArea
} from '@nutui/nutui-react-taro';
import { Dongdong, Loading1 } from '@nutui/icons-react-taro';
import { FileItemStatus } from "@nutui/nutui-react-taro/dist/types/packages/uploader/uploader.taro";
import Taro from '@tarojs/taro'


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
    const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'

    const defaultFileList: FileType<React.ReactNode>[] = [
        {
            name: '电子合同',
            url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
            status: 'success',
            message: '上传成功',
            type: 'image',
            uid: '123',
        },
        {
            name: '报审表',
            url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
            status: 'success',
            message: '上传成功',
            type: 'image',
            uid: '123',
        },
        {
            name: '审批表',
            url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
            status: 'success',
            message: '上传失败',
            type: 'image',
            uid: '124',
            errorIcon: 'star',
        },
        {
            name: '情况表',
            url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
            status: 'success',
            message: '上传中',
            type: 'image',
            uid: '125',
        },
        {
            name: '签到表',
            url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
            status: 'success',
            message: '上传中',
            type: 'image',
            uid: '126',
            loadingIcon: <Loading1 className="nut-icon-loading1" color="#fff" />,
        },
        {
            name: '其他',
            url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
            status: 'uploading',
            message: '上传中',
            type: 'image',
            uid: '127',
            loadingIcon: ' ',
        },
    ]
    const onDelete = (file: FileItem, fileList: FileType<React.ReactNode>[]) => {
        // console.log(translated.ca3903f3, file, fileList)
    }
    const [progressPercent, setProgressPercent] = useState(0)
    const onProgress = ({ event, options, percentage }: any) => {
        setProgressPercent(percentage)
    }
    const choseMsgFile = () => {
        Taro.chooseMessageFile({
            count: 10,
            type: 'file',
            success: function (res) {
                // tempFilePath can be used as the src property of the img tag to display images.
                const tempFilePaths = res.tempFilePaths
            }
        })
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
    const submitFailed = (error: any) => {
        Taro.showToast({ title: JSON.stringify(error), icon: 'error' })
      }
    
      const submitSucceed = (values: any) => {
        Taro.showToast({ title: JSON.stringify(values), icon: 'success' })
      }
    return (
        <>
            <Form
            initialValues={{ username: 'LiSi', age: 20 }}
            onFinish={(values) => submitSucceed(values)}
             onFinishFailed={(values, errors) => submitFailed(errors)}
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
                    label="论证方案名"
                    name="username"
                >
                    <Input
                        className="nut-input-text"
                        placeholder="请输入论证方案名"
                        type="text"
                    />
                </Form.Item>
                <Form.Item
                    required
                    label="项 目  描 述" name="address">
                    <TextArea style={{ height: '120px' }}
                        placeholder="请输入项目描述" rows={3} autoSize={true} showCount maxLength={500} />
                </Form.Item>
                <Form.Item
                    required
                    label="    费    用     "
                    name="num"
                    getValueFromEvent={(...args) => args[0]}
                >
                    <Input placeholder="请输入费用" />
                </Form.Item>
                {/* <Form.Item> */}
                <Uploader
                    url={uploadUrl}
                    defaultValue={defaultFileList}
                    maxCount="10"
                    multiple
                    previewType="list"
                >

                </Uploader>
                <Button type="success" size="small" onClick={choseMsgFile}>
                    上传文件
                </Button>
                {/* </Form.Item> */}
            </Form>
        </>
    )
}
export default App;
