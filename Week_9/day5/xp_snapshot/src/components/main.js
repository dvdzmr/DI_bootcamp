import React from 'react';
import {Link} from 'react-router-dom';
import Search from './search';
import Category from './category';
import '../css/main.css'

export default function Main() {

    return (
        <div className='home'>
            <h1>1998 image search engine</h1>
            <Search/>
            <ul className='nav'>
                <li><Link to="/category/mountains">Mountains</Link></li>
                <li><Link to="/category/hedgehogs">Hedgehogs</Link></li>
                <li><Link to="/category/parakeets">Parakeets</Link></li>
                <li><Link to="/category/israel">Israel</Link></li>
            </ul>
            <Category/>
        </div>
    );
}