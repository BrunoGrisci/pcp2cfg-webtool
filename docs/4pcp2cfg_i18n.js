/* pcp2cfg_i18n.js — bilingual i18n (en / pt-BR) + help modal content */

(function () {
  const I18N = {
    en: {
      // UI
      "title.main": "PCP → CFG Ambiguity",
      "about.line1": "An interactive tool for the reduction PCP ⇒ CFG Ambiguity.",
      "about.line2": "Build or import a PCP instance (dominoes), generate the grammar G_D, and explore derivations via T and B.",
      "about.note_ai": "(Webtool built using Generative AI — ChatGPT)",

      "label.csv_file": "Import dominoes (.csv):",
      "button.add_domino": "Add domino",
      "button.clear_dominoes": "Clear dominoes",
      "button.export_csv": "Export CSV",
      "button.delete": "Delete",
      "button.build_derivation": "Build derivations",
      "button.load_example": "Load example",

      "title.dominoes": "PCP instance (dominoes)",
      "note.dominoes": "Each domino i is a pair (t_i, b_i). The tool assigns a new terminal a_i used as an index marker in the grammar.",
      "domino.header.id": "ID",
      "domino.header.top": "Top (t_i)",
      "domino.header.bottom": "Bottom (b_i)",
      "domino.header.actions": "Actions",

      "summary.k": "k",
      "summary.ai": "Index symbols",
      "note.ai_symbols": "The symbols a1, a2, … are fresh terminals that do not appear in any t_i or b_i.",

      "title.grammar": "Generated CFG G_D",
      "note.grammar": "The grammar is constructed from your dominoes using the classical reduction PCP ⇒ AMB_CFG.",

      "title.derivations": "Derivation explorer",
      "label.sequence": "Index sequence (e.g., 1,3,2):",
      "note.sequence": "This builds two derivations: S⇒T⇒* and S⇒B⇒*. Matching outputs witness ambiguity.",

      "result.top_concat": "Top concat",
      "result.bottom_concat": "Bottom concat",
      "result.word_T": "Word via T",
      "result.word_B": "Word via B",
      "result.match_yes": "MATCH",
      "result.match_no": "NO MATCH",
      "result.match_explain_yes": "This sequence witnesses ambiguity: the same terminal string is derived via T and via B.",
      "result.match_explain_no": "This sequence does not witness ambiguity. Try another sequence or increase length.",
      "result.match_weak": "PARTIAL MATCH",
      "result.match_explain_weak": "The concatenated characters match, but the token structure differs. This is not a formal PCP solution.",

      "tree.label": "Tree",
      "note.undecidable": "Reminder: this tool does not decide PCP or CFG ambiguity. It helps you explore the reduction and witness ambiguity when a solution is found.",

      "footer.note": "Educational tool; no decision procedure for undecidable problems.",

      // Status
      "status.ready_empty": "Ready. Add dominoes or import a CSV.",
      "status.ready_k": "Ready. Current instance has k={K} dominoes.",
      "status.need_dominoes": "Please add/import at least one domino first.",
      "status.csv_bad_header": "CSV header must contain: top_string and bottom_string (like tm2pcp export).",
      "status.import_ok": "Imported CSV successfully (k={K}).",
      "status.import_fail": "Failed to import CSV: {ERR}",
      "status.export_none": "Nothing to export: there are no dominoes.",
      "status.export_ok": "Exported CSV (k={K}).",
      "status.example_loaded": "Loaded a small example instance.",
      "status.bad_sequence": "Invalid sequence. Use positive integers separated by commas/spaces (e.g., 1,3,2).",
      "status.empty_sequence": "Sequence is empty. PCP solutions must be non-empty.",
      "status.sequence_out_of_range": "Sequence contains an index outside the range 1..{K}.",
      "status.forbidden_ai": "Your domino strings contain a pattern like a1, a2, ... These are reserved for fresh index symbols in the reduction. Please rename such terminals.",
      "status.witness_ambiguity": "Match found: this sequence witnesses ambiguity of G_D.",
      "status.no_witness": "No match for this sequence.",

      // Grammar box messages
      "grammar.empty": "Add at least one domino to generate G_D.",
      "grammar.forbidden_ai": "Cannot generate G_D because your domino strings contain reserved patterns a1, a2, ...\nPlease rename these terminals in your PCP instance.",

      "summary.prefix": "Index prefix",

      "result.aligned_legend": "Green = match, red = mismatch, · = missing token.",
      "help.solver_bounded.title": "Bounded MPCP Solver",
      "help.solver_bounded.body_html": "<p>This solver performs a depth-bounded search (iterative deepening) to find a solution to the PCP instance.</p><p><strong>Parameters:</strong></p><ul><li><strong>Max depth:</strong> The maximum number of dominoes in the sequence.</li><li><strong>Node limit:</strong> Maximum number of search nodes (states) to explore.</li><li><strong>Time limit:</strong> Maximum time (in milliseconds) to run the search.</li></ul><p>Note: Since PCP is undecidable, this solver is not guaranteed to terminate with a \"no\" answer for all instances; it simply gives up when bounds are reached.</p>",
    },

    "pt-BR": {
      "title.main": "PCP → Ambiguidade de GLC",
      "about.line1": "Uma ferramenta interativa para a redução PCP ⇒ Ambiguidade de GLC.",
      "about.line2": "Construa ou importe uma instância de PCP (dominós), gere a gramática G_D e explore derivações via T e via B.",
      "about.note_ai": "(Webtool construído com apoio de IA Generativa — ChatGPT)",

      "label.csv_file": "Importar dominós (.csv):",
      "button.add_domino": "Adicionar dominó",
      "button.clear_dominoes": "Limpar dominós",
      "button.export_csv": "Exportar CSV",
      "button.delete": "Excluir",
      "button.build_derivation": "Construir derivações",
      "button.load_example": "Carregar exemplo",

      "title.dominoes": "Instância de PCP (dominós)",
      "note.dominoes": "Cada dominó i é um par (t_i, b_i). A ferramenta cria um terminal novo a_i usado como “marcador de índice” na gramática.",
      "domino.header.id": "ID",
      "domino.header.top": "Topo (t_i)",
      "domino.header.bottom": "Base (b_i)",
      "domino.header.actions": "Ações",

      "summary.k": "k",
      "summary.ai": "Símbolos de índice",
      "note.ai_symbols": "Os símbolos a1, a2, … são terminais novos e não devem aparecer em nenhum t_i ou b_i.",

      "title.grammar": "GLC gerada G_D",
      "note.grammar": "A gramática é construída a partir dos dominós usando a redução clássica PCP ⇒ AMB_GLC.",

      "title.derivations": "Explorador de derivações",
      "label.sequence": "Sequência de índices (ex.: 1,3,2):",
      "note.sequence": "Isto constrói duas derivações: S⇒T⇒* e S⇒B⇒*. Se as saídas coincidirem, você encontrou uma testemunha de ambiguidade.",

      "result.top_concat": "Concat. topo",
      "result.bottom_concat": "Concat. base",
      "result.word_T": "Palavra via T",
      "result.word_B": "Palavra via B",
      "result.match_yes": "COINCIDE",
      "result.match_no": "NÃO COINCIDE",
      "result.match_explain_yes": "Esta sequência testemunha ambiguidade: a mesma palavra terminal é gerada via T e via B.",
      "result.match_explain_no": "Esta sequência não testemunha ambiguidade. Tente outra sequência ou aumente o comprimento.",
      "result.match_weak": "COINCIDÊNCIA PARCIAL",
      "result.match_explain_weak": "Os caracteres concatenados coincidem, mas a estrutura de tokens difere. Isto não é uma solução formal do PCP.",

      "tree.label": "Árvore",
      "note.undecidable": "Lembrete: esta ferramenta não decide PCP nem ambiguidade de GLC. Ela ajuda a explorar a redução e encontrar testemunhas quando uma solução aparece.",

      "footer.note": "Ferramenta educacional; não há procedimento de decisão para problemas indecidíveis.",

      "status.ready_empty": "Pronto. Adicione dominós ou importe um CSV.",
      "status.ready_k": "Pronto. A instância atual tem k={K} dominós.",
      "status.need_dominoes": "Adicione/importe ao menos um dominó antes.",
      "status.csv_bad_header": "O cabeçalho do CSV deve conter: top_string e bottom_string (como no export do tm2pcp).",
      "status.import_ok": "CSV importado com sucesso (k={K}).",
      "status.import_fail": "Falha ao importar CSV: {ERR}",
      "status.export_none": "Nada para exportar: não há dominós.",
      "status.export_ok": "CSV exportado (k={K}).",
      "status.example_loaded": "Um pequeno exemplo foi carregado.",
      "status.bad_sequence": "Sequência inválida. Use inteiros positivos separados por vírgulas/espaços (ex.: 1,3,2).",
      "status.empty_sequence": "A sequência está vazia. Soluções de PCP precisam ser não vazias.",
      "status.sequence_out_of_range": "A sequência contém um índice fora do intervalo 1..{K}.",
      "status.forbidden_ai": "Seus dominós contêm padrões como a1, a2, ... Esses símbolos são reservados como “terminais novos” na redução. Renomeie esses terminais na instância de PCP.",
      "status.witness_ambiguity": "Coincidência encontrada: esta sequência testemunha a ambiguidade de G_D.",
      "status.no_witness": "Não houve coincidência para esta sequência.",

      "grammar.empty": "Adicione ao menos um dominó para gerar G_D.",
      "grammar.forbidden_ai": "Não foi possível gerar G_D porque sua instância contém padrões reservados a1, a2, ...\nRenomeie esses terminais na instância de PCP.",

      "summary.prefix": "Prefixo de índice",

      "result.aligned_legend": "Verde = igual, vermelho = diferente, · = token faltando.",
      "help.solver_bounded.title": "Solver MPCP Limitado",
      "help.solver_bounded.body_html": "<p>Este solver realiza uma busca limitada em profundidade (aprofundamento iterativo) para encontrar uma solução.</p><p><strong>Parâmetros:</strong></p><ul><li><strong>Profundidade máx.:</strong> O número máximo de dominós na sequência.</li><li><strong>Limite de nós:</strong> Número máximo de estados explorados.</li><li><strong>Limite de tempo:</strong> Tempo máximo (ms) de execução.</li></ul><p>Nota: Como o PCP é indecidível, este algoritmo não garante terminar com resposta \"não\" para todas as instâncias; ele apenas desiste ao atingir os limites.</p>",
    }
  };

  // Extra UI strings (workspace + bounded solver)
  Object.assign(I18N.en, {
    "title.workspace": "Workspace (sequence of dominoes)",
    "note.workspace": "Drop tiles here in order. You can reorder or delete individual tiles.",
    "note.workspace_sync": "Sync with the index sequence input below.",
    "button.clear_workspace": "Clear workspace",
    "label.wrap_strings": "Wrap strings",
    "workspace.top": "Top",
    "workspace.bottom": "Bottom",

    "button.seq_to_workspace": "Sequence → Workspace",
    "button.workspace_to_seq": "Workspace → Sequence",

    "solver.title_mpcp": "MPCP Solver (bounded)",
    "solver.title_pcp": "PCP Solver (bounded)",
    "solver.note": "PCP is undecidable. This solver performs a bounded search and may fail even if a solution exists.",
    "solver.toggle_mpcp": "Use MPCP (force start with 1)",
    "solver.depth_label": "Max depth:",
    "solver.time_label": "Time limit (ms):",
    "solver.nodes_label": "Node limit:",
    "solver.solve_btn": "Try solve",
    "solver.cancel_btn": "Cancel",
    "solver.load_btn": "Load solution into workspace",
    "solver.progress_depth": "Searching depth D={D}… (nodes explored: {N})",
    "solver.solution_found": "Solution found: {SEQ}",
    "solver.solution_found_verbose": "Found solution (length {LEN}) in {MS} ms after expanding {NODES} nodes. Sequence (1-based indices): {SEQ}",
    "solver.no_solution_found": "No solution found within the current bounds.",
    "solver.done": "Done. Nodes explored: {N}",
    "solver.cancelled": "Cancelled.",
    "solver.node_limit_hit": "Stopped: node limit reached.",
    "solver.time_limit_hit": "Stopped: time limit reached.",

    "status.seq_to_workspace": "Loaded the index sequence into the workspace.",
    "status.workspace_to_seq": "Copied the workspace sequence into the index sequence input.",
    "status.workspace_cleared": "Workspace cleared.",
    "status.solver_found": "A bounded solution was found (this witnesses ambiguity in G_D).",
    "status.solver_loaded": "Loaded the solver solution into the workspace.",
    "status.solver_none": "No solution found within the selected bounds.",
    "status.solver_cancelled": "Solver cancelled.",
    "status.solver_limits": "Solver stopped due to limits (time/nodes/depth).",

    "result.match_yes_pcp": "MATCH",
    "result.match_no_pcp": "NO MATCH",
    "result.match_explain_yes_pcp": "Top and Bottom strings match perfectly (tokens are identical).",
    "result.match_explain_no_pcp": "Top and Bottom strings do not match.",
    "result.match_explain_weak_pcp": "Concatenated characters match, but tokens differ (e.g. 'ab' vs 'a' 'b'). Not a solution."
  });

  Object.assign(I18N["pt-BR"], {
    "title.workspace": "Área de trabalho (sequência de dominós)",
    "note.workspace": "Solte as peças aqui em ordem. Você pode reordenar ou remover peças individuais.",
    "note.workspace_sync": "Sincronize com o campo de sequência de índices abaixo.",
    "button.clear_workspace": "Limpar área de trabalho",
    "label.wrap_strings": "Quebrar linhas das strings",
    "result.match_yes_pcp": "COINCIDE",
    "result.match_no_pcp": "NÃO COINCIDE",
    "result.match_explain_yes_pcp": "As strings do Topo e Base coincidem perfeitamente (tokens idênticos).",
    "result.match_explain_no_pcp": "As strings do Topo e Base não coincidem.",
    "result.match_explain_weak_pcp": "Caracteres concatenados coincidem, mas os tokens diferem (ex.: 'ab' vs 'a' 'b'). Não é uma solução.",
    "workspace.top": "Topo",
    "workspace.bottom": "Base",

    "button.seq_to_workspace": "Sequência → Área de trabalho",
    "button.workspace_to_seq": "Área de trabalho → Sequência",

    "solver.title_mpcp": "Solver de MPCP (limitado)",
    "solver.title_pcp": "Solver de PCP (limitado)",
    "solver.note": "PCP é indecidível. Este solver faz uma busca limitada e pode falhar mesmo que exista solução.",
    "solver.toggle_mpcp": "Usar MPCP (forçar começar com 1)",
    "solver.depth_label": "Profundidade máx.:",
    "solver.time_label": "Limite de tempo (ms):",
    "solver.nodes_label": "Limite de nós:",
    "solver.solve_btn": "Tentar resolver",
    "solver.cancel_btn": "Cancelar",
    "solver.load_btn": "Carregar solução na área de trabalho",
    "solver.progress_depth": "Buscando profundidade D={D}… (nós explorados: {N})",
    "solver.solution_found": "Solução encontrada: {SEQ}",
    "solver.solution_found_verbose": "Solução encontrada (tamanho {LEN}) em {MS} ms após expandir {NODES} nós. Sequência (índices começando em 1): {SEQ}",
    "solver.no_solution_found": "Nenhuma solução encontrada dentro dos limites atuais.",
    "solver.done": "Concluído. Nós explorados: {N}",
    "solver.cancelled": "Cancelado.",
    "solver.node_limit_hit": "Interrompido: limite de nós atingido.",
    "solver.time_limit_hit": "Interrompido: limite de tempo atingido.",

    "status.seq_to_workspace": "Sequência de índices carregada na área de trabalho.",
    "status.workspace_to_seq": "Sequência da área de trabalho copiada para o campo de sequência de índices.",
    "status.workspace_cleared": "Área de trabalho limpa.",
    "status.solver_found": "Uma solução limitada foi encontrada (isso evidencia ambiguidade em G_D).",
    "status.solver_loaded": "Solução do solver carregada na área de trabalho.",
    "status.solver_none": "Nenhuma solução encontrada dentro dos limites selecionados.",
    "status.solver_cancelled": "Solver cancelado.",
    "status.solver_limits": "Solver interrompido por limites (tempo/nós/profundidade)."
  });


  // -----------------------------
  // i18n runtime (tm2pcp-like)
  // -----------------------------
  function interpolate(str, params) {
    return String(str).replace(/\{(\w+)\}/g, (_, k) =>
      params && params[k] != null ? String(params[k]) : `{${k}}`
    );
  }

  function getLang(storageKey = "pcp2cfg-lang") {
    const saved = localStorage.getItem(storageKey);
    if (saved && I18N[saved]) return saved;
    return "en";
  }

  function setLang(lang, storageKey = "pcp2cfg-lang") {
    if (!I18N[lang]) lang = "en";
    localStorage.setItem(storageKey, lang);
    document.documentElement.lang = lang;
  }

  function t(key, params = {}) {
    const lang = getLang(window.__pcp2cfg_lang_storage_key || "pcp2cfg-lang");
    const table = I18N[lang] || I18N.en;
    const fallback = I18N.en || {};
    const raw = (table[key] != null) ? table[key] : (fallback[key] != null ? fallback[key] : key);
    return interpolate(raw, params);
  }

  function applyI18n() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.getAttribute("data-i18n-html");
      el.innerHTML = t(key);
    });

    // If help modal is open, allow HTML refresh through main page hook.
    if (typeof window.refreshHelpModal === "function") window.refreshHelpModal();
  }

  function setLanguage(lang) {
    setLang(lang, window.__pcp2cfg_lang_storage_key || "pcp2cfg-lang");
    applyI18n();
  }

  function initLanguageFromStorage(storageKey = "pcp2cfg-lang") {
    window.__pcp2cfg_lang_storage_key = storageKey;
    const lang = getLang(storageKey);
    setLang(lang, storageKey);
    applyI18n();
  }

  // -----------------------------
  // Help content (HTML-capable)
  // -----------------------------
  // We keep help in the same i18n tables under keys:
  // help.<id>.title and help.<id>.body_html
  //
  // Add help entries in both languages:
  const helpEN = {
    "help.main_tool.title": "What does this tool do?",
    "help.main_tool.body_html": `
      <p>
        <strong>pcp2cfg</strong> implements the classical reduction
        <code>PCP ⇒ AMB_CFG</code> (ambiguity of context-free grammars).
      </p>
      <p>
        From a PCP instance <code>D = {(t1,b1), …, (tk,bk)}</code>, the tool builds a CFG <code>G_D</code>:
      </p>
      <pre class="mono">S -> T | B
T -> t1 T a1 | ... | tk T ak | t1 a1 | ... | tk ak
B -> b1 B a1 | ... | bk B ak | b1 a1 | ... | bk ak</pre>
      <p>
        A PCP solution sequence <code>i1,...,in</code> yields the same word via <code>T</code> and via <code>B</code>,
        which witnesses that <code>G_D</code> is ambiguous.
      </p>
    `,

    "help.csv_import.title": "CSV import",
    "help.csv_import.body_html": `
      <p>
        Import a CSV with header <code>domino_id,top_string,bottom_string</code>
        (same style as tm2pcp export).
      </p>
      <p>
        The tool reads <code>top_string</code> and <code>bottom_string</code>, assigns IDs 1..k, and regenerates the grammar.
      </p>
    `,

    "help.dominoes.title": "Dominoes and index symbols a_i",
    "help.dominoes.body_html": `
      <p>
        Each domino is a pair <code>(t_i, b_i)</code>. The reduction introduces fresh terminals
        <code>a1, a2, …, ak</code> that serve as “index markers”.
      </p>
      <p>
        For clarity, this tool reserves patterns like <code>a1</code>, <code>a2</code>, … and asks you not to use them inside <code>t_i</code> or <code>b_i</code>.
      </p>
    `,

    "help.grammar.title": "Generated grammar G_D",
    "help.grammar.body_html": `
      <p>
        The grammar has start symbol <code>S</code> and two branches:
      </p>
      <ul>
        <li><code>S -> T</code> generates strings built from <code>t_i</code> pieces</li>
        <li><code>S -> B</code> generates strings built from <code>b_i</code> pieces</li>
      </ul>
      <p>
        Both branches append the same reversed index suffix <code>a_{i_n}...a_{i_1}</code>.
        Therefore, the two full strings match iff the PCP concatenations match.
      </p>
    `,

    "help.derivations.title": "Derivation explorer",
    "help.derivations.body_html": `
      <p>
        Enter a sequence of indices (e.g., <code>1,3,2</code>). The tool deterministically builds:
      </p>
      <ul>
        <li>a derivation <code>S ⇒ T ⇒* w_T</code></li>
        <li>a derivation <code>S ⇒ B ⇒* w_B</code></li>
      </ul>
      <p>
        If <code>w_T = w_B</code>, then <code>G_D</code> is ambiguous (you have two distinct derivation trees for the same word).
      </p>
    `,

    "help.sequence.title": "How sequences map to derivations",
    "help.sequence.body_html": `
      <p>
        For a sequence <code>i1,...,in</code>, the derivation via <code>T</code> produces:
      </p>
      <pre class="mono">t_{i1} t_{i2} ... t_{in} a_{in} ... a_{i2} a_{i1}</pre>
      <p>
        And via <code>B</code>:
      </p>
      <pre class="mono">b_{i1} b_{i2} ... b_{in} a_{in} ... a_{i2} a_{i1}</pre>
      <p>
        So these are equal iff <code>t_{i1}...t_{in} = b_{i1}...b_{in}</code>, i.e., iff the sequence is a PCP solution.
      </p>
    `,
  };

  const helpPT = {
    "help.main_tool.title": "O que esta ferramenta faz?",
    "help.main_tool.body_html": `
      <p>
        <strong>pcp2cfg</strong> implementa a redução clássica
        <code>PCP ⇒ AMB_GLC</code> (ambiguidade de gramáticas livres de contexto).
      </p>
      <p>
        A partir de uma instância de PCP <code>D = {(t1,b1), …, (tk,bk)}</code>, a ferramenta constrói uma GLC <code>G_D</code>:
      </p>
      <pre class="mono">S -> T | B
T -> t1 T a1 | ... | tk T ak | t1 a1 | ... | tk ak
B -> b1 B a1 | ... | bk B ak | b1 a1 | ... | bk ak</pre>
      <p>
        Uma sequência solução <code>i1,...,in</code> gera a mesma palavra via <code>T</code> e via <code>B</code>,
        o que testemunha que <code>G_D</code> é ambígua.
      </p>
    `,

    "help.csv_import.title": "Importação de CSV",
    "help.csv_import.body_html": `
      <p>
        Importe um CSV com cabeçalho <code>domino_id,top_string,bottom_string</code>
        (mesmo estilo do export do tm2pcp).
      </p>
      <p>
        A ferramenta lê <code>top_string</code> e <code>bottom_string</code>, atribui IDs 1..k e regenera a gramática.
      </p>
    `,

    "help.dominoes.title": "Dominós e símbolos de índice a_i",
    "help.dominoes.body_html": `
      <p>
        Cada dominó é um par <code>(t_i, b_i)</code>. A redução introduz terminais novos
        <code>a1, a2, …, ak</code> que funcionam como “marcadores de índice”.
      </p>
      <p>
        Para manter a redução clara, esta ferramenta reserva padrões como <code>a1</code>, <code>a2</code>, … e pede que você não os use dentro de <code>t_i</code> ou <code>b_i</code>.
      </p>
    `,

    "help.grammar.title": "Gramática gerada G_D",
    "help.grammar.body_html": `
      <p>
        A gramática tem símbolo inicial <code>S</code> e dois ramos:
      </p>
      <ul>
        <li><code>S -> T</code> gera strings compostas por pedaços <code>t_i</code></li>
        <li><code>S -> B</code> gera strings compostas por pedaços <code>b_i</code></li>
      </ul>
      <p>
        Ambos os ramos adicionam o mesmo sufixo invertido <code>a_{i_n}...a_{i_1}</code>.
        Assim, as duas strings finais coincidem sse as concatenações do PCP coincidem.
      </p>
    `,

    "help.derivations.title": "Explorador de derivações",
    "help.derivations.body_html": `
      <p>
        Digite uma sequência de índices (ex.: <code>1,3,2</code>). A ferramenta constrói de forma determinística:
      </p>
      <ul>
        <li>uma derivação <code>S ⇒ T ⇒* w_T</code></li>
        <li>uma derivação <code>S ⇒ B ⇒* w_B</code></li>
      </ul>
      <p>
        Se <code>w_T = w_B</code>, então <code>G_D</code> é ambígua (há duas árvores de derivação distintas para a mesma palavra).
      </p>
    `,

    "help.sequence.title": "Como sequências viram derivações",
    "help.sequence.body_html": `
      <p>
        Para uma sequência <code>i1,...,in</code>, a derivação via <code>T</code> produz:
      </p>
      <pre class="mono">t_{i1} t_{i2} ... t_{in} a_{in} ... a_{i2} a_{i1}</pre>
      <p>
        E via <code>B</code>:
      </p>
      <pre class="mono">b_{i1} b_{i2} ... b_{in} a_{in} ... a_{i2} a_{i1}</pre>
      <p>
        Logo, essas palavras são iguais sse <code>t_{i1}...t_{in} = b_{i1}...b_{in}</code>, isto é, sse a sequência é solução do PCP.
      </p>
    `,
  };

  // Merge help into tables
  Object.assign(I18N.en, helpEN);
  Object.assign(I18N["pt-BR"], helpPT);

  // Expose
  window.t = t;
  window.applyI18n = applyI18n;
  window.setLanguage = setLanguage;
  window.initLanguageFromStorage = initLanguageFromStorage;
})();