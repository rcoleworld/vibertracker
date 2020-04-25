import React, {useEffect} from 'react';
import MenuCard from '../elements/MenuCard';
import { makeStyles } from '@material-ui/core/styles';
import HomeTopBar from '../elements/HomeTopBar';
import Maps from '../../maps.png';
import Pin from '../../pin.png';
import Nature from '../../nature.png';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  media: {
    height: 140,
  }
}));



export default function Home() {
  const classes = useStyles();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
        localStorage.setItem('latitude', position.coords.latitude.toString())
        localStorage.setItem('longitude', position.coords.longitude.toString())
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        // setLocation([position.coords.longitude, ])
      });
    }
  })
  return (
    <div>
      <HomeTopBar></HomeTopBar>
       <MenuCard
        title="Track Vibe"
        image={Pin}
        imagetitle="pin"
        route={"/track"}
      />
      <MenuCard
        title="My Vibes"
        image={Nature}
        imagetitle="pin"
        route="/vibes"
      />
      <MenuCard
        title="Nearby Vibes"
        image={Maps}
        imagetitle="maps"
        route="/nearby"
      />
    </div>
  )
}