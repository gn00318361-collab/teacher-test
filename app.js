const dates = ["7/8", "7/9", "7/10"];
const storageKey = "qxes-subteacher-system-v2";

const defaultData = {
  venues: [
    { date: "7/8", rooms: "資優班教室 2 間", use: "甄試教室、報到與等候區" },
    { date: "7/9", rooms: "資優班教室 2 間", use: "甄試教室、報到與等候區" },
    { date: "7/10", rooms: "資優班教室 2 間、205、206", use: "試教、口試、等候、成績登錄分區" },
  ],
  focus: [
    "確認 7/9 評審委員到場時間",
    "確認工作人員名單與可支援時段",
    "確認每日實際報到與甄試開始時間",
    "整理第一份正式文件：工作人員分工表",
  ],
  questions: [
    "7/8、7/9、7/10 各為第幾階段、第幾次甄選",
    "缺額類別、科別、名額、聘期",
    "工作人員名單",
    "試教與口試時間限制",
    "結果公告需經誰確認或核章",
  ],
  staff: [
    { id: "s-1", date: "7/8", name: "輔導主任", role: "試務總召" },
    { id: "s-2", date: "7/9", name: "輔導主任", role: "試務總召" },
    { id: "s-3", date: "7/10", name: "輔導主任", role: "試務總召" },
    { id: "s-4", date: "7/8", name: "王建能", role: "人事資格確認" },
    { id: "s-5", date: "7/9", name: "王建能", role: "人事資格確認" },
    { id: "s-6", date: "7/10", name: "王建能", role: "人事資格確認" },
  ],
  judges: [
    { id: "j-1", date: "7/8", name: "邱俊智", status: "已確認" },
    { id: "j-2", date: "7/8", name: "羅靜之", status: "已確認" },
    { id: "j-3", date: "7/8", name: "黃志豪", status: "已確認" },
    { id: "j-4", date: "7/8", name: "羅元廷", status: "已確認" },
    { id: "j-5", date: "7/8", name: "蘇一智", status: "已確認" },
    { id: "j-6", date: "7/8", name: "鄭嘉琪", status: "已確認" },
    { id: "j-7", date: "7/8", name: "吳文瓊", status: "已確認" },
    { id: "j-8", date: "7/9", name: "王麒喻", status: "已確認" },
    { id: "j-9", date: "7/9", name: "王郁翔", status: "已確認" },
    { id: "j-10", date: "7/10", name: "邱俊智", status: "已確認" },
    { id: "j-11", date: "7/10", name: "陳莉榛", status: "已確認" },
    { id: "j-12", date: "7/10", name: "廖人鋐", status: "已確認" },
    { id: "j-13", date: "7/10", name: "蘇一智", status: "已確認" },
    { id: "j-14", date: "7/10", name: "鄭嘉琪", status: "已確認" },
    { id: "j-15", date: "7/10", name: "吳文瓊", status: "已確認" },
    { id: "j-16", date: "7/10", name: "林柏君", status: "待確認" },
    { id: "j-17", date: "7/10", name: "高琳茵", status: "部分時間" },
  ],
  tasks: [
    { id: "t-1", phase: "事前準備", title: "確認甄試日期、階段、次別", priority: "高", due: "2026-07-03", done: false },
    { id: "t-2", phase: "事前準備", title: "確認缺額類別、科別、名額、聘期", priority: "高", due: "2026-07-03", done: false },
    { id: "t-3", phase: "事前準備", title: "確認簡章、報名方式、甄試配分", priority: "高", due: "2026-07-03", done: false },
    { id: "t-4", phase: "事前準備", title: "建立甄試資料夾與檔案命名規則", priority: "中", due: "2026-07-04", done: false },
    { id: "t-5", phase: "事前準備", title: "複製舊評分統計表作為新版工作檔", priority: "中", due: "2026-07-04", done: false },
    { id: "t-6", phase: "事前準備", title: "確認評審委員名單與到場時間", priority: "高", due: "2026-07-04", done: false },
    { id: "t-7", phase: "事前準備", title: "確認工作人員名單", priority: "高", due: "2026-07-04", done: false },
    { id: "t-8", phase: "事前準備", title: "列印評分表、簽到表、流程表", priority: "高", due: "2026-07-07", done: false },
    { id: "t-9", phase: "甄試當天", title: "開啟場地並測試設備", priority: "中", due: "2026-07-08", done: false },
    { id: "t-10", phase: "甄試當天", title: "考生報到、簽到、身分核對", priority: "高", due: "2026-07-08", done: false },
    { id: "t-11", phase: "甄試當天", title: "回收並檢查評分表", priority: "高", due: "2026-07-08", done: false },
    { id: "t-12", phase: "甄試當天", title: "輸入試教與口試成績", priority: "高", due: "2026-07-08", done: false },
    { id: "t-13", phase: "甄試當天", title: "第二人複核成績", priority: "高", due: "2026-07-08", done: false },
    { id: "t-14", phase: "甄試後", title: "通知錄取人員報到", priority: "高", due: "2026-07-10", done: false },
    { id: "t-15", phase: "甄試後", title: "整理簽到表、評分表、統計表、公告", priority: "中", due: "2026-07-11", done: false },
    { id: "t-16", phase: "甄試後", title: "確認是否需函報、上傳或送人事後續", priority: "高", due: "2026-07-11", done: false },
  ],
};

const staticData = {
  assignments: [
    ["試務總召", "1", "全程", "統籌流程、協調突發狀況"],
    ["人事資格確認", "1-2", "報名前至報到完成", "確認資格、缺額、聘任與報到事項"],
    ["試務承辦", "1", "甄試前至歸檔完成", "準備表件、名冊、評分表、公告與歸檔資料"],
    ["場地管理", "1", "當日 07:40 至收場", "開教室、貼標示、確認桌椅與動線"],
    ["設備檢查", "1", "當日 07:40 至甄試開始前", "檢查電腦、投影、網路、白板、冷氣"],
    ["考生報到與身分核對", "1-2", "報到前 30 分鐘至報到結束", "簽到、核對證件、確認應試編號"],
    ["等候區管理與考生引導", "1", "報到開始至全數應試完畢", "維持秩序、依序引導考生"],
    ["試教與口試計時", "1-2", "甄試開始至結束", "控制時間並記錄逾時"],
    ["成績登錄", "1", "評分表收齊後", "輸入試教與口試分數"],
    ["成績複核", "1", "登錄完成後至公告前", "複核公式、總分、名次、錄取結果"],
  ],
  compatibility: [
    ["場地管理＋設備檢查", "可兼任", "都在甄試開始前完成，可由熟悉教室設備者兼任"],
    ["報到＋身分核對", "可兼任", "人數少時可同人處理；人數多時建議分開"],
    ["等候區管理＋考生引導", "可兼任", "同一人掌握順序與動線較清楚"],
    ["試教計時＋口試計時", "視場地而定", "同一場地可兼任；分場同時進行則不可兼任"],
    ["成績登錄＋成績複核", "不得兼任", "避免同一人輸入又自己檢查，降低漏誤風險"],
    ["評審委員＋報到或引導", "不建議兼任", "避免評審與考生過多接觸，影響公平性觀感"],
    ["試務總召＋細部報到工作", "不建議兼任", "總召需保留彈性處理突發狀況"],
  ],
  daily: [
    {
      date: "7/8",
      venue: "資優班教室 2 間",
      steps: [
        ["07:40", "開啟場地、確認桌椅與設備"],
        ["08:10", "放置表件、準備報到桌"],
        ["08:30", "評審委員報到、考生報到"],
        ["09:00", "說明甄試流程"],
        ["09:10", "試教／口試進行"],
        ["評分後", "回收評分表、輸入成績、複核"],
        ["公告前", "製作甄選結果公告"],
      ],
    },
    {
      date: "7/9",
      venue: "資優班教室 2 間",
      steps: [
        ["07:40", "開啟場地、確認桌椅與設備"],
        ["08:10", "放置表件、準備報到桌"],
        ["08:30", "評審委員報到、考生報到"],
        ["09:00", "說明甄試流程"],
        ["09:10", "試教／口試進行"],
        ["評分後", "回收評分表、輸入成績、複核"],
        ["公告前", "製作甄選結果公告"],
      ],
    },
    {
      date: "7/10",
      venue: "資優班教室 2 間、205、206",
      steps: [
        ["07:40", "開啟四間場地、確認分區標示"],
        ["08:10", "報到區、等候區、試教與口試場布置"],
        ["08:30", "評審委員報到、考生報到"],
        ["09:00", "說明甄試流程與動線"],
        ["09:10", "試教／口試分區進行"],
        ["評分後", "回收評分表、輸入成績、複核"],
        ["公告前", "製作甄選結果公告與最終資料整理"],
      ],
    },
  ],
  documents: [
    { name: "代課老師甄試流程0702.docx", status: "已完成", note: "目前可下載的流程規劃文件", href: "../代課老師甄試流程0702.docx" },
    { name: "試務廣播稿範本.docx", status: "已完成", note: "含時間、類別、序號、姓名、試場替換欄位", href: "試務廣播稿範本.docx" },
    { name: "成績登記評審簽章表範本.docx", status: "已完成", note: "抽籤序號、考生姓名、試教與口試分數、評審簽章欄", href: "成績登記評審簽章表範本.docx" },
    { name: "工作人員分工表", status: "待製作", note: "下一份建議製作文件" },
    { name: "甄試流程 SOP", status: "待製作", note: "每日流程確認後製作" },
    { name: "評分表與成績統計表", status: "沿用舊檔修改", note: "來源為既有 Excel 評分表" },
    { name: "試務手冊", status: "待製作", note: "分工、流程、表單完成後整合" },
    { name: "當天表單包", status: "待製作", note: "簽到表、委員簽到、設備檢查、公告範本" },
  ],
};

let data = loadData();

function loadData() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return structuredClone(defaultData);
  try {
    return { ...structuredClone(defaultData), ...JSON.parse(raw) };
  } catch {
    return structuredClone(defaultData);
  }
}

function saveData() {
  localStorage.setItem(storageKey, JSON.stringify(data));
  updateSummary();
}

function id(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function pill(text, tone) {
  return el("span", `tag ${tone || ""}`, text);
}

function priorityTone(priority) {
  return priority === "高" ? "high" : priority === "中" ? "medium" : "";
}

function statusTone(status) {
  if (status === "已確認" || status === "已完成") return "done";
  if (status === "待確認" || status === "部分時間") return "wait";
  return "";
}

function currentProjectPhase(today = new Date()) {
  const current = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  const firstExamDay = new Date(2026, 6, 8).getTime();
  const lastExamDay = new Date(2026, 6, 10).getTime();
  if (current < firstExamDay) return "事前準備階段";
  if (current <= lastExamDay) return "甄試當天階段";
  return "甄試後整理階段";
}

function countPendingPeople() {
  const coreRoles = ["試務總召", "報到與身分核對", "成績登錄", "成績複核"];
  const missingCoreRoles = dates.reduce((total, date) => {
    const assigned = data.staff.filter((person) => person.date === date);
    const missing = coreRoles.filter((role) => !assigned.some((person) => person.role === role));
    return total + missing.length;
  }, 0);
  const explicitPendingStaff = data.staff.filter((person) => person.name.includes("待指派") || person.role.includes("待指派")).length;
  const pendingJudges = data.judges.filter((judge) => judge.status !== "已確認").length;
  return missingCoreRoles + explicitPendingStaff + pendingJudges;
}

function renderAll() {
  renderOverview();
  renderChecklist();
  renderPeople();
  renderDaily();
  renderDocuments();
  updateSummary();
}

function renderOverview() {
  document.querySelector("#venueList").innerHTML = "";
  document.querySelector("#todayFocus").innerHTML = "";
  document.querySelector("#overviewQuestions").innerHTML = "";

  data.venues.forEach((item) => {
    const row = el("div", "compact-item");
    row.innerHTML = `<strong>${item.date}</strong> ${item.rooms}<br><span class="muted">${item.use}</span>`;
    document.querySelector("#venueList").appendChild(row);
  });
  data.focus.forEach((item) => document.querySelector("#todayFocus").appendChild(el("li", "", item)));
  data.questions.forEach((item) => document.querySelector("#overviewQuestions").appendChild(el("li", "", item)));
}

function sortedTasks() {
  const order = { 高: 0, 中: 1, 低: 2 };
  const keyword = document.querySelector("#taskSearch")?.value.trim().toLowerCase() || "";
  return [...data.tasks]
    .filter((task) => {
      if (!keyword) return true;
      return [task.title, task.phase, task.priority, task.due, task.done ? "完成" : "未完成"].join(" ").toLowerCase().includes(keyword);
    })
    .sort((a, b) => (order[a.priority] ?? 9) - (order[b.priority] ?? 9) || (a.due || "9999").localeCompare(b.due || "9999"));
}

function renderChecklist() {
  const root = document.querySelector("#checklistGroups");
  root.innerHTML = "";
  const phases = ["事前準備", "甄試當天", "甄試後"];
  const tasks = sortedTasks();
  phases.forEach((phase) => {
    const phaseTasks = tasks.filter((task) => task.phase === phase);
    const section = el("section", "check-section");
    section.appendChild(el("h3", "", `${phase} (${phaseTasks.length})`));
    const list = el("ul", "check-list managed-list");
    if (!phaseTasks.length) {
      const empty = el("li", "empty-row", "目前沒有符合條件的工作");
      list.appendChild(empty);
    }
    phaseTasks.forEach((task) => {
      const li = el("li");
      const input = el("input");
      input.type = "checkbox";
      input.checked = task.done;
      input.addEventListener("change", () => {
        task.done = input.checked;
        saveData();
        renderChecklist();
      });
      const label = el("label", "", task.title);
      const meta = el("div", "row-actions");
      meta.append(pill(task.priority, priorityTone(task.priority)));
      meta.append(pill(task.due || "未設期限", "wait"));
      const edit = el("button", "mini-button", "編輯");
      edit.type = "button";
      edit.addEventListener("click", () => fillTaskForm(task));
      const remove = el("button", "mini-button danger", "刪除");
      remove.type = "button";
      remove.addEventListener("click", () => {
        data.tasks = data.tasks.filter((item) => item.id !== task.id);
        saveData();
        renderChecklist();
      });
      meta.append(edit, remove);
      li.append(input, label, meta);
      list.appendChild(li);
    });
    section.appendChild(list);
    root.appendChild(section);
  });
}

function fillTaskForm(task) {
  const form = document.querySelector("#taskForm");
  form.dataset.editing = task.id;
  form.elements.phase.value = task.phase;
  form.elements.title.value = task.title;
  form.elements.priority.value = task.priority;
  form.elements.due.value = task.due || "";
  form.querySelector("button").textContent = "更新工作";
}

function renderPeople() {
  renderStaffRows();
  renderStaffGaps();
  renderJudgeGroups();
  renderAssignments();
  renderCompatibility();
}

function renderStaffRows() {
  const body = document.querySelector("#staffRows");
  body.innerHTML = "";
  [...data.staff].sort((a, b) => a.date.localeCompare(b.date) || a.role.localeCompare(b.role)).forEach((person) => {
    const tr = el("tr");
    tr.append(el("td", "", person.date), el("td", "", person.name), el("td", "", person.role));
    const actions = el("td");
    const edit = el("button", "mini-button", "編輯");
    edit.type = "button";
    edit.addEventListener("click", () => fillStaffForm(person));
    const remove = el("button", "mini-button danger", "刪除");
    remove.type = "button";
    remove.addEventListener("click", () => {
      data.staff = data.staff.filter((item) => item.id !== person.id);
      saveData();
      renderPeople();
    });
    actions.append(edit, remove);
    tr.appendChild(actions);
    body.appendChild(tr);
  });
}

function renderStaffGaps() {
  const root = document.querySelector("#staffGaps");
  root.innerHTML = "";
  const coreRoles = ["試務總召", "報到與身分核對", "成績登錄", "成績複核"];
  dates.forEach((date) => {
    const assigned = data.staff.filter((person) => person.date === date);
    const missingRoles = coreRoles.filter((role) => !assigned.some((person) => person.role === role));
    const row = el("div", "compact-item");
    if (!assigned.length) {
      row.innerHTML = `<strong>${date}</strong> 尚未安排任何工作人員`;
    } else if (missingRoles.length) {
      row.innerHTML = `<strong>${date}</strong> 缺少：${missingRoles.join("、")}`;
    } else {
      row.innerHTML = `<strong>${date}</strong> 核心工作已有指派`;
    }
    root.appendChild(row);
  });
}

function fillStaffForm(person) {
  const form = document.querySelector("#staffForm");
  form.elements.id.value = person.id;
  form.elements.name.value = person.name;
  form.elements.role.value = person.role;
  form.elements.date.value = person.date;
  form.querySelector("button").textContent = "更新工作人員";
}

function renderJudgeGroups() {
  const root = document.querySelector("#judgeGroups");
  root.innerHTML = "";
  dates.forEach((date) => {
    const group = data.judges.filter((judge) => judge.date === date);
    const block = el("div", "compact-item");
    const title = el("strong", "", date);
    block.appendChild(title);
    if (!group.length) {
      block.appendChild(el("div", "muted", "尚未安排委員"));
    } else {
      group.forEach((judge) => {
        const row = el("div", "person-line");
        row.append(el("span", "", judge.name), pill(judge.status, statusTone(judge.status)));
        const edit = el("button", "mini-button", "編輯");
        edit.type = "button";
        edit.addEventListener("click", () => fillJudgeForm(judge));
        const remove = el("button", "mini-button danger", "刪除");
        remove.type = "button";
        remove.addEventListener("click", () => {
          data.judges = data.judges.filter((item) => item.id !== judge.id);
          saveData();
          renderPeople();
        });
        row.append(edit, remove);
        block.appendChild(row);
      });
    }
    root.appendChild(block);
  });
}

function fillJudgeForm(judge) {
  const form = document.querySelector("#judgeForm");
  form.elements.id.value = judge.id;
  form.elements.name.value = judge.name;
  form.elements.date.value = judge.date;
  form.elements.status.value = judge.status;
  form.querySelector("button").textContent = "更新評審委員";
}

function renderAssignments() {
  const body = document.querySelector("#assignmentRows");
  body.innerHTML = "";
  staticData.assignments.forEach((row) => {
    const tr = el("tr");
    row.forEach((cell) => tr.appendChild(el("td", "", cell)));
    body.appendChild(tr);
  });
}

function renderCompatibility() {
  const body = document.querySelector("#compatibilityRows");
  body.innerHTML = "";
  staticData.compatibility.forEach((row) => {
    const tr = el("tr");
    row.forEach((cell, index) => {
      const td = el("td");
      if (index === 1) {
        const tone = cell.includes("不得") || cell.includes("不建議") ? "high" : cell.includes("視") ? "medium" : "done";
        td.appendChild(pill(cell, tone));
      } else {
        td.textContent = cell;
      }
      tr.appendChild(td);
    });
    body.appendChild(tr);
  });
}

function renderDaily() {
  const root = document.querySelector("#dailyFlow");
  root.innerHTML = "";
  staticData.daily.forEach((day) => {
    const card = el("section", "day-card");
    const title = el("h3");
    title.append(el("span", "", day.date), pill(day.venue, "wait"));
    const list = el("ul", "timeline");
    day.steps.forEach(([time, action]) => {
      const li = el("li");
      li.append(el("time", "", time), el("span", "", action));
      list.appendChild(li);
    });
    card.append(title, list);
    root.appendChild(card);
  });
}

function renderDocuments() {
  const root = document.querySelector("#documentList");
  root.innerHTML = "";
  staticData.documents.forEach((doc) => {
    const card = el("article", "document-card");
    card.append(el("h3", "", doc.name), pill(doc.status, doc.href ? "done" : "wait"), el("p", "", doc.note));
    if (doc.href) {
      const link = el("a", "", "下載 Word");
      link.href = doc.href;
      link.setAttribute("download", "");
      card.appendChild(link);
    } else {
      const button = el("button", "", "尚未產生");
      button.type = "button";
      card.appendChild(button);
    }
    root.appendChild(card);
  });
}

function latestProjectData() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return structuredClone(defaultData);
  try {
    return { ...structuredClone(defaultData), ...JSON.parse(raw) };
  } catch {
    return structuredClone(data);
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function exportDateText() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

function wordDocumentHtml(title, bodyHtml) {
  return `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="utf-8" />
        <title>${escapeHtml(title)}</title>
        <style>
          body { font-family: "微軟正黑體", "Microsoft JhengHei", "標楷體", serif; line-height: 1.5; }
          h1 { text-align: center; font-size: 20pt; margin: 0 0 16pt; }
          h2 { font-size: 15pt; margin: 18pt 0 8pt; }
          p { font-size: 11pt; margin: 0 0 8pt; }
          table { border-collapse: collapse; width: 100%; margin-bottom: 14pt; }
          th, td { border: 1px solid #000000; padding: 6pt; font-size: 11pt; vertical-align: middle; }
          th { background: #F2F2F2; font-weight: bold; text-align: center; }
          .center { text-align: center; }
          .muted { color: #555555; }
          .score-row td { height: 34pt; }
        </style>
      </head>
      <body>${bodyHtml}</body>
    </html>
  `;
}

function downloadWordHtml(filename, html) {
  const blob = new Blob(["\ufeff", html], { type: "application/msword" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function buildStaffAssignmentDocument(source) {
  const staffRows = dates.flatMap((date) =>
    source.staff
      .filter((person) => person.date === date)
      .sort((a, b) => a.role.localeCompare(b.role))
      .map((person) => `
        <tr>
          <td class="center">${escapeHtml(person.date)}</td>
          <td>${escapeHtml(person.name)}</td>
          <td>${escapeHtml(person.role)}</td>
          <td></td>
        </tr>
      `)
  );
  const assignmentRows = staticData.assignments.map((row) => `
    <tr>
      <td>${escapeHtml(row[0])}</td>
      <td class="center">${escapeHtml(row[1])}</td>
      <td>${escapeHtml(row[2])}</td>
      <td>${escapeHtml(row[3])}</td>
    </tr>
  `);
  const compatibilityRows = staticData.compatibility.map((row) => `
    <tr>
      <td>${escapeHtml(row[0])}</td>
      <td class="center">${escapeHtml(row[1])}</td>
      <td>${escapeHtml(row[2])}</td>
    </tr>
  `);
  return wordDocumentHtml(
    "青溪國小115學年度代理代課教師甄試人員分工表",
    `
      <h1>青溪國小 115 學年度代理代課教師甄試人員分工表</h1>
      <p class="muted">匯出日期：${escapeHtml(exportDateText())}</p>
      <h2>一、已指派工作人員</h2>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <th width="15%">日期</th>
          <th width="25%">姓名</th>
          <th width="30%">職務</th>
          <th width="30%">備註</th>
        </tr>
        ${staffRows.join("") || '<tr><td colspan="4" class="center">尚未建立工作人員資料</td></tr>'}
      </table>
      <h2>二、試務工作建議分工</h2>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <th width="25%">工作項目</th>
          <th width="15%">建議人數</th>
          <th width="25%">時間</th>
          <th width="35%">注意事項</th>
        </tr>
        ${assignmentRows.join("")}
      </table>
      <h2>三、兼任原則</h2>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <th width="30%">工作組合</th>
          <th width="20%">判斷</th>
          <th width="50%">原因</th>
        </tr>
        ${compatibilityRows.join("")}
      </table>
    `
  );
}

function candidateRowsForDate(source, date) {
  const candidates = Array.isArray(source.candidates) ? source.candidates : [];
  const rows = candidates.filter((candidate) => !candidate.date || candidate.date === date);
  const printableRows = rows.length ? rows : Array.from({ length: 10 }, () => ({}));
  return printableRows.map((candidate) => `
    <tr class="score-row">
      <td class="center">${escapeHtml(candidate.draw_number || candidate.drawNumber || candidate.number || "")}</td>
      <td>${escapeHtml(candidate.name || "")}</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  `);
}

function buildScoreSheetDocument(source) {
  const sections = dates.map((date) => {
    const judges = source.judges.filter((judge) => judge.date === date);
    const judgeText = judges.length
      ? judges.map((judge) => `${judge.name}（${judge.status}）`).join("、")
      : "尚未安排委員";
    return `
      <h2>${escapeHtml(date)} 委員評分表格</h2>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <th width="15%">甄試日期</th>
          <td width="35%">${escapeHtml(date)}</td>
          <th width="15%">評審委員</th>
          <td width="35%">${escapeHtml(judgeText)}</td>
        </tr>
        <tr>
          <th>甄試類別</th>
          <td></td>
          <th>試場</th>
          <td></td>
        </tr>
      </table>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <th width="15%">抽籤序號</th>
          <th width="20%">考生姓名</th>
          <th width="25%">試教分數 (50%)</th>
          <th width="25%">口試分數 (50%)</th>
          <th width="15%">評審簽章</th>
        </tr>
        ${candidateRowsForDate(source, date).join("")}
      </table>
    `;
  });
  return wordDocumentHtml(
    "青溪國小115學年度代理代課教師甄試委員評分表",
    `
      <h1>青溪國小 115 學年度代理代課教師甄試委員評分表</h1>
      <p class="muted">匯出日期：${escapeHtml(exportDateText())}</p>
      ${sections.join("")}
    `
  );
}

function setupExportButtons() {
  document.querySelector("#exportStaffDoc").addEventListener("click", () => {
    const source = latestProjectData();
    const filename = `115學年度青溪國小人員分工表-${exportDateText()}.doc`;
    downloadWordHtml(filename, buildStaffAssignmentDocument(source));
  });

  document.querySelector("#exportScoreDoc").addEventListener("click", () => {
    const source = latestProjectData();
    const filename = `115學年度青溪國小委員評分表-${exportDateText()}.doc`;
    downloadWordHtml(filename, buildScoreSheetDocument(source));
  });
}

function updateSummary() {
  const done = data.tasks.filter((task) => task.done).length;
  const pending = data.tasks.length - done;
  const pendingJudges = data.judges.filter((judge) => judge.status !== "已確認").length;
  const total = data.tasks.length;
  const percent = total ? Math.round((done / total) * 100) : 0;
  const pendingPeople = countPendingPeople();
  document.querySelector("#summaryDone").textContent = done;
  document.querySelector("#summaryPending").textContent = pending;
  document.querySelector("#summaryQuestions").textContent = data.questions.length + pendingJudges;
  document.querySelector("#dashboardPhase").textContent = currentProjectPhase();
  document.querySelector("#dashboardPendingTasks").textContent = pending;
  document.querySelector("#dashboardPendingPeople").textContent = pendingPeople;
  document.querySelector("#dashboardProgressText").textContent = `${percent}%`;
  document.querySelector("#dashboardProgressDetail").textContent = `${done} / ${total}`;
  document.querySelector("#dashboardProgressBar").style.width = `${percent}%`;
}

function setupForms() {
  document.querySelector("#taskForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const task = {
      id: form.dataset.editing || id("t"),
      phase: form.elements.phase.value,
      title: form.elements.title.value.trim(),
      priority: form.elements.priority.value,
      due: form.elements.due.value,
      done: form.dataset.editing ? data.tasks.find((item) => item.id === form.dataset.editing)?.done || false : false,
    };
    if (!task.title) return;
    data.tasks = data.tasks.filter((item) => item.id !== task.id);
    data.tasks.push(task);
    delete form.dataset.editing;
    form.reset();
    form.querySelector("button").textContent = "新增工作";
    saveData();
    renderChecklist();
  });

  document.querySelector("#staffForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const person = {
      id: form.elements.id.value || id("s"),
      name: form.elements.name.value.trim(),
      role: form.elements.role.value,
      date: form.elements.date.value,
    };
    if (!person.name) return;
    data.staff = data.staff.filter((item) => item.id !== person.id);
    data.staff.push(person);
    form.reset();
    form.elements.id.value = "";
    form.querySelector("button").textContent = "儲存工作人員";
    saveData();
    renderPeople();
  });

  document.querySelector("#judgeForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const judge = {
      id: form.elements.id.value || id("j"),
      name: form.elements.name.value.trim(),
      date: form.elements.date.value,
      status: form.elements.status.value,
    };
    if (!judge.name) return;
    data.judges = data.judges.filter((item) => item.id !== judge.id);
    data.judges.push(judge);
    form.reset();
    form.elements.id.value = "";
    form.querySelector("button").textContent = "儲存評審委員";
    saveData();
    renderPeople();
  });

  document.querySelector("#taskSearch").addEventListener("input", renderChecklist);
  document.querySelector("#resetProjectData").addEventListener("click", () => {
    if (!confirm("確定要還原預設資料？目前新增與修改的資料會清除。")) return;
    localStorage.removeItem(storageKey);
    data = structuredClone(defaultData);
    renderAll();
  });
}

function setupTabs() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      const page = button.dataset.page;
      document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("is-active"));
      document.querySelectorAll(".page").forEach((section) => section.classList.remove("is-active"));
      button.classList.add("is-active");
      document.querySelector(`#page-${page}`).classList.add("is-active");
    });
  });
}

setupForms();
setupExportButtons();
setupTabs();
renderAll();
