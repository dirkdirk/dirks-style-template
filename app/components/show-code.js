import Component from '@glimmer/component'
import { action } from '@ember/object'
import { inject as service } from '@ember/service'

export default class ShowCodeComponent extends Component {

    @service flashMessages

    @action copySuccess() {
        this.flashMessages.add({
            type: 'success',
            message: 'Copied to clipboard.'
        })
    }

}
