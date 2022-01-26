import React from 'react';

const FoodBox = ({ foods, displayFoodList, number, setNumber }) => {

    return <div>
  
    {foods.map((food) => {
        return <><div className="box" key={food.name}>
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={food.image} alt={food.name} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{food.name}</strong> <br />
                                <small>{food.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" min="1" onChange={(e) => setNumber(e.target.value)}/>
                                </div>
                            <div className="control">
                                <button className="button is-info" onClick={() => displayFoodList(food.name, number)}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            </>
    })
    }
    </div>
}


export default FoodBox;