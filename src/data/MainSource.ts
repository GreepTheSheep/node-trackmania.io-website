import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs']);
export default new DocsSource({
	id: 'main',
	name: 'Main library',
	global: 'TMIO',
	repo: 'GreepTheSheep/node-trackmania.io',
	defaultTag: 'main',
	branchFilter: (branch: string) =>
		!branchBlacklist.has(branch) && !branch.startsWith('dependabot/') && !branch.startsWith('depfu/'),
	// tagFilter: (tag: string) => tag.replace(/^v/, ''),
});
