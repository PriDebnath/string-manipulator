//
const textareaHistory = [""];
let currentUndoIndex = -1;
let debounceTimer;

const textarea = document.getElementById("text-area");

let handleTextarea = (e) => {
  let textAreaValue = e.target.value;

  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(function () {
    // Add the current value to the history array
    textareaHistory.push(textAreaValue);
    currentUndoIndex = textareaHistory.length - 1;
  }, 300);

  // countering starts
  let wordCounter = document.getElementById("word-counter");
  let letterCounter = document.getElementById("letter-counter");

  const words = textAreaValue.split(/\s+/).filter((word) => word !== ""); // Split text by whitespace and remove empty strings

  wordCounter.innerText = words.length;
  letterCounter.innerText = textAreaValue.length;
  // countering ends

  undoRedoVisibilityCheck();
};

textarea.addEventListener("input", handleTextarea);

//
// button click handler starts

function handleToLowerCase() {
  textarea.value = toLowerCase(textarea.value);
  if (!textareaHistory.includes(textarea.value)) {
    // if input value does not exist in @textareaHistory add the new string
    textareaHistory.push(textarea.value);
  }
  currentUndoIndex++;
}

function handleToUpperCase() {
  textarea.value = toUpperCase(textarea.value);
  if (!textareaHistory.includes(textarea.value)) {
    textareaHistory.push(textarea.value);
  }
  currentUndoIndex++;
}

function handleToTitleCase() {
  textarea.value = toTitleCase(textarea.value);
  if (!textareaHistory.includes(textarea.value)) {
    textareaHistory.push(textarea.value);
  }
  currentUndoIndex++;
}

function handleToPascalCase() {
  textarea.value = toPascalCase(textarea.value);
  if (!textareaHistory.includes(textarea.value)) {
    textareaHistory.push(textarea.value);
  }
  currentUndoIndex++;
}

function handleToCamelCase() {
  textarea.value = toCamelCase(textarea.value);
  if (!textareaHistory.includes(textarea.value)) {
    textareaHistory.push(textarea.value);
  }
  currentUndoIndex++;
}

function handleToKebabCase() {
  textarea.value = toKebabCase(textarea.value);
  if (!textareaHistory.includes(textarea.value)) {
    textareaHistory.push(textarea.value);
  }
  currentUndoIndex++;
}

function handleToSnakeCase() {
  textarea.value = toSnakeCase(textarea.value);
  if (!textareaHistory.includes(textarea.value)) {
    textareaHistory.push(textarea.value);
  }
  currentUndoIndex++;
}

function handleToScreamingSnakeCase() {
  textarea.value = toScreamingSnakeCase(textarea.value);
  if (!textareaHistory.includes(textarea.value)) {
    textareaHistory.push(textarea.value);
  }
  currentUndoIndex++;
}

function handleToStudlyCaps() {
  textarea.value = toStudlyCaps(textarea.value);
  if (!textareaHistory.includes(textarea.value)) {
    textareaHistory.push(textarea.value);
  }
  currentUndoIndex++;
}

function handleToDotCase() {
  textarea.value = toDotCase(textarea.value);
  if (!textareaHistory.includes(textarea.value)) {
    textareaHistory.push(textarea.value);
  }
  currentUndoIndex++;
}

function handleToPathCase() {
  textarea.value = toPathCase(textarea.value);
  if (!textareaHistory.includes(textarea.value)) {
    textareaHistory.push(textarea.value);
  }
  currentUndoIndex++;
}

function handleToEmoji() {
  textarea.value = toEmoji(textarea.value);

  if (!textareaHistory.includes(textarea.value)) {
    textareaHistory.push(textarea.value);
  }
  currentUndoIndex++;
}

// button click handler ends
//

//
// string manipulation functions starts

const toLowerCase = (string) => {
  return string.toLowerCase();
};

const toUpperCase = (string) => {
  return string.toUpperCase();
};

const toTitleCase = (string) => {
  let titleCaseString = string
    .toLowerCase()
    .replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
  return titleCaseString;
};

const toPascalCase = (string) => {
  let titleCase = string
    .toLowerCase()
    .replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
  return titleCase.replace(/\s/g, "");
};

const toCamelCase = (string) => {
  return string.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
};

const toKebabCase = (string) => {
  return string.replace(/\s/g, "-");
};

const toSnakeCase = (string) => {
  return string.replace(/[-\s]/g, "_");
};

const toScreamingSnakeCase = (string) => {
  return string.replace(/[-\s]+/g, "_").toUpperCase();
};

const toStudlyCaps = (string) => {
  return string.replace(/[a-zA-Z]/g, (match, index) => {
    return index % 2 === 0 ? match.toUpperCase() : match.toLowerCase();
  });
};

const toDotCase = (string) => {
  return string.replace(/[-_\s]+/g, ".");
};

const toPathCase = (string) => {
  return string.replace(/[-_\s]+/g, "/");
};

const emojis = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂",
  "🤣",
  "😊",
  "😇",
  "🙂",
  "🙃",
  "😉",
  "😌",
  "😍",
  "🥰",
  "😘",
  "😗",
  "😙",
  "😚",
  "😋",
  "😛",
  "😜",
  "🤪",
  "😝",
  "🤑",
  "🤓",
  "😎",
  "🤩",
  "🥳",
  "😏",
  "😒",
  "😞",
  "😔",
  "😟",
  "😕",
  "🙁",
  "😣",
  "😖",
  "😫",
  "😩",
  "🥺",
  "😢",
  "😭",
  "😤",
  "😠",
  "😡",
  "🤬",
  "🤯",
  "😳",
  "🥴",
  "😱",
  "😨",
  "😰",
  "😥",
  "😓",
  "🤔",
  "🤭",
  "🤫",
  "🤥",
  "😶",
  "😐",
  "😑",
  "😬",
  "🙄",
  "😯",
  "😦",
  "😧",
  "😮",
  "😲",
  "🥱",
  "😴",
  "🤤",
  "😪",
  "😵",
  "🤐",
  "🥵",
  "🥶",
  "😷",
  "🤒",
  "🤕",
  "🤢",
  "🤮",
  "🤧",
  "🙀",
  "😻",
  "😽",
  "😸",
  "😺",
  "😿",
  "😹",
  "😾",
  "🐱",
];

const toEmoji = (string) => {
  let stringLength = Array.from(string).length;

  let outputEmoji = "";
  for (let i = 0; i < stringLength; i++) {
    outputEmoji += emojis[Math.ceil(Math.random() * emojis.length - 1)];
  }

  return outputEmoji;
};

// string manipulation functions ends
//

// copy text starts
function handleCopy(textAreaId) {
  let textarea = document.getElementById(textAreaId);

  let copyBtn = document.getElementById("copy-btn");

  textarea.select();
  if (document.execCommand("copy")) {
    copyBtn.innerText = "Copied";
  }
  textarea.blur();

  setTimeout(() => {
    // change copy button text to the previous text
    copyBtn.innerText = "Copy";
  }, 3000);
}
// copy text ends

// undo and redo  starts
function undoTextarea() {
  if (currentUndoIndex > 0) {
    currentUndoIndex--;
    textarea.value = textareaHistory[currentUndoIndex];
  }
  undoRedoVisibilityCheck();
}

function redoTextarea() {
  if (currentUndoIndex < textareaHistory.length - 1) {
    currentUndoIndex++;
    textarea.value = textareaHistory[currentUndoIndex];
  }
  undoRedoVisibilityCheck();
}

function undoRedoVisibilityCheck() {
  let redoBtn = document.getElementById("redo-btn");
  if (currentUndoIndex == textareaHistory.length - 1) {
    redoBtn.classList.add("display-none");
    redoBtn.classList.remove("display-inline");
  } else {
    redoBtn.classList.remove("display-none");
    redoBtn.classList.add("display-inline");
  }

  let undoBtn = document.getElementById("undo-btn");
  if (currentUndoIndex <= 0) {
    undoBtn.classList.add("display-none");
    undoBtn.classList.remove("display-inline");
  } else {
    undoBtn.classList.add("display-inline");
    undoBtn.classList.remove("display-none");
  }
}
undoRedoVisibilityCheck();

let redoBtn = document.getElementById("redo-btn");
redoBtn.classList.remove("display-inline");
redoBtn.classList.add("display-none");

// undo and redo ends


// Adding @button-active class when button clicked starts
const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.classList.add("button-active");
    setTimeout(function () {
      button.classList.remove("button-active");
    }, 500); // add animation duration here
  });
});
// Adding @button-active class when button clicked ends

//
