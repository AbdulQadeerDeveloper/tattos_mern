// CategoriesFilter.js
import React from 'react';

const CategoriesFilter = ({ uniqueCategories, selectedCategory, onSelectCategory }) => (
    <div className='filter-cate' style={{ display: "flex", gap: "20px", paddingTop: "20px" }} id='filter-cate'>
        <strong className='cateItem'>Categories</strong>
        <div className="filter-cate1" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }} id='filter-cate1'>
            {uniqueCategories.map((category, index) => {
                const isSelected = category === selectedCategory;
                const style = {
                    cursor: "pointer",
                    marginTop: '10px',
                    border: '1px solid #d9d5d5',
                    background: isSelected ? 'black' : 'white',
                    padding: '8px 30px',
                    color: isSelected ? 'white' : 'black',
                };

                return (
                    <div key={index} onClick={() => onSelectCategory(category)}>
                        <span className='mt-5' style={style} id='filter-cate2'>
                            {category}
                        </span>
                    </div>
                );
            })}
        </div>
    </div>
);

export default CategoriesFilter;
