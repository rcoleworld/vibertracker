import React from 'react';
import MenuCard from '../elements/MenuCard';
import { makeStyles } from '@material-ui/core/styles';
import HomeTopBar from '../elements/HomeTopBar';
import Maps from '../../maps.png';
import Pin from '../../pin.png';
import Forest from '../../forest.png';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  media: {
    height: 140,
  }
}));

export default function Home() {
  const classes = useStyles();
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
        image={Forest}
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