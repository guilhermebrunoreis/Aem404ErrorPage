import { Component, Mixins } from 'vue-property-decorator'
import { Page } from '@mavice/aem-vue-editable-components'
import './app.scss'
@Component
export default class App extends Mixins(Page) {}
