# ⌨ LACUNAS — o passo a passo de copiar e colar · Semana 10

Este arquivo tem **tudo** o que você precisa para completar o projeto, lacuna por lacuna: **o arquivo** que você abre, **o lugar exato** dentro dele, **o trecho que você seleciona** (ANTES) e **o trecho que você cola** no lugar (DEPOIS). O porquê de cada lacuna está na **apostila**, no passo indicado. **Tente escrever sozinho antes de colar**: o comentário de cada marca diz o que falta — e é na linha que você escreveu que você aprende.

**Para ler formatado no VS Code:** clique neste arquivo e aperte `Ctrl+Shift+V`. **Para copiar um trecho:** selecione o bloco cinza inteiro e `Ctrl+C`.

**Faça na ordem deste arquivo** (é a ordem da aula). Os números de linha indicados valem para quem fez as lacunas anteriores; se você pulou alguma, use sempre a busca `Ctrl+F` pelo nome da marca.

## Antes de começar

1. Abra a pasta `semana10_com_lacunas` no VS Code (*File → Open Folder…*) e, no terminal, rode `npm run dev`. Abra o endereço que aparecer. O painel abre, com 4 alunos. *(Se o terminal disser que `vite` não é reconhecido, falta a pasta `node_modules`: na sala, use o zip do professor, que a traz; em casa, rode `npm install` uma vez, com internet.)*
2. Abra um **segundo terminal** (*Terminal → New Terminal*) e rode `npx tsc -b`. Ele escreve **9 linhas** `error TS6133` — de propósito: são as peças que as lacunas de escrita vão usar. **Não apague nenhum `import`** para o erro sumir.
3. O arquivo `.env` já vem pronto: `VITE_API_URL=/api/alunos`. Se você editar o `.env` ou o `vite.config.ts` com o painel aberto, o servidor reinicia e o que você salvou some.

## O gesto de colar — sempre o mesmo

1. **Abra o arquivo indicado.** No painel da esquerda do VS Code (*Explorer*), dentro de `semana10_com_lacunas`, clique nas pastas até chegar nele — por exemplo `src` → `services` → `turma.ts`.
2. **Ache a marca.** Com o arquivo aberto, `Ctrl+F` e digite o nome da marca, por exemplo `LACUNA 1a`. O VS Code pula para ela; aperte `Esc` para fechar a busca. Confira a **linha de cima** indicada: ela tem de estar logo acima (quando há uma linha em branco no meio, o texto avisa).
3. **Selecione o ANTES.** Clique no **começo da primeira linha** do trecho (antes dos espaços), segure **Shift** e clique no **fim da última linha**, logo depois do último caractere. A seleção tem de cobrir **exatamente** as linhas do bloco ANTES — o número de linhas está indicado. **Não** arraste até a linha de baixo e **não** clique no número da linha: isso leva junto a quebra de linha.
4. **Cole o DEPOIS.** Aqui no LACUNAS.md, selecione o bloco DEPOIS inteiro, `Ctrl+C`; volte ao arquivo e `Ctrl+V` por cima da seleção.
5. **Salve** (`Ctrl+S`).

*Os espaços no começo das linhas fazem parte do trecho: copie-os junto. Se a indentação ficar diferente, o código funciona igual. Se sobrou uma linha em branco depois da que você colou, tudo bem. Se a linha de baixo **grudou** no fim da que você colou, clique entre as duas e aperte `Enter`.*

---

## Lacuna 1 — o portão

**Apostila:** Passo 3 (seção 1.2). **Por quê:** Com a rede bloqueada, a tela mostra a frase de erro **e** "Presentes: 0 de 0". O portão `terminou` só deixa as telas aparecerem quando a espera acabou **e** não deu erro.

Esta lacuna tem **3 marcas** (`1a`, `1b`, `1c`), no arquivo `semana10_com_lacunas/src/App.tsx`. **Faça todas antes de olhar a tela.**

### Marca 1a

- **Arquivo:** `semana10_com_lacunas/src/App.tsx`
- **Onde:** dentro da função `App`.
- **Linha de cima:** `// a espera acabou E nao deu erro: so' agora as telas tem dados de verdade para mostrar`
- **Busca:** `Ctrl+F` → `LACUNA 1a` · por volta da **linha 77**

**Selecione (ANTES) — 2 linhas:**

```tsx
  // ⌨ LACUNA 1a — falta a variavel `terminou`: a espera acabou E nao deu erro. Forma:
  //    const terminou = !______ && !______
```

**Cole no lugar (DEPOIS):**

```tsx
  const terminou = !carregando && !erro
```

### Marca 1b

- **Arquivo:** `semana10_com_lacunas/src/App.tsx`
- **Onde:** dentro da função `App`, no bloco que começa em `<main>`.
- **Linha de cima:** o comentário da marca `3c`
- **Busca:** `Ctrl+F` → `LACUNA 1b` · por volta da **linha 116**
- **Atenção:** Logo **acima** desta marca há outro comentário, o da marca `3c`: **não mexa nele agora** (é da lacuna 3).
- **Atenção:** Ao salvar a `1b`, o arquivo fica **quebrado de propósito** até a `1c`: a chave que você abriu aqui só fecha lá. O VS Code sublinha `</main>` de vermelho (`'}' expected`) e o navegador mostra a **tela de erro do Vite**, apontando para o mesmo `</main>` (*Adjacent JSX elements must be wrapped in an enclosing tag*). Não pare: faça a `1c` e salve — a tela de erro some sozinha.

**Selecione (ANTES) — 3 linhas:**

