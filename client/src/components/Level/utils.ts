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
    if (!res.ok) {
      const error = await res.json();
      return error.message;
    }
    const parsedRes = await res.json();
    return null;
  } catch (e) {
    return "Server error";
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
  } catch (e) {
    console.log("Error : ", e);
    return [];
  }
}
