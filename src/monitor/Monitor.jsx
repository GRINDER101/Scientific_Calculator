import React from 'react'
import './monitor.css'

const Monitor = ({ sign, clearmonitor, sum, expandedList, mode }) => {
    return (
        <div className="monitor">
            {expandedList ? <div>
                <h4 className='mode'>{mode}</h4>
                {clearmonitor ?
                    <div className='expression_and_result'>
                        <h2>{sign}</h2>
                        <h4>{sum}</h4>
                    </div> : <h2 className='intro'>Calculator</h2>}
            </div> : clearmonitor ?
                <div className='expression_and_result'>
                    <h2>{sign}</h2>
                    <h4>{sum}</h4>
                </div> : <h2 className='intro'>Calculator</h2>}

        </div>
    )
}

export default Monitor