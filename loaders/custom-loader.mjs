export function resolve(specifier, parentModuleURL, defaultResolver) {
	const resolvedModule = defaultResolver(specifier, parentModuleURL);
	if (specifier === 'graphql') {
		resolvedModule.url = resolvedModule.url.replace('index.mjs', 'index.js');
		resolvedModule.format = 'cjs';
	}
	return resolvedModule;
}