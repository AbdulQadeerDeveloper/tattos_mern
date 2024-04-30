// PlacementFilter.js
import React from 'react';

const PlacementFilter = ({ uniquePlacements, selectedPlacement, onSelectPlacement }) => (
    <div className='mt-1' style={{ display: "flex", gap: "20px" }} id='filter-cate'>
        <strong className='cateItem'>Placement</strong>
        <div className="mt-2" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }} id='filter-cate1'>
            {uniquePlacements.map((placement, index) => {
                const isSelected = placement === selectedPlacement;
                const style = {
                    cursor: "pointer",
                    marginTop: '10px',
                    border: '1px solid #d9d5d5',
                    background: isSelected ? 'black' : 'white',
                    padding: '8px 30px',
                    color: isSelected ? 'white' : 'black',
                };

                return (
                    <div key={index} onClick={() => onSelectPlacement(placement)} >
                        <span className='mt-5' style={style} id='filter-cate2'>
                            {placement}
                        </span>
                    </div>
                );
            })}
        </div>
    </div>
);

export default PlacementFilter;
