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
