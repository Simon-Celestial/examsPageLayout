import React, {useCallback, useState} from 'react'
import filterCategoriesData from "../../../../../public/PagesData/filterCategories.json";
import classesData from "../../../../../public/PagesData/classes.json";
import styles from "./ExamCategories.module.scss";

export const ExamCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = useCallback((categoryId) => {
        setSelectedCategory(categoryId);
    }, []);

    return (
        <div className={styles.examsLeft}>
            <h2>Filter</h2>
            <h4>Kategoriyalar</h4>
            <div className={styles.categoryItems}>
                {filterCategoriesData.map(category => (
                    <div
                        key={category.id}
                        className={`${styles.categoryItem} ${selectedCategory === category.id ? styles.selectedCategory : ''}`}
                        onClick={() => handleCategoryClick(category.id)}
                    >
                        {category.category}
                    </div>
                ))}
            </div>
            <h4>Etiketlər</h4>
            <div className={styles.categoryItems}>
                {classesData.map(category => (
                    <div key={category.id} className={styles.categoryItem}>
                        {category.category}
                    </div>
                ))}
            </div>
        </div>

    )
}
