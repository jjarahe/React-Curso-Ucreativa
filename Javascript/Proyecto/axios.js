<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
function makeGetRequest(path) {
	axios.get(path).then(
		(response) => {
			var result = response.data;
			console.log(result);
		},
		(error) => {
			console.log(error);
		}
	);
}
makeGetRequest('http://127.0.0.1:5000/test');
