import React from "react";
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

import "../../styles/home.css";

/**
 * @function Score - generate the radial chart that displays the user's global aim score
 * @param {number} userScore - object containing all datas displayed in this chart
 * @returns 
 */
export default function Score({ userScore }) {
    const data = [
        { value: userScore, fill: 'red' },
    ];

    return (
        <article className="scoreChart">
            {/* <p className="scoreTitle">Score</p> */}
            <RadialBarChart width={150} height={150} data={data}
                innerRadius={100}
                outerRadius={50}
                barSize={10}
                startAngle={80}
                endAngle={440}>
                <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    tick={false}
                    fill="#00000"
                />
                <RadialBar
                    cornerRadius={15}
                    background={{ fill: '#FBFBFB' }}
                    dataKey="value"
                />
            </RadialBarChart>
            <div className="scoreMessage">
                <p className="scoreNumber">{userScore}%</p>
                de votre objectif
            </div>
        </article>
    );
};

Score.propTypes = {
    userScore: PropTypes.number.isRequired,
}
