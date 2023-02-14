import React from "react";
import PropTypes from 'prop-types';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import "../../styles/home.css"

/**
 * customize tooltip style and content for activity chart
 * @function TooltipStyle
 * @param {array} payload - data displayed on hover
 * @param {boolean} active - true when hover on one BarChart
 */
function TooltipStyle({ payload, active }) {
    if (active && payload) {
        return (
            <div className="tooltipStyleActivity">
                <p> {`${payload[0].value}kg`}</p>
                <p> {`${payload[1].value}kCal`}</p>
            </div>
        )
    }
}

/**
 * 
 * @function DailyActivity - generates the activity chart
 * @param {Object} userActivity - object containing all datas displayed in this chart
 * @returns {JSX}
 */
export default function DailyActivity({ userActivity }) {
    const formatDay = day => {
        const dayNumber = new Date(day);
        return dayNumber.getDate();
    }
    return (
        <article className="dailyActivityChart">
            <div>
                <h3 className="activityTitle">Activité quotidienne</h3>
            </div>
            <BarChart data={userActivity.sessions} width={575} height={300} margin={{
                top: 48,
                right: 16,
            }}>
                <CartesianGrid strokeDasharray='3 3' vertical={false} />
                <XAxis tickLine={false} axisLine={false} dataKey="day" tickFormatter={formatDay} />
                <YAxis tickLine={false} axisLine={false} orientation='right' />
                <Tooltip content={< TooltipStyle />} />
                <Bar dataKey="kilogram" barSize={10} radius={[10, 10, 0, 0]} name="Poids (kg)" fill="#282D30" />
                <Bar dataKey="calories" barSize={10} radius={[10, 10, 0, 0]} name="Calories brûlées (kCal)" fill="red" />
                <Legend verticalAlign='top' align='right' iconType='circle' wrapperStyle={{ marginTop: '-23px', fontSize: '14px' }} />
            </BarChart>
        </article>
    )
}

DailyActivity.propTypes = {
    userActivity: PropTypes.object.isRequired,
}
