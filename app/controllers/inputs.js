import Controller from '@ember/controller'
import { action } from '@ember/object'
import { inject as service } from '@ember/service'

export default class InputsController extends Controller {

    @service globals

    get powerSelectOptions() { return ['Mississippi', 'Alabama', 'Ohio', 'Nevade'] }

    @action setDateRange() {}

}
