import React from 'react';
import styles from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={styles.recipe}>
            <div className="card my-5 w-100 shadow-lg">
                <img className="card-img-top" src={image} alt="pic"/>
                <div className="card-body">
                    <h1 className="card-title">{title}</h1>
                    <p className="lead">{calories}</p>
                    <ol className="list-group list-group-flush">
                    {ingredients.map(ingredient => (
                        <li className="list-group-item">{ingredient.text}</li>
                    ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Recipe;