import { Theme } from '../../types/common';

const uiStyles = {
  button: {
    primary: (theme: Theme) => `bg-gray-400 text-white border-none outline-none p-2 hover:bg-gray-600`,
    secondary: (theme: Theme) => `text-gray-400 border-gray-400 border outline-none p-2 hover:text-gray-600 border-gray-600`,
    thirdy: (theme: Theme) => `
      ${theme === 'light' ? 'text-gray-400' : 'text-white'} border-none outline-none p-2 hover: ${theme === 'light' ? 'text-gray-600' : 'text-gray-100'}
    `,
  },
  paper: {
    primary: (theme: Theme) => `border-radius border-none rounded-xl p-2 mb-4 text-start`,
    secondary: (theme: Theme) => `border-none p-2 mb-4 text-start`,
    thirdy: (theme: Theme) => `border border-black p-2 mb-4 text-start`,
  }
}

export default uiStyles;
