/**
 * @file hiproxy全局实例（注意：不是hiproxy server实例）
 * @author zdying
 */
'use strict';

module.exports = {
  commands: require('./commands'),
  directives: require('./directives'),
  Hosts: require('./hosts'),
  Rewrite: require('./rewrite'),
  Server: require('./index')
};