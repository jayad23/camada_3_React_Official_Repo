import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Box, Tooltip } from '@mui/material';
import { createTheme } from '@mui/material';
import { routes, socialNetwork } from './navigation/Routes';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {
            routes.map(({ id, path, title }) => (
              <Link key={id} to={path}>
                {title}
              </Link>
            ))
          }
          {
            socialNetwork.map(({ linkTo, snTitle, Icon }) => (
              <Tooltip key={snTitle} title={snTitle}>
                <IconButton>
                  {/* <a href={linkTo} target="e_blank" rel="nonreferrer">{snTitle}</a> */}
                  <Icon />
                </IconButton>
              </Tooltip>
            ))
          }
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;