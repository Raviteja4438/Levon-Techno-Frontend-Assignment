import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../../styles/widgets/BarChartWidget.css';

const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const BarChartWidget = () => {
    return (
        <div className="bar-chart-widget">
            <h3>Bar Chart</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartWidget;