using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Damage : MonoBehaviour 
{
	public bool isDamaging;
	public float damage = 10;

	private void OnTriggerStay2D(Collider2D col2D)
		{
		if (col2D.tag == "Player")
			col2D.SendMessage((isDamaging)?"TakeDamage":"HealDamage",Time.deltaTime * damage);
		}
}

s
