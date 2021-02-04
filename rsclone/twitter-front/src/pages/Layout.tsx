import React from 'react';
import { Container, Grid, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import { Sidebar } from '../components/Sidebar';
import { useHomeStyles } from '../pages/Home/theme';
import { SearchTextField } from '../components/SearchTextField';
import { Tags } from '../components/HashTags';

interface LayoutProp {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProp> = ({ children }): React.ReactElement => {
  const classes = useHomeStyles();

return (
    <Container  maxWidth='lg'>
    <Grid container spacing={3}>
      <Grid sm={1} md={3} item>
        <Sidebar classes={classes} />
      </Grid>
      <Grid sm={8} md={6} item>
        {children}
      </Grid>
      <Grid sm={3} md={3} item>
        <div className={classes.rightSide}>
          <SearchTextField
            variant='outlined'
            placeholder='Поиск по Твиттеру'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon className={classes.searchIcon} />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          <Tags classes={classes} />
          {/* <Users /> */}
        </div>
      </Grid>
    </Grid>
  </Container>
);
};
