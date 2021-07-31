import React from 'react';
import stl from './css/floatinBtn.module.css'

const FloatingBtn = () => {
    return (
        <div>
            <a href="https://discord.gg/yt9vBKqtVg" target="_blank" rel="noreferrer" className={stl.float}>
<i className="fab fa-discord">
</i>
<p>Join Discord</p>
</a>
        </div>
    );
};

export default FloatingBtn;