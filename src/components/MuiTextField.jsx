import React, { useState } from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'

function MuiTextField() {
    const [value, setValue] = useState(null)

    const onchangeHandle = (event) => {
        setValue(event.target.value)
    }
  return (
    <Stack spacing={20} margin={10}>
        <Stack direction='row' spacing={2}>
            <TextField label='Name' variant='outlined'/>
            <TextField label='Name' variant='filled'/>
            <TextField label='Name' variant='standard'/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Name' variant='outlined' size='small' color='secondary' error/>
            <TextField label='Secret' variant='filled' size='medium' color='success'
                value={value}
                onChange={onchangeHandle}
                helperText = {value == null ? 'Required': 'Do share it to anyone!'}
            />
            <TextField label='Name' variant='standard' color='error' helperText='Please tell me your name'/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField variant='outlined' label='Password' type='password' disabled/>
            <TextField variant='outlined' label='ReadOnly' InputProps={{readOnly: true}}/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField variant='outlined' label='Amount'
                InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }}
            />
            <TextField variant='outlined' label='Weight'
                InputProps={{
                    endAdornment: <InputAdornment position='end'>Kg</InputAdornment>
                }}
            />
        </Stack>
    </Stack>
  )
}

export default MuiTextField