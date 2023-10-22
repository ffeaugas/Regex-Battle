import { Level } from "../Level";

export async function getTutorialLevels(): Promise<Level[]> {
  try {
    const res = await fetch("http://localhost:3001/level/tutorial", {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (res.ok) {
      const levels = await res.json();
      return levels;
    }
  } catch (e) {
    console.log(e);
  }
  return [];
}
