#pragma strict
 
 var image : Texture2D;

  function Start()
 {
     image = Resources.Load("Replay") as Texture2D;
 }
 

 
 function OnGUI()
 {
 	if (GUI.Button(Rect(1650,1280,600,200),"")){
	    BeginGame();
	}
     GUI.skin.button.normal.background = image;
     GUI.skin.button.hover.background = image;
     GUI.skin.button.active.background = image;
    
 }

function BeginGame(){
   Application.LoadLevel("GAME");
 
}
