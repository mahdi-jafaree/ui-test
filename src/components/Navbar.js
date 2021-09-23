import Box from '@material-ui/core/Box';
import React, { useState } from 'react';
import { Tabs, Tab, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import { Home, Message, Group } from '@material-ui/icons';
const useStles = makeStyles({
    inActive: {
        backgroundColor: '#ccc'
    },
    active: {
        backgroundColor: 'white'
    },
    tabsBg: {
        backgroundColor: '#bbb'
    }
})
export const Navbar = () => {
    const [value, setValue] = useState(0)
    const classes = useStles()

    return (
        <Box sx={{ flexGrow: 1, }}>
            <Tabs className={classes.tabsBg} value={value} onChange={() => { console.log("hello") }} aria-label="basic tabs example">
                <Tab icon={<Home />} className={classes.active} label="Feed" />
                <Tab icon={<Message />} className={classes.inActive} label="Comunities" />
                <Tab icon={<Group />} className={classes.inActive} label="Messages" />
            </Tabs>
        </Box>
    )
}
