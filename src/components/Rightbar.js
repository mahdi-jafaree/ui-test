import React from 'react'
import { Box, Avatar, Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Person, Star } from '@material-ui/icons'

const useStyles = makeStyles({
    avatar: {
        backgroundColor: '#fff',
        boxShadow: '0px 5px 10px #ccc'
    },
    grayFont: {
        color: '#777',
        listStyle: 'none'
    },
    iconListItem: {
        paddingTop: '15px',
    },
    listItem: {
        paddingLeft: '10px'
    },
    button: {
        padding: '20px 20px',
        color:'white',
        fontWeight:'bold'
    }
})

export const Rightbar = () => {

    const classes = useStyles()

    return (
        <Grid container spacing={0} style={{ height: '100%', backgroundColor: '#eee' }}   >
            <Grid item style={{ minWidth: '100%', paddingLeft: '15px', marginTop: '40%' }} >
                <Avatar className={classes.avatar} style={{ height: '100px', width: '100px' }} >
                    <Person htmlColor="#555" style={{ fontSize: '3rem' }} />
                </Avatar>
                <Box sx={{ marginTop: 10 }}>
                    <Typography variant="h5">
                        <strong>Connect your wallet</strong>
                    </Typography>
                    <ul className={classes.grayFont}>
                        <li><Star className={classes.iconListItem} /> Add your upates</li>
                        <li><Star className={classes.iconListItem} /> Add your upates</li>
                        <li><Star className={classes.iconListItem} /> Add your upates</li>
                        <li><Star className={classes.iconListItem} /> Add your upates</li>
                    </ul>
                </Box>
                <Box sx={{ marginTop: 30 }}>
                    <Grid style={{ width: '100%' }} alignItems="stretch" container direction="column" spacing={1} >
                        <Grid item >
                            <Button style={{ backgroundColor: '#141619' }} className={classes.button} fullWidth variant="contained">
                                <Grid justifyContent="space-between" container>
                                    <Grid item>Meta Mask</Grid>
                                    <Grid item><Person /></Grid>
                                </Grid>
                            </Button>
                        </Grid>
                        <Grid item >
                            <Button style={{ backgroundColor: '#EE57AC' }} className={classes.button} fullWidth variant="contained">
                                <Grid justifyContent="space-between" container>
                                    <Grid item>WalletConnect</Grid>
                                    <Grid item><Person /></Grid>
                                </Grid>
                            </Button>
                        </Grid>
                        <Grid item >
                            <Button style={{ backgroundColor: '#0648D7' }} className={classes.button} fullWidth variant="contained">
                                <Grid justifyContent="space-between" container>
                                    <Grid item>Coinbase</Grid>
                                    <Grid item><Person /></Grid>
                                </Grid>
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}
