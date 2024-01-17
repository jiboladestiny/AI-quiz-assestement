'use client'
import { useTheme } from 'next-themes';
import React from 'react'
import WordCloud from 'react-d3-cloud';
type Props = {}

const data = [
  { text: 'Hey', value: 3 },
  { text: 'Hi', value: 5 },
  { text: 'Computer', value: 10 },
  { text: 'Next.js', value: 8 },
  { text: 'Live', value: 7 },

]


const fontSizeMapper = (word: { value: number }) => {
  return Math.log2(word.value) * 5 + 10
}


const CustomWordCloud = (props: Props) => {
  const theme = useTheme();
  return (
    <WordCloud
      data={data}
      height={550}
      font='Times'
      fontSize={fontSizeMapper}
      rotate={0}
      padding={10}
      fill={theme.theme !== 'dark' ? 'black' : 'white'}
    />
  )
}

export default CustomWordCloud