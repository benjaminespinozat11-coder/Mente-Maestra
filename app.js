const territories=[
{id:'geo',name:'Geografía',icon:'⌖',desc:'Países, mapas y planeta',color:'blue',q:[
['¿Cuál es el continente más extenso?', ['África','Asia','Europa','Oceanía'],1,'Asia es el continente más extenso del planeta.'],
['¿Cuál es la capital de Canadá?',['Toronto','Vancouver','Ottawa','Montreal'],2,'Ottawa es la capital de Canadá.'],
['¿Qué océano es el más grande?',['Atlántico','Índico','Ártico','Pacífico'],3,'El Pacífico cubre más superficie que cualquier otro océano.'],
['¿En qué país se encuentra la ciudad de Petra?',['Egipto','Jordania','Grecia','Turquía'],1,'Petra es una antigua ciudad excavada en roca, ubicada en Jordania.'],
['¿Cuál es el desierto cálido más grande?',['Sahara','Gobi','Atacama','Kalahari'],0,'El Sahara se extiende por gran parte del norte de África.']]},
{id:'hist',name:'Historia',icon:'⌛',desc:'Civilizaciones y acontecimientos',q:[
['¿En qué año se formó la Primera Junta de Gobierno de Chile?',['1810','1818','1879','1891'],0,'Se formó el 18 de septiembre de 1810. La independencia se declaró en 1818.'],
['¿Qué civilización construyó Machu Picchu?',['Maya','Azteca','Inca','Fenicia'],2,'Machu Picchu fue construida por los incas en los Andes peruanos.'],
['¿En qué país surgió la democracia ateniense?',['Roma','Grecia','Egipto','Persia'],1,'La democracia ateniense se desarrolló en la antigua Grecia.'],
['¿En qué año terminó la Segunda Guerra Mundial?',['1939','1942','1945','1950'],2,'La guerra terminó en 1945.'],
['¿Qué muro cayó en 1989?',['Muro de Adriano','Muro de Berlín','Gran Muralla','Muro de los Lamentos'],1,'La caída del Muro de Berlín fue un símbolo del fin de la división de Alemania.']]},
{id:'science',name:'Ciencia',icon:'⌬',desc:'Naturaleza, espacio y cuerpo',q:[
['¿Qué órgano bombea la sangre?',['Pulmón','Cerebro','Corazón','Hígado'],2,'El corazón impulsa la sangre por el sistema circulatorio.'],
['¿Qué gas absorben las plantas en la fotosíntesis?',['Oxígeno','Dióxido de carbono','Nitrógeno','Helio'],1,'Las plantas utilizan dióxido de carbono, agua y luz para producir azúcares.'],
['¿Cuál es el planeta más cercano al Sol?',['Venus','Tierra','Marte','Mercurio'],3,'Mercurio es el planeta más cercano al Sol.'],
['¿Cuál es la unidad básica de los seres vivos?',['Átomo','Célula','Tejido','Órgano'],1,'La célula es la unidad estructural y funcional básica de la vida.'],
['¿Qué fuerza nos mantiene sobre la superficie terrestre?',['Fricción','Magnetismo','Gravedad','Electricidad'],2,'La gravedad atrae los objetos hacia el centro de la Tierra.']]},
{id:'culture',name:'Cultura general',icon:'✧',desc:'Un poco de todo, sin fronteras',q:[
['¿Cuántos lados tiene un hexágono?',['Cinco','Seis','Siete','Ocho'],1,'Un hexágono es un polígono de seis lados.'],
['¿Cuál es el idioma con más hablantes nativos?',['Inglés','Español','Chino mandarín','Hindi'],2,'El chino mandarín es el idioma con más hablantes nativos.'],
['¿Cuántos colores se suelen distinguir en el arcoíris?',['Cinco','Seis','Siete','Ocho'],2,'Tradicionalmente se describen siete colores.'],
['¿Qué instrumento mide la temperatura?',['Barómetro','Termómetro','Higrómetro','Anemómetro'],1,'El termómetro mide la temperatura.'],
['¿Cuántos minutos tiene una hora y media?',['60','75','90','120'],2,'Una hora son 60 minutos; media hora son 30.']]},
{id:'economy',name:'Economía',icon:'◇',desc:'Dinero y decisiones cotidianas',q:[
['¿Qué es la inflación?',['Una caída general de precios','Un aumento general de precios','Un impuesto','Un tipo de ahorro'],1,'La inflación es el aumento generalizado de los precios durante un período.'],
['¿Qué significa ahorrar?',['Gastar todo','Guardar parte del dinero','Pedir un préstamo','Comprar siempre'],1,'Ahorrar es reservar parte de los ingresos para metas o necesidades futuras.'],
['¿Qué es un presupuesto?',['Una lista de ingresos y gastos','Un tipo de moneda','Un crédito','Un impuesto'],0,'Un presupuesto permite planificar y controlar ingresos y gastos.'],
['¿Qué es el trueque?',['Comprar con tarjeta','Intercambiar bienes o servicios','Pedir un crédito','Pagar impuestos'],1,'El trueque consiste en intercambiar bienes o servicios sin usar dinero como medio de pago.'],
['¿Qué institución emite billetes y monedas en Chile?',['Banco Central de Chile','SII','BancoEstado','Tesorería General'],0,'El Banco Central de Chile tiene la potestad exclusiva de emitir billetes y acuñar monedas.']]},
{id:'sports',name:'Deportes',icon:'◎',desc:'Juegos, reglas y grandes eventos',q:[
['¿Cuántos jugadores por equipo hay en cancha en el fútbol?',['9','10','11','12'],2,'Cada equipo juega con once futbolistas en cancha.'],
['¿Cada cuántos años se celebran normalmente los Juegos Olímpicos de verano?',['2','3','4','5'],2,'Los Juegos Olímpicos de verano se celebran cada cuatro años.'],
['¿En qué deporte se utiliza un birdie?',['Tenis','Bádminton','Golf','Vóleibol'],1,'El birdie es el volante utilizado en el bádminton.'],
['¿Cuántos puntos vale un triple en baloncesto?',['1','2','3','4'],2,'Un lanzamiento convertido desde fuera de la línea de triple vale tres puntos.'],
['¿En qué superficie se disputa Roland Garros?',['Césped','Arcilla','Dura','Madera'],1,'Roland Garros se juega sobre pistas de tierra batida o arcilla.']]},
{id:'arts',name:'Arte y entretenimiento',icon:'✺',desc:'Música, cine y creatividad',q:[
['¿Quién pintó La noche estrellada?',['Claude Monet','Vincent van Gogh','Pablo Picasso','Salvador Dalí'],1,'Vincent van Gogh pintó La noche estrellada en 1889.'],
['¿Qué familia de instrumentos incluye al violín?',['Viento','Percusión','Cuerda','Electrónicos'],2,'El violín es un instrumento de cuerda frotada.'],
['¿Cómo se llama el arte de doblar papel?',['Origami','Mosaico','Grabado','Collage'],0,'Origami es el arte japonés de plegar papel.'],
['¿Qué significa la palabra fotografía en su origen griego?',['Pintar con luz','Escribir música','Mirar lejos','Copiar sonidos'],0,'La palabra se forma a partir de raíces griegas asociadas a luz y escritura.'],
['¿Qué instrumento tiene teclas blancas y negras?',['Arpa','Piano','Trompeta','Flauta'],1,'El piano produce sonido mediante martillos que golpean cuerdas.']]},
{id:'society',name:'Sociedad',icon:'⬡',desc:'Ciudadanía, derechos e instituciones',q:[
['¿Cuál es la función principal de una constitución?',['Fijar reglas fundamentales del Estado','Elegir alcaldes','Definir precios','Administrar empresas'],0,'Una constitución organiza el Estado y establece derechos y principios fundamentales.'],
['¿Qué significa votar en una democracia?',['Pagar un impuesto','Participar en una elección','Ser juez','Aprobar toda ley'],1,'El voto es una forma de participación ciudadana.'],
['¿Qué organismo de la ONU se enfoca en la salud mundial?',['UNICEF','OMS','UNESCO','OIT'],1,'La Organización Mundial de la Salud coordina asuntos internacionales de salud pública.'],
['¿Qué es el voluntariado?',['Trabajo remunerado obligatorio','Actividad voluntaria en beneficio de otros','Un impuesto','Una elección'],1,'El voluntariado es una actividad realizada libremente para contribuir a una causa o comunidad.'],
['¿Qué significa patrimonio cultural?',['Solo edificios nuevos','Bienes y expresiones heredados de una comunidad','Únicamente dinero','Recursos naturales sin relación humana'],1,'Incluye monumentos, tradiciones, conocimientos y expresiones que una comunidad valora.']]},
{id:'logic',name:'Lógica',icon:'⌘',desc:'Patrones, ingenio y razonamiento',q:[
['Si todos los robles son árboles, ¿qué afirmación es correcta?',['Todos los árboles son robles','Un roble es un árbol','Ningún roble es árbol','Los robles son animales'],1,'La afirmación indica que cada roble pertenece al grupo de los árboles.'],
['¿Qué número sigue? 2, 4, 8, 16…',['18','24','30','32'],3,'Cada número es el doble del anterior.'],
['Si hoy es martes, ¿qué día será dentro de 10 días?',['Jueves','Viernes','Sábado','Domingo'],1,'Siete días después será martes; tres días más tarde, viernes.'],
['¿Cuál palabra no pertenece al grupo?',['Manzana','Pera','Zanahoria','Durazno'],2,'La zanahoria es una hortaliza; las demás son frutas.'],
['¿Cuántos meses tienen al menos 28 días?',['1','2','6','12'],3,'Todos los meses tienen al menos 28 días.']]},
{id:'tech',name:'Tecnología',icon:'⌁',desc:'Inventos y mundo digital',q:[
['¿Qué significa CPU?',['Unidad Central de Procesamiento','Control Personal Universal','Código Principal de Usuario','Centro de Programas'],0,'CPU significa Unidad Central de Procesamiento.'],
['¿Qué es una contraseña segura?',['Tu nombre','123456','Una frase larga y única','Tu fecha de nacimiento'],2,'Una contraseña larga, única y difícil de adivinar protege mejor tus cuentas.'],
['¿Qué es el software?',['Partes físicas del equipo','Programas e instrucciones','La batería','La pantalla'],1,'Software es el conjunto de programas e instrucciones de un sistema.'],
['¿Qué tecnología permite conectar dispositivos cercanos sin cables?',['Bluetooth','HDMI','Ethernet','USB'],0,'Bluetooth permite comunicación inalámbrica a corta distancia.'],
['¿Qué es una copia de seguridad?',['Un archivo temporal','Una copia de datos para recuperarlos','Un virus','Una actualización obligatoria'],1,'Una copia de seguridad permite recuperar información si se pierde o daña el original.']]},
{id:'nature',name:'Naturaleza',icon:'❋',desc:'Animales, ecosistemas y planeta',q:[
['¿Cuál es el mamífero más grande del mundo?',['Elefante africano','Ballena azul','Jirafa','Tiburón ballena'],1,'La ballena azul es el animal más grande conocido.'],
['¿Qué proceso permite a las plantas producir su alimento usando luz?',['Respiración','Fotosíntesis','Fermentación','Digestión'],1,'La fotosíntesis transforma energía luminosa en energía química.'],
['¿Cómo se llama el conjunto de seres vivos y su entorno?',['Ecosistema','Continente','Atmósfera','Mineral'],0,'Un ecosistema incluye organismos y los elementos no vivos con los que interactúan.'],
['¿Qué animal es un anfibio?',['Lagarto','Rana','Águila','Delfín'],1,'Las ranas son anfibios: parte de su ciclo vital suele desarrollarse en el agua.'],
['¿Cuál es una fuente de energía renovable?',['Carbón','Petróleo','Solar','Gas natural'],2,'La energía solar proviene de la radiación del Sol y se renueva naturalmente.']]},
{id:'military',name:'Historia y orientación',icon:'✥',desc:'Cartografía, historia y navegación',q:[
['¿Qué instrumento permite orientarse usando el campo magnético terrestre?',['Barómetro','Brújula','Termómetro','Cronómetro'],1,'La brújula permite orientarse respecto del norte magnético.'],
['¿Qué representa la escala de un mapa?',['Altura de montañas','Relación entre distancia del mapa y distancia real','Temperatura','Dirección del viento'],1,'La escala indica cuánto se redujeron las distancias reales en el mapa.'],
['¿Cuántos grados tiene una vuelta completa?',['90°','180°','270°','360°'],3,'Una vuelta completa equivale a 360 grados.'],
['¿Qué punto cardinal está opuesto al este?',['Norte','Sur','Oeste','Noreste'],2,'El oeste se encuentra en dirección opuesta al este.'],
['¿Qué representa una leyenda en un mapa?',['La historia del autor','El significado de símbolos y colores','La escala únicamente','El clima futuro'],1,'La leyenda explica los símbolos y colores utilizados en el mapa.']]}
];
const $=s=>document.querySelector(s);const store={xp:+localStorage.mmXp||0,done:+localStorage.mmDone||0,streak:+localStorage.mmStreak||0};let game=null,tick=null,seconds=20;
function persist(){localStorage.mmXp=store.xp;localStorage.mmDone=store.done;localStorage.mmStreak=store.streak;renderStats()}
function renderStats(){const level=Math.floor(store.xp/100)+1;$('#xp').textContent=store.xp;$('#done').textContent=store.done;$('#streak').textContent=store.streak;$('#levelPill').textContent='NIVEL '+level;$('#progressBar').style.width=(store.xp%100)+'%';$('#progressText').textContent=(store.xp%100)+' / 100 XP para nivel '+(level+1)}
function renderCategories(){$('#categoryCount').textContent=territories.length+' territorios';$('#categories').innerHTML=territories.map(t=>`<button class="category" data-id="${t.id}"><span class="cat-arrow">↗</span><span class="cat-icon">${t.icon}</span><b>${t.name}</b><small>${t.desc}</small></button>`).join('');document.querySelectorAll('.category').forEach(b=>b.onclick=()=>start('category',b.dataset.id))}
function allQuestions(){return territories.flatMap(t=>t.q.map((q,i)=>({q,category:t.name,id:t.id,index:i})));}
function shuffle(a){const x=[...a];for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]]}return x}
function dailyQuestions(){const d=new Date();const seed=d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate();let x=allQuestions();let n=seed%x.length;return [...x.slice(n),...x.slice(0,n)].slice(0,10)}
function start(mode='mix',id=null){clearInterval(tick);let qs=mode==='category'?territories.find(t=>t.id===id).q.map((q,i)=>({q,category:territories.find(t=>t.id===id).name,index:i})):mode==='daily'?dailyQuestions():shuffle(allQuestions()).slice(0,mode==='survival'?allQuestions().length:10);game={mode,questions:qs,index:0,correct:0,score:0,finished:false,answered:false};$('#quiz').classList.remove('hidden');$('#quiz').scrollIntoView({behavior:'smooth',block:'start'});showQuestion()}
function showQuestion(){const item=game.questions[game.index];game.answered=false;$('#quizMode').textContent=({mix:'RONDA DE CONOCIMIENTO',category:'TERRITORIO · '+item.category.toUpperCase(),daily:'MISIÓN DEL DÍA',survival:'MODO SUPERVIVENCIA',timed:'DESAFÍO CONTRARRELOJ'})[game.mode];$('#questionCount').textContent=`PREGUNTA ${game.index+1} DE ${game.mode==='survival'?'∞':game.questions.length}`;$('#quizCategory').textContent=item.category.toUpperCase();$('#question').textContent=item.q[0];$('#answers').innerHTML=item.q[1].map((a,i)=>`<button class="answer"><span class="letter">${'ABCD'[i]}</span>${a}</button>`).join('');$('#explanation').classList.add('hidden');$('#nextBtn').classList.add('hidden');$('#roundScore').textContent='✧ '+game.score+' XP';$('#timer').classList.toggle('hidden',game.mode!=='timed');document.querySelectorAll('.answer').forEach((b,i)=>b.onclick=()=>choose(i));if(game.mode==='timed')startTimer();else clearInterval(tick)}
function startTimer(){clearInterval(tick);seconds=20;$('#timer').textContent=seconds;tick=setInterval(()=>{seconds--;$('#timer').textContent=seconds;if(seconds<=0){clearInterval(tick);if(!game.answered)choose(-1)}},1000)}
function choose(i){if(game.answered||game.finished)return;game.answered=true;clearInterval(tick);const item=game.questions[game.index],ok=i===item.q[2];document.querySelectorAll('.answer').forEach((b,j)=>{b.disabled=true;if(j===item.q[2])b.classList.add('correct');else if(j===i)b.classList.add('wrong')});if(ok){game.correct++;game.score+=10;store.xp+=10;store.streak++}else{store.streak=0}store.done++;persist();$('#roundScore').textContent='✧ '+game.score+' XP';$('#explanation').textContent=(ok?'¡Respuesta correcta! ':'Esta vez no. ')+item.q[3];$('#explanation').classList.remove('hidden');$('#nextBtn').textContent=game.mode==='survival'&&!ok?'Ver resultado':game.index===game.questions.length-1?'Ver resultado':'Siguiente pregunta';$('#nextBtn').classList.remove('hidden');if(game.mode==='survival'&&!ok)game.finished=true}
function advance(){if(game.finished||game.index===game.questions.length-1){finish();return}game.index++;showQuestion()}
function finish(){clearInterval(tick);game.finished=true;const total=game.index+1,pct=Math.round(game.correct/total*100);$('#quizMode').textContent='RONDA COMPLETADA';$('#questionCount').textContent='RESULTADO FINAL';$('#quizCategory').textContent=game.correct+' DE '+total+' CORRECTAS';$('#question').textContent=pct>=80?'¡Excelente dominio!':pct>=50?'¡Buen avance!':'Cada intento suma experiencia.';$('#answers').innerHTML=`<div class="explanation">Has conseguido <b>${game.score} XP</b> y acertado el ${pct}% de la ronda. Sigue explorando nuevos territorios y vuelve a intentarlo.</div>`;$('#explanation').classList.add('hidden');$('#nextBtn').textContent='Volver al inicio';$('#nextBtn').classList.remove('hidden');$('#nextBtn').onclick=()=>{$('#quiz').classList.add('hidden');$('#inicio').scrollIntoView({behavior:'smooth'});$('#nextBtn').onclick=advance}}
$('#nextBtn').onclick=advance;$('#playMix').onclick=()=>start('mix');$('#modeMix').onclick=()=>start('mix');$('#modeSurvival').onclick=()=>start('survival');$('#modeTimed').onclick=()=>start('timed');$('#dailyBtn').onclick=$('#dailyBtn2').onclick=()=>start('daily');$('#closeQuiz').onclick=()=>{clearInterval(tick);$('#quiz').classList.add('hidden')};$('#modeOnline').onclick=()=>toast('El modo online está en desarrollo. Primero construiremos las partidas privadas.');$('#profileBtn').onclick=()=>toast('Tu perfil y estadísticas avanzadas llegarán en una próxima actualización.');
let toastTimer;function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2600)}
if('serviceWorker'in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('./sw.js').catch(()=>{});renderStats();renderCategories();
