/* pcp2cfg_i18n.js — bilingual i18n (en / pt-BR) + help modal content */

(function () {
  const I18N = {
    en: {
      // UI
      "title.main": "PCP → CFG Ambiguity",
      "about.line1": "An interactive tool for the reduction PCP ⇒ CFG Ambiguity.",
      "about.line2": "Build or import a PCP instance (dominoes), generate the grammar G_D, and explore derivations via T and B.",
      "about.note_ai": "(Webtool built using Generative AI — ChatGPT)",
      "about.dev_block": `
        <strong>Developed by Prof. Bruno Iochins Grisci</strong><br />
        <em>(Webtool built using Generative AI)</em><br />
        Departamento de Informática Teórica —
        <a href="https://www.inf.ufrgs.br/site/" target="_blank" rel="noreferrer">Instituto de Informática</a><br />
        <a href="https://www.ufrgs.br/site/" target="_blank" rel="noreferrer">Universidade Federal do Rio Grande do Sul (UFRGS)</a><br />
        Website:
        <a href="https://brunogrisci.github.io/" target="_blank" rel="noreferrer">https://brunogrisci.github.io/</a><br /><br />
        <strong>Based and inspired by the class of Prof. Rodrigo Machado:</strong><br />
        <a href="https://link.inf.ufrgs.br/212-AALr" target="_blank" rel="noreferrer">https://link.inf.ufrgs.br/212-AALr</a><br /><br />
        <em>Tip:</em> Try the TM → PCP Domino Generator first (<a href="https://brunogrisci.github.io/tm2pcp" target="_blank" rel="noreferrer">tm2pcp</a>). The exported .csv works as input here.
      `,

      "label.csv_file": "Import dominoes (.csv):",
      "button.add_domino": "Add domino",
      "button.clear_dominoes": "Clear dominoes",
      "button.export_csv": "Export CSV",
      "button.delete": "Delete",
      "button.build_derivation": "Build derivations",
      "button.clear_derivations": "Clear derivations",
      "button.zoom_in": "Zoom in",
      "button.zoom_out": "Zoom out",
      "button.clear_tree": "Clear tree",
      "button.load_example": "Load example",
      "tree.select_rule": "Select a rule number:",
      "tree.select_rule_title": "Choose a rule",

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
    "footer.code_label": "Code on GitHub:",
    "footer.licensed_label": "Licensed under",

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
      "help.solver_bounded.title": "Bounded (M)PCP Solver",
      "help.solver_bounded.body_html": `
        <p><strong>What it does</strong><br>Iterative deepening search for a PCP/MPCP solution. PCP is undecidable, so bounds may stop early.</p>
        <p><strong>How to use</strong></p>
        <ul>
          <li><em>Max depth</em>: maximum length of the sequence.</li>
          <li><em>Node limit</em>: cap on explored states.</li>
          <li><em>Time limit</em>: cap in milliseconds.</li>
          <li><em>MPCP</em> toggle: force the sequence to start with domino 1.</li>
        </ul>
      <p><strong>Tips</strong><br>Click “Try solve”. If a sequence is found you can “Load solution into workspace”. No solution within bounds is inconclusive. Inspired by Arne Vogel’s blog/algorithm and Ling Zhao’s thesis (Ch. 2.2).</p>
      `,
      "help.solver_max_depth.title": "Max depth",
      "help.solver_max_depth.body_html": `
        <p>Iterative deepening limit: maximum sequence length explored.</p>
        <p>Higher depth is slower but more thorough; lower depth is faster but may miss solutions.</p>
      `,
      "help.solver_time_limit.title": "Time limit (ms)",
      "help.solver_time_limit.body_html": `
        <p>Wall-clock cap in milliseconds. When reached, the solver stops and the result is inconclusive.</p>
      `,
      "help.solver_node_limit.title": "Node limit",
      "help.solver_node_limit.body_html": `
        <p>Cap on explored search states (nodes). Keeps the search finite; hitting the cap is inconclusive.</p>
      `,
      "help.solver_max_depth.title": "Max depth",
      "help.solver_max_depth.body_html": `
        <p>Iterative deepening limit: maximum sequence length explored.</p>
        <p>Higher depth is slower but more thorough; lower depth is faster but may miss solutions.</p>
      `,
      "help.solver_time_limit.title": "Time limit (ms)",
      "help.solver_time_limit.body_html": `
        <p>Wall-clock cap in milliseconds. When reached, the solver stops and the result is inconclusive.</p>
      `,
      "help.solver_node_limit.title": "Node limit",
      "help.solver_node_limit.body_html": `
        <p>Cap on explored search states (nodes). Keeps the search finite; hitting the cap is inconclusive.</p>
      `,
      "help.main_tool.title": "What does this tool do?",
      "help.main_tool.body_html": `
        <p><strong>pcp2cfg</strong> visualizes the reduction <code>PCP ⇒ CFG ambiguity</code>.</p>
        <ul>
          <li><strong>PCP</strong>: Given dominoes <code>(t_i,b_i)</code>, find a non-empty sequence whose top and bottom concatenations match.</li>
          <li><strong>CFG ambiguity</strong>: A CFG is ambiguous if some word has two distinct derivation trees.</li>
          <li><strong>Reduction (slides-based)</strong>: For dominoes 1..k, build <code>G_D</code>:
<pre class="mono">S → T | B
T → t1 T a1 | … | tk T ak | t1 a1 | … | tk ak
B → b1 B a1 | … | bk B ak | b1 a1 | … | bk ak</pre>
          A PCP solution <code>i1…in</code> produces the same word via <code>T</code> and <code>B</code>, proving ambiguity.</li>
        </ul>
        <p>Use the panels to enter/import dominoes, see <code>G_D</code>, run a bounded solver, and build/expand derivation trees.</p>
      `,
      "help.csv_import.title": "CSV import",
      "help.csv_import.body_html": `
        <p>Import a CSV with header <code>domino_id,top_string,bottom_string</code> (same as tm2pcp export). The tm2pcp PCP export works here.</p>
        <p>Top/bottom are space-tokenized; empty cells are allowed. Dominoes are renumbered 1..k on import.</p>
      `,
      "help.dominoes.title": "Dominoes and index symbols a_i",
      "help.dominoes.body_html": `
        <p>Edit each <code>(t_i, b_i)</code> as token chips. Drag to reorder; double-click to send to the workspace; delete individually.</p>
        <p>The reduction introduces fresh terminals <code>a1…ak</code> as index markers; avoid using patterns like <code>a1</code> inside your own strings. The tool auto-picks a safe prefix.</p>
      `,
      "help.workspace.title": "Workspace (sequence of dominoes)",
      "help.workspace.body_html": `
        <p>Build an ordered sequence by dragging/double-clicking. Tokens contributed by each domino are shown below; hover a workspace domino to highlight its tokens in Top/Bottom.</p>
        <p>Use “Workspace → Sequence” to copy indices, or “Sequence → Workspace” to load from the index field. If Top and Bottom match, you found a PCP solution.</p>
      `,
      "help.grammar.title": "Generated grammar G_D",
      "help.grammar.body_html": `
        <p>Live grammar from your dominoes using the reduction above. Hover a rule to see its domino; click a rule alternative to expand the matching nonterminal in the tree.</p>
        <p>The reversed suffix <code>a_{in}…a_{i1}</code> forces both branches to align exactly when the PCP instance has a solution.</p>
      `,
      "help.derivations.title": "Derivation explorer",
      "help.derivations.body_html": `
        <p>Enter indices (e.g., <code>1,3,2</code>) to build <code>S⇒T⇒*</code> and <code>S⇒B⇒*</code>. Hover nodes to highlight their word tokens and the grammar rule; expand nonterminals manually or by clicking grammar rules.</p>
        <p>If the words match, you have a witness of ambiguity for <code>G_D</code>.</p>
      `,
      "help.sequence.title": "How sequences map to derivations",
      "help.sequence.body_html": `
        <p>For indices <code>i1…in</code>:</p>
<pre class="mono">T-branch: t_{i1} … t_{in} a_{in} … a_{i1}
B-branch: b_{i1} … b_{in} a_{in} … a_{i1}</pre>
        <p>The suffix <code>a_{in}…a_{i1}</code> forces alignment. Equality ⇔ the sequence solves the PCP instance.</p>
      `,
    },

    "pt-BR": {
      "title.main": "PCP → Ambiguidade de GLC",
      "about.line1": "Uma ferramenta interativa para a redução PCP ⇒ Ambiguidade de GLC.",
      "about.line2": "Construa ou importe uma instância de PCP (dominós), gere a gramática G_D e explore derivações via T e via B.",
      "about.note_ai": "(Webtool construído com apoio de IA Generativa — ChatGPT)",
      "about.dev_block": `
        <strong>Desenvolvido pelo Prof. Bruno Iochins Grisci</strong><br />
        <em>(Webtool construído com IA Generativa)</em><br />
        Departamento de Informática Teórica —
        <a href="https://www.inf.ufrgs.br/site/" target="_blank" rel="noreferrer">Instituto de Informática</a><br />
        <a href="https://www.ufrgs.br/site/" target="_blank" rel="noreferrer">Universidade Federal do Rio Grande do Sul (UFRGS)</a><br />
        Website:
        <a href="https://brunogrisci.github.io/" target="_blank" rel="noreferrer">https://brunogrisci.github.io/</a><br /><br />
        <strong>Baseado e inspirado nas aulas do Prof. Rodrigo Machado:</strong><br />
        <a href="https://link.inf.ufrgs.br/212-AALr" target="_blank" rel="noreferrer">https://link.inf.ufrgs.br/212-AALr</a><br /><br />
        <em>Dica:</em> Experimente antes o gerador TM → PCP Domino (<a href="https://brunogrisci.github.io/tm2pcp" target="_blank" rel="noreferrer">tm2pcp</a>). O .csv exportado funciona como entrada aqui.
      `,

      "label.csv_file": "Importar dominós (.csv):",
      "button.add_domino": "Adicionar dominó",
      "button.clear_dominoes": "Limpar dominós",
      "button.export_csv": "Exportar CSV",
      "button.delete": "Excluir",
      "button.build_derivation": "Construir derivações",
      "button.clear_derivations": "Limpar derivações",
      "button.zoom_in": "Aproximar",
      "button.zoom_out": "Afastar",
      "button.clear_tree": "Limpar árvore",
      "button.load_example": "Carregar exemplo",
      "tree.select_rule": "Selecione um número de regra:",
      "tree.select_rule_title": "Escolha uma regra",

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
    "footer.code_label": "Código no GitHub:",
    "footer.licensed_label": "Licenciado sob",

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
      "help.solver_bounded.title": "Solver (M)PCP Limitado",
      "help.solver_bounded.body_html": `
        <p><strong>O que faz</strong><br>Busca com aprofundamento iterativo por solução de PCP/MPCP. PCP é indecidível; limites podem interromper cedo.</p>
        <p><strong>Como usar</strong></p>
        <ul>
          <li><em>Profundidade máx.</em>: comprimento máximo da sequência.</li>
          <li><em>Limite de nós</em>: teto de estados explorados.</li>
          <li><em>Limite de tempo</em>: teto em milissegundos.</li>
          <li><em>MPCP</em>: força a sequência a iniciar com o dominó 1.</li>
        </ul>
      <p><strong>Dicas</strong><br>Clique em “Tentar resolver”. Se encontrar sequência, use “Carregar solução na área de trabalho”. Falha dentro dos limites é inconclusiva. Inspirado no blog/algoritmo de Arne Vogel e na tese de Ling Zhao (Cap. 2.2).</p>
      `,
      "help.solver_max_depth.title": "Profundidade máx.",
      "help.solver_max_depth.body_html": `
        <p>Limite do aprofundamento iterativo: comprimento máximo da sequência explorada.</p>
        <p>Maior profundidade = mais lento e abrangente; menor = mais rápido, mas pode perder soluções.</p>
      `,
      "help.solver_time_limit.title": "Limite de tempo (ms)",
      "help.solver_time_limit.body_html": `
        <p>Teto de tempo (em milissegundos). Ao atingir, o solver para e o resultado é inconclusivo.</p>
      `,
      "help.solver_node_limit.title": "Limite de nós",
      "help.solver_node_limit.body_html": `
        <p>Teto do número de estados (nós) explorados. Mantém a busca finita; atingir o teto é inconclusivo.</p>
      `,
      "help.main_tool.title": "O que esta ferramenta faz?",
      "help.main_tool.body_html": `
        <p><strong>pcp2cfg</strong> visualiza a redução <code>PCP ⇒ ambiguidade de GLC</code>.</p>
        <ul>
          <li><strong>PCP</strong>: Dado <code>(t_i,b_i)</code>, encontrar sequência não vazia cujas concatenações topo/base coincidam.</li>
          <li><strong>Ambiguidade de GLC</strong>: há duas árvores de derivação distintas para alguma palavra.</li>
          <li><strong>Redução (das transparências)</strong>: para os dominós 1..k, construa <code>G_D</code>:
<pre class="mono">S → T | B
T → t1 T a1 | … | tk T ak | t1 a1 | … | tk ak
B → b1 B a1 | … | bk B ak | b1 a1 | … | bk ak</pre>
          Uma solução <code>i1…in</code> gera a mesma palavra via <code>T</code> e <code>B</code>, provando ambiguidade.</li>
        </ul>
        <p>Use os painéis para inserir/importar dominós, ver <code>G_D</code>, rodar o solver limitado e construir/expandir árvores.</p>
      `,
      "help.csv_import.title": "Importação de CSV",
      "help.csv_import.body_html": `
        <p>Importe um CSV com cabeçalho <code>domino_id,top_string,bottom_string</code> (mesmo formato do export do tm2pcp). O CSV PCP exportado do tm2pcp funciona aqui.</p>
        <p>Topo/base são tokenizados por espaços; células vazias são permitidas. Dominós são renumerados 1..k.</p>
      `,
      "help.dominoes.title": "Dominós e símbolos a_i",
      "help.dominoes.body_html": `
        <p>Edite cada <code>(t_i, b_i)</code> como chips. Arraste para reordenar; dê duplo clique para enviar à área de trabalho; exclua individualmente.</p>
        <p>A redução cria terminais novos <code>a1…ak</code> como marcadores; evite padrões <code>a1</code> nos seus strings. O sistema escolhe um prefixo seguro.</p>
      `,
      "help.workspace.title": "Área de trabalho (sequência)",
      "help.workspace.body_html": `
        <p>Monte a sequência arrastando/dando duplo clique. Os tokens de cada dominó aparecem abaixo; ao passar o mouse sobre um dominó, seus tokens em Topo/Base são destacados.</p>
        <p>Use “Área de trabalho → Sequência” para copiar índices ou “Sequência → Área de trabalho” para carregar do campo de índices. Se Topo e Base coincidem, você achou uma solução de PCP.</p>
      `,
      "help.grammar.title": "Gramática gerada G_D",
      "help.grammar.body_html": `
        <p>Gramática ao vivo pelos dominós via redução. Passe o mouse para ver o dominó correspondente; clique numa alternativa para expandir o não terminal na árvore.</p>
        <p>O sufixo invertido <code>a_{in}…a_{i1}</code> força alinhamento entre os dois ramos quando há solução de PCP.</p>
      `,
      "help.derivations.title": "Explorador de derivações",
      "help.derivations.body_html": `
        <p>Digite índices (ex.: <code>1,3,2</code>) para construir <code>S⇒T⇒*</code> e <code>S⇒B⇒*</code>. Passe o mouse sobre nós para destacar tokens e a regra; expanda não terminais manualmente ou clicando em regras.</p>
        <p>Se as palavras coincidirem, você tem uma testemunha de ambiguidade de <code>G_D</code>.</p>
      `,
      "help.sequence.title": "Como sequências viram derivações",
      "help.sequence.body_html": `
        <p>Para índices <code>i1…in</code>:</p>
<pre class="mono">Via T: t_{i1} … t_{in} a_{in} … a_{i1}
Via B: b_{i1} … b_{in} a_{in} … a_{i1}</pre>
        <p>O sufixo <code>a_{in}…a_{i1}</code> força alinhamento. Igualdade ⇔ a sequência resolve o PCP.</p>
      `,
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
    "solver.inspiration": `Inspired by Arne Vogel's blogpost and algorithm (<a href="https://www.arnevogel.com/post-correspondence-problem/" target="_blank" rel="noreferrer">arnevogel.com</a>) and Ling Zhao's Thesis (Chapter 2.2) (<a href="https://webdocs.cs.ualberta.ca/~games/PCP/thesis/pcp.pdf" target="_blank" rel="noreferrer">pcp.pdf</a>).`,
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
    "solver.inspiration": `Inspirado no blogpost e algoritmo de Arne Vogel (<a href="https://www.arnevogel.com/post-correspondence-problem/" target="_blank" rel="noreferrer">arnevogel.com</a>) e na Tese de Ling Zhao (Capítulo 2.2) (<a href="https://webdocs.cs.ualberta.ca/~games/PCP/thesis/pcp.pdf" target="_blank" rel="noreferrer">pcp.pdf</a>).`,
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
