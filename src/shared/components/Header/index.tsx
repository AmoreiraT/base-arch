import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { AppBar } from './stylesBar';
import * as S from './styles';

import logoHeader from '../../../res/images/png/logo-rocha.png';
import profile from '../../../res/images/png/User.png';
import { Search } from '../../../res/images/svg';

interface HeaderProps {
  handleDrawerOpen?: () => void;
  open?: boolean;
}

const Header = ({ handleDrawerOpen, open }: HeaderProps): JSX.Element => {
  return (
    <AppBar
      position="fixed"
      open={open}
      sx={{
        backgroundColor: 'rgba(80, 104, 164, 0.5)',
        boxShadow: 'inset 10px -10px 30px rgba(0, 0, 0, 0.15)',
        color: 'white'
      }}
    >
      <Toolbar>
        <IconButton
          id="id-menu-icon"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            maxHeight: 80,
            color: 'theme.color.text',
            marginRight: 5,
            ...(open && { display: 'none' })
          }}
        >
          <MenuOutlinedIcon sx={{ color: '#fff' }} />
        </IconButton>
        <S.ContainerHeader>
          <S.LogoHeader src={logoHeader} />
          <S.InputField
            type="text"
            name="search"
            variant="outlined"
            id="outlined-basic"
            placeholder="Arquivos, documentos"
            size="small"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <S.Icon position="end">
                  <Search />
                </S.Icon>
              )
            }}
          />
          <S.ContainerProfile id="id-container-profile">
            <S.Avatar src={profile} id="id-img-profile" />
            <S.NameProfile>Thiago Moreira</S.NameProfile>
          </S.ContainerProfile>
          <NotificationsOutlinedIcon />
        </S.ContainerHeader>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
