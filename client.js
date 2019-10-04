$(document).ready(readyNow);

let index = 0;
let otherIndex = 0;

function readyNow() {
    $('#addMeetup').on('click', insertEvent)
    $('#addMeetup').on('click', incrementTotal)
    $('tbody').on('click', '.deleteButton', decrementTotal)
}


function insertEvent() {
    index++;
    let rowClass = 'class="row' + index + '"';
    let buttonClass = 'class="button' + index + '"';
    
    let group = $('#group').val();
    let date = $('#date').val();
    let newMeetup = $('<tr ' + rowClass + '><td>' + group + '</td><td>' + date + '</td><td><button class="deleteButton">Delete</button></td></tr>')
    $('.tableBody').append(newMeetup);
    
}

function incrementTotal() {
    otherIndex++;
    $('h3').text('Total Meetups: ' + otherIndex);
}

function decrementTotal() {
    $(this).closest('tr').remove();
    otherIndex--;
    $('h3').text('Total Meetups: ' + otherIndex);
}

// closest() targets the closest parent element that matches
// parent() targets the direct parent element
// childre