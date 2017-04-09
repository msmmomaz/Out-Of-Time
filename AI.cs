using UnityEngine;
using System.Collections;

public class AI : MonoBehaviour {

	// Player Movement Variables/....
	public static int movespeed = 1;
	public Vector3 userDirection = Vector3.right;

	public void Update()
	{
		transform.Translate(userDirection * movespeed * Time.deltaTime); 
	}
}
