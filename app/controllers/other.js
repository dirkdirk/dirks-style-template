import Controller from '@ember/controller'
import { action } from '@ember/object'
import { inject as service } from '@ember/service'

export default class OtherController extends Controller {

    @service globals

    @action copyButtonSuccess() {
        this.get('flashMessages').add({
            type: 'success',
            message: 'Copied to clipboard.'
        })
    }
    @action infoFlashMessage() {
        this.get('flashMessages').add({
            type:            'info',
            extendedTimeout: 1000,
            message:         'Info flash message.'
        })
    }
    @action successFlashMessage() {
        this.get('flashMessages').add({
            type:            'success',
            extendedTimeout: 1000,
            message:         'Success flash message.'
        })
    }
    @action warnFlashMessage() {
        this.get('flashMessages').add({
            type:            'warn',
            extendedTimeout: 1000,
            message:         'Warn flash message.'
        })
    }
    @action dangerFlashMessage() {
        this.get('flashMessages').add({
            type:            'danger',
            extendedTimeout: 1000,
            message:         'Danger flash message.'
        })
    }
    @action stickyFlashMessage() {
        this.get('flashMessages').add({
            type:    'info',
            sticky:  true,
            message: 'Sticky info flash message.'
        })
    }

}
