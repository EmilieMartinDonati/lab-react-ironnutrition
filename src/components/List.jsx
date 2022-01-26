import React from 'react';

const List = ({foodList, number}) => {
    return(
        <div class="column content">
          <h2 class="subtitle">Today's foods</h2>
          <ul>
          {foodList.map((food) => {
            return <><li><span>{number}</span> <span>{food.name}</span> = <span>{food.calories * number}</span> cal</li>
            </>
          })}
          </ul>
          <strong></strong>
        </div>
    )
}



export default List 