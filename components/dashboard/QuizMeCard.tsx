import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { GiElectricalCrescent } from "react-icons/gi";
type Props = {}

const QuizMeCard = (props: Props) => {
  return (
    <Card className='hover:cursor-pointer hover:opactiy-75'>
        <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
        <CardTitle className='text-2xl font-bold'>
           Quiz me
        </CardTitle>

        <GiElectricalCrescent />    
        
        </CardHeader>
        <CardContent>
          <p className="text-sm text muted foreground"></p>
        </CardContent>
    </Card>
  )
}

export default QuizMeCard