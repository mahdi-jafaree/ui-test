import Box from '@material-ui/core/Box';
import React, { useState } from 'react';
import { Grid, TextField, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import { Home, Message, Group } from '@material-ui/icons';
import { CSSTransition } from 'react-transition-group';
const useStles = makeStyles({
    inActive: {
        backgroundColor: '#ccc',
        textAlign: 'center',
        padding: '10px 5px',

    },
    active: {
        backgroundColor: 'white',
        padding: '10px 5px',
        textAlign: 'center',

    },
    tabsBg: {
        backgroundColor: '#bbb'
    }
})
export const Navbar = () => {
    const [searchMode, setSearchMode] = useState(true)
    const classes = useStles()

    return (
        <Grid className={classes.tabsBg} alignItems="stretch" container spacing={0}>



            <Grid hidden={!searchMode} className={classes.active} xs={2} item ><Home /></Grid>
            <Grid hidden={!searchMode} className={classes.inActive} xs={2} item ><Home /></Grid>
            <Grid hidden={!searchMode} className={classes.inActive} xs={2} item ><Home /></Grid>
            <Grid hidden={!searchMode} className={classes.inActive} item xs={6} >
                <TextField onClick={() => setSearchMode(!searchMode)} value="hello" fullWidth ></TextField>
            </Grid>


            <Grid style={{ display: !searchMode ? 'flex' : 'none', opacity: !searchMode ? 1 : 0, transition: 'all', transitionDuration: '.5s' }} className={classes.inActive} item xs={12} >

                <TextField onClick={() => setSearchMode(!searchMode)} value="hello" fullWidth ></TextField>

            </Grid>




        </Grid >
    )
}
