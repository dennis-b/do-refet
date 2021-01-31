import React, { useMemo } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';
import { numberFormat } from "@utils/appUtils";
import { GraphTimeLineDataIfc } from "@shared/models";

interface Props {
    data: GraphTimeLineDataIfc[]
    investedData?: GraphTimeLineDataIfc[]
    legend?: string
    width?: number
    height?: number
    max?: number
}

export const ValueTimeLineGraph = (
    {
        data = [],
        investedData = [],
        legend,
        height = 300,
        width = 800,
        max
    }: Props) => {


    const chartData = useMemo(() => {

        if (!data) {
            return []
        }

        if (!investedData) {
            return data
        }
        return data.map(({ date, value }, index) => ({
            date,
            value,
            iValue: investedData[index]?.value
        }));

    }, [investedData, data])


    return (
        <LineChart
            width={width}
            height={height}
            data={chartData}
            margin={{ top: 5, right: 5, left: 50, bottom: 5, }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis
                tickFormatter={tick => numberFormat.format(tick)}
            />
            <Tooltip
                formatter={(value: number) => numberFormat.format(value)}
            />
            <Legend
                verticalAlign="top"
                height={36}
            />
            {max && <ReferenceLine y={max} stroke="red" />}
            <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                activeDot={{ r: 1 }}
                name='val'
            />
            <Line
                type="monotone"
                dataKey="iValue"
                stroke="#82ca9d"
                activeDot={{ r: 1 }}
                name='invest val'
            />
        </LineChart>

    )
};
