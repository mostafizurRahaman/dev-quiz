import React from "react";
import { useLoaderData } from "react-router-dom";
import {
   Area,
   Bar,
   CartesianGrid,
   ComposedChart,
   Legend,
   Line,
   ResponsiveContainer,
   Tooltip,
   XAxis,
   YAxis,
} from "recharts";
import "./Statistic.css";
const Statistic = () => {
   const topics = useLoaderData();
   console.log(topics);
   return (
      <div className="statustic-container">
         <ResponsiveContainer width="90%" height={250}>
            <ComposedChart data={topics}>
               <XAxis dataKey="name"></XAxis>
               <YAxis dataKey="total"></YAxis>
               <Tooltip></Tooltip>
               <Legend></Legend>
               <CartesianGrid stroke="#f00" />
               <Area type="monotone" fill="skyblue" dataKey="total"></Area>
               <Bar dataKey="total" fill="blue" barSize={30}></Bar>
               <Line
                  type="monotone"
                  fill="orange"
                  dataKey="total"
                  stroke="green"
               ></Line>
            </ComposedChart>
         </ResponsiveContainer>
      </div>
   );
};

export default Statistic;
