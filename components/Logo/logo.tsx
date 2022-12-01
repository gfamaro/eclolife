/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Image, View } from 'react-native'

interface logoProps {
  width: number
}

const Logo = ({ width }: logoProps) => (
  <Image
    source={{
      uri: 'https://firebasestorage.googleapis.com/v0/b/teste-30757.appspot.com/o/%C3%ADndice.jpeg?alt=media&token=4a40933b-be83-46b9-873f-c2ae040fe859'
    }}
    style={{
      borderRadius: 5,
      width: width,
      height: width / 3,
    }}
  />
)

export default Logo