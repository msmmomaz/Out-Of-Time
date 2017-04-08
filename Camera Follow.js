#pragma strict

 var dampTime : float = 0.3; //offset from the viewport center to fix damping
 private var velocity = Vector3.zero;
 var target : Transform;
 
 function Update() {
     if(target) {
         var point : Vector3 = GetComponent.<Camera>().WorldToViewportPoint(target.position);
         var delta : Vector3 = target.position - GetComponent.<Camera>().ViewportToWorldPoint(Vector3(0.15, 0.10, point.z));
         var destination : Vector3 = transform.position + delta;
         
         // Set this to the Y position you want the camera locked to
         destination.y = 0; 
         
         transform.position = Vector3.SmoothDamp(transform.position, destination, velocity, dampTime);
     }
 }
