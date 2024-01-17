import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

type Props = {}

const RecentActivities = (props: Props) => {
    return (
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle className='text-2xl font-bold'>
                    Recent Activities
                </CardTitle>
                <CardDescription>
                    You have played a total of 7 games
                </CardDescription>
            </CardHeader>
            <CardContent className='pl-6'>
                Histories
            </CardContent>
        </Card>
    )
}

export default RecentActivities