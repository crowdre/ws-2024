var selectedTz = document.querySelector("#timezone-offset");

const originalTime = Array.from(document.querySelectorAll("#session-time-local")).map(x => x.textContent);
var inputTime = document.querySelectorAll("#session-time-local");

selectedTz.addEventListener("change", function() {
  updateTime();
});


function updateTime(theTime) {
  
var selectedTz = document.querySelector("#timezone-offset");

for (let i = 0; i < originalTime.length; i++)
{
  var date = moment().format("YYYY-MM-DD");
  var stamp = date + "T" + originalTime[i] + "Z";
    
  var momentTime = moment(stamp);
  
  var tzTime = momentTime.clone().utcOffset(selectedTz.value);
  
  if (tzTime.format("MMM D") != momentTime.format("MMM D"))
  {
  	  var formattedTime = tzTime.format('HH:mm') + " (" + tzTime.format("MMM D") + ")";
  }
  else
  {
  	var formattedTime = tzTime.format('HH:mm');
  }
  
    
  inputTime[i].textContent = formattedTime;
}
}

updateTime();

