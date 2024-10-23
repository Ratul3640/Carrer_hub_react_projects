import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold '>Oops!!!</h2>
            <Link to='/'>Go back to home</Link>
        </div>
    );
};

export default ErrorPage;