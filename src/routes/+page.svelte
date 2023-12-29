<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full p-4 flex flex-col gap-8">
	<h1 class="h1">APIs: swimming.org.au</h1>
	<div>
		These are the apis powering <a href="https://results.swimming.org.au/portal/"
			>https://results.swimming.org.au/portal/</a
		>
	</div>

	<div class="flex flex-col gap-4">
		<h2 class="h2">Swim meet results</h2>
		<div></div>

		<div class="grid grid-cols-4 gap-2">
			<p class="col-span-4 font-bold">Base URL:</p>
			<code class="col-span-4"
				>https://sal-sc-results-prod-app.azurewebsites.net/api/public/results/results</code
			>
			<p class="col-span-4 font-bold">Query Parameters:</p>

			<p class="col-span-1">
				The participant ID <br />
				<span class=" text-warning-500"> Use Swimmer Search API to find this id </span>
			</p>
			<code class="col-span-3">participantId=41276895-12b0-e811-a9c7-000d3ad1c507</code>
			<p class="col-span-1">The page number of the results</p>
			<code class="col-span-3">pageNumber=1</code>
			<p class="col-span-1">Sort the results by date</p>
			<code class="col-span-3">sortDate=true</code>
			<p class="col-span-1">Sort the results by time</p>
			<code class="col-span-3">sortTime=true</code>
			<p class="col-span-1">The number of results per page</p>
			<code class="col-span-3">pageSize=1000</code>
		</div>

		<div class="flex flex-col gap-8">
			<h3 class="h3">Examples</h3>
			<div class="card variant-glass-surface rounded-lg">
				<header class="card-header">
					<div class="font-bold">Example: Ethan</div>
				</header>
				<section class="p-4">
					<a
						class="font-mono"
						href="https://sal-sc-results-prod-app.azurewebsites.net/api/public/results/results?pageNumber=1&sortDate=true&pageSize=1000&participantId=41276895-12b0-e811-a9c7-000d3ad1c507"
						>https://sal-sc-results-prod-app.azurewebsites.net/api/public/results/results?pageNumber=1&sortDate=true&pageSize=1000&participantId=41276895-12b0-e811-a9c7-000d3ad1c507</a
					>
				</section>
			</div>
			<div class="card variant-glass-surface rounded-lg">
				<header class="card-header">
					<div class="font-bold">Example: Eloise</div>
				</header>
				<section class="p-4">
					<a
						class="font-mono"
						href="https://sal-sc-results-prod-app.azurewebsites.net/api/public/results/results?pageNumber=1&sortDate=true&pageSize=1000&participantId=248ca297-0e93-4aec-b4e9-a06ab0f7b02d"
						>https://sal-sc-results-prod-app.azurewebsites.net/api/public/results/results?pageNumber=1&sortDate=true&pageSize=1000&participantId=248ca297-0e93-4aec-b4e9-a06ab0f7b02d</a
					>
				</section>
			</div>
		</div>
	</div>
	<div class="flex flex-col gap-4">
		<h2 class="h2">Swimmer Search</h2>

		<div class="grid grid-cols-4 gap-2">
			<p class="col-span-4 font-bold">Base URL:</p>
			<code class="col-span-4"
				>https://sal-sc-results-prod-app.azurewebsites.net/api/public/results/swimmers</code
			>
			<p class="col-span-4 font-bold">Query Parameters:</p>

			<p class="col-span-1">The url safe (escaped) search term</p>
			<code class="col-span-3">searchTerm=Eloise%20Ravensdale</code>
		</div>

		<div class="flex flex-col gap-8">
			<h3 class="h3">Examples</h3>
			<div class="card variant-glass-surface rounded-lg">
				<header class="card-header">
					<div class="font-bold">Example: Find both Ethan and Eloise</div>
				</header>
				<section class="p-4">
					<a
						class="font-mono"
						href="https://sal-sc-results-prod-app.azurewebsites.net/api/public/results/swimmers?searchTerm=Ravensdale"
						>https://sal-sc-results-prod-app.azurewebsites.net/api/public/results/swimmers?searchTerm=Ravensdale</a
					>
				</section>
			</div>
		</div>
	</div>
</div>
