import Controller from '@ember/controller'
import { action } from '@ember/object'
import { inject as service } from '@ember/service'

export default class ApplicationController extends Controller {

    @service globals

    routes = [
        { routeName: 'index',   displayName: 'Guide'   },
        { routeName: 'header',  displayName: 'Header'  },
        { routeName: 'layout',  displayName: 'Layout'  },
        { routeName: 'text',    displayName: 'Text'    },
        { routeName: 'colors',  displayName: 'Colors'  },
        { routeName: 'buttons', displayName: 'Buttons' },
        { routeName: 'inputs',  displayName: 'Inputs'  },
        { routeName: 'other',   displayName: 'Other'   },
    ]

    @action openLink(url)  { window.open(url, '_blank') }
    @action logOutAction() { console.log('--> logOutAction()') }

}
