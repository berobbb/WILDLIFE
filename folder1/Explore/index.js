
const animalInfoArray = [
    'Tiger: Tigers are the largest cats in the world and are known for their distinctive orange coat with black stripes. They are powerful hunters and are found in various habitats across Asia.',
    'Elephant: Elephants are the largest land animals and are known for their long trunks and large ears. They are highly intelligent and social creatures, found in various ecosystems in Africa and Asia.',
    'Leopard: Leopards are large, carnivorous cats known for their distinctive spotted coat. They are agile and powerful hunters, found in a variety of habitats across Africa and Asia.',
    'Sloth Bear: Sloth bears are medium-sized bears with shaggy fur and a distinct white V-shaped mark on their chest. They are mainly found in forests of South Asia and are known for their unique feeding habits.'
];
const tiger=document.getElementById("tiger1");
const Leopard=document.getElementById("lepord1")
const Elephant=document.getElementById("elephant1")
const Bear=document.getElementById("bear1")
const info=document.getElementById("image");

tiger.onclick=function()
{
    info.textContent=animalInfoArray[0];
    info.style.fontSize="20px"
    info.style.lineHeight="42px"
    
}
Leopard.onclick=function()
{
    info.textContent=animalInfoArray[2];
    info.style.fontSize="20px"
    info.style.lineHeight="42px"
    
}
Elephant.onclick=function()
{
    info.textContent=animalInfoArray[1];
    info.style.fontSize="20px"
    info.style.lineHeight="42px";
   
   

    
}
Bear.onclick=function()
{
    info.textContent=animalInfoArray[3];
    info.style.fontSize="20px"
    info.style.lineHeight="42px"
}