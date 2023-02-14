import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import "../../styles/home.css"

/**
 * customize tooltip style and content for session chart
 * @function TooltipStyle
 * @param {array} payload - data displayed on hover
 * @param {boolean} active - true when hover on the line
 */
function TooltipStyle({ payload, active }) {
    if (active && payload) {
        return (
            <div className="tooltipStyleSessions">
                <p> {`${payload[0].value} min`}</p>
            </div>
        )
    }
}

/**
 * 
 * @function SessionAverageDuration - generates the session line chart
 * @param {Object} userAverageSessions - object containing all datas displayed in this chart
 * @returns {JSX}
 */
export default function SessionsAverageDuration({ userAverageSessions }) {
    return (
        <article className='sessionsAverageDuration'>
            <h3 className='sessionsDurationTitle'>Durée moyenne des sessions</h3>
            <LineChart
                width={150}
                height={110}
                data={userAverageSessions.sessions}
                margin={{ top: -80, bottom: 8 }}
            >
                <XAxis dataKey="day" stroke='white' tickLine={false} axisLine={false} opacity={0.6} padding={{ left: 20, right: 20 }} />
                <YAxis hide padding={{ top: 100 }} />
                <Tooltip content={< TooltipStyle />} />
                <Line type="basis" dot={false} dataKey="sessionLength" stroke='white' strokeWidth={2} />
            </LineChart>
        </article>
    )
}

SessionsAverageDuration.propTypes = {
    userAverageSessions: PropTypes.object.isRequired,
}
