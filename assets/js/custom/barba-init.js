const defaultAnimationOnce = (container) => {
	console.log('once')
	const mainContentWrapper = container.querySelectorAll("#primary");

	const tl = gsap.timeline({
		defaults: {
			duration: 0.9, ease: 'power3.out'
		}
	});
	return tl.
			fromTo(mainContentWrapper, { autoAlpha: 0},{autoAlpha: 1, duration: 2, onComplete:()=>{}});
}
const animationBeforeEnter = (container) => {
	/**
	 * Defaul animation and functions before content disapearing.
	*/
};

const defaultAnimationEnter = (container) => {
	/**
	 * Defaul animation for when page content is reveanilg
	 */
	console.log('enter')
	const mainContentWrapper = container.querySelectorAll("#primary");

	const tl = gsap.timeline({
		defaults: {
			duration: 0.9, ease: 'power3.out'
		}
	});

	return tl.
			fromTo(mainContentWrapper, { autoAlpha: 0},{autoAlpha: 1, duration: 2, onComplete:()=>{}});
//			call(activateCurrentMenu,[container],'<-=0.5').
//			call(scrollToContent);
//	return gsap.fromTo(container,{autoAlpha:0, duration: 2},{autoAlpha:1})
};
const defaultAnimationBeforeLeave = (container) => {
	/**
	 * Defaul animation and functions before content disapearing.
	*/

}
const defaultAnimationLeave = (container) => {
	/**
	 * Defaul animation for when page content is disapearing
	 */
	console.log("leave");
	const mainContentWrapper = container.querySelectorAll("#primary");

	const tl = gsap.timeline({
		defaults: {
			duration: 0.5, ease: 'power3.out'
		}
	});
	return tl
				.to(mainContentWrapper, { autoAlpha: 0});
};

barba.init({
	debug: true,
	transitions: [
		{
			name: 'default-transition',
			once({ next }) {
				// Add any functions you need to run when page loads.
				defaultAnimationOnce(next.container, false);
			},
			beforeLeave: ({ current }) => defaultAnimationBeforeLeave(current.container),
			leave: ({ current }) => defaultAnimationLeave(current.container),
			beforeEnter: ({ next }) => animationBeforeEnter(next.container),
			enter({ next }) {
				defaultAnimationEnter(next.container);
			},
		},
		// Add different rules for different types of pages with different layout and/or animation
		// {
		// 	name: 'from-projects-to-project-single',
		// 	from:{
		// 		namespace: ['projects_archive']
		// 	},
		// 	to:{
		// 		namespace: ['projects_single']
		// 	},
		// 	leave: ({ current }) => animationLeave(current.container),
		// 	enter({next}){
		// 		animationEnter(next.container);
		// 	}
		// },
	],
});
