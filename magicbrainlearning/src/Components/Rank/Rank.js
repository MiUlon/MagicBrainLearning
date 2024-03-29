import React from 'react';
import './Rank.css';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='f3 white'>
                {`${name}, your current entry count is:`}
            </div>
            <div className='f1 white removingEmptySpace'>
                {entries}
            </div>
        </div>
    )
}

export default Rank;