import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import './App.css';

import { ListSubheader } from '@mui/material';
import img1 from './assets/img/foto1.jpg';
import img2 from './assets/img/foto2.jpg';
import img3 from './assets/img/foto3.jpg';
import img4 from './assets/img/foto4 (2).jpg';
import img5 from './assets/img/foto5.jpg';
import img6 from './assets/img/foto6.jpg';
import img7 from './assets/img/foto7.jpg';
import img8 from './assets/img/foto8.jpg';
import img9 from './assets/img/foto9.jpg';
import img10 from './assets/img/foto10.jpg';
import img11 from './assets/img/foto11.jpg';
import img12 from './assets/img/foto12.jpg';
import img14 from './assets/img/foto14.jpg';
import img15 from './assets/img/foto15.jpg';
import img16 from './assets/img/foto16.jpg';


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  imageList: {
    width: 1200,
    height: 850,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const itemData = [
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
    img: img11,
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

const itemData5 = [
  {
    img: img5,
  },
  {
    img: img16,
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
      <div className='imageContainer'>

        <ImageList sx={{ width: 700, height: 650 }} variant="quilted" cols={2} gap={5}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">Tudo começou em 2017...</ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}

          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">Até que nos reecontramos...</ListSubheader>
          </ImageListItem>
          {itemData2.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
              />
            </ImageListItem>
          ))}

          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">Você chegou malhada toda dlc </ListSubheader>
          </ImageListItem>
          {itemData3.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
              />
            </ImageListItem>
          ))}

          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">Me fazendo sorrir todos os dias 😁</ListSubheader>
          </ImageListItem>
          {itemData4.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
              />
            </ImageListItem>
          ))}

          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">Você não é palhaça não. Só me viciou em voce, em nós.</ListSubheader>
          </ImageListItem>
          {itemData5.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
              />
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
