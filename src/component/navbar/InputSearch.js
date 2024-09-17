import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom'; 
import { BiSearchAlt2 } from 'react-icons/bi';

function sleep(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

export default function InputSearch() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [selectedOption, setSelectedOption] = React.useState(null); 
    const loading = open && options.length === 0;
    const navigate = useNavigate(); 

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            await sleep(1e3);

            if (active) {
                setOptions([...topFilms]);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    const handleOptionSelect = (event, value) => {
        setSelectedOption(value);
    };

    const handleSearchClick = () => {
        if (selectedOption && selectedOption.path) {
            navigate(selectedOption.path); 
        }
    };

    return (
        <div className='flex items-center'>
            <Autocomplete
                id="asynchronous-demo"
                sx={{
                    width: 310,
                    color: "white",
                    border: "none",
                    backgroundColor: "white",
                    borderRadius: "10px 0px 0px 10px",
                    overflow: "hidden",
                    height: "45px",
                }}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                isOptionEqualToValue={(option, value) => option.title === value.title}
                getOptionLabel={(option) => option.title}
                options={options}
                loading={loading}
                onChange={handleOptionSelect} 
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder='Search...'
                        size='small'
                        sx={{
                            borderRadius: 2,
                            '& .MuiOutlinedInput-root': {
                                border: "none",
                                boxShadow: 'none',
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: "none",
                            },
                            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },
                            '& .Mui-focused': {
                                boxShadow: 'none',
                            },
                            '& .css-i4bv87-MuiSvgIcon-root': {
                                display: "none",
                            },
                            '& .MuiOutlinedInput-root.MuiInputBase-sizeSmall': {
                                paddingTop: '10px',
                            }
                        }}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                    />
                )}
            />
            <button
                type='button'
                onClick={handleSearchClick}
                className='py-2 px-3 bg-yellow-400 rounded-tr-lg rounded-br-lg'
            >
                <BiSearchAlt2 size={30} />
            </button>
        </div>
    );
}

const topFilms = [
    { title: 'Mens clothing', path: "/productlisting" },
    { title: 'Womens clothing', path: "/productlisting" },
    { title: 'Jewelery', path: "/productlisting" },
    { title: 'Electronics', path: "/productlisting" },
    { title: 'Sports', path: "/productlisting" },
    { title: 'Toys', path: "/productlisting" },
    { title: 'Grocarry', path: "/productlisting" },
    { title: 'SmartPhones', path: "/productlisting" },
    { title: 'Laptop', path: "/productlisting" },
];
