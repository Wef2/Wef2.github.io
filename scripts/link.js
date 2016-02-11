var lab = document.getElementById('toGithubLab');
var scheduler = document.getElementById('toGithubScheduler');

lab.addEventListener("mouseover", labMouseOver);
lab.addEventListener("click", labClick);
scheduler.addEventListener("mouseover",schedulerMouseOver);
scheduler.addEventListener("click", schedulerClick);

function labMouseOver(){
  lab.style.cursor = "pointer";
}

function labClick(){
  window.open("https://github.com/Wef2/LabWeb");
}

function schedulerMouseOver(){
  scheduler.style.cursor = "pointer";
}

function schedulerClick(){
  window.open("https://github.com/Wef2/Scheduler")
}
