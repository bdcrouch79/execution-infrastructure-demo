const cards = [
  { label: "Overdue Actions", value: "3", note: "Visible slippage across field and support work." },
  { label: "Blocked Actions", value: "4", note: "Most blockers are tied to vendor or field dependency issues." },
  { label: "This Week's Commitments", value: "8", note: "Commitments currently entering weekly review." },
  { label: "Completed Last Week", value: "2", note: "Recent completions before carry-forward review." }
];

const ownerQueue = [
  { title: "Chris Dalton", meta: "Riverside egress escalation remains overdue", tone: "risk" },
  { title: "Lena Brooks", meta: "Brookstone and Glenpark closeout work still needs follow-through", tone: "warn" },
  { title: "Brooke Allen", meta: "Summit access control issue remains blocked", tone: "warn" },
  { title: "Kelsey Morgan", meta: "Leadership packet and watch-list narrative are moving", tone: "ok" }
];

const blockers = [
  { title: "Field Services", meta: "2 blocked actions tied to vendor response and routing" },
  { title: "Operations Support", meta: "1 blocked action waiting on client signoff" },
  { title: "Project Delivery", meta: "1 blocked action linked to material lead-time recovery" }
];

const commitments = [
  ["Chris Dalton", "Escalate Riverside egress conflict", "In Progress", "District signoff still pending"],
  ["Megan Foster", "Review Summit startup recovery plan", "In Progress", "Recovery options drafted for PM review"],
  ["Kelsey Morgan", "Refine weekly watch-list narrative", "In Progress", "Draft ready for leadership review"],
  ["Lena Brooks", "Confirm Northgate as-built timing", "Not Started", "Awaiting superintendent handoff date"]
];

document.getElementById("summary-cards").innerHTML = cards.map((item) => `
  <article class="card">
    <div class="card-label">${item.label}</div>
    <div class="card-value">${item.value}</div>
    <div class="card-note">${item.note}</div>
  </article>
`).join("");

function renderStack(id, rows, tagged = false) {
  document.getElementById(id).innerHTML = rows.map((row) => `
    <div class="stack-item">
      <div class="stack-title">${tagged ? `<span class="badge ${row.tone}">${row.title}</span>` : row.title}</div>
      <div class="stack-meta">${row.meta}</div>
    </div>
  `).join("");
}

renderStack("owner-queue", ownerQueue, true);
renderStack("blockers", blockers, false);

document.getElementById("commitment-rows").innerHTML = commitments.map(([owner, title, status, notes]) => `
  <tr>
    <td>${owner}</td>
    <td>${title}</td>
    <td>${status}</td>
    <td>${notes}</td>
  </tr>
`).join("");
