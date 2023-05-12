import Button from '@material-ui/core/Button';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import './App.css';

import img1 from './assets/img/foto 1.jpg';
import img2 from './assets/img/foto 2.jpg';
import img3 from './assets/img/foto 3.jpg';
import img4 from './assets/img/foto 4.jpg';
import img10 from './assets/img/foto10.jpg';
import img13 from './assets/img/foto13.jpg';
import img6 from './assets/img/foto6.jpg';
import img7 from './assets/img/foto7.jpg';
import img8 from './assets/img/foto8.jpg';
import img9 from './assets/img/foto9.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 700,
    height: 650,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const itemData1 = [
  {
    img: img1,
  },

  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
    title: 'adsadsad',
  },
]

const itemData2 = [
  {
    img: img6,
  },
  {
    img: img13,
  }
]

const itemData3 = [
  {
    img: img7,
  },
  {
    img: img8,
  }
]

const itemData4 = [
  {
    img: img10,
  },
  {
    img: img9,
  }
]

function App() {

  const classes = useStyles();

  const [activeGallery, setActiveGallery] = useState(false)

  const switchBoolean = () => {
    setActiveGallery(!activeGallery)
  }

  return (

    <>
      {
        !activeGallery && (
          <>
            <h1>Hello, welcome to the gallery of love ❤️</h1>
            <Button onClick={switchBoolean} variant="contained" color="primary">
              Entry
            </Button>
          </>
        )
      }

      <div>
        {activeGallery &&
          <Button onClick={switchBoolean} variant="contained" color="primary">
            Voltar
          </Button>
        }
      </div>
      <div className={classes.root}>
        <ImageList rowHeight={300} className={classes.imageList}>
          <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
            <h2>Tudo começou lá trás em 2017 </h2>
          </ImageListItem>
          {itemData1.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} />
            </ImageListItem>
          ))}

          <ImageListItem key="Subheader" cols={2} style={{ height: 'auto', textAlign: 'center' }}>
            <h2>Até que eu te reencontrei </h2>
          </ImageListItem >
          {itemData2.map((item) => (

            <ImageListItem key={item.img}>
              <img src={item.img} style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }} />
            </ImageListItem>
          ))}

          <ImageListItem key="Subheader" cols={2} style={{ height: 'auto', textAlign: 'center' }}>
            <h2>Veio toda malhada, dlc</h2>
          </ImageListItem >
          {itemData3.map((item) => (

            <ImageListItem key={item.img}>
              <img src={item.img} style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }} />
            </ImageListItem>
          ))}

          <ImageListItem key="Subheader" cols={2} style={{ height: 'auto', textAlign: 'center' }}>
            <h2>Me fazer sorrir todos os dias 😃</h2>
          </ImageListItem >
          {itemData4.map((item) => (

            <ImageListItem key={item.img}>
              <img src={item.img} style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }} />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <Button variant="contained" color="primary">
        <a href="https://api.whatsapp.com/send?phone=5592982127867&text=te%20amo,%20voc%C3%AA%20%C3%A9%20o%20amor%20da%20minha%20vida%20%E2%9D%A4%EF%B8%8F">Press and send the message to enable access and continue...</a> 
      </Button>
    </>
  )
}

export default App
