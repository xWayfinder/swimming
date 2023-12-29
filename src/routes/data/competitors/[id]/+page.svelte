<script lang="ts">
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';

	export let data;

	const source: TableSource = {
		head: [
			'ID',
			'Full Name',
			'Age',
			'Distance',
			'Stroke',
			'Course',
			'Time',
			'Gender',
			'Date',
			'Meet',
			'Approved Event',
			'Verified Event'
		],
		body: tableMapperValues(data.props.competitorResults, [
			'raceResultId',
			'name',
			'age',
			'distance',
			'stroke',
			'course',
			'time',
			'gender',
			'date',
			'meet',
			'isApprovedEvent',
			'isVerifiedEvent'
		])
	};
</script>

<div class="p-4">
	<Table {source} />
</div>
