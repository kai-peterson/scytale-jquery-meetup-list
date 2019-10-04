$(document).ready(readyNow);

let index = 0;
let otherIndex = 0;

function readyNow() {
    $('#addMeetup').on('click', insertEvent)
    $('#addMeetup').on('click', incrementTotal)
}


function insertEvent() {
    index++;
    let rowClass = 'class="row' + index + '"';
    let buttonClass = 'class="button' + index + '"';
    
    let group = $('#group').val();
    let date = $('#date').val();
    let newMeetup = $('<tr ' + rowClass + '><td>' + group + '</td><td>' + date + '</td><td><button ' + buttonClass + '>Delete</button></td></tr>')
    $('.tableBody').append(newMeetup);
    $('.button' + otherIndex).on('click', function() {
        otherIndex--;
        $('h3').text('Total Meetups: ' + otherIndex);
    });
    $('.button' + otherIndex).on('click', function() {
        $(this).closest('tr').remove();
    })
}

function incrementTotal() {
    otherIndex++;
    $('h3').text('Total Meetups: ' + otherIndex);
}