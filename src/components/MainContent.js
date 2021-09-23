import React from 'react'
import { Grid, List } from '@material-ui/core'
import { Navbar } from './Navbar'
import { StylesProvider } from '@material-ui/core';
import { ItemList } from './ItemList';

export const MainContent = () => {
    return (
        <Grid container alignContent="flex-start" style={{ height: '100%', marginTop: '1rem' }} >
            <Grid item xs={12}  >
                <Navbar />
            </Grid>
            <Grid item xs={12}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {
                        Array(6).fill({}).map((obj, index) => (
                            <div key={index} ><ItemList /></div>
                        ))
                    }
                </List>
            </Grid>

        </Grid>
    )
}
