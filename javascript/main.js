// fill in for Quantity Select El
for(i=1;i <= 100; i++){
	$('#productquantity').append('<option value="' + i + '">' + i + '</option>');
}

//change picture and capture product chosen
$('div.choice-window a').click(
	function(){

		var _this,
			productid,
			productname;

		_this		=	$(this);
		productid 	=	_this.find('img').attr('data-productid');
		productname =	_this.find('img').attr('data-productname');

		$('div.main-window img').attr('src','images/product-large-' + productid + '.jpg');

		$('#product-breadcrumbs-color').html(productname);

		$('#product-title-color').html(productname);

		$('div.main-window img').attr('data-productid',productid);

		$('div.choice-window img').each(
			function(i){
				if($(this).attr('data-productid') == productid){
					$(this).addClass('chosen');
				}
				else{
					$(this).removeClass('chosen');
				}
			}
		);		

	}
);

//cart modal and message
$('#product-addtocart').bind('click',
	function(){
		var productid,
			productname,
			productcolor,
			quantity;

		productid 	=	$('div.main-window img').find('img').attr('data-productid');
		productname = 	$('#productname-main').html();
		productcolor =	$('#product-title-color').html();
		quantity 	=	$('#productquantity').val();

		$('#cartmsg-quantity').html(quantity);
		$('#cartmsg-productname').html(productname);
		$('#cartmsg-producttype').html(productcolor);

	}
);

// change text when collapse link chosen
$('div.expandedtext #accordion button').bind('click',
	function(i){

		var _this,
			target;

		_this	=	$(this);
		target 	=	_this.attr('data-target');

		$('div.expandedtext #accordion button').each(

			function(i){
				if ($(this).attr('data-target') == target && $(this).hasClass('collapsed')){
					$(this).html('<i class="fas fa-caret-down"></i>Expanded');
				}
				else{
					$(this).html('<i class="fas fa-caret-right"></i>Collapsed');
				}
			}

		);

	}
);
