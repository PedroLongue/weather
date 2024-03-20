// Input.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useCity } from '../../context/cityContext';

const Input = () => {
    const { setCity } = useCity();
    const [cityInput, setCityInput] = useState('');

    const handleCityChange = (event) => {
        setCityInput(event.target.value);
    };

    const handleSearch = () => {
        setCity(cityInput);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
            <TextField
                sx={{
                    width: '300px',
                }}
                id="standard-basic"
                label="Digite uma cidade"
                variant="standard"
                value={cityInput}
                onChange={handleCityChange}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={handleSearch}>
                Buscar
            </Button>
        </div>
    );
};

export default Input;
