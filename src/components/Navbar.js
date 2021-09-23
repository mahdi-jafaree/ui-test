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
    const [searchMode, setSearchMode] = useState(false)
    const classes = useStles()

    return (
        <Grid className={classes.tabsBg} alignItems="stretch" container spacing={0}>
            {searchMode ?
                <CSSTransition classNames="search" timeout={200} >
                    <>
                        <Grid className={classes.active} xs={2} item ><Home /></Grid>
                        <Grid className={classes.inActive} xs={2} item ><Home /></Grid>
                        <Grid className={classes.inActive} xs={2} item ><Home /></Grid>
                        <Grid className={classes.inActive} item xs={6} >
                            <TextField onClick={() => setSearchMode(!searchMode)} value="hello" fullWidth ></TextField>
                        </Grid>
                    </>
                </CSSTransition>
                : <Grid className={classes.inActive} item xs={12} >
                    <TextField onClick={() => setSearchMode(!searchMode)} value="hello" fullWidth ></TextField>
                </Grid>
            }



        </Grid>
    )
}
