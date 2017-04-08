 #pragma strict
 
 var image : Texture2D;

  function Start()
 {
     image = Resources.Load("Button") as Texture2D;
 }
 

 
 function OnGUI()
 {
 	if (GUI.Button(Rect(385,580,400,100),"")){
	    BeginGame();
	}
     GUI.skin.button.normal.background = image;
     GUI.skin.button.hover.background = image;
     GUI.skin.button.active.background = image;
    
 }



 function Update () {

}

function BeginGame(){
   Application.LoadLevel("scene 1");
  
}
