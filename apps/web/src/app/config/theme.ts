import type {} from '@material-ui/lab/themeAugmentation';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  overrides: {
      MuiAlert: {
        root: {
            marginBottom: '1rem'
        }
      },
      MuiFormGroup: {
          root: {
              marginBottom: '1rem'
          }
      },
  },
  props: {
    MuiSnackbar: {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    }
  }
});
