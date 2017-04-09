 #pragma strict 
 
 var speed : float = 1.0;
 
 function Update() {
     var move = Vector3(Input.GetAxis("Horizontal")*4, Input.GetAxis("Vertical")*4, 0);
     transform.position += move * speed * Time.deltaTime;

      if (transform.position.y <= -4.5) {
     transform.position = new Vector2(transform.position.x, -4.5f);
 } else if (transform.position.y >= 4.5f) {
     transform.position = new Vector2(transform.position.x, 4.5f);
 }
 }
