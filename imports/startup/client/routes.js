import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '/imports/ui/layouts/layout.js';
import '/imports/ui/pages/home-page.js';

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('LayoutTmpl', { main: 'homePageTmpl' });
  },
});
