import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FilterDramaSharpIcon from '@mui/icons-material/FilterDramaSharp';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import Header from '../Header';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

type Props = { children: JSX.Element };

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}));

const SideBar: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', m: 0 }}>
      <CssBaseline />
      <Header handleDrawerOpen={handleDrawerOpen} open={open} />

      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(80, 104, 164, 0.5)',
            boxShadow: 'inset 10px -10px 30px rgba(0, 0, 0, 0.15)',
            color: 'white',
            a: {
              color: 'white',
              textDecoration: 'none'
            }
          }
        }}
      >
        <DrawerHeader
          sx={{
            mr: 2,
            fontFamily: 'Lato',
            fontSize: 16,
            fontWeight: 500,
            fontStyle: 'normal'
          }}
        >
          Meu portal EPM
          <IconButton onClick={handleDrawerClose}>
            <ArrowBackOutlinedIcon sx={{ mr: open ? 0 : 6, color: '#fff' }} />
          </IconButton>
        </DrawerHeader>

        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : 0,
                  justifyContent: 'center'
                }}
              >
                <FilterDramaSharpIcon sx={{ color: '#fff' }} />
              </ListItemIcon>
              <Link to={'/'}>
                <ListItemText
                  primary="Meu Universo"
                  sx={{
                    display: open ? 'block' : 'none',
                    fontFamily: 'Lato',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStyle: 'normal'
                  }}
                />
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : 0,
                  justifyContent: 'center'
                }}
              >
                <FileCopyOutlinedIcon sx={{ color: '#fff' }} />
              </ListItemIcon>
              <Link to={'/visuallawdesign'}>
                <ListItemText
                  primary="Visual Law Design"
                  sx={{
                    display: open ? 'block' : 'none',
                    fontFamily: 'Lato',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStyle: 'normal'
                  }}
                />
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : 0,
                  justifyContent: 'center'
                }}
              >
                <AutoStoriesOutlinedIcon sx={{ color: '#fff' }} />
              </ListItemIcon>
              <Link to={'/contratos'}>
                <ListItemText
                  primary="Contratos"
                  sx={{
                    display: open ? 'block' : 'none',
                    fontFamily: 'Lato',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStyle: 'normal'
                  }}
                />
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : 0,
                  justifyContent: 'center'
                }}
              >
                <AutoAwesomeMotionOutlinedIcon sx={{ color: '#fff' }} />
              </ListItemIcon>
              <Link to={'/publicacoes'}>
                <ListItemText
                  primary="Publicações"
                  sx={{
                    display: open ? 'block' : 'none',
                    fontFamily: 'Lato',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStyle: 'normal'
                  }}
                />
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 0, m: 0 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default SideBar;
