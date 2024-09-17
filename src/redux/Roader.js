import React from 'react'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Roader = () => {
    return (
        <div className='flex justify-center mt-3'>
            <Stack sx={{ color: 'grey.500' }}  direction="row">
                <CircularProgress color="inherit" />
            </Stack>
        </div>
    )
}

export default Roader