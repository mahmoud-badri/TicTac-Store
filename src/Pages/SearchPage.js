import React from 'react';
import { useSelector } from 'react-redux';
import MyCard from '../Component/cards/MyCards';
import { useDispatch } from 'react-redux';
import { searchAction } from '../Redux/SearchAction';
import { useEffect } from 'react';
const SearchPage = () => {

    const dispatch = useDispatch();


    const searchTerm = useSelector((state) => state.searchTerm); // Retrieve the search term from the state
    useEffect(() => {
        if (searchTerm) {
            dispatch(searchAction(searchTerm));
        }
    }, [dispatch, searchTerm]);
    const searchResults = useSelector((state) => state.combinSearch.search_item);


    
    return (

        <div className="container container-one">
            <div className="social mb-5">
                <p>About Your Search </p>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

                {searchResults.map((result) => (

                    <div className="card-container" key={result.id}>

                        <MyCard
                            image={result.images}
                            title={result.title}
                            price={result.price}
                            addProduct = {result}
                        />

                    </div>

                ))}

            </div>

        </div>

    );

};
export default SearchPage;
