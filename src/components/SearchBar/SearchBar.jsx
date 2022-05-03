import { useState } from "react";

export const SearchBar = ({onSubmit}) => {
    const [searchFilm, setSearchFilm] = useState('');

    const onFilmSearch = event => {
        const { value } = event.currentTarget;
        setSearchFilm(value);
    };

    const heandleSubmit = event => {
        event.preventDefault();

        if (searchFilm.trim() === '') {
            alert('Please enter the somthing to find');
            return;
        }
        onSubmit(searchFilm);
    };

    return (
        <header>
            <form onSubmit={heandleSubmit}>
                <button type="submit">Let`s find movie</button>

                <input
                    type="text"
                    name="searchImg"
                    value={searchFilm}
                    onChange={onFilmSearch}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search film"
                />
            </form>
        </header>
    )
};