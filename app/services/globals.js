import Service from '@ember/service'
import { htmlSafe } from '@ember/string'

export default class GlobalsService extends Service {

    // get xxx() { return htmlSafe("") }
    // get xxx() { return htmlSafe("<a href='' target='_blank'></a>") }

    get githubStylesDir() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/tree/master/app/styles' target='_blank'>/styles</a>") }
    get githubComponentsDir() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/tree/master/app/templates/components' target='_blank'>/components</a>") }
    get githubHelpersDir() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/tree/master/app/helpers' target='_blank'>/helpers</a>") }

    get githubDirksStyleTemplateUrl() { return htmlSafe("https://github.com/dirkdirk/dirks-style-template") }
    get githubDirksStyleTemplateLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template' target='_blank'>Github</a>") }
    get logo() { return htmlSafe("/assets/favicons/apple-touch-icon-76x76.png") }
    get userPicUrl() { return htmlSafe("https://lh3.googleusercontent.com/a-/AAuE7mC3TnTlg3UIOxl0C3VE3xvgjzrJPwP4ahALK8Y9dw") }
    get githubNpmPackageLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/package.json' target='_blank'>package.json</a>") }

    get emberjsLink() { return htmlSafe("<a href='https://emberjs.com' target='_blank'>Emberjs</a>") }
    get emberCliSassLink() { return htmlSafe("<a href='https://github.com/aexmachina/ember-cli-sass' target='_blank'>Ember cli SASS</a>") }
    get emberFontAwesomeLink() { return htmlSafe("<a href='https://github.com/martndemus/ember-font-awesome' target='_blank'>Ember Font Awesome</a>") }
    get emberComposableHelpersLink() { return htmlSafe("<a href='https://github.com/DockYard/ember-composable-helpers' target='_blank'>Ember Composable Helpers</a>") }
    get emberTruthHelpersLink() { return htmlSafe("<a href='https://github.com/jmurphyau/ember-truth-helpers' target='_blank'>Ember Truth Helpers</a>") }
    get emberToolTips() { return htmlSafe("<a href='https://github.com/sir-dunxalot/ember-tooltips' target='_blank'>Ember Tooltips</a>") }
    get emberCliFlashLink() { return htmlSafe("<a href='https://github.com/poteto/ember-cli-flash' target='_blank'>Ember cli Flash (Messages)</a>") }
    get emberLineClampLink() { return htmlSafe("<a href='https://github.com/lstrrs/ember-line-clamp' target='_blank'>Ember Line Clamp</a>") }
    get emberPowerSelectLink() { return htmlSafe("<a href='https://github.com/cibernox/ember-power-select' target='_blank'>Ember Power Select</a>") }
    get emberCliClipboardLink() { return htmlSafe("<a href='https://github.com/jkusa/ember-cli-clipboard' target='_blank'>Ember cli Clipboard</a>") }
    get emberCollapsiblePanelLink() { return htmlSafe("<a href='https://github.com/tedconf/ember-collapsible-panel' target='_blank'>Ember Collapsible Panel</a>") }
    get dateComponentsLink() { return htmlSafe("<a href='https://github.com/mydea/ember-date-components' target='_blank'>Date Components</a>") }
    get emberMomentLink() { return htmlSafe("<a href='https://github.com/stefanpenner/ember-moment' target='_blank'>Ember Moment</a>") }
    get emberScreenLink() { return htmlSafe("<a href='https://github.com/mitchlloyd/ember-screen' target='_blank'>Ember Screen</a>") }
    get emberRouterScrollLink() { return htmlSafe("<a href='https://github.com/DockYard/ember-router-scroll' target='_blank'>Ember Router Scroll</a>") }
    get emberAwesomeMacrosLink() { return htmlSafe("<a href='https://github.com/kellyselden/ember-awesome-macros' target='_blank'>Ember Awesome Macros</a>") }
    get emberMacroHelpersLink() { return htmlSafe("<a href='https://github.com/kellyselden/ember-macro-helpers' target='_blank'>Ember Macro Helpers</a>") }
    get emberChangesetLink() { return htmlSafe("<a href='https://github.com/poteto/ember-changeset' target='_blank'>Ember Changeset</a>") }

    get sassDocsLink() { return htmlSafe("<a href='https://sass-lang.com/documentation' target='_blank'>SASS Docs</a>") }
    get flexGuideLink() { return htmlSafe("<a href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/' target='_blank'>A Complete Guide to Flexbox</a>") }
    get gridGuideLink() { return htmlSafe("<a href='https://css-tricks.com/snippets/css/complete-guide-grid/' target='_blank'>A Complete Guide to Grid</a>") }
    get freeFontAwesomeFontsLink() { return htmlSafe("<a href='https://fontawesome.com/icons?d=gallery&m=free'>Free Font Awesome Fonts</a>") }
    get emberPowerSelectDocsLink() { return htmlSafe("<a href='https://ember-power-select.com/docs/installation' target='_blank'>Ember Power Select Docs</a>") }
    get emberCollapsiblePanelDocsLink() { return htmlSafe("<a href='http://adopted-ember-addons.github.io/ember-collapsible-panel/' target='_blank'>Ember Collapsible Panel Docs</a>") }
    get emberComposableHelpersDocsLink() { return htmlSafe("<a href='https://github.com/DockYard/ember-composable-helpers#available-helpers' target='_blank'>Ember Composable Helpers Docs</a>") }
    get dateComponentsGuideLink() { return htmlSafe("<a href='http://mydea.github.io/ember-date-components/#/usage/date-picker' target='_blank'>Date (picker) Components Guide</a>") }
    get momentjsDocsLink() { return htmlSafe("<a href='https://momentjs.com/docs/' target='_blank'>Momentjs Docs</a>") }
    get githubLink() { return htmlSafe("<a href='https://github.com/' target='_blank'>Github</a>") }
    get firebaseLink() { return htmlSafe("<a href='https://firebase.com/' target='_blank'>Firebase</a>") }
    get localHostLink() { return htmlSafe("<a href='http://localhost:4200/' target='_blank'>Local Host 4200 (Ember server)</a>") }
    get emberTwiddleLink() { return htmlSafe("<a href='https://ember-twiddle.com/' target='_blank'>Ember Twiddle</a>") }
    get playCodeLink() { return htmlSafe("<a href='https://playcode.io/' target='_blank'>Play Code</a>") }
    get devDocsLink() { return htmlSafe("<a href='https://devdocs.io/' target='_blank'>Dev Docs</a>") }
    get bem101() { return htmlSafe("<a href='https://css-tricks.com/bem-101/' target='_blank'>BEM 101</a>") }

    get githubTemplatesApplicationLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/templates/application.hbs' target='_blank'>templates/application.hbs</a>") }
    get githubTemplatesButtonsLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/templates/buttons.hbs' target='_blank'>templates/buttons.hbs</a>") }
    get githubTemplatesColorsLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/templates/colors.hbs' target='_blank'>templates/colors.hbs</a>") }
    get githubTemplatesHeaderLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/templates/header.hbs' target='_blank'>templates/header.hbs</a>") }
    get githubTemplatesInputsLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/templates/inputs.hbs' target='_blank'>templates/inputs.hbs</a>") }
    get githubTemplatesLayoutLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/templates/layout.hbs' target='_blank'>templates/layout.hbs</a>") }
    get githubTemplatesOtherLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/templates/other.hbs' target='_blank'>templates/other.hbs</a>") }
    get githubTemplatesTextLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/templates/text.hbs' target='_blank'>templates/text.hbs</a>") }

    get githubTemplatesComponentsDataBadgeLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/templates/components/data-badge.hbs' target='_blank'>templates/components/data-badge.hbs</a>") }
    get githubTemplatesComponentsModalLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/templates/components/modal.hbs' target='_blank'>templates/components/modal.hbs</a>") }

    get githubNormalizeLink() { return htmlSafe("<a href='https://github.com/necolas/normalize.css' target='_blank'>normalize</a>") }

    get githubStylesNormalizeLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/styles/_normalize.scss' target='_blank'>styles/_normalize.scss</a>") }
    get githubStylesVariablesLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/styles/_variables.scss' target='_blank'>styles/_variables.scss</a>") }
    get githubStylesProjectLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/styles/_project.scss' target='_blank'>styles/_project.scss</a>") }
    get githubStylesResetLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/styles/_reset.scss' target='_blank'>styles/_reset.scss</a>") }
    get githubStylesAnimationsLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/styles/animations.scss' target='_blank'>styles/animations.scss</a>") }
    get githubStylesAppLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/styles/app.scss' target='_blank'>styles/app.scss</a>") }
    get githubStylesButtonsLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/styles/buttons.scss' target='_blank'>styles/buttons.scss</a>") }
    get githubStylesCollapsiblePanelLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/styles/collapsible-panel.scss' target='_blank'>styles/collapsible-panel.scss</a>") }
    get githubStylesDataBadgesLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/styles/data-badges.scss' target='_blank'>styles/data-badges.scss</a>") }
    get githubStylesDatePickerLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/styles/date-picker.scss' target='_blank'>styles/date-picker.scss</a>") }
    get githubStylesFlashMessagesLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/styles/flash-messages.scss' target='_blank'>styles/flash-messages.scss</a>") }
    get githubStylesHelpersLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/styles/helpers.scss' target='_blank'>styles/helpers.scss</a>") }
    get githubStylesInputsLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/styles/inputs.scss' target='_blank'>styles/inputs.scss</a>") }
    get githubStylesModalLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/styles/modal.scss' target='_blank'>styles/modal.scss</a>") }
    get githubStylesPowerSelectOverridesLink() { return htmlSafe("<a href='https://github.com/dirkdirk/dirks-style-template/blob/master/app/styles/power-select-overrides.scss' target='_blank'>styles/power-select-overrides.scss</a>") }

}
