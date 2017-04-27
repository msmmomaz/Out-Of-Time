 #pragma strict 
 
 var speed : float = 1.0;
 var xAxis;
 var yAxis;
 
 function Update() {
     var move = Vector3(Input.GetAxis("Horizontal")*4, Input.GetAxis("Vertical")*4, 0);
     transform.position += move * speed * Time.deltaTime;

      if (transform.position.y <= -4) {
     transform.position = new Vector2(transform.position.x, -4f);
 } else if (transform.position.y >= 3f) {
     transform.position = new Vector2(transform.position.x, 3f);
 }
 if (transform.position.x <= -10) {
     transform.position = new Vector2(transform.position.y, 0);
 } 
 }
