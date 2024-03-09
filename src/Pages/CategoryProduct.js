import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyCard from '../Component/cards/MyCards';
import { getCategory, getItems } from '../Redux/ItemAction';
import NavPills from '../Component/Nav/NavPills';
import Carousel from '../Component/Carousel/Carousel.';

const CategoryProduct = ({ category }) => {
    const dispatch = useDispatch();
    const { category: itemsCategory } = useSelector((state) => state.combinItems);

    useEffect(() => {
        if (category) {
            dispatch(getCategory(category));
        } else {
            dispatch(getItems());
        }
    }, [dispatch, category]);

    return (
        <div className='container-fulied container-one'>  
        <Carousel/>
        <NavPills/>
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {Array.isArray(itemsCategory) &&
                    itemsCategory.map((item) => (
                        <div className="card-container" key={item.id}>
                            <MyCard
                                image={item.images}
                                title={item.title}
                                path={`/OnePrduct/${item.id}`}
                                price={item.price}
                                addProduct = {item}
                            />
                        </div>
                    ))}
            </div>
        </div>
        </div>
    );
};

export default CategoryProduct;