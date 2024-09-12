'use client'
import * as React from 'react';
import { Input } from '@mui/base/Input';
import { useTheme } from '@mui/system';

function useIsDarkMode() {
    const theme = useTheme();
    return theme.palette.mode === 'dark';
  }
  export default function Inputform(props:any) {
    // Replace this with your app logic for determining dark modes
    const isDarkMode = useIsDarkMode();
    
    return (
      <Input
        className={isDarkMode ? 'dark' : ''}
        slotProps={{
          input: {
            className:
              'w-80 text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-blue dark:focus:shadow-outline-blue focus:shadow-lg border border-solid border-slate-300 hover:border-blue-500 dark:hover:border-blue-500 focus:border-blue-500 dark:focus:border-blue-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0',
          },
        }}
        aria-label="Demo input"
        placeholder= {props.placeholder}
      />
    );
  }