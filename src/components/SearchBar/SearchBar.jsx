import { useState } from "react";
import { Wrapper, Form, FindBtn, FindInput } from "./SearchBar.stuled";

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
        <Wrapper>
            <Form onSubmit={heandleSubmit}>
                <FindBtn type="submit">Let`s find movie</FindBtn>

                <FindInput
                    type="text"
                    name="searchImg"
                    value={searchFilm}
                    onChange={onFilmSearch}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search film"
                />
            </Form>
        </Wrapper>
    )
};