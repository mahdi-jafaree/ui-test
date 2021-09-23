
import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Multicolorbox } from './Multicolorbox'

export const Leftbar = () => {
    return (
        <Box sx={{ paddingX: 5, paddingY: 15, bgcolor: '#eee', minHeight: '100vh' }} >
            <Box sx={{ width: '100px', height: '150px' }} >
                <Multicolorbox></Multicolorbox>
            </Box>
            <Box sx={{ marginTop: 20 }} >
                <Typography variant="h3">
                    0XPPL
                </Typography>
                <p>
                    <Typography variant="h6">
                        <strong  >
                            Welcome to 0xPeople,
                        </strong>
                    </Typography>
                    a decentralized social network
                    for the crypto natives.

                    For the first time, you can communicate with users behind
                    the ETH addresses. Follow what
                    the others are doing and engage
                    in cummunication.

                    Service is run on a distributed proof-of-stake network.
                    There’s
                    no central company owning
                    the servers.

                    <a>Learn more</a>
                </p>
            </Box>
        </Box>
    )
}
