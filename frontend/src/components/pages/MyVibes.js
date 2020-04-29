import React, {useEffect} from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {getUserLocations} from '../../functions/locations';

export default function MyVibes() {
    const [locations, setLocations] = React.useState([]);
    const getLocations = () => {
        getUserLocations(localStorage.getItem("username")).then((resp) => {
            setLocations(resp)
            console.log(locations)
        })
    }

    useEffect(() => {
        getLocations();
    }, [])

    return (
        <div>
            <h1>My Vibes</h1>
            <List>
                {locations !== 'undefined' && locations.length > 0 && locations.map(location => (
                    <ListItem button>
                        <ListItemText primary={location.title}>
                            {location.title}
                        </ListItemText>
                    </ListItem>
                ))
                }
            </List>
        </div>

    )
}