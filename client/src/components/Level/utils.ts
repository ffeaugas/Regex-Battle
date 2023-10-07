import { Level, LevelForm } from ".";

export async function createLevel(form: LevelForm): string | null {
  try {
    const res = await fetch("http://localhost:3001/level", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(form),
    });
    const parsedRes = await res.json();
    console.log(parsedRes);
    return null;
  } catch (error) {
    console.log("Error : ", error);
    return error;
  }
}

export async function getLevels(): Promise<Level[]> {
  try {
    const res = await fetch("http://localhost:3001/level", {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const levels = await res.json();
    return levels;
  } catch (error) {
    console.log("Error : ", error);
    return [];
  }
}
