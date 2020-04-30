'use strict';

$(() => { 
  $.get("https://jsonstorage.net/api/items/f89e0a84-ba60-4414-b8dc-8469fc14f4a8", 
    function(data, textStatus, jqXHR) 
    {
      let testContent = '';
      $('#tests').html('');
      $.each(data.feedbacks, function(index) {
        if(index===0){
          testContent += `<div class="carousel-item active text-center">        
          <img class="p-2" src="https://img.icons8.com/color/48/000000/user-group-man-woman.png"/>            
          <p class="h6 font-weight-normal text-white">${data.feedbacks[index].name}</p>
          <p class="h6 text-muted font-weight-light">${data.feedbacks[index].message}</p>
          </div>`;
        }else {
          testContent += `<div class="carousel-item text-center">        
                        <img class="p-2" src="https://img.icons8.com/color/48/000000/user-group-man-woman.png"/>            
                        <p class="h6 font-weight-normal text-white">${data.feedbacks[index].name}</p>
                        <p class="h6 text-muted font-weight-light">${data.feedbacks[index].message}</p>
                        </div>`;
        }
              
      });
  
      $('#tests').html(testContent);
    }
  );
  $('#feedback_form').submit((e) => {

    $('#my-form-button').html('Please Wait...');
    e.preventDefault();

    let testimonal = {
      name: $('#feedback_form').find('input[name="username"]').val(),
      email: $('#feedback_form').find('input[name="email"]').val(),
      message: $('#feedback_form').find('textarea[name="message"]').val()
    };

    // https://jsonstorage.net/api/items/f89e0a84-ba60-4414-b8dc-8469fc14f4a8


    
    $.get("https://jsonstorage.net/api/items/f89e0a84-ba60-4414-b8dc-8469fc14f4a8", 
    function(data, textStatus, jqXHR) 
    {
         data.feedbacks.push(testimonal);

      $.ajax({
        url:"https://jsonstorage.net/api/items/f89e0a84-ba60-4414-b8dc-8469fc14f4a8",
        type:"PUT",
        data: JSON.stringify(data),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function(data, textStatus, jqXHR){
          $('#my-form-button').html('SUBMIT');
          $('#feedback_form').toggleClass('d-none');
          $('#thanks_gap').toggleClass('d-none');
        },
        error: function(error) {
          $('#my-form-button').html('SUBMIT');
          $('#my-form-status').html('Something went wrong! Try again!');
        }
      }); 
    });    
      
  });


});