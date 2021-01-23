import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

export const DashboardIrrGraph = ({ data }: any) => {
    return (
        <LineChart
            width={800}
            height={300}
            data={data}
            margin={{
                top: 5, right: 5, left: 5, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                activeDot={{ r: 1 }}
                name='Refet Value Over Time'
            />
        </LineChart>

    )
};
