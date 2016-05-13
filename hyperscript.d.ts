declare module 'hyperscript' {

	interface HyperScript {
		/** Creates an HTML element */
		(tagName: string, ...args: any[]) : HTMLElement;
		/** Cleans up any event handlers created via hyperscript */
		cleanup() : void;
		/** Returns a new hyperscript context */
		context() : HyperScript;
	}

	const H: HyperScript;
	export = H;
}
