import React from 'react';
import NextHead from 'next/head';

 function Head ({ title}) {
    return (
        <NextHead>
            <title>
                {title}
            </title>
        </NextHead>
    );
}

export default Head;