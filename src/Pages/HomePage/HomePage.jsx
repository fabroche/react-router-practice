import React from 'react';

function HomePage(props) {
    return (
        <>
            <h1>Home Page</h1>
            <ol>
                <h3>Puedes loguearte con los siguientes usuarios para ver de que forma es protegido el acceso al contenido en la sección de blogs:</h3>
                <li>juandc</li>
                <li>diannerd</li>
                <li>nicobytes</li>
                <h4>PD: Al ser con fines prácticos no se implementó la funcionalidad de los botones.</h4>
            </ol>
        </>

    );
}

export {HomePage};