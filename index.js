//-- Components
import IdmSnackbarQueue from './src/components/IdmSnackbarQueue'
import IdmSnackbar from './src/components/IdmSnackbar'

export default
{
  install (Vue)
  {
    Vue.component('IdmSnackbarQueue', IdmSnackbarQueue)
    Vue.component('IdmSnackbar', IdmSnackbar)
  }
}
