const cards = [
  { label: "Needs Push", value: "4", note: "Work still has an owner, but it needs pressure to move." },
  { label: "Blocked", value: "3", note: "One Riverside item is still fully stuck in dependency territory." },
  { label: "Closing This Week", value: "3", note: "A few commitments are finally close enough to protect." },
  { label: "Carry-Forward Risk", value: "2", note: "Work most likely to slip into next week's review." }
];

const needsPush = [
  {
    actionId: "AI-509",
    title: "Close package gaps",
    owner: "Lena Brooks",
    source: "REQ-626",
    copy: "Glenpark is no longer blocked, but it still needs one more push to clear the turnover package.",
    tone: "warn"
  },
  {
    actionId: "AI-520",
    title: "Review weekly watch-list narrative",
    owner: "Kelsey Morgan",
    source: "Leadership packet",
    copy: "Narrative is drafted, but still needs one more pass before the review reads cleanly.",
    tone: "warn"
  }
];

const blocked = [
  {
    actionId: "AI-502",
    title: "Escalate egress conflict",
    owner: "Chris Dalton",
    source: "REQ-617",
    copy: "Riverside is still stuck on district signoff, so the action has nowhere to go yet.",
    tone: "risk"
  },
  {
    actionId: "AI-517",
    title: "Confirm Riverside material recovery plan",
    owner: "Noah Whitaker",
    source: "Vendor lead times",
    copy: "Material timing is still unresolved, which keeps the recovery path soft even if routing clears.",
    tone: "risk"
  }
];

const closingThisWeek = [
  {
    actionId: "AI-504",
    title: "Reset dispatch coverage",
    owner: "Jordan Hayes",
    source: "REQ-624",
    copy: "Cedar Hill handoffs are finally tightening up and route coverage should close this week if nothing reopens.",
    tone: "ok"
  },
  {
    actionId: "AI-518",
    title: "Issue Glenpark owner training reschedule",
    owner: "Megan Foster",
    source: "Client follow-up",
    copy: "Reschedule language is drafted and just needs the client confirmation back.",
    tone: "ok"
  }
];

const commitments = [
  ["AI-502", "Escalate egress conflict", "Chris Dalton", "Blocked", "REQ-617"],
  ["AI-509", "Close package gaps", "Lena Brooks", "Needs Push", "REQ-626"],
  ["AI-504", "Reset dispatch coverage", "Jordan Hayes", "Closing This Week", "REQ-624"],
  ["AI-518", "Issue Glenpark owner training reschedule", "Megan Foster", "In Progress", "Client follow-up"],
  ["AI-520", "Review weekly watch-list narrative", "Kelsey Morgan", "In Progress", "Leadership packet"]
];

document.getElementById("summary-cards").innerHTML = cards.map((item) => `
  <article class="summary-card">
    <div class="card-label">${item.label}</div>
    <div class="card-value">${item.value}</div>
    <div class="card-note">${item.note}</div>
  </article>
`).join("");

function renderBoard(id, rows, tagged = false) {
  document.getElementById(id).innerHTML = rows.map((row) => `
    <article class="board-item">
      <div class="board-title">${tagged ? `<span class="badge ${row.tone}">${row.title}</span>` : row.title}</div>
      <div class="board-copy">${row.copy}</div>
    </article>
  `).join("");
}

renderBoard("needs-push", needsPush, true);
renderBoard("blocked", blocked, true);
renderBoard("closing-this-week", closingThisWeek, true);

function getStatusClass(status) {
  if (status === "Blocked") {
    return "risk";
  }

  if (status === "Needs Push") {
    return "warn";
  }

  if (status === "Closing This Week") {
    return "ok";
  }

  return "neutral";
}

document.getElementById("commitment-rows").innerHTML = commitments.map(([actionId, title, owner, status, source]) => `
  <tr>
    <td><span class="row-id">${actionId}</span></td>
    <td><div class="row-title">${title}</div></td>
    <td>${owner}</td>
    <td><span class="badge ${getStatusClass(status)}">${status}</span></td>
    <td><span class="source-pill">${source}</span></td>
  </tr>
`).join("");
