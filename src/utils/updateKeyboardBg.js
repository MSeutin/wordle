export default function updateKeyboardBg(parsedRow, currentState) {
  // Directly map over currentState.virtualKeyboard to create a new virtual keyboard
  return currentState.virtualKeyboard.map((row) =>
    row.map((key) => {
      const foundRow = parsedRow.find(
        ({ letter }) => letter.toUpperCase() === key.letter
      );
      if (
        foundRow &&
        (key.bgcolor !== "darkseagreen" ||
          foundRow.backgroundColor === "darkseagreen")
      ) {
        return { ...key, bgcolor: foundRow.backgroundColor };
      }
      return key;
    })
  );
}