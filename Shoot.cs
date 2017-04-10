using UnityEngine;
using System.Collections;

public class Shoot : MonoBehaviour {


		public Rigidbody2D Bullet;				// Prefab of the rocket.
		public float speed = 20f;				// The speed the rocket will fire at.


		private GameObject playerCtrl;		// Reference to the PlayerControl script.
		private Animator anim;					// Reference to the Animator component.


		void Awake()
		{
			// Setting up the references.
			anim = transform.root.gameObject.GetComponent<Animator>();
			playerCtrl = transform.root.GetComponent<GameObject>();
		}


		void Update ()
		{
			// If the fire button is pressed...
			if(Input.GetMouseButtonDown(0))
			{
				// ... set the animator Shoot trigger parameter and play the audioclip.
				anim.SetTrigger("Shoot"); 
					Rigidbody2D bulletInstance = Instantiate(Bullet, transform.position, Quaternion.Euler(new Vector3(0,0,0))) as Rigidbody2D;
					bulletInstance.velocity = new Vector2(speed, 0);
				
				}
			}
		}


