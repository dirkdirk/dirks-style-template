import EmberRouter from '@ember/routing/router'
import config from './config/environment'
import RouterScroll from 'ember-router-scroll'

export default class Router extends EmberRouter.extend(RouterScroll) {
    location = config.locationType
    rootURL = config.rootURL
}

Router.map(function() {

  this.route('transit-to-app', { path: '/*badurl' })  // catch-all for bad urls
  this.route('buttons');
  this.route('colors');
  this.route('header');
  this.route('inputs');
  this.route('layout');
  this.route('other');
  this.route('text');

})
