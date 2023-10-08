export function getRegexResult(
  type: string,
  input: string,
  solution: string
): string | string[] | null {
  const regex = new RegExp(solution, "gm");
  if (type === "Match") {
    return input.match(regex);
  }
  /* Else replace etc... */
  console.warn("Invalid Level Type !");
  return null;
}

export function isRegexSolutionCorrect(
  type: string,
  input: string,
  output: string,
  solution: string
) {
  try {
    const regex = new RegExp(solution, "gm");
    console.log("Input : ", input);
    console.log("Regex : ", regex);
    const res: string | string[] | null = getRegexResult(type, input, solution);
    console.log("Match : ", res);
    const formattedOutput = [output];
    console.log("Output : ", formattedOutput);
    if (!res || formattedOutput.length !== res.length) return false;
    if (formattedOutput.length === 1 && formattedOutput[0] === res[0]) {
      console.log("MATCH !!!!");
      return true;
    }
    for (let i = 0; i < res.length; i++) {
      if (output[i] !== res[i]) return false;
    }
    console.log("MATCH !!!!");
    return true;
  } catch (e) {
    return false;
  }
}
