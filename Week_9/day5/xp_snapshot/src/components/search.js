import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


export default function Search() {
    const [query, setQuery] = useState('israel');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/category/${query}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                placeholder="Search by category"
                onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="primary" type="submit">click me</Button>
        </form>
    );
}
