const cards = [
  { label: "Overdue Actions", value: "3", note: "Visible slippage across field and support work." },
  { label: "Blocked Actions", value: "4", note: "Most blockers are tied to vendor or field dependency issues." },
  { label: "This Week's Commitments", value: "8", note: "Commitments currently entering weekly review." },
  { label: "Completed Last Week", value: "2", note: "Recent completions before carry-forward review." }
];

const ownerQueue = [
  { title: "Chris Dalton", copy: "Riverside egress escalation remains overdue and still needs a clean decision path.", tone: "risk" },
  { title: "Lena Brooks", copy: "Brookstone and Glenpark closeout work still need tighter follow-through this week.", tone: "warn" },
  { title: "Brooke Allen", copy: "Summit access control issue remains blocked by vendor and startup coordination.", tone: "warn" }
];

const blockers = [
  { title: "Field Services", copy: "2 blocked actions tied to vendor response timing and route coverage." },
  { title: "Operations Support", copy: "1 blocked action waiting on client signoff before handoff work can finish." },
  { title: "Project Delivery", copy: "1 blocked action linked to material lead-time recovery and resequencing." }
];

const momentum = [
  { title: "Kelsey Morgan", copy: "Leadership packet and watch-list narrative are moving and should close before review.", tone: "ok" },
  { title: "Megan Foster", copy: "Summit startup recovery plan is drafted and ready for PM review this week.", tone: "ok" },
  { title: "Northgate Turnover", copy: "As-built timing is lining up, assuming superintendent handoff stays on schedule.", tone: "ok" }
];

const cadenceItems = [
  { title: "Owner update before review", copy: "Each owner clears stale status before the weekly meeting so the room is not rebuilding the story live." },
  { title: "Blocked work gets named directly", copy: "Dependencies are surfaced by area, not buried inside generic status notes." },
  { title: "Carry-forward is visible", copy: "Anything slipping from last week stays visible until it is either closed or re-scoped." }
];

const commitments = [
  ["Chris Dalton", "Escalate Riverside egress conflict", "In Progress", "District signoff still pending"],
  ["Megan Foster", "Review Summit startup recovery plan", "In Progress", "Recovery options drafted for PM review"],
  ["Kelsey Morgan", "Refine weekly watch-list narrative", "In Progress", "Draft ready for leadership review"],
  ["Lena Brooks", "Confirm Northgate as-built timing", "Not Started", "Awaiting superintendent handoff date"]
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

renderBoard("owner-queue", ownerQueue, true);
renderBoard("blockers", blockers, false);
renderBoard("momentum", momentum, true);

document.getElementById("cadence-items").innerHTML = cadenceItems.map((item) => `
  <article class="cadence-item">
    <div class="cadence-title">${item.title}</div>
    <div class="cadence-copy">${item.copy}</div>
  </article>
`).join("");

document.getElementById("commitment-rows").innerHTML = commitments.map(([owner, title, status, notes]) => `
  <tr>
    <td>${owner}</td>
    <td>${title}</td>
    <td>${status}</td>
    <td>${notes}</td>
  </tr>
`).join("");
