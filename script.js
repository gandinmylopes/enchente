const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que fazer se ficar preso em um carro durante uma enchente?",
        alternativas: [
            {
                texto: "ficar no carro!",
                afirmacao: " E correr o risco de ser levado pela correnteza "
            },
            {
                texto: "sair do carro!",
                afirmacao: "E tentar se salvar."
            }
        ]
    },
    {
        enunciado: "O que você faria se sua casa fosse alagada?",
        alternativas: [
            {
                texto: "permanecer na casa",
                afirmacao: " correr riscos."
            },
            {
                texto: "fugir.",
                afirmacao: "talvez se salvar."
            }
        ]
    },
    {
        enunciado: "como sobreviver uma enchente?",
        alternativas: [
            {
                texto: "procurar lugares altos",
                afirmacao: "ficar longe de arvores e janelas, e não fique proximo de eltrodomesticos que puxem energia."
            },
            {
                texto: "permanecer aonde está",
                afirmacao: "e perder tudo que você tem."
            }
        ]
    },
    {
        enunciado:" você deixaria seus animais na enchente?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "e perderia eles."
            },
            {
                texto: "não.",
                afirmacao: "e levaria eles para um lugar seguro com você!"
            }
        ]
    },
    {
       
        
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
