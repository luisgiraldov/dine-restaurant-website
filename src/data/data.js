/* About images */
import farmSmall from "../images/homepage/enjoyable-place-mobile.jpg";
import farmSmall2x from "../images/homepage/enjoyable-place-mobile@2x.jpg";
import farmMedium from "../images/homepage/enjoyable-place-tablet.jpg";
import farmMedium2x from "../images/homepage/enjoyable-place-tablet@2x.jpg";
import farmLarge from "../images/homepage/enjoyable-place-desktop.jpg";
import farmLarge2x from "../images/homepage/enjoyable-place-desktop@2x.jpg";
import locallySourcedSmall from "../images/homepage/enjoyable-place-mobile.jpg";
import locallySourcedSmall2x from "../images/homepage/locally-sourced-mobile@2x.jpg";
import locallySourcedMedium from "../images/homepage/locally-sourced-tablet.jpg";
import locallySourcedMedium2x from "../images/homepage/locally-sourced-tablet@2x.jpg";
import locallySourcedLarge from "../images/homepage/locally-sourced-desktop.jpg";
import locallySourcedLarge2x from "../images/homepage/locally-sourced-desktop@2x.jpg";

/* Menu images */
import salmonSmall from "../images/homepage/salmon-mobile.jpg";
import salmonSmall2x from "../images/homepage/salmon-mobile@2x.jpg";
import salmonML from "../images/homepage/salmon-desktop-tablet.jpg";
import salmonML2x from "../images/homepage/salmon-desktop-tablet@2x.jpg";
import beefSmall from "../images/homepage/beef-mobile.jpg";
import beefSmall2x from "../images/homepage/beef-mobile@2x.jpg";
import beefML from "../images/homepage/beef-desktop-tablet.jpg";
import beefML2x from "../images/homepage/beef-desktop-tablet.jpg";
import chocolateSmall from "../images/homepage/chocolate-mobile.jpg";
import chocolateSmall2x from "../images/homepage/chocolate-mobile@2x.jpg";
import chocolateML from "../images/homepage/chocolate-desktop-tablet.jpg";
import chocolateML2x from "../images/homepage/chocolate-desktop-tablet@2x.jpg";

export const aboutData = [
	{
		id: 1,
		title: "Enjoyable place for all the family",
		text: "Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.",
		images: {
			small: farmSmall,
			small2x: farmSmall2x,
			medium: farmMedium,
			medium2x: farmMedium2x,
			large: farmLarge,
			large2x: farmLarge2x,
			alt: "Farm",
		},
	},
	{
		id: 2,
		title: "The most locally sourced food",
		text: "All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.",
		images: {
			small: locallySourcedSmall,
			small2x: locallySourcedSmall2x,
			medium: locallySourcedMedium,
			medium2x: locallySourcedMedium2x,
			large: locallySourcedLarge,
			large2x: locallySourcedLarge2x,
			alt: "Locally sourced food",
		},
	},
];

export const menuData = [
	{
		id: 3,
		title: "A few highlights from our menu",
		text: "We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.",
		images: {
			small: "",
			small2x: "",
			medium: "",
			medium2x: "",
			large: "",
			large2x: "",
			alt: "",
		}
	},
	{
		id: 4,
		title: "Seared Salmon Fillet",
		text: "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
		images: {
			small: salmonSmall,
			small2x: salmonSmall2x,
			medium: salmonML,
			medium2x: salmonML2x,
			large: salmonML,
			large2x: salmonML2x,
			alt: "Seared Salmon Fillet dish",
		},
	},
	{
		id: 5,
		title: "Rosemary Filet Mignon",
		text: "Our prime beef served to your taste with a delicious choice of seasonal sides.",
		images: {
			small: beefSmall,
			small2x: beefSmall2x,
			medium: beefML,
			medium2x: beefML2x,
			large: beefML,
			large2x: beefML2x,
			alt: "Rosemary Filet Mignon dish",
		},
	},
	{
		id: 6,
		title: "Summer Fruit Chocolate Mousse",
		text: "Creamy mousse combined with summer fruits and dark chocolate shavings.",
		images: {
			small: chocolateSmall,
			small2x: chocolateSmall2x,
			medium: chocolateML,
			medium2x: chocolateML2x,
			large: chocolateML,
			large2x: chocolateML2x,
			alt: "Summer Fruit Chocolate Mousse dish",
		},
	},
];
