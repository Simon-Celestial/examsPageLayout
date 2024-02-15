import React from 'react'
import styles from "./ExamsCardList.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faStar} from "@fortawesome/free-solid-svg-icons";
import cardData from "../../../../../public/PagesData/examCard.json"

export const ExamsCardList = () => {
    return (
        <>
            <div className={styles.examsRight}>
                <div className={styles.cardsBlock}>
                    {cardData.map(card => {
                        return (
                            <div className={styles.examCard} key={card.id}>
                                <h3>{card.title}</h3>
                                <div className={styles.infoBlock}>
                                    <div className={styles.duration}>
                                        <FontAwesomeIcon icon={faClock}/>
                                        <p>{card.duration}</p>
                                    </div>
                                    <div className={styles.rating}>
                                        <div className={styles.starsBlock}>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                        </div>
                                        <div className={styles.dot}></div>
                                        <p>{card.votes}</p>
                                    </div>
                                </div>
                                <div className={styles.questionsBlock}>
                                    <ul>Suallar</ul>
                                    {card.questions.map((question, i) => (
                                        <li key={i}>{question}</li>
                                    ))}
                                </div>
                                <div className={styles.tagsBlock}>
                                    {card.tags.map((tag, i) => (
                                        <div key={i} className={styles.tag}>
                                            {tag}
                                        </div>
                                    ))}

                                </div>
                                <button className={styles.buyButton}>
                                    {card.price}
                                </button>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.showMore}>
                    <button>Daha çox</button>
                </div>
            </div>


        </>
    )
}
