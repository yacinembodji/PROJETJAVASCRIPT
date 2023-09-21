var citations = ["Nul n'a le droit d'effacer ma culture,car une communauté sans culture est un peuple sans être humains", 
   "Voici que meurt l'Afrique des empires,c'est l'agonie d'une princesse.",
   "J'ai rêvé d'un monde de soleil dans la fraternité de mes frères aux yeux bleus.",
   "Qui pourra vous chanter si ce n'est votre frère d'armes,votre frère de sang.Vous Tiralleurs  sénégalaises,mes frères noires à la main chaude",
   "Nous sommes les hommes de la danse, dont les pieds reprennent vigueur en frappant le sol dur.",
   " “Sang ô sang noir de mes frères, vous tachez l’innocence de mes draps, vous êtes la sueur où baigne mon angoisse, vous êtes la souffrance qui enroue ma voix.",
   " Penser et agir par nous-mêmes et pour nous-mêmes, en Nègres…, accéder à la modernité sans piétiner notre authenticité.",
   "je dis qu'il n'est pas de paix armée, de paix sous l'oppression. De fraternité sans égalité. J'ai voulu tous les hommes frère.",
   " Cet humanisme intégral qui se tisse autour de la Terre, cette symbiose des énergies dormantes de tous les continents, de toutes les races qui se réveillent à la chaleur complémentaire.",
    "Les racistes sont des gens qui se trompent de colère.",
   ]
   function yas(){
       var randomIndex = Math.floor(Math.random()* citations.length);
       var randomCitations = citations[randomIndex];
       document.getElementById("click").innerHTML="" +"<br>"+randomCitations;
    //    document.getElementById("leopold").innerHTML="" +"<br>"+randomAuteur;
       
   }
  
