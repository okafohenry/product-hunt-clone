import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';


export const SearchBar = () => {
    return(
        <div>
            <TextField 
                variant="outlined"
                placeholder="Search..."
                size="small"
                InputProps={{ 
                    endAdornment: (
                        <InputAdornment  position="end">
                            <SearchOutlined />    
                        </InputAdornment>
                    )
                }}
                />
        </div>
    );
};