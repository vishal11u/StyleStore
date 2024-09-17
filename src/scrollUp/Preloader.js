import React from 'react';
import { waveform } from 'ldrs';

function Preloader() {
    waveform.register()
    return (
        <div id='Loader' className='flex justify-center items-center h-screen w-screen'>
            <l-waveform
                size="70"
                stroke="4.5"
                speed="1"
                color="black"
            ></l-waveform>
        </div>
    )
}

export default Preloader;
