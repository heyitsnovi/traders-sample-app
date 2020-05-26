function get_users(page = ''){
	
	let concat_str = '';

	if(!page){
		concat_str = '';
	}else{
		concat_str = '?page='+page;
	}	

	let data = app.request({
	        url: 'https://reqres.in/api/users/'+concat_str,
	        type: 'GET',
	        async: false,
	        tryCount: 0,
	        retryLimit: 5,
	        timeout: 30000,
	        beforeSend: function(xhr) {

	        },
	        error: function(xhr, status) {
	 
	        },
	        complete: function() {

	        }
	    }).response;

	return data;
}