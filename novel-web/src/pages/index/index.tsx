// import Taro from '@tarojs/taro'
import React, { useState } from 'react'
import { View, Image, Text } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import './index.scss'
import BookJsp from '../../assets/img/book.jpg'

const arr = [1,2,3,4,5,6,7,8,9,10]
const Index = () => {
  const [value, setValue] = useState<string>('')

  return (
    <View className='index'>
      <AtSearchBar
        value={value}
        onChange={(val) => {
          setValue(val)
        }}
      />
      <View style='display:flex;flex-wrap: wrap;justify-content:space-around;'>
        {
          arr.map(item => {
            return (
              <Image
                key={item}
                style='width: 150px;height: 100px;background: #fff;margin-top:10px;'
                src={BookJsp}
              />
            )
          })
        }
        { arr.length % 2 !== 0 ? <Text style='width: 150px;'></Text> : null }
      </View>
    </View>
  )
}

export default Index

