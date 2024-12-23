import React from 'react';

const Fonts: React.FC = () => {
    return (
        <style>
            {`
            @font-face {
                font-family: 'Roboto';
                src: url('${process.env.PUBLIC_URL}/fonts/Roboto-Regular.ttf') format('ttf');
                font-weight: 400;
                font-style: normal;
            }

            @font-face {
                font-family: 'Roboto';
                src: url('${process.env.PUBLIC_URL}/fonts/Roboto-Medium.ttf') format('ttf');
                font-weight: 500;
                font-style: normal;
            }

            @font-face {
                font-family: 'Roboto';
                src: url('${process.env.PUBLIC_URL}/fonts/Roboto-Bold.ttf') format('ttf');
                font-weight: 700;
                font-style: normal;
            }

            @font-face {
                font-family: 'Roboto';
                src: url('${process.env.PUBLIC_URL}/fonts/Roboto-Black.ttf') format('ttf');
                font-weight: 900;
                font-style: normal;
            }
            `}
        </style>
    );
}


export default Fonts;
