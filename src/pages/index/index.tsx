import React from 'react'
import { Grid, Toast } from '@nutui/nutui-react-taro'
import { Dongdong } from '@nutui/icons-react-taro'
// import business_logo from '../../../static/images/business_sub.png'
import { Order, People, Date } from '@nutui/icons-react-taro';
import Taro from '@tarojs/taro'
import { useState, useEffect } from "react";



const App = () => {
  const [state, SetState] = useState({
    msg: 'toast',
    type: 'text',
    cover: false,
    duration: 2,
    closeOnOverlayClick: false,
    icon: '',
    center: true,
  })
  const [showToast, SetShowToast] = useState(false)

  const openToast = (
    type: string,
    msg: string,
    duration?: number,
    icon?: string
  ) => {
    const changeState = Object.assign(state, {
      msg,
      type,
      duration,
      icon,
    })
    SetState(changeState)
  }

  const handleClick = (item) => () => {
    if (item == 'business_sub') {
      Taro.navigateTo({
        url:
          '/pages/work_flow/business_acceptance/index'
      })
    }
    else if (item=='pre_review'){
      Taro.navigateTo({
        url:
          '/pages/work_flow/pre_solution_review/index'
      })
      
    }
    else if (item=='solution_acceptance'){
      Taro.navigateTo({
        url:
          '/pages/work_flow/solution_acceptance/index'
      })
      
    }
    else {
      openToast('text', '功能暂未开放', 2000)
      SetShowToast(true)
    }

    console.log('Button clicked');
    // Your code here
  };

  return (
    <Grid columns={3} square>
      <Toast msg={state.msg} visible={showToast} type={state.type} onClose={() => {
        SetShowToast(false)
      }} cover={state.cover} />
      <Grid.Item text="业务受理" onClick={handleClick('business_sub')}><Order /> </Grid.Item>
      <Grid.Item text="方案预审" onClick={handleClick('pre_review')} ><People /></Grid.Item>
      <Grid.Item text="方案受理" onClick={handleClick('solution_acceptance')}><Date /></Grid.Item>
      <Grid.Item text="论证过程" onClick={handleClick('')}><Date /></Grid.Item>
      <Grid.Item text="费用审核" onClick={handleClick('')}><Date /></Grid.Item>
      <Grid.Item text="危险申报" onClick={handleClick('')}><Date /></Grid.Item>
      <Grid.Item text="方案归档" onClick={handleClick('')}><Date /></Grid.Item>
    </Grid>
  )
}
export default App