# pcp2cfg-webtool

<p align="right">
  <a href="README.md">English</a> |
  <strong>Português (Brasil)</strong>
</p>


**pcp2cfg-webtool** é uma ferramenta educacional interativa, executada no navegador, que demonstra a redução clássica do **Problema da Correspondência de Post (PCP)** para a **ambiguidade de Gramáticas Livres de Contexto (GLCs)**.

A ferramenta foi concebida para o ensino de **Teoria da Computação**, permitindo que estudantes *vejam*, *manipulem* e *simulem* como uma instância de PCP é convertida numa GLC cuja ambiguidade testemunha soluções de PCP.

🔗 **Demo online:** https://brunogrisci.github.io/pcp2cfg  
🔗 **Repositório GitHub:** https://github.com/BrunoGrisci/pcp2cfg-webtool

![Visão geral da pcp2cfg-webtool](docs/screenshots/overview.png)

---

## ✨ Funcionalidades

### Funcionalidade principal
- Monte uma instância de **PCP** com dominós arrastáveis; adicione, exclua ou reordene peças.
- Importe dominós de um **CSV** (compatível com o export do tm2pcp) ou exporte a instância atual.
- Construção automática da **GLC G_D** da redução:
  ```
  S -> T | B
  T -> t1 T a1 | ... | tk T ak | t1 a1 | ... | tk ak
  B -> b1 B a1 | ... | bk B ak | b1 a1 | ... | bk ak
  ```
  onde cada `a_i` é um terminal novo que marca o índice do dominó.
- **Explorador de derivações** interativo:
  - Digite uma sequência de índices para construir derivações paralelas via **T** e **B**.
  - Veja as palavras geradas (`Palavra via T` e `Palavra via B`) com destaque por token.
  - **Árvores de derivação** visuais e clicáveis (expansão por regras, controles de zoom, botões de limpar).
- Sincronização **Área de trabalho ↔ Sequência**:
  - Arraste/solte dominós para formar uma sequência; copie/cole sequências entre a área de trabalho e o campo de índices.
  - Destaques ao passar o mouse mostram quais tokens vêm de cada dominó da área de trabalho.

---

### Solver de (M)PCP (limitado)

A ferramenta inclui um **solver limitado de (M)PCP** para exploração.

⚠️ **Importante:**  
PCP é **indecidível**. Este solver **não** é um procedimento de decisão.

#### Como o solver funciona

- Busca incremental baseada em prefixos, mantendo apenas sequências prefixo consistentes.
- Expande sequências até limites configuráveis:
  - **Profundidade máxima**
  - **Limite de tempo (ms)**
  - **Limite de nós**
- Alternância opcional **MPCP**: força a sequência a começar pelo dominó 1.

O algoritmo é inspirado em:

- **Ling Zhao**, *Solving the Post Correspondence Problem*, Tese de PhD, Capítulo 2.2  
- **Arne Vogel**, solver de PCP e explicação em blog

#### Controles do solver

- **Tentar resolver:** inicia a busca limitada
- **Cancelar:** interrompe a busca
- **Carregar solução na área de trabalho:** inspeciona uma solução encontrada

#### Por que isso não contradiz a indecidibilidade

- Se o solver encontra uma solução → ela é correta
- Se ele para sem encontrar → nenhuma conclusão pode ser tirada

Esse comportamento é **esperado** e ilustra a indecidibilidade na prática.

---

### ❓ Sistema de ajuda integrado

Cada parte principal da interface tem um botão de ajuda **“?”**, que abre uma explicação no próprio site cobrindo:

- fundamentos teóricos (PCP, GLCs, ambiguidade, redução PCP ⇒ AMB_GLC),
- como inserir/importar dominós e gerar a gramática,
- como funcionam as árvores de derivação e o alinhamento das palavras,
- como o solver limitado opera e quais são seus limites.

O conteúdo de ajuda é:

- bilíngue (Inglês / Português do Brasil),
- sincronizado com o modo escuro,
- pensado para leitura independente por estudantes.

---

### Usabilidade e UI
- 🌙 / ☀️ **Alternância de modo escuro**
- 🇬🇧 / 🇧🇷 **Alternância de idioma** (Inglês e Português do Brasil)
- Preferências persistentes via `localStorage`
- Mensagens de status e erros claras
- Totalmente no cliente (sem backend)

---

## 📄 Formato de entrada

### Conjunto de dominós `.csv`
A ferramenta aceita arquivos CSV compatíveis com o export do tm2pcp:

```
domino_id,top_string,bottom_string
```

- `top_string` e `bottom_string` são tokenizados por espaços; células vazias são permitidas.
- Os dominós são renumerados de 1..k na importação.
- Evite usar padrões reservados `a1`, `a2`, … nos seus próprios strings; a redução cria terminais novos com esse prefixo.

---

## 🧠 Objetivos pedagógicos

Esta ferramenta foi criada para ajudar estudantes a:
- Entender o **significado operacional** de reduções
- Visualizar como soluções de PCP testemunham **ambiguidade de GLC**
- Experimentar derivações e árvores de forma interativa
- Explorar indecidibilidade por meio do comportamento de busca limitada

Ela é adequada para:
- Disciplinas de graduação em **Teoria da Computação**
- Disciplinas de pós-graduação em linguagens formais e computabilidade
- Demonstrações, tarefas e aulas interativas

---

## 🌐 Internacionalização (i18n)

- Suporte completo a **Inglês** e **Português do Brasil**
- Todas as strings de UI, tooltips e mensagens de status são i18n
- Trocar o idioma **não** reinicia a área de trabalho ou o estado

---

## 🛠️ Stack tecnológica

- **HTML / CSS / JavaScript** puro
- Sem frameworks externos
- Totalmente no cliente
- Projetada para hospedagem via **GitHub Pages**

---

## 🚀 Trabalhos futuros (ideias)

- Mais exemplos predefinidos de instâncias de PCP
- Importação/exportação de árvores ou sequências de derivação
- Modo guiado dos passos da redução
- Sinais visuais adicionais para testemunhas de ambiguidade

---
## 🎓 Créditos

**Desenvolvido por**  
**Prof. Bruno Iochins Grisci**  
Departamento de Informática Teórica  
Instituto de Informática – Universidade Federal do Rio Grande do Sul (UFRGS)  
🔗 https://brunogrisci.github.io/  
🔗 https://www.inf.ufrgs.br/site/  
🔗 https://www.ufrgs.br/site/

**Baseado e inspirado em**  
Aulas do **Prof. Rodrigo Machado**  
📺 https://link.inf.ufrgs.br/212-AALr

**Inspiração do solver**:
  - Ling Zhao, *Solving the Post Correspondence Problem*, Tese de PhD, Cap. 2.2
  - Arne Vogel, solver de PCP e post no blog

**Nota de desenvolvimento**  
Esta ferramenta foi criada com assistência de **IA Generativa (ChatGPT 5.1)**.

---
## 📦 Licença

Este projeto está licenciado sob a **Licença MIT**.

Você pode usar, modificar e redistribuir para fins acadêmicos e educacionais, desde que haja a devida atribuição.

Veja o arquivo `LICENSE` para detalhes.

---

Se usar esta ferramenta em ensino ou pesquisa, um link ou citação para o repositório é muito bem-vindo.

## 📚 Citação

Se usar esta ferramenta em trabalhos acadêmicos (artigos, teses, relatórios técnicos ou material didático), cite-a como:

```bibtex
@software{Grisci_pcp2cfg_webtool,
  author       = {Bruno Iochins Grisci},
  title        = {{pcp2cfg-webtool}: Uma Ferramenta Interativa para a Redução PCP para Ambiguidade de GLC},
  year         = {2026},
  url          = {https://github.com/BrunoGrisci/pcp2cfg-webtool},
  note         = {Software educacional baseado na web},
}
```
