import { fetchCompetitorResults } from '$lib/competitors';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const competitorResults = await fetchCompetitorResults(params.id);
	if (!competitorResults) error(404, 'Not found');
	return {
		props: {
			competitorResults
		}
	};
}
