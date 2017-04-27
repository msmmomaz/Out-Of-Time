using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Destroy : MonoBehaviour {
 
    void OnCollisionEnter(Collision col)
    {
        Debug.Log("collision name = Enemy" + col.gameObject.name);
        if (col.gameObject.name == "Enemy")
        {
            Destroy(col.gameObject);
        }
    }
}
