import React from 'react';
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import "../../styles/home.css";

/**
 * @function getKindFrenchName - replace the elements of the array 'kind' with French words
 * @param {array} kind - contains each category displayed in the radar chart
 * @returns
 */
const getKindFrenchName = kind => {
    const FrenchKindName = [
        'Cardio',
        'Energie',
        'Endurance',
        'Force',
        'Vitesse',
        'Intensité',
    ];
    return FrenchKindName[kind - 1];
}

/**
 * 
 * @function Performance - generates the radar chart displaying global user's performance
 * @param {Object} userPerformance - object containing all datas displayed in this chart
 * @returns {JSX}
 */
export default function Performance({ userPerformance }) {
    return (
        <article className='performanceRadar'>
            <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="60%"
                width={150}
                height={150}
                data={userPerformance.data}
            >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dataKey="kind" tickFormatter={getKindFrenchName} stroke="white" fontSize={6.5} tickLine={false} />
                <Radar
                    dataKey="value"
                    fill="#FF0101B2"
                    fillOpacity={0.7}
                />
            </RadarChart>
        </article>
    )
}

Performance.propTypes = {
    userPerformance: PropTypes.object.isRequired,
}
