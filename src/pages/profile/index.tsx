import React , { useState } from "react";
import { Button, Image, Toast } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
// import wechatApi from "../api/wechat";
// import WXBizDataCrypt from "../../util/WXBizDataCrypt";

function WechatLoginComponent() {
  const [fail, failState] = useState(false);
  const [failText, failTextState] = useState("错误提示");
  const [dialogType, dialogTypeState] = useState("fali");
  const [phone, phoneState] = useState("");
  const [userInfo, userInfoState] = useState({});
  const style = {
    width: "100%",
    height: "100%",
  };
  const getUserProfile = () => {
    Taro.getUserProfile({
      desc: '用户登录', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        userInfoState(res.userInfo);
      }
    });
  };
  const getPhonenNmber = (e) => {
    const iv = e.detail.iv;
    const encryptedData = e.detail.encryptedData;
    // 登录
    Taro.login({
      success: function (res) {
        if (res.code) {
          console.log(res.code)
        //   // 获取用户唯一id
        //   wechatApi.jscode2session(res.code).then((r) => {
        //     if (r.statusCode == 200) {
        //       // 获取用户openid和session_key
        //       const { openid, session_key } = r.data;
        //       // 获取手机号
        //       const pc = new WXBizDataCrypt("wx339df4bd91fecc8d", session_key);
        //       const data = pc.decryptData(encryptedData , iv);
        //       const phoneNumber = data.phoneNumber;
        //       Taro.setStorage({
        //         key: "phoneNumber",
        //         data: phoneNumber
        //       })
        //       phoneState(phoneNumber);
        //       // 储存用户唯一openid到后端

        //       // 提示登录成功
        //       errorDialog("登录成功", "success");
        //     }
        //   });
        } else {
          errorDialog('登录失败！' + res.errMsg, "fail");
        }
      }
    });
  };
  const errorDialog = (text, type) => {
    failState(true);
    failTextState(text);
    dialogTypeState(type);
    setTimeout(() => {
      failState(false);
    }, 1000);
  }
  return (
    <>
      <Toast open={fail} type={dialogType}>{failText}</Toast>
      <Image style={{ width: "100px", height: "100px" }} src={userInfo.avatarUrl} />
      <p>昵称：{userInfo.nickName}</p>
      <p>手机号：{phone}</p>
      <Button color='primary' shape='round' style={style} open-type='getPhoneNumber' onGetPhoneNumber={getPhonenNmber}>
        一键登录
      </Button>
      <Button color='primary' shape='round' style={style} onClick={getUserProfile}>
        一键获取信息
      </Button>
    </>
  );
}

export default WechatLoginComponent;