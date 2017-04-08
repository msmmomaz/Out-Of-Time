using UnityEngine;
using System.Collections;

public class Play : MonoBehaviour {

	public MovieTexture AVITexture;

	// Use this for initialization
	void Start () {
		GetComponent<Renderer>().material.mainTexture = AVITexture;
		movTexture.loop = true;
		AVITexture.Play();
	}

	// Update is called once per frame
	void Update () {

	}
}
