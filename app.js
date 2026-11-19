const bank = [
 {id:"geo",name:"Geografía",icon:"🌎",desc:"Países, continentes y nuestro planeta.",items:[
  ["¿Cuál es el continente más extenso del planeta?",["África","Asia","Europa","Oceanía"],1,"Asia es el continente más extenso y también el más poblado."],
  ["¿Cuál es la capital de Japón?",["Seúl","Pekín","Tokio","Bangkok"],2,"Tokio es la capital de Japón, país ubicado en Asia oriental."],
  ["¿Qué océano se encuentra entre América y Europa?",["Índico","Pacífico","Ártico","Atlántico"],3,"El océano Atlántico separa principalmente América de Europa y África."]
 ]},
 {id:"history",name:"Historia",icon:"📜",desc:"Acontecimientos que cambiaron el mundo.",items:[
  ["¿En qué año se formó la Primera Junta Nacional de Gobierno de Chile?",["1810","1818","1879","1891"],0,"Se formó el 18 de septiembre de 1810. La independencia se declaró en 1818."],
  ["¿En qué país surgió la democracia ateniense?",["Roma","Grecia","Egipto","Persia"],1,"La democracia ateniense se desarrolló en la antigua ciudad-Estado de Atenas, en Grecia."],
  ["¿Qué civilización construyó Machu Picchu?",["Maya","Azteca","Inca","Fenicia"],2,"Machu Picchu fue construida por los incas en la región andina del actual Perú."]
 ]},
 {id:"economy",name:"Economía",icon:"💰",desc:"Dinero, comercio y decisiones financieras.",items:[
  ["¿Qué es la inflación?",["Una caída general de precios","Un aumento general de precios","Un tipo de impuesto","El ahorro de una empresa"],1,"La inflación es el aumento generalizado de los precios durante un período."],
  ["¿Qué significa ahorrar?",["Gastar todo el ingreso","Guardar parte del dinero para después","Pedir un préstamo","Comprar acciones siempre"],1,"Ahorrar es reservar una parte de los ingresos para necesidades o metas futuras."],
  ["¿Qué es la oferta en un mercado?",["La cantidad que vendedores están dispuestos a vender","El dinero de los bancos","El precio más alto","La demanda de compradores"],0,"La oferta es la cantidad de bienes o servicios que los productores desean vender a distintos precios."]
 ]},
 {id:"science",name:"Ciencia",icon:"🔬",desc:"Naturaleza, cuerpo humano y universo.",items:[
  ["¿Qué órgano bombea la sangre?",["Pulmón","Cerebro","Corazón","Hígado"],2,"El corazón es un músculo que impulsa la sangre por el sistema circulatorio."],
  ["¿Qué gas absorben las plantas principalmente durante la fotosíntesis?",["Oxígeno","Dióxido de carbono","Nitrógeno","Helio"],1,"Las plantas utilizan dióxido de carbono, agua y energía luminosa para producir azúcares."],
  ["¿Cuál es el planeta más cercano al Sol?",["Venus","Tierra","Marte","Mercurio"],3,"Mercurio es el planeta más cercano al Sol."]
 ]},
 {id:"society",name:"Sociedad",icon:"⚖️",desc:"Instituciones, ciudadanía y convivencia.",items:[
  ["¿Cuál es la función principal de una constitución?",["Fijar las reglas fundamentales del Estado","Elegir a todos los alcaldes","Definir los precios","Administrar empresas privadas"],0,"Una constitución establece la organización del Estado, sus poderes y derechos fundamentales."],
  ["¿Qué significa votar en una democracia?",["Pagar un impuesto","Participar en una elección","Aprobar una ley individualmente","Ser parte de un tribunal"],1,"El voto es una forma de participación ciudadana para elegir representantes o decidir asuntos públicos."]
 ]},
 {id:"military",name:"Conocimientos militares",icon:"🪖",desc:"Historia, organización, orientación y logística.",items:[
  ["¿Qué instrumento permite orientarse usando el campo magnético terrestre?",["Barómetro","Brújula","Termómetro","Cronómetro"],1,"La brújula señala direcciones respecto del norte magnético y ayuda a orientarse."],
  ["En cartografía, ¿qué representa la escala de un mapa?",["La altura de las montañas","La relación entre distancia del mapa y distancia real","La temperatura del lugar","La dirección del viento"],1,"La escala indica cuánto se redujeron las distancias reales para representarlas en el mapa."]
 ]},
 {id:"logic",name:"Lógica y tecnología",icon:"🧩",desc:"Razonamiento, patrones e innovación.",items:[
  ["Si todos los robles son árboles, ¿qué afirmación es correcta?",["Todos los árboles son robles","Un roble es un árbol","Ningún roble es árbol","Los robles son animales"],1,"Si todos los robles pertenecen al grupo de los árboles, entonces cada roble es un árbol."],
  ["¿Qué significa la sigla CPU en informática?",["Unidad Central de Procesamiento","Control Personal Universal","Código Principal de Usuario","Centro de Programas Unidos"],0,"CPU significa Central Processing Unit, o unidad central de procesamiento."]
 ]}
];
const $=s=>document.querySelector(s);
let current=null, qIndex=0, correct=0, answered=0, xp=Number(localStorage.mmXp||0), total=Number(localStorage.mmDone||0), streak=Number(localStorage.mmStreak||0);
function save(){localStorage.mmXp=xp;localStorage.mmDone=total;localStorage.mmStreak=streak;renderStats()}
function renderStats(){$("#xp").textContent=xp;$("#done").textContent=total;$("#streak").textContent=streak;const level=Math.floor(xp/100)+1;$("#levelPill").textContent="Nivel "+level;$("#progressBar").style.width=(xp%100)+"%";$("#progressText").textContent=`${xp%100}/100 XP para el siguiente nivel.`}
function renderCategories(){$("#categories").innerHTML=bank.map(c=>`<button class="category" data-id="${c.id}"><span class="arrow">↗</span><span class="emoji">${c.icon}</span><strong>${c.name}</strong><small>${c.desc}</small></button>`).join("");document.querySelectorAll(".category").forEach(b=>b.onclick=()=>start(b.dataset.id))}
function start(id){current=bank.find(c=>c.id===id);qIndex=0;correct=0;$("#quiz").classList.remove("hidden");$("#quiz").scrollIntoView({behavior:"smooth",block:"start"});showQuestion()}
function showQuestion(){$("#nextBtn").onclick=advanceQuestion;const item=current.items[qIndex];$("#quizCategory").textContent=current.name.toUpperCase();$("#questionCount").textContent=`PREGUNTA ${qIndex+1} DE ${current.items.length}`;$("#question").textContent=item[0];$("#answers").innerHTML=item[1].map((a,i)=>`<button class="answer">${String.fromCharCode(65+i)} · ${a}</button>`).join("");$("#explanation").classList.add("hidden");$("#nextBtn").classList.add("hidden");[...document.querySelectorAll(".answer")].forEach((b,i)=>b.onclick=()=>choose(i))}
function choose(i){const item=current.items[qIndex];const buttons=[...document.querySelectorAll(".answer")];buttons.forEach((b,j)=>{b.disabled=true;if(j===item[2])b.classList.add("correct");else if(j===i)b.classList.add("wrong")});const ok=i===item[2];if(ok){correct++;xp+=10;streak++}else streak=0;answered++;total++;save();$("#explanation").textContent=(ok?"¡Correcto! ":"Vamos aprendiendo. ")+item[3];$("#explanation").classList.remove("hidden");$("#nextBtn").textContent=qIndex===current.items.length-1?"Terminar categoría":"Siguiente pregunta →";$("#nextBtn").classList.remove("hidden")}
function advanceQuestion(){if(qIndex<current.items.length-1){qIndex++;showQuestion()}else{const pct=Math.round(correct/current.items.length*100);$("#quizCategory").textContent="CATEGORÍA COMPLETADA";$("#questionCount").textContent=`RESULTADO: ${correct}/${current.items.length} CORRECTAS`;$("#question").textContent=pct>=70?"¡Buen trabajo! Sigue avanzando.":"¡Buen intento! Cada ronda te deja algo nuevo.";$("#answers").innerHTML="";$("#explanation").textContent=`Has ganado ${correct*10} puntos de experiencia. Repasa las explicaciones y vuelve cuando quieras.`;$("#explanation").classList.remove("hidden");$("#nextBtn").textContent="Volver a categorías";$("#quiz").classList.add("hidden");renderCategories();$("#categories").scrollIntoView({behavior:"smooth"})}}
$("#closeQuiz").onclick=()=>$("#quiz").classList.add("hidden");
if("serviceWorker" in navigator && location.protocol.startsWith("http"))navigator.serviceWorker.register("./sw.js").catch(()=>{});
renderStats();renderCategories();