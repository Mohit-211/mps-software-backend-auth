import  systemRoute from './system.route';
import  countryRoute from './country.route';
import  roleRoute from './role.route';
import  languageRoute from './language.route';
import  timezoneRoute from './timezone.route';
import faqRoute from './faq.route';
import supportRoute from './support.route';
import subscriptionRoutes from './subscription.route';
import contactUsRoutes from './contactUs.route'


const commonRoutes = [
	{
		path: '/system',
		route: systemRoute,
	},
	{
		path: '/countries',
		route: countryRoute,
	},
	{
		path: '/roles',
		route: roleRoute,
	},
	{
		path: '/languages',
		route: languageRoute,
	},
	{
		path: '/timezones',
		route: timezoneRoute,
	},
	{
		path: '/faqs',
		route: faqRoute,
	},
	{
		path: '/supports',
		route: supportRoute
	},
	{
		path: '/subscription',
		route: subscriptionRoutes
	},
	{
		path: '/contact-us',
		route: contactUsRoutes
	},
];

export default commonRoutes;
