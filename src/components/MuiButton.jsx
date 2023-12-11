import React, { useState } from 'react'
import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, 
    ToggleButton
} from '@mui/material'

import  FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
function MuiButton() {
    const [formats, setFormats] = useState(['bold', 'italic', 'underlined'])
    const Changebutton = (event, newFormat) => {
        setFormats(newFormat)
        console.log(newFormat)
    }
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' color="primary">Primary</Button>
            <Button variant='contained' color="secondary">Secondary</Button>
            <Button variant='contained' color="info">Info</Button>
            <Button variant='contained' color="success">Success</Button>
            <Button variant='contained' color="error">Error</Button>
            <Button variant='contained' color="warning">Warning</Button>
        </Stack>
        <Stack display='block' direction='row' spacing={4}>
            <Button variant='contained' size='small'>small</Button>
            <Button variant='contained' size='medium'>medium</Button>
            <Button variant='contained' size='large'>large</Button>
        </Stack>
        <Stack display='block' direction='row' spacing={4}>
            <Button variant='contained' endIcon={<NotificationsActiveIcon/>} disableElevation>
                Notification
            </Button>
            <Button variant='contained' startIcon={<NotificationsActiveIcon/>} disableRipple>Notification</Button>
            <IconButton color='success'>
                <NotificationsActiveIcon/>
            </IconButton>
        </Stack>
        <Stack direction='row'>
            <ButtonGroup 
                variant='outlined'
                orientation='vertical'
                size='small'
            >
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack
            direction='row'
        >
            <ToggleButtonGroup
                aria-label='text formatting'
                size='small'
                color='success'
                orientation='vertical'
                onChange={Changebutton}
                value={formats}
                exclusive
            >
                <ToggleButton value='bold' aria-label='bold'>
                    <FormatBoldIcon/>
                </ToggleButton>
                <ToggleButton value='italic' aria-label='italic'>
                    <FormatItalicIcon/>
                </ToggleButton>
                <ToggleButton value='underlined' aria-label='underlined'>
                    <FormatUnderlinedIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}

export default MuiButton