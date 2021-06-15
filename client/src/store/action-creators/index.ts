import * as ContactActionCreators from './contact';
import * as TemplateActionCreators from './template';

export default {
    ...ContactActionCreators,
    ...TemplateActionCreators
}
