import React from 'react';
import { Container, Grid, InputAdornment } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/SearchOutlined';

import { Sidebar } from '../components/Sidebar';
import { useHomeStyles } from '../pages/Home/theme';
import { SearchTextField } from "../components/SearchTextField";
import { Tags } from '../components/HashTags';
import { ThemeBtn } from '../components/themeBtn';
import { LanguageBtn } from '../components/languageBtn';
import { searchFieldPlaceholderWord } from '../languages';
// import { Users } from '../components/Users';

interface Layout {
  children: React.ReactNode;
}

let index: number = 0;

if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'ru');
} else if (localStorage.getItem('lang') === 'eng') {
    index = 1; 
} else if (localStorage.getItem('lang') === 'esp') {
    index = 2; 
}

let searchFieldPlaceholderWordPreset: Array<string> = searchFieldPlaceholderWord.map((item) => {
    return item[index];
  });

export const Layout: React.FC<Layout> = ({ children }): React.ReactElement => {
  const classes = useHomeStyles();

return (
  // <Container classname={classes.wrapper} maxWidth='lg'>
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
            placeholder={searchFieldPlaceholderWordPreset[0]}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon className={classes.searchIcon} />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          {/* <Tags classes={classes} /> */}
          {/* <Users /> */}
          
        </div>
        <div className={classes.optionalBtnsWrapper}>
        <ThemeBtn classes={classes}/>
        <LanguageBtn classes={classes}/>
        </div>
      </Grid>
    </Grid>
  </Container>
);
}
