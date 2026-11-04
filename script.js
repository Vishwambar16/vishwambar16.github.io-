var G="https://github.com/Vishwambar16/";
var I={
in:'<svg class="i" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/></svg>',
gh:'<svg class="i" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 6.844c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
search:'<svg class="i s" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
ig:'<svg class="i s" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
mail:'<svg class="i s" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 7 8.5 6 8.5-6"/></svg>'};
document.querySelectorAll("[data-i]").forEach(function(e){e.innerHTML=I[e.dataset.i]});
var S=[
["Cloud (AWS)",[["EC2, S3, IAM, VPC, EBS",72],["Lambda, ELB, Auto Scaling, CloudFront",62]]],
["Networking",[["OSI, TCP/IP, DNS, HTTP/HTTPS",72],["Subnets, Routing, NAT/IGW, Security Groups",70]]],
["Containers &amp; DevOps",[["Docker, Dockerfile &amp; Compose",75],["Git &amp; GitHub",80],["CI/CD fundamentals",62],["Jenkins (learning)",50]]],
["Operating Systems",[["Linux (Ubuntu) &amp; SSH",75],["Windows",70]]],
["Programming &amp; Data",[["Python",72],["SQL / MySQL",70],["Java (basics)",50]]]
];
var P={
"p-notes-django":{t:"Notes App (Django): Docker &amp; Nginx",d:"A full-stack notes app, containerized with Docker and served through an Nginx reverse proxy on Linux.",tags:["Django","Python","Docker","Nginx","Linux"],repo:"Notes-app-django",
o:"A simple full-stack notes application built with React and Django, with the source code and setup guide published on GitHub. I containerized it with Docker and set up Nginx as a reverse proxy so the application is reachable on Linux.",
h:["Built with React and Django; source code and setup guide on GitHub","Docker image built and run as a container with port 8000 exposed","Nginx reverse proxy installed and configured on Linux"]},
"p-flask-mysql":{t:"Two-Tier Flask App with MySQL",d:"A Flask web app and a MySQL database running in separate Docker containers on a dedicated network.",tags:["Python","Flask","MySQL","Docker","Networking"],repo:null,
o:"A Python Flask web application that collects user input and stores and retrieves it from a MySQL database. The app and the database each run in their own Docker container.",
h:["Flask app that saves and reads user input from MySQL","Application and database containerized separately","Dedicated Docker network so the two containers can communicate"]},
"p-java-docker":{t:"Java Application Using Docker",d:"A Java app that prints a greeting with the current date and time, packaged with a Dockerfile.",tags:["Java","OpenJDK 17","Docker","Dockerfile"],repo:"Simple-java-docker-project",
o:"A Java application that displays a greeting with the current date and time, packaged into a Docker image so it runs the same way on any machine.",
h:["Dockerfile on an OpenJDK 17 Alpine base image using FROM, WORKDIR, COPY, RUN and CMD","Image built and run as a container","Practice with the container lifecycle"]},
"p-customer-analysis":{t:"Customer Segment Analysis",d:"Analysis of shopping behavior across demographics, categories and channels using Python, SQL and Power BI.",tags:["Python","SQL","Power BI","Jupyter"],repo:"customer-segment-analysis",
o:"A retail company wants to understand customer shopping behavior to improve sales, satisfaction and loyalty. This project explores how consumer data can reveal trends, improve engagement and sharpen marketing strategy.",
h:["Data cleaning and exploratory analysis with Pandas, NumPy, Matplotlib and Seaborn","Customer segmentation into new, returning and loyal groups","Impact of discounts, reviews, seasons and payment methods on sales","Power BI dashboard with sales trends, segments, channel performance and filters"],
f:["Add machine-learning prediction","Deploy the dashboard online","Automate the data pipeline"]},
"p-jenkins-practice":{t:"Jenkins Practice (demo-repo)",d:"A hands-on repository used to practice Jenkins jobs and CI/CD workflows.",tags:["Jenkins","CI/CD","Python","Git"],repo:"demo-repo",
o:"A practice repository I use to learn Jenkins and continuous integration. It is the source repo that Jenkins jobs build from while I experiment with CI/CD workflows.",
h:["Hands-on Jenkins practice","Python codebase used as the build target","Version-controlled with Git and GitHub"]}
};
function li(a){return a.map(function(x){return "<li>"+x+"</li>"}).join("")}
function tg(a){return '<div class="tags">'+a.map(function(x){return '<span class="tag">'+x+'</span>'}).join("")+'</div>'}
document.getElementById("skillGrid").innerHTML=S.map(function(g){
return '<div class="card"><h3>'+g[0]+'</h3>'+g[1].map(function(s){
return '<div class="sk"><div><span>'+s[0]+'</span><span>'+s[1]+'%</span></div><div class="track"><div class="fill" data-w="'+s[1]+'"></div></div></div>'}).join("")+'</div>'}).join("");
document.getElementById("projGrid").innerHTML=Object.keys(P).map(function(k){var p=P[k];
return '<a class="card proj" data-s="'+(p.t+" "+p.d+" "+p.tags.join(" ")).toLowerCase().replace(/&amp;/g,"and")+'" href="#'+k+'"><h3>'+p.t+'</h3><p>'+p.d+'</p>'+tg(p.tags)+'<span class="more">View project →</span></a>'}).join("");
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.style.width=e.target.dataset.w+"%";io.unobserve(e.target)}})},{threshold:.3});
document.querySelectorAll(".fill").forEach(function(f){io.observe(f)});
function route(){
var h=location.hash.slice(1),home=document.getElementById("home"),det=document.getElementById("detail");
if(P[h]){var p=P[h];
det.innerHTML='<a class="back" href="#projects">← Back to projects</a><p class="eyebrow">Project</p><h1>'+p.t+'</h1>'+tg(p.tags)+
'<h2>Overview</h2><p>'+p.o+'</p><h2>Highlights</h2><ul>'+li(p.h)+'</ul>'+(p.f?'<h2>Next steps</h2><ul>'+li(p.f)+'</ul>':"")+
'<div class="btns" style="margin-top:32px"><a class="btn pri" href="'+(p.repo?G+p.repo:G.slice(0,-1))+'" target="_blank" rel="noopener">'+(p.repo?"View on GitHub ↗":"My GitHub profile ↗")+'</a><a class="btn" href="#projects">All projects</a></div>';
document.title=p.t.replace("&amp;","&")+" · Vishwambar Waghamode";
home.classList.add("hide");det.classList.remove("hide");window.scrollTo(0,0);
}else{
home.classList.remove("hide");det.classList.add("hide");document.title="Vishwambar Waghamode · Cloud & DevOps Engineer";
var el=h&&h!=="top"?document.getElementById(h):null;
if(el)setTimeout(function(){el.scrollIntoView()},30);else if(!h)window.scrollTo(0,0);
}}
window.addEventListener("hashchange",route);route();
var rt=document.documentElement,tb=document.getElementById("theme");
try{var t=localStorage.getItem("th");if(t)rt.dataset.theme=t}catch(e){}
function eff(){return rt.dataset.theme||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}
function ico(){tb.textContent=eff()==="dark"?"☀️":"🌙"}ico();
tb.onclick=function(){var n=eff()==="dark"?"light":"dark";rt.dataset.theme=n;try{localStorage.setItem("th",n)}catch(e){}ico()};
var q=document.getElementById("q");
q.addEventListener("input",function(){var v=q.value.trim().toLowerCase(),n=0;
document.querySelectorAll("#projGrid .proj").forEach(function(c){var m=!v||c.dataset.s.indexOf(v)>-1;c.classList.toggle("hide",!m);if(m)n++});
document.getElementById("none").classList.toggle("hide",n>0)});
(function(){var el=document.querySelector("#name .typed");if(!el)return;var full=el.textContent,seen=false;
try{seen=sessionStorage.getItem("vw_intro")==="1";sessionStorage.setItem("vw_intro","1")}catch(e){}
if(seen||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
el.textContent="";el.classList.add("run");var i=0;
setTimeout(function tick(){i++;el.textContent=full.slice(0,i);if(i<full.length)setTimeout(tick,85);else setTimeout(function(){el.classList.remove("run")},1500)},350)})();
