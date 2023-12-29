<script lang="ts">
	import { fetchAllCompetitors } from '$lib/competitors';
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';

	const competitors = fetchAllCompetitors();
	const source: TableSource = {
		head: ['ID', 'Full Name', 'Club', 'Results'],
		body: tableMapperValues(competitors, ['participantId', 'fullName', 'club', 'results'])
	};
</script>

<div class="p-4">
	<Table {source} />
</div>
