$(document).ready(readyNow);

let index = 0;


function readyNow() {
    $('#addMeetup').on('click', insertEvent)
    $('.delete').on('click', deleteEvent);
}


function insertEvent() {
    index++;
    let rowClass = 'class="row' + index + '"';
    let buttonClass = 'class="button' + index + '"';
    
    let group = $('#group').val();
    let date = $('#date').val();
    let newMeetup = $('<tr ' + rowClass + '><td>' + group + '</td><td>' + date + '</td><td><button ' + buttonClass + '>Delete</button></td></tr>')
    $('.tableBody').append(newMeetup); 
}

function deleteEvent() {
    console.log('.' + index);
    $('.row' + index).remove();
}
