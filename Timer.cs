using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class Countdown : MonoBehaviour {

	[SerializeField]
	public float CountdownFrom;
	[SerializeField]
	public Text CountdownText;


	void Start() {
		if (CountdownText == null) {
			Debug.LogError("STATUS INDICATOR: No text object referenced!");
		}
	}
	void Update()
	{
		float time = CountdownFrom - Time.timeSinceLevelLoad;
		CountdownText.text = time.ToString("0:00") + "";

		if (time <= 0f)
		{
			TimeUp();
		}
	}

	void TimeUp()
	{
		Application.LoadLevel("GAME OVER");
	}
}
