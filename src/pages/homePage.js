import React from 'react'
import { Grid } from '@material-ui/core'
import { Leftbar } from '../components/Leftbar'
import { Rightbar } from '../components/Rightbar'
import { MainContent } from '../components/MainContent'
export const HomePage = () => {
    return (

        <Grid container style={{ alignItems: 'stretch', minHeight: '100vh' }} >
            <Grid item xs={3} >
                <Leftbar />
            </Grid>
            <Grid item xs={6} >
                <MainContent />
            </Grid>
            <Grid item xs={3} >
                <Rightbar />
            </Grid>
        </Grid>

    )
}