```tsx
          {/* ⌨ LACUNA 1b — o portao: so' mostre as telas quando `terminou`. TROQUE a linha de baixo por
              `{terminou && <Routes>`  (a chave abre aqui; a 1c fecha). */}
          <Routes>
```

**Cole no lugar (DEPOIS):**

```tsx
          {terminou && <Routes>
```

### Marca 1c

- **Arquivo:** `semana10_com_lacunas/src/App.tsx`
- **Onde:** dentro da função `App`, no bloco que começa em `<main>`.
- **Linha de cima:** `<Route path="*" element={<NaoEncontrado />} />`
- **Busca:** `Ctrl+F` → `LACUNA 1c` · por volta da **linha 126**
- **Atenção:** Depois de salvar esta marca, a tela de erro do Vite (da `1b`) some sozinha. Se não sumir, a `1b` ou a `1c` não foi salva.

**Selecione (ANTES) — 2 linhas:**

```tsx
          {/* ⌨ LACUNA 1c — fecha o portao: TROQUE a linha de baixo por `</Routes>}` (a chave fecha a que a 1b abriu). */}
          </Routes>
```

**Cole no lugar (DEPOIS):**

```tsx
          </Routes>}
```

**Teste:**

- No DevTools (`F12`), bloqueie a leitura no painel **Request conditions** com o padrão `*://*:*/api/alunos*` e dê `F5` (o gesto está no Passo 2 da apostila).

**Confira:** Com a leitura bloqueada: **só a frase de erro**, nenhum número (nem "Presentes", nem "Total de entregas").

---

## Lacuna 2 — o estado inicial

**Apostila:** Passo 4 (seção 1.3). **Por quê:** O primeiro quadro é pintado antes de o efeito rodar. Com `useState(false)` ele afirma "já terminei de carregar" e mostra "Presentes: 0 de 0" por um instante. O valor inicial certo é `true`.

Esta lacuna tem **1 marca** (`2`), no arquivo `semana10_com_lacunas/src/App.tsx`.

### Marca 2

- **Arquivo:** `semana10_com_lacunas/src/App.tsx`
- **Onde:** dentro da função `App`.
- **Linha de cima:** `const [alunos, setAlunos] = useState<Aluno[]>([])`
- **Busca:** `Ctrl+F` → `LACUNA 2` · por volta da **linha 14**

**Selecione (ANTES) — 3 linhas:**

```tsx
  // ⌨ LACUNA 2 — o 1o quadro da tela e' pintado ANTES de o efeito rodar. Leia o que o valor inicial da linha de baixo
  //    AFIRMA sobre a espera, e troque-o. Depois: F5 (o recarregamento automatico nao aplica esta troca).
  const [carregando, setCarregando] = useState(false)
```

**Cole no lugar (DEPOIS):**

```tsx
  const [carregando, setCarregando] = useState(true)
```

**Teste:**

- Desligue o bloqueio. Logo abaixo da última linha `useState` do `App`, acrescente a linha `console.log('carregando =', carregando)` e salve.
- Dê **`F5`** e, na aba **Console**, procure a **primeira linha que começa com `carregando =`**. Acima dela aparece uma linha *Download the React DevTools…*: é um aviso do React, **não conta**.
- Depois de conferir, **apague o `console.log`** e salve.

**Confira:** Depois do `F5`, a primeira linha `carregando =` diz `carregando = true`. (Sem `F5`, o valor inicial **não** muda.)

---

## Lacuna 3 — o quarto final: chegou, mas vazio

**Apostila:** Passo 5 (seção 1.4). **Por quê:** Uma lista vazia que chegou com sucesso é uma resposta verdadeira: a tela tem de dizer que a turma chegou vazia, e não mostrar "0 de 0" nem ficar em branco.

Esta lacuna tem **3 marcas** (`3a`, `3b`, `3c`), no arquivo `semana10_com_lacunas/src/App.tsx`. **Faça todas antes de olhar a tela.**

### Marca 3a

- **Arquivo:** `semana10_com_lacunas/src/App.tsx`
- **Onde:** dentro da função `App`.
- **Linha de cima:** `// terminou sem erro, mas a lista veio vazia: e' um 4o estado, e a tela tem de dizer isso`
- **Busca:** `Ctrl+F` → `LACUNA 3a` · por volta da **linha 77**

**Selecione (ANTES) — 2 linhas:**

```tsx
  // ⌨ LACUNA 3a — falta a variavel `vazia`: terminou E a lista tem 0 alunos. Forma:
  //    const vazia = ______ && alunos.length === ____
```

**Cole no lugar (DEPOIS):**

```tsx
  const vazia = terminou && alunos.length === 0
```

### Marca 3b

- **Arquivo:** `semana10_com_lacunas/src/App.tsx`
- **Onde:** dentro da função `App`, no bloco que começa em `<p className="aviso" role="status" aria-live="polite">`.
- **Linha de cima:** `{carregando && <span>carregando a turma...</span>}`
- **Busca:** `Ctrl+F` → `LACUNA 3b` · por volta da **linha 95**

**Selecione (ANTES) — 2 linhas:**

```tsx
            {/* ⌨ LACUNA 3b — o 4o final, dito na tela: quando `vazia`, um <span> com a SUA frase (a linha de cima e' o molde:
                `carregando && <span>...</span>`). Diga que a lista chegou vazia, sem culpar ninguem. */}
```

**Cole no lugar (DEPOIS):**

```tsx
            {vazia && <span>A turma chegou vazia: ainda não há nenhum aluno para mostrar.</span>}
```

### Marca 3c

- **Arquivo:** `semana10_com_lacunas/src/App.tsx`
- **Onde:** dentro da função `App`, no bloco que começa em `<main>`.
- **As duas linhas de cima:** `<p className="erro" role="alert" aria-live="assertive"></p>` e, logo abaixo dela, `</div>` *(entre ela e a marca há 1 linha em branco)*
- **Busca:** `Ctrl+F` → `LACUNA 3c` · por volta da **linha 110**
- **Atenção:** A última linha do ANTES é a linha que **você colou na marca `1b`**.

**Selecione (ANTES) — 3 linhas:**

```tsx
          {/* ⌨ LACUNA 3c — com a turma vazia a tela NAO pode ficar em branco. Depois da 1b, a linha do portao
              ja existe logo abaixo: TROQUE-A por `{terminou && !vazia && <Routes>` (leia o `!vazia`: "e nao esta vazia"). */}
          {terminou && <Routes>
```

**Cole no lugar (DEPOIS):**

```tsx
          {terminou && !vazia && <Routes>
```

**Teste:**

- Com o bloqueio **desligado**: `Ctrl+C` no terminal, troque **todo** o conteúdo de `semana10_com_lacunas/public/alunos.json` por `[]`, salve, rode `npm run dev` de novo e dê `F5`.
- Para desfazer: cole de volta o conteúdo original (seção **"O alunos.json original"**, no fim deste arquivo) e reinicie o servidor (`Ctrl+C`, `npm run dev`).

**Confira:** Com `[]`: a sua frase na região de aviso, nenhum "Presentes", e `/aluno/2` não fica em branco.

---

## Lacuna 4 — a causa: rede ou servidor

**Apostila:** Passo 6 (seção 2.1). **Por quê:** A frase de erro passa a dizer a causa: a **rede** (o pedido nem foi respondido) ou o **servidor** (respondeu com erro). A variável `frase` muda a cada passo; o `throw` entrega a que estiver valendo.

Esta lacuna tem **3 marcas** (`4a`, `4b`, `4c`), no arquivo `semana10_com_lacunas/src/services/turma.ts`. **Faça todas antes de olhar a tela.**

### Marca 4a

- **Arquivo:** `semana10_com_lacunas/src/services/turma.ts`
- **Onde:** dentro da função `buscarTurma`.
- **Linha de cima:** `// a frase PARA A PESSOA muda conforme o passo em que a falha acontece`
- **Busca:** `Ctrl+F` → `LACUNA 4a` · por volta da **linha 8**

**Selecione (ANTES) — 2 linhas:**

```ts
  // ⌨ LACUNA 4a — nasce aqui a FRASE: a variavel que guarda o que a PESSOA vai ler. Ela comeca com o 1o motivo possivel:
  //    a rede nem respondeu. Forma:  let frase = '______'
```

**Cole no lugar (DEPOIS):**

```ts
  let frase = 'Sem conexão com o servidor da turma. Confira sua internet e recarregue a página.'
```

### Marca 4b

- **Arquivo:** `semana10_com_lacunas/src/services/turma.ts`
- **Onde:** dentro da função `buscarTurma`, no bloco que começa em `try {`.
- **As duas linhas de cima:** `headers: { Accept: 'application/json' },   // pedimos JSON: no servidor de dev, arquivo ausente vira 404` e, logo abaixo dela, `})`
- **Busca:** `Ctrl+F` → `LACUNA 4b` · por volta da **linha 13**

**Selecione (ANTES) — 2 linhas:**

```ts
    // ⌨ LACUNA 4b — a rede respondeu: de agora em diante, se algo falhar, a causa e' o SERVIDOR. Troque o valor da frase.
    //    Forma:  frase = '______'
```

**Cole no lugar (DEPOIS):**

```ts
    frase = 'O servidor respondeu com erro. Tente de novo daqui a pouco; se continuar, avise quem cuida do painel.'
```

### Marca 4c

- **Arquivo:** `semana10_com_lacunas/src/services/turma.ts`
- **Onde:** dentro da função `buscarTurma`, no bloco que começa em `} catch (falha) {`.
- **Linha de cima:** `console.error('[buscarTurma]', falha)   // o motivo tecnico fica no console, para quem programa`
- **Busca:** `Ctrl+F` → `LACUNA 4c` · por volta da **linha 24**

**Selecione (ANTES) — 3 linhas:**

```ts
    // ⌨ LACUNA 4c — o throw tem de lancar a FRASE (a variavel), nao um texto fixo. TROQUE a linha de baixo por
    //    throw new Error(______)
    throw new Error('Não foi possível carregar a turma. Recarregue a página.')
```

**Cole no lugar (DEPOIS):**

```ts
    throw new Error(frase)
```

**Teste:**

- (a) Bloqueio ligado (`*://*:*/api/alunos*`) e `F5`.
- (b) Bloqueio desligado e, no arquivo `semana10_com_lacunas/.env`, troque a linha por `VITE_API_URL=/api/alunoss` (um "s" a mais). Depois **desfaça**: `VITE_API_URL=/api/alunos`, sem barra no fim.

**Confira:** Bloqueio: a frase fala de **conexão**. `.env` com `/api/alunoss`: a frase fala do **servidor**.

---

## Lacuna 5 — a causa: formato

**Apostila:** Passo 7 (seção 2.2). **Por quê:** Se o servidor responder bem mas não mandar uma lista, a frase fala do **formato**. `unknown` obriga a provar o que chegou; `Array.isArray` prova que é uma lista.

Esta lacuna tem **2 marcas** (`5a`, `5b`), no arquivo `semana10_com_lacunas/src/services/turma.ts`. **Faça todas antes de olhar a tela.**

### Marca 5a

- **Arquivo:** `semana10_com_lacunas/src/services/turma.ts`
- **Onde:** dentro da função `buscarTurma`, no bloco que começa em `try {`.
- **As duas linhas de cima:** `frase = 'O servidor respondeu com erro. Tente de novo daqui a pouco; se continuar, avise quem cuida do painel.'` e, logo abaixo dela, `` if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`) ``
- **Busca:** `Ctrl+F` → `LACUNA 5a` · por volta da **linha 15**

**Selecione (ANTES) — 2 linhas:**

```ts
    // ⌨ LACUNA 5a — o servidor respondeu OK, mas o que chegou pode nao ser o que o painel espera: a causa agora e' o FORMATO.
    //    Troque o valor da frase (mesma forma da 4b).
```

**Cole no lugar (DEPOIS):**

```ts
    frase = 'A turma chegou num formato que o painel não entende. Avise quem cuida do painel.'
```

### Marca 5b

- **Arquivo:** `semana10_com_lacunas/src/services/turma.ts`
- **Onde:** dentro da função `buscarTurma`, no bloco que começa em `try {`.
- **Linha de cima:** `frase = 'A turma chegou num formato que o painel não entende. Avise quem cuida do painel.'`
- **Busca:** `Ctrl+F` → `LACUNA 5b` · por volta da **linha 16**

**Selecione (ANTES) — 4 linhas:**

```ts
    // ⌨ LACUNA 5b — `resposta.json()` devolve `any`: o TypeScript aceita QUALQUER coisa que a rede mandar. TROQUE a linha de baixo
    //    por DUAS: uma que guarde o resultado num tipo que OBRIGUE a provar o que chegou, e outra que prove que e' uma LISTA
    //    antes de usar (o Array tem uma funcao pronta para isso). Se nao for lista, lance um erro com o motivo tecnico.
    const dados: Aluno[] = await resposta.json()
```

**Cole no lugar (DEPOIS):**

```ts
    const dados: unknown = await resposta.json()
    if (!Array.isArray(dados)) throw new Error('a resposta não é uma lista')
```

**Teste:**

- No `semana10_com_lacunas/.env`, troque por `VITE_API_URL=/package.json`; depois por `VITE_API_URL=/index.html`. **Desfaça** em seguida (`VITE_API_URL=/api/alunos`).

**Confira:** Com `/package.json` ou `/index.html`: a frase de **formato**. (Antes desta lacuna, `/package.json` deixava a tela em branco e `/index.html` culpava o servidor.)

---

## Lacuna 6 — o pedido de escrita (PATCH)

**Apostila:** Passo 9 (seção 3.1). **Por quê:** O pedido de escrita precisa de três coisas que o de leitura não tinha: o verbo `PATCH`, o cabeçalho `Content-Type` e o corpo com o que mudou.

Esta lacuna tem **1 marca** (`6`), no arquivo `semana10_com_lacunas/src/services/turma.ts`.

### Marca 6

- **Arquivo:** `semana10_com_lacunas/src/services/turma.ts`
- **Onde:** dentro da função `atualizarAluno`, no bloco que começa em `` const resposta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, { ``.
- **Linha de cima:** `` const resposta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, { ``
- **Busca:** `Ctrl+F` → `LACUNA 6` · por volta da **linha 34**

**Selecione (ANTES) — 4 linhas:**

```ts
      // ⌨ LACUNA 6 — escrever e' ler ao contrario: o pedido precisa de TRES coisas que o ler nao tinha. Forma (3 linhas):
      //    method: '______',                           (o verbo de "mude so' estes campos")
      //    headers: { '______': 'application/json' },   (o cabecalho que diz "o corpo e' JSON")
      //    body: JSON.stringify(______),                (o que mudou: o parametro desta funcao)
```

**Cole no lugar (DEPOIS):**

```ts
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mudanca),
```

**Teste:**

- Rode `npx tsc -b` no segundo terminal.

**Confira:** Nada muda na tela, mas o `npx tsc -b` cai de **9** para **8** linhas.

---

## Lacuna 7 — liga o estado e chama o servidor

**Apostila:** Passo 10 (seção 3.2). **Por quê:** Antes de pedir, liga o `salvando` e limpa o que ficou da vez anterior; depois, troca o aluno na lista pela **resposta do servidor**.

Esta lacuna tem **2 marcas** (`7a`, `7b`), no arquivo `semana10_com_lacunas/src/App.tsx`. **Faça todas antes de olhar a tela.**

### Marca 7a

- **Arquivo:** `semana10_com_lacunas/src/App.tsx`
- **Onde:** dentro da função `marcarPresenca`.
- **As duas linhas de cima:** `const aluno = alunos.find(item => item.id === id)` e, logo abaixo dela, `if (aluno === undefined) return`
- **Busca:** `Ctrl+F` → `LACUNA 7a` · por volta da **linha 43**
- **Atenção:** Há duas funções parecidas. Esta marca está na **primeira**, `marcarPresenca`.

**Selecione (ANTES) — 2 linhas:**

```tsx
    // ⌨ LACUNA 7a — o MESMO molde do carregar() la' em cima: ANTES de pedir, liga o estado e limpa o que ficou da vez anterior.
    //    Tres linhas, tres setters:  setSalvando(______)  ·  setSalvo(______)  ·  setErroSalvar(______)
```

**Cole no lugar (DEPOIS):**

```tsx
    setSalvando(true)
    setSalvo(false)
    setErroSalvar('')
```

### Marca 7b

- **Arquivo:** `semana10_com_lacunas/src/App.tsx`
- **Onde:** dentro da função `marcarPresenca`, no bloco que começa em `try {`.
- **As duas linhas de cima:** `setErroSalvar('')` e, logo abaixo dela, `try {`
- **Busca:** `Ctrl+F` → `LACUNA 7b` · por volta da **linha 47**

**Selecione (ANTES) — 4 linhas:**

```tsx
      // ⌨ LACUNA 7b — chame o servidor (a funcao `atualizarAluno` ja foi importada) e USE a resposta dele, nao a sua conta. Tres linhas:
      //    const atualizado = await atualizarAluno(id, { presente: ______ })
      //    setAlunos(anteriores => anteriores.map(item => item.id === id ? ______ : item))
      //    setSalvo(______)
```

**Cole no lugar (DEPOIS):**

```tsx
      const atualizado = await atualizarAluno(id, { presente: !aluno.presente })
      setAlunos(anteriores => anteriores.map(item => item.id === id ? atualizado : item))
      setSalvo(true)
```

**Teste:**

- Clique no botão do cartão da **Ana** (agora ele diz "marcar falta") e espere um instante; depois dê `F5`.

**Confira:** Cerca de 0,7 s depois, o selo da Ana vira "ausente"; com `F5`, continua ausente. Nenhuma mensagem ainda. `npx tsc -b`: **4** linhas.

---

## Lacuna 8 — as regiões salvando / salvo / erro

**Apostila:** Passo 11 (seção 3.3). **Por quê:** As duas regiões da escrita: "salvando..." / "salvo" (região `status`) e o erro de salvar (região `alert`).

Esta lacuna tem **2 marcas** (`8a`, `8b`), no arquivo `semana10_com_lacunas/src/App.tsx`. **Faça todas antes de olhar a tela.**

### Marca 8a

- **Arquivo:** `semana10_com_lacunas/src/App.tsx`
- **Onde:** dentro da função `App`, no bloco que começa em `<p className="aviso" role="status" aria-live="polite">`.
- **As duas linhas de cima:** `<div className="salvar">` e, logo abaixo dela, `<p className="aviso" role="status" aria-live="polite">`
- **Busca:** `Ctrl+F` → `LACUNA 8a` · por volta da **linha 102**

**Selecione (ANTES) — 2 linhas:**

```tsx
              {/* ⌨ LACUNA 8a — as duas regioes da escrita, no molde da leitura (`carregando && <span>`): quando `salvando`,
                  um <span> que diga salvando...; quando `salvo`, um <span> que diga salvo. Duas linhas. */}
```

**Cole no lugar (DEPOIS):**

```tsx
              {salvando && <span>salvando...</span>}
              {salvo && <span>salvo</span>}
```

### Marca 8b

- **Arquivo:** `semana10_com_lacunas/src/App.tsx`
- **Onde:** dentro da função `App`, no bloco que começa em `<div className="salvar">`.
- **As duas linhas de cima:** `{salvo && <span>salvo</span>}` e, logo abaixo dela, `</p>`
- **Busca:** `Ctrl+F` → `LACUNA 8b` · por volta da **linha 105**

**Selecione (ANTES) — 3 linhas:**

```tsx
            {/* ⌨ LACUNA 8b — o erro de SALVAR: o <p role="alert"> da linha de baixo esta VAZIO. TROQUE-A pela mesma linha com a
                variavel `erroSalvar` dentro (o molde: o <p className="erro"> la' de cima mostra `erro`). */}
            <p className="erro" role="alert" aria-live="assertive"></p>
```

**Cole no lugar (DEPOIS):**

```tsx
            <p className="erro" role="alert" aria-live="assertive">{erroSalvar}</p>
```

**Teste:**

- Clique **de novo** no botão da **Ana**. Agora ele diz "marcar presença": o texto do botão acompanha o selo. *Até a lacuna 11, use sempre o botão da Ana — se você clicar nos outros, os "marcar falta" acabam.*

**Confira:** "salvando..." aparece e, depois, "salvo" — e o "salvando..." **não sai** (é a lacuna 9). `npx tsc -b`: **2** linhas.

---

## Lacuna 9 — finally: desliga o salvando

**Apostila:** Passo 12 (seção 3.3). **Por quê:** Quem liga o `salvando` tem de desligar, dando certo ou dando errado: é o `finally`.

Esta lacuna tem **1 marca** (`9`), no arquivo `semana10_com_lacunas/src/App.tsx`.

### Marca 9

- **Arquivo:** `semana10_com_lacunas/src/App.tsx`
- **Onde:** dentro da função `marcarPresenca`, no bloco que começa em `} finally {`.
- **Linhas de cima:** o comentário da marca `10` (não mexa nele agora) e, logo abaixo dele, `} finally {`
- **Busca:** `Ctrl+F` → `LACUNA 9` · por volta da **linha 54**

**Selecione (ANTES) — 2 linhas:**

```tsx
      // ⌨ LACUNA 9 — falta DESLIGAR o `salvando`, dando certo OU dando errado. A forma e' a do carregar() la' em cima:
      //    uma linha, dentro do `finally`.
```

**Cole no lugar (DEPOIS):**

```tsx
      setSalvando(false)
```

**Teste:**

- Clique de novo no botão da **Ana**.

**Confira:** O "salvando..." some e fica só "salvo".

---

## Lacuna 10 — catch: mostra o erro de salvar

**Apostila:** Passo 13 (seção 3.3). **Por quê:** O `catch` transforma a falha em frase na tela, no erro **de salvar** (o de leitura esconderia a tela inteira).

Esta lacuna tem **1 marca** (`10`), no arquivo `semana10_com_lacunas/src/App.tsx`.

### Marca 10

- **Arquivo:** `semana10_com_lacunas/src/App.tsx`
- **Onde:** dentro da função `marcarPresenca`, no bloco que começa em `} catch (falha) {`.
- **As duas linhas de cima:** `setSalvo(true)` e, logo abaixo dela, `} catch (falha) {`
- **Busca:** `Ctrl+F` → `LACUNA 10` · por volta da **linha 51**

**Selecione (ANTES) — 2 linhas:**

```tsx
      // ⌨ LACUNA 10 — o catch: transforme a falha em frase na tela. O molde e' o catch do carregar() la' em cima, mas com o
      //    setter do ERRO DE SALVAR (o de leitura nao serve: ele esconde a tela inteira).
```

**Cole no lugar (DEPOIS):**

```tsx
      setErroSalvar(falha instanceof Error ? falha.message : 'Não foi possível salvar.')
```

**Teste:**

- No painel **Request conditions**, troque o padrão por `*://*:*/api/alunos/*` (com a **barra** antes do último asterisco: bloqueia **só o salvar**) e clique no botão da **Ana**. Depois **desligue** o bloqueio.

**Confira:** Com o salvar bloqueado: "Não foi possível salvar. Tente de novo." e o selo da Ana **não** muda.

---

## Lacuna 11 — bloqueia o botão enquanto salva

**Apostila:** Passo 14 (seção 3.4). **Por quê:** Enquanto o pedido está no ar, o botão trava: senão dois cliques viram dois pedidos.

Esta lacuna tem **2 marcas** (`11a`, `11b`), em dois arquivos: `semana10_com_lacunas/src/components/CartaoPresenca/index.tsx` e `semana10_com_lacunas/src/components/CartaoEntrega/index.tsx`. **Faça todas antes de olhar a tela.**

### Marca 11a

- **Arquivo:** `semana10_com_lacunas/src/components/CartaoPresenca/index.tsx`
- **Onde:** dentro da função `CartaoPresenca`, no bloco que começa em `<li className="cartao">`.
- **Linha de cima:** `</span>`
- **Busca:** `Ctrl+F` → `LACUNA 11a` · por volta da **linha 18**

**Selecione (ANTES) — 3 linhas:**

```tsx
      {/* ⌨ LACUNA 11a — durante o salvamento o botao tem de ficar TRAVADO. A prop `salvando` ja chega aqui e ninguem a le:
          use-a no <button> da linha de baixo (o atributo que trava um botao). */}
      <button onClick={() => onPresenca(aluno.id)}>
```

**Cole no lugar (DEPOIS):**

```tsx
      <button onClick={() => onPresenca(aluno.id)} disabled={salvando}>
```

### Marca 11b

- **Arquivo:** `semana10_com_lacunas/src/components/CartaoEntrega/index.tsx`
- **Onde:** dentro da função `CartaoEntrega`, no bloco que começa em `<li className="cartao">`.
- **Linha de cima:** `<span className="contagem">{aluno.entregas}</span>`
- **Busca:** `Ctrl+F` → `LACUNA 11b` · por volta da **linha 14**

**Selecione (ANTES) — 2 linhas:**

```tsx
      {/* ⌨ LACUNA 11b — o mesmo aqui: use a prop `salvando` para travar o <button> da linha de baixo. */}
      <button onClick={() => onEntrega(aluno.id)}>+1 entrega</button>
```

**Cole no lugar (DEPOIS):**

```tsx
      <button onClick={() => onEntrega(aluno.id)} disabled={salvando}>+1 entrega</button>
```

**Teste:**

- Abra a aba **Network** do DevTools e dê um **duplo clique** rápido no botão da **Ana**.

**Confira:** Os botões ficam opacos por ~0,7 s; o duplo clique vira **1** `PATCH` (antes: 2). `npx tsc -b`: **nenhuma saída**.

---

## Lacuna 12 — entrega: copiar a presença e adaptar

**Apostila:** Passo 15 (seção 3.5). **Por quê:** `registrarEntrega` é `marcarPresenca` com uma diferença: o campo é `entregas`, e o valor novo é o que o aluno já tem mais um.

Esta lacuna tem **4 marcas** (`12a`, `12b`, `12c`, `12d`), no arquivo `semana10_com_lacunas/src/App.tsx`. **Faça todas antes de olhar a tela.**

### Marca 12a

- **Arquivo:** `semana10_com_lacunas/src/App.tsx`
- **Onde:** dentro da função `registrarEntrega`.
- **As duas linhas de cima:** `const aluno = alunos.find(item => item.id === id)` e, logo abaixo dela, `if (aluno === undefined) return`
- **Busca:** `Ctrl+F` → `LACUNA 12a` · por volta da **linha 60**
- **Atenção:** Agora é a **segunda** função, `registrarEntrega` (a de cima, `marcarPresenca`, já está pronta).

**Selecione (ANTES) — 2 linhas:**

```tsx
    // ⌨ LACUNA 12a — registrarEntrega e' marcarPresenca com UMA diferenca. O molde esta na funcao de cima: copie as
    //    3 linhas que ligam o estado.
```

**Cole no lugar (DEPOIS):**

```tsx
    setSalvando(true)
    setSalvo(false)
    setErroSalvar('')
```

### Marca 12b

- **Arquivo:** `semana10_com_lacunas/src/App.tsx`
- **Onde:** dentro da função `registrarEntrega`, no bloco que começa em `try {`.
- **As duas linhas de cima:** `setErroSalvar('')` e, logo abaixo dela, `try {`
- **Busca:** `Ctrl+F` → `LACUNA 12b` · por volta da **linha 64**

**Selecione (ANTES) — 2 linhas:**

```tsx
      // ⌨ LACUNA 12b — copie as 3 linhas do `try` da funcao de cima e troque SO' o que muda: o campo e' `entregas`,
      //    e o valor novo e' o que o aluno ja tem + 1.
```

**Cole no lugar (DEPOIS):**

```tsx
      const atualizado = await atualizarAluno(id, { entregas: aluno.entregas + 1 })
      setAlunos(anteriores => anteriores.map(item => item.id === id ? atualizado : item))
      setSalvo(true)
```

### Marca 12c

- **Arquivo:** `semana10_com_lacunas/src/App.tsx`
- **Onde:** dentro da função `registrarEntrega`, no bloco que começa em `} catch (falha) {`.
- **As duas linhas de cima:** `setSalvo(true)` e, logo abaixo dela, `} catch (falha) {`
- **Busca:** `Ctrl+F` → `LACUNA 12c` · por volta da **linha 68**

**Selecione (ANTES) — 1 linha:**

```tsx
      // ⌨ LACUNA 12c — copie o catch da funcao de cima (igual).
```

**Cole no lugar (DEPOIS):**

```tsx
      setErroSalvar(falha instanceof Error ? falha.message : 'Não foi possível salvar.')
```

### Marca 12d

- **Arquivo:** `semana10_com_lacunas/src/App.tsx`
- **Onde:** dentro da função `registrarEntrega`, no bloco que começa em `} finally {`.
- **As duas linhas de cima:** `setErroSalvar(falha instanceof Error ? falha.message : 'Não foi possível salvar.')` e, logo abaixo dela, `} finally {`
- **Busca:** `Ctrl+F` → `LACUNA 12d` · por volta da **linha 70**

**Selecione (ANTES) — 1 linha:**

```tsx
      // ⌨ LACUNA 12d — copie o finally da funcao de cima (igual).
```

**Cole no lugar (DEPOIS):**

```tsx
      setSalvando(false)
```

**Teste:**

- Abra a aba **Entregas** e clique em "+1 entrega" na Ana; depois dê `F5`.

**Confira:** A entrega da Ana vai de **3** para **4**; com `F5`, continua 4. `npm run lint`: **0 avisos**.

---

## O alunos.json original

Para desfazer a lista vazia da lacuna 3: `Ctrl+C` no terminal; abra `semana10_com_lacunas/public/alunos.json`; `Ctrl+A` (seleciona tudo); cole o bloco abaixo; salve; rode `npm run dev` de novo e dê `F5`.

```json
[
  { "id": 1, "nome": "Ana Souza", "presente": true,  "entregas": 3 },
  { "id": 2, "nome": "Beto Lima", "presente": false, "entregas": 1 },
  { "id": 3, "nome": "Bia Costa", "presente": true,  "entregas": 4 },
  { "id": 4, "nome": "Caio Dias", "presente": true,  "entregas": 0 }
]
```

## O contador

O `npx tsc -b` e o `npm run lint` **no fim** de cada lacuna. As lacunas 1 a 5 não mexem no contador: o placar delas é a tela.

| no fim da lacuna | `npx tsc -b` (linhas TS6133) | `npm run lint` (avisos) |
|---|---:|---:|
| (tudo aberto) | 9 | 11 |
| 1 | 9 | 11 |
| 2 | 9 | 11 |
| 3 | 9 | 11 |
| 4 | 9 | 11 |
| 5 | 9 | 11 |
| 6 | 8 | 10 |
| 7 | 4 | 6 |
| 8 | 2 | 4 |
| 9 | 2 | 4 |
| 10 | 2 | 3 |
| 11 | 0 | 1 |
| 12 | 0 | 0 |

## Se um arquivo inteiro se perdeu

Abaixo estão os quatro arquivos **completos**, como ficam no fim da aula. Para usar: abra o arquivo, `Ctrl+A` (seleciona tudo), cole o bloco inteiro (`Ctrl+V`) e salve. **Atenção:** eles trazem **todas** as lacunas preenchidas — ao colar um, você perde as marcas do que ainda não fez. Use só quando o arquivo se perdeu de vez.

### `semana10_com_lacunas/src/App.tsx`

```tsx
import { BrowserRouter, Routes, Route, NavLink } from 'react-router'
import { useEffect, useState } from 'react'
import type { Aluno } from './types/aluno'
import { atualizarAluno, buscarTurma } from './services/turma'
import Cabecalho from './components/Cabecalho'
import Chamada from './components/Chamada'
import Entregas from './components/Entregas'
import FichaAluno from './components/FichaAluno'
import NaoEncontrado from './components/NaoEncontrado'

function App() {
  // a turma nao mora mais no codigo: ela CHEGA pela rede
  const [alunos, setAlunos] = useState<Aluno[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  // escrita: tres estados PROPRIOS. O erro de salvar nao esconde a tela (o de leitura esconde)
  const [salvando, setSalvando] = useState(false)
  const [salvo, setSalvo] = useState(false)
  const [erroSalvar, setErroSalvar] = useState('')

  useEffect(() => {
    async function carregar() {
      setCarregando(true)
      setErro('')
      try {
        const dados = await buscarTurma()   // nenhum fetch aqui: quem fala com a rede e' o servico
        setAlunos(dados)
      } catch (falha) {
        setErro(falha instanceof Error ? falha.message : 'Não foi possível carregar a turma.')
      } finally {
        setCarregando(false)   // deu certo ou errado, a espera acabou
      }
    }

    carregar()
  }, [])

  // PESSIMISTA: a tela so muda DEPOIS que o servidor responde. Mesmo molde do carregar():
  // liga o estado, tenta, mostra o erro, desliga o estado — agora com o servidor no meio.
  async function marcarPresenca(id: number) {
    const aluno = alunos.find(item => item.id === id)
    if (aluno === undefined) return
    setSalvando(true)
    setSalvo(false)
    setErroSalvar('')
    try {
      const atualizado = await atualizarAluno(id, { presente: !aluno.presente })
      setAlunos(anteriores => anteriores.map(item => item.id === id ? atualizado : item))
      setSalvo(true)
    } catch (falha) {
      setErroSalvar(falha instanceof Error ? falha.message : 'Não foi possível salvar.')
    } finally {
      setSalvando(false)
    }
  }

  async function registrarEntrega(id: number) {
    const aluno = alunos.find(item => item.id === id)
    if (aluno === undefined) return
    setSalvando(true)
    setSalvo(false)
    setErroSalvar('')
    try {
      const atualizado = await atualizarAluno(id, { entregas: aluno.entregas + 1 })
      setAlunos(anteriores => anteriores.map(item => item.id === id ? atualizado : item))
      setSalvo(true)
    } catch (falha) {
      setErroSalvar(falha instanceof Error ? falha.message : 'Não foi possível salvar.')
    } finally {
      setSalvando(false)
    }
  }

  // a espera acabou E nao deu erro: so' agora as telas tem dados de verdade para mostrar
  const terminou = !carregando && !erro
  // terminou sem erro, mas a lista veio vazia: e' um 4o estado, e a tela tem de dizer isso
  const vazia = terminou && alunos.length === 0

  return (
    <BrowserRouter>
      <div className="painel">
        <Cabecalho />

        {/* as abas viraram LINKS: cada tela tem uma URL, e a URL sobrevive ao F5 */}
        <nav className="abas" aria-label="Telas do painel">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'aba ativa' : 'aba')}>Chamada</NavLink>
          <NavLink to="/entregas" className={({ isActive }) => (isActive ? 'aba ativa' : 'aba')}>Entregas</NavLink>
        </nav>

        <main>
          {/* as MESMAS regioes vivas da S08 — agora anunciam a rede.
              dentro do <main>: quem navega por marcos TEM de alcancar o aviso */}
          <p className="aviso" role="status" aria-live="polite">
            {carregando && <span>carregando a turma...</span>}
            {vazia && <span>A turma chegou vazia: ainda não há nenhum aluno para mostrar.</span>}
          </p>
          <p className="erro" role="alert" aria-live="assertive">{erro}</p>
          {/* a ESCRITA ganha as mesmas duas regioes, separadas das da leitura, numa faixa de
              altura FIXA (medido: sem ela, "salvando..." empurrava a lista 36 px para baixo) */}
          <div className="salvar">
            <p className="aviso" role="status" aria-live="polite">
              {salvando && <span>salvando...</span>}
              {salvo && <span>salvo</span>}
            </p>
            <p className="erro" role="alert" aria-live="assertive">{erroSalvar}</p>
          </div>

          {terminou && !vazia && <Routes>
            <Route path="/" element={<Chamada alunos={alunos} onPresenca={marcarPresenca} salvando={salvando} />} />
            <Route path="/entregas" element={<Entregas alunos={alunos} onEntrega={registrarEntrega} salvando={salvando} />} />
            {/* a URL carrega um DADO: o :id diz de quem e' a ficha */}
            <Route path="/aluno/:id" element={<FichaAluno alunos={alunos} carregando={carregando} />} />
            {/* qualquer outro endereco: a rota existe, e ela mostra uma TELA de erro.
                A ORDEM NAO DECIDE: o React Router escolhe a rota MAIS ESPECIFICA (medido: com
                "*" na primeira linha, as outras telas continuam abrindo). Ela fica por ultimo
                por LEITURA — e' o "senao" do mapa, e quem le espera o "senao" no fim. */}
            <Route path="*" element={<NaoEncontrado />} />
          </Routes>}
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
```

### `semana10_com_lacunas/src/services/turma.ts`

```ts
import type { Aluno } from '../types/aluno'

// A conversa com a rede mora AQUI, e só aqui. Nenhum componente dá fetch.
// O serviço promete um tipo (Promise<Aluno[]>) e traduz a falha tecnica
// numa frase que serve para uma PESSOA ler na tela.
export async function buscarTurma(): Promise<Aluno[]> {
  // a frase PARA A PESSOA muda conforme o passo em que a falha acontece
  let frase = 'Sem conexão com o servidor da turma. Confira sua internet e recarregue a página.'
  try {
    const resposta = await fetch(import.meta.env.VITE_API_URL, {
      headers: { Accept: 'application/json' },   // pedimos JSON: no servidor de dev, arquivo ausente vira 404
    })
    frase = 'O servidor respondeu com erro. Tente de novo daqui a pouco; se continuar, avise quem cuida do painel.'
    if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`)
    frase = 'A turma chegou num formato que o painel não entende. Avise quem cuida do painel.'
    const dados: unknown = await resposta.json()
    if (!Array.isArray(dados)) throw new Error('a resposta não é uma lista')
    return dados
  } catch (falha) {
    console.error('[buscarTurma]', falha)   // o motivo tecnico fica no console, para quem programa
    throw new Error(frase)
  }
}

// ESCRITA: o MESMO molde do buscarTurma, com tres coisas a mais — o verbo (PATCH),
// o cabecalho que diz "o corpo e' JSON" e o corpo. A URL continua vindo do .env:
// /api/alunos + /1 = o aluno 1. O servidor responde com o aluno JA ATUALIZADO.
export async function atualizarAluno(
  id: number,
  mudanca: Partial<Pick<Aluno, 'presente' | 'entregas'>>,
): Promise<Aluno> {
  try {
    const resposta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mudanca),
    })
    if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`)
    const atualizado: Aluno = await resposta.json()
    return atualizado
  } catch (falha) {
    console.error('[atualizarAluno]', falha)
    throw new Error('Não foi possível salvar. Tente de novo.')
  }
}
```

### `semana10_com_lacunas/src/components/CartaoPresenca/index.tsx`

```tsx
import { Link } from 'react-router'
import type { Aluno } from '../../types/aluno'

interface CartaoPresencaProps {
  aluno: Aluno
  onPresenca: (id: number) => void
  salvando?: boolean
}

function CartaoPresenca({ aluno, onPresenca, salvando = false }: CartaoPresencaProps) {
  return (
    <li className="cartao">
      {/* o nome vira LINK: o texto do link e' o nome, que faz sentido fora de contexto */}
      <span className="nome"><Link to={`/aluno/${aluno.id}`}>{aluno.nome}</Link></span>
      <span className={aluno.presente ? 'badge ok' : 'badge nope'}>
        {aluno.presente ? 'presente' : 'ausente'}
      </span>
      <button onClick={() => onPresenca(aluno.id)} disabled={salvando}>
        {aluno.presente ? 'marcar falta' : 'marcar presença'}
      </button>
    </li>
  )
}

export default CartaoPresenca
```

### `semana10_com_lacunas/src/components/CartaoEntrega/index.tsx`

```tsx
import type { Aluno } from '../../types/aluno'

interface CartaoEntregaProps {
  aluno: Aluno
  onEntrega: (id: number) => void
  salvando?: boolean
}

function CartaoEntrega({ aluno, onEntrega, salvando = false }: CartaoEntregaProps) {
  return (
    <li className="cartao">
      <span className="nome">{aluno.nome}</span>
      <span className="contagem">{aluno.entregas}</span>
      <button onClick={() => onEntrega(aluno.id)} disabled={salvando}>+1 entrega</button>
    </li>
  )
}

export default CartaoEntrega
```

**Força Jovem! 🤞** Se travar, chame no Teams ou procure o professor na escola.
