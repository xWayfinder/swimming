<script lang="ts">
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';

	import type { RaceMeetResult } from '$lib/competitors.js';
	export let data;

	function arrayToCSV(data: RaceMeetResult[]) {
		// Extract headers
		const headers = Object.keys(data[0]).join(',');

		// Map each object to a CSV string
		const rows = data.map((obj) => Object.values(obj).join(',')).join('\n');

		return headers + '\n' + rows;
	}

	function createTemporaryTextarea(content: string) {
		const textarea = document.createElement('textarea');
		textarea.value = content;
		document.body.appendChild(textarea);
		return textarea;
	}

	function copyToClipboard(element: HTMLTextAreaElement): void {
		element.select();
		document.execCommand('copy');
		element.remove(); // Cleanup
	}

	function downloadCSV(blob: Blob, filename: string): void {
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	}

	const csvData = arrayToCSV(data.props.competitorResults);
	const textarea = createTemporaryTextarea(csvData);
	const copy = () => {
		copyToClipboard(textarea);
	};

	const download = () => {
		const blob = new Blob([csvData], { type: 'text/csv' });
		downloadCSV(blob, 'data.csv');
	};

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

<div class="p-4 flex flex-col gap-4">
	<div class="flex gap-4">
		<button class="btn variant-filled" on:click={copy}>Copy CSV to Clipboard</button>
		<button class="btn variant-filled" on:click={download}>Download as CSV</button>
	</div>
	<Table {source} />
</div>
