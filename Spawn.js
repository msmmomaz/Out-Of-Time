 #pragma strict
     
     var enemy : GameObject;
     var spawnValues : Vector2;
     var flyCount : int;
     var spawnWait : float;
     var startWait : float;
     var waveWait : float;
     
     function Start () {
         SpawnWaves ();
     
      }
     function SpawnWaves () {
         yield WaitForSeconds (startWait);
         while (true)
         {
             for ( var i : int= 0; i < flyCount; i++)
             {
                
     
                          var spawnPosition : Vector2 = new Vector2 (Random.Range (-4.5, 4.5), Random.Range (-4.5, 4.5)); 
                      //var spawnPosition : Vector2= new Vector2 (Random.Range (-spawnValues.x, spawnValues.x), spawnValues.y);
                  var spawnRotation : Quaternion= Quaternion.identity;
                 Instantiate (enemy, spawnPosition, spawnRotation);
                 yield WaitForSeconds (spawnWait);
             }
             yield WaitForSeconds (waveWait);
         }
        
     }
