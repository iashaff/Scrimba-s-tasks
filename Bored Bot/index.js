const activity = document.getElementById('activity');

document.getElementById('btn').addEventListener('click', () => {
  
  fetch('https://apis.scrimba.com/bored/api/activity')
  .then(response => response.json())
  .then(data => {
      activity.textContent = data.activity
    if (!activity.style.animation)
    {
      activity.style.setProperty('animation', 'typing 2s steps(30, end)') 
       } 
  })
    activity.style.removeProperty('animation') 
})

