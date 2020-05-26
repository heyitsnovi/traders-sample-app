$$(document).on('page:init', '.page[data-name="home"]', function (e) {

 	if($$(document).find('.searchbar').length > 0){

			app.searchbar.create({
			  el: '.searchbar',
			  searchContainer: '.list',
			  searchIn: '.item-title,.item-subtitle',
			  on: {
			   
			  }
			});
 	}


   let fakedata =   window.get_users();

   let parsed_data = JSON.parse(fakedata);

   let template  = `{{#each people}}
						    <li>
						      <a href="#" class="item-link item-content">
						        <div class="item-media"><img src="{{avatar}}" width="80"/></div>
						        <div class="item-inner">
						          <div class="item-title-row">
						            <div class="item-title">{{id}}. {{first_name}} {{last_name}}</div>
						          
						          </div>
						          <div class="item-subtitle">{{email}}</div>
						          <div class="item-text"></div>
						        </div></a>
						        </li>
						        {{/each}}`;
					   		

    let listing_template = template;

    let compiled_listing_template = Template7.compile(listing_template);

    let context = {
        people: parsed_data.data
    };

    $$('.list-items-trade').html(compiled_listing_template(context));


	let allowInfinite = true;


 	let current_page = 1;

     
     $$('.infinite-scroll-content').on('infinite', function () {

 
		if (!allowInfinite) return;

 
		  allowInfinite = false;

 
		  setTimeout(function () {
 
		    allowInfinite = true;

		    current_page++;

		    if(current_page<=parsed_data.total_pages){

		    	
			 	   let next_fake_data =  window.get_users(current_page);

			 	   let next_parsed_data = JSON.parse(next_fake_data);
			 	 
			 	   let htmltemplate = '';
			 	   
			 	   for(let m=0; m<next_parsed_data.data.length;m++){

			 	   	htmltemplate+=`<li><a href="#" class="item-link item-content"><div class="item-media">`;
			        htmltemplate+="<img src='"+next_parsed_data.data[m].avatar+"' width=\"80\"></div>";
			        htmltemplate+=`<div class="item-inner"><div class="item-title-row">`;
			        htmltemplate+="<div class=\"item-title\">"+next_parsed_data.data[m].id+'. '+next_parsed_data.data[m].first_name+" "+next_parsed_data.data[m].last_name+"</div>";
			        htmltemplate+=`</div>`;
			        htmltemplate+="<div class=\"item-subtitle\">"+next_parsed_data.data[m].email+"</div>";
			        htmltemplate+=`<div class="item-text"></div></div></a></li>`; 
			        
			 		}

			 	   $$('.list ul').append(htmltemplate);

		    }else{

		    app.infiniteScroll.destroy('.infinite-scroll-content');
		      // Remove preloader
		      $$('.infinite-scroll-preloader').remove();
		      
		      return;

		    }
 
	 
		  }, 2000);

		});  

});