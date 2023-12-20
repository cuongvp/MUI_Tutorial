import React, {useState} from 'react'
import { Stack } from '@mui/material'
import Rating from '@mui/material/Rating'
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
function MuiRating() {
    const [value, setValue] = useState(0)

    const handleChange = (event) => {
        setValue(parseInt(event.target.value))
    }
  return (
    <Stack margin={10}>
        <Rating value = {value} onChange={handleChange} precision={0.5} icon={<Favorite/>} emptyIcon={<FavoriteBorder/>}/>
    </Stack>
  )
}

export default MuiRating