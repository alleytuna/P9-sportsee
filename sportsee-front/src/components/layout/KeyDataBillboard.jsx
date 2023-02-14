import React from "react"
import PropTypes from 'prop-types';
import "../../styles/home.css";

/**
 * @function KeyDataBillboard - displays lateral user's info on calories, proteins, carbohydrates and lipids personal amount
 * @param {string} name - French name of each nutrient
 * @param {number} number - personal amount of each nutrient
 * @returns {JSX}
 */
export default function KeyDataBillboard({ number, name }) {
    return (
        <article className="singleData">
            <img src={require(`../../assets/icons/${name}.svg`)} alt="" />
            <div className="dataText">
                <p className="dataNumber">{number}{name === 'Calories' ? 'kcal' : 'g'} </p>
                <p className="dataName">{name}</p>
            </div>
        </article>
    )
}

KeyDataBillboard.propTypes = {
    number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}
