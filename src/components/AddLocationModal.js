import React, { useState } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
    Box,
    Typography
} from '@mui/material';
import { styled } from '@mui/system';

const CustomDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        padding: theme.spacing(3),
        borderRadius: '12px',
        backgroundColor: '#f5f5f5',
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
    },
}));

const AddLocationModal = ({ open, handleClose, handleAddLocation }) => {
    const [city, setCity] = useState('');

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = () => {
        if (city.trim()) {
            handleAddLocation(city);
            setCity('');
            handleClose();
        }
    };

    return (
        <CustomDialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
            <DialogTitle sx={{ padding: 0 }}>
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    align="center"
                    sx={{
                        fontSize: { xs: '1.26rem', sm: '1.7rem', md: '1.8rem' },
                    }}
                >
                    Add New Location
                </Typography >
            </DialogTitle>
            <DialogContent sx={{ padding: 0 }}>
                <Box display="flex" flexDirection="column" alignItems="center" >
                    <TextField
                        autoFocus
                        margin="dense"
                        id="city"
                        label="City Name"
                        type="text"
                        variant="outlined"
                        fullWidth
                        value={city}
                        onChange={handleInputChange}
                        placeholder="Enter city name"
                        sx={{
                            fontSize: { xs: '0.9rem', sm: '1rem' },
                            margin: "18px",

                        }}
                    />
                </Box>
            </DialogContent>
            <DialogActions sx={{
                justifyContent: 'center', padding: 0
            }}>
                <Button
                    onClick={handleClose}
                    color="error"
                    variant="contained"
                    sx={{
                        marginRight: { xs: 1, sm: 2 },
                        fontSize: { xs: '0.8rem', sm: '1rem' },
                        padding: { xs: '6px 12px', sm: '8px 16px' },
                        width: '50%'

                    }}
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                    sx={{
                        fontSize: { xs: '0.8rem', sm: '1rem' },
                        padding: { xs: '6px 12px', sm: '8px 16px' },
                        width: '50%'
                    }}
                >
                    Add
                </Button>
            </DialogActions>
        </CustomDialog>
    );
};

export default AddLocationModal;
