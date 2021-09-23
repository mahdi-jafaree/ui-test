import React from 'react'
import { Box, Grid, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core'
import { ThumbUp, Message, Share } from '@material-ui/icons'
export const ItemList = () => {
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar variant="square" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={<span><Box display="inline" pr={3}><strong>flippen.enth</strong></Box><span style={{ fontSize: '.6rem', color: '#aaa' }}>0XPRAN</span><span style={{ fontSize: '.6rem',paddingLeft:'1rem', color: '#aaa' }}>43min</span></span>}
                    secondary={
                        <>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </>
                    }
                />
            </ListItem>
            <Grid style={{ paddingLeft: '5rem' }} container>
                <Grid style={{ marginRight: '2rem' }} item>
                    <ThumbUp htmlColor="#999" />
                </Grid>
                <Grid style={{ marginRight: '2rem' }} item>
                    <Message htmlColor="#999" />
                </Grid>
                <Grid style={{ marginRight: '2rem' }} item>
                    <Share htmlColor="#999" />
                </Grid>
            </Grid>
            <Divider variant="inset" component="li" />
        </>


    )
}
