import React from 'react'
import { Box, Grid } from '@material-ui/core'
export const Multicolorbox = () => {
    return (
        <Box sx={{ width: '100px' }}>
            <Box height="20px" bgcolor="#000" ></Box>
            <Box height="15px" bgcolor="#0648D7"></Box>
            <Box height="10px" bgcolor="#2D8690"></Box>
            <Box height="8px" bgcolor="yellow"></Box>
            <Box height="5px" bgcolor="#EE57AC"></Box>
        </Box>
    )
}
