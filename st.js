var heros =prompt("Pseudo de votre héros super muscler et intelligent ? :");
var role = prompt("Rôle de votre héros: (exemple guerrier, moine..)");
var arme = prompt("Arme utilisé dans votre histoire:");
var pouvoir = prompt ("Qu'elle pouvoir à votre heros?")
var pays = prompt("Royaume dans lequel se déroule l'histoire:");
var satan = prompt("Pseudo du super méchant:");
var sbire = prompt ("Noms de ses subordonnés: Les ...")
var armebis = prompt("Arme du super méchant:");
var mort = prompt("Qui de la famille de votre héros le méchant a t'il assassiner? ")
var kill = prompt("Comment avez vous tuée le méchant?");

 var div = document.getElementById("texte");
 div.innerHTML = "<p>"+"<span id=\"resultat\">"+ heros + "</span>" + " " + "est un grand" + " "
 + "<span id=\"resultat\">" + role+ "</span>" +" " + "de son pays."
 + "Avec sont"+ " " + "<span id=\"resultat\">"+ arme + "</span>" + " " + "sa Fée Lation , ils vaincurent d'innombrable enemis en un coup." +"Le royaume de" + " " +"<span id=\"resultat\">"+ pays+"</span>" + " " + " , est un joli trou pommé au millieu de nul part , où régne le maléfique" + " " +"<span id=\"resultat\">"+ satan +"</span>"
  + " " + ". A l'aide de ses Sbires, les " + " " + sbire + " " + "et de son " + " " + armebis + " "+ ",ils terrifient tout le royaume de "
  + " " + "<span id=\"resultat\">"+ pays + "</span>"+ "." +"<span id=\"resultat\">"+ heros+ "</span>" + " " + "qui depuis des décennies cherche à se venger du meurtre de " +"<span id=\"resultat\">"+ mort +"</span>"
  +" " + ".Mais grace au pouvoir de sont" + " " +"<span id=\"resultat\">" + arme + "</span>"
  + " Il pourras peux-être vaincre le maléfique" + "<span id=\"resultat\">" + " "+ satan +"</span>" + " " + "et sa bande de" + "<span id=\"resultat\">"+ " "+ sbire + "</span>" + "." + "</p>";
