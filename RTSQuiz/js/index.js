const kbcQuestions = 
[
// ----------------- 1 ------------------------------
[{
    question: "Qual das seguintes opções é um exemplo de informação pessoal sensível?",
    a: "Nome de um filme favorito",
    b: "Endereço de e-mail",
    c: "Cor favorita",
    d: "Equipa de futebol preferida",
    correct: "Endereço de e-mail",
},
{
    question: "Qual das seguintes opções é uma boa prática para criar senhas?",
    a: "Usar a mesma senha para todas as contas",
    b: "Partilhar as senhas com os amigos",
    c: "Criar senhas curtas e fáceis de lembrar",
    d: "Criar senhas longas e complexas",
    correct: "Criar senhas longas e complexas",
},
{
    question: "O que é importante fazer ao criar uma senha?",
    a: "Usar o nome e data de nascimento para facilitar a memorização",
    b: "Utilizar uma combinação de letras maiúsculas e minúsculas, números e caracteres especiais",
    c: "Partilhar a senha com amigos de confiança",
    d: "Usar a mesma senha para todas as contas",
    correct: "Utilizar uma combinação de letras maiúsculas e minúsculas, números e caracteres especiais",
}],
// ----------------- 2 ------------------------------
[{
    question: "O que deve fazer caso receba uma mensagem suspeita de alguém que não conhece a pedir informações pessoais?",
    a: "Responder com as informações solicitadas",
    b: "Ignorar a mensagem",
    c: "Partilhar as informações apenas com um amigo próximo",
    d: "Informar imediatamente um adulto responsável",
    correct: "Informar imediatamente um adulto responsável",
},
{
    question: "O que se deve fazer caso se receba um pedido para partilhar fotos ou informações pessoais online?",
    a: "Partilhar imediatamente",
    b: "Perguntar aos pais ou responsáveis antes de partilhar qualquer coisa",
    c: "Ignorar o pedido",
    d: "Partilhar apenas com amigos próximos",
    correct: "Perguntar aos pais ou responsáveis antes de partilhar qualquer coisa",
},
{
    question: "O que deve fazer caso receba uma mensagem suspeita de alguém que afirma ser um amigo seu?",
    a: "Responder imediatamente com informações pessoais",
    b: "Ignorar a mensagem e apagar imediatamente",
    c: "Encaminhar a mensagem para todos os seus contatos",
    d: "Verificar a autenticidade entrando em contato com seu amigo por meio de outra forma de comunicação",
    correct: "Verificar a autenticidade entrando em contato com seu amigo por meio de outra forma de comunicação",
}],
// ----------------- 3 ------------------------------
[{
    question: "O que é um vírus de computador?",
    a: "Um programa que protege o computador contra ameaças",
    b: "Uma peça de hardware que melhora o desempenho do computador",
    c: "Um programa malicioso que pode danificar ficheiros e software",
    d: "Um dispositivo que permite acesso à internet sem fio",
    correct: "Um programa malicioso que pode danificar ficheiros e software",
},
{
    question: "O que é phishing?",
    a: "Uma técnica para proteger a identidade online",
    b: "Um tipo de malware que rouba informações pessoais",
    c: "Uma forma de enviar e receber mensagens criptografadas",
    d: "Um serviço que permite fazer compras online com segurança",
    correct: "Um tipo de malware que rouba informações pessoais",
},
{
    question: "Qual das seguintes opções é uma maneira segura de comunicar pela internet?",
    a: "Partilhar informações pessoais em fóruns públicos",
    b: "Usar redes Wi-Fi públicas sem proteção",
    c: "Enviar senhas e informações confidenciais por e-mail",
    d: "Utilizar mensagens criptografadas ou aplicações seguros",
    correct: "Utilizar mensagens criptografadas ou aplicações seguros",
}],
// ----------------- 4 ------------------------------
[{
    question: "O que se deve fazer se encontrar uma página da web suspeita ou com conteúdo inadequado?",
    a: "Continuar navegando e explorar a página",
    b: "Fechar a página imediatamente",
    c: "Partilhar o link com os amigos",
    d: "Responder às perguntas da página",
    correct: "Fechar a página imediatamente",
},
{
    question: "O que é uma firewall?",
    a: "Um tipo de vírus de computador",
    b: "Um dispositivo usado para bloquear chamadas telefónicas indesejadas",
    c: "Um programa que protege o computador contra ataques e acessos não autorizados",
    d: "Uma rede de computadores conectados entre si",
    correct: "Um programa que protege o computador contra ataques e acessos não autorizados",
},
{
    question: "O que é importante fazer ao receber um e-mail suspeito de um remetente desconhecido?",
    a: "Abrir os anexos e links fornecidos no e-mail",
    b: "Responder ao e-mail fornecendo suas informações pessoais",
    c: "Excluir o e-mail sem abrir ou clicar em qualquer coisa",
    d: "Encaminhar o e-mail para todos os seus contatos",
    correct: "Excluir o e-mail sem abrir ou clicar em qualquer coisa",
}],
// ----------------- 5 ------------------------------
[{
    question: "O que é engenharia social?",
    a: "Um tipo de ataque cibernético realizado por hackers profissionais",
    b: "Um método para proteger redes sociais de ameaças virtuais",
    c: "Um processo para criar senhas complexas e seguras",
    d: "Uma técnica que manipula as pessoas para obter informações confidenciais",
    correct: "Uma técnica que manipula as pessoas para obter informações confidenciais",
},
{
    question: "O que é backup de dados?",
    a: "Uma medida para bloquear o acesso a um site ou serviço online",
    b: "Uma técnica para criptografar dados confidenciais",
    c: "Uma cópia de segurança de ficheiros e informações importantes",
    d: "Um programa antivírus para proteger o computador contra ameaças",
    correct: "Uma cópia de segurança de ficheiros e informações importantes",
},
{
    question: "O que é um software antivírus?",
    a: "Um programa usado para invadir sistemas de computador",
    b: "Um dispositivo físico para proteger o computador de vírus",
    c: "Um programa que detecta e remove ameaças de malware",
    d: "Uma técnica para criptografar dados confidenciais",
    correct: "Um programa que detecta e remove ameaças de malware",
}],
// ----------------- 6 ------------------------------
[{
    question: "Recebes um e-mail solicitando que cliques num link para verificar a conta bancária, pois há uma atividade suspeita. O que deves fazer?",
    a: "Clicar no link e fornecer as informações solicitadas",
    b: "Ignorar o e-mail e apagar imediatamente",
    c: "Encaminhar o e-mail para os amigos",
    d: "Verificar diretamente com o seu banco por meio de um canal seguro",
    correct: "Verificar diretamente com o seu banco por meio de um canal seguro",
},
{
    question: "Estás a usar um computador público numa biblioteca e precisas de fazer login na tua conta de e-mail. O que deves fazer para proteger as tuas informações pessoais?",
    a: "Usar uma senha fácil de lembrar para não esquecer",
    b: "Permitir que o computador guarde as informações de login",
    c: "Utilizar uma ligação VPN para criptografar os teus dados",
    d: "Partilhar as suas informações de login com um amigo",
    correct: "Utilizar uma ligação VPN para criptografar os teus dados",
},
{
    question: "Recebes uma mensagem de texto de um número desconhecido, solicitando que cliques num link para ganhar um prémio. O que deves fazer?",
    a: "Clicar no link e seguir as instruções",
    b: "Responder à mensagem com as tuas informações pessoais",
    c: "Ignorar a mensagem e apagar imediatamente",
    d: "Informar um adulto responsável sobre a mensagem suspeita",
    correct: "Ignorar a mensagem e apagar imediatamente",
}],
// ----------------7 ------------------------------
[{
    question: "Estás a usar um Wi-Fi público num café. O que deves fazer para garantir a segurança das tuas informações?",
    a: "Realizar todas as transações financeiras e aceder às contas confidenciais",
    b: "Desativar a firewall do teu dispositivo para uma ligação mais rápida",
    c: "Evitar o acesso a sites que requerem senhas ou informações pessoais",
    d: "Partilhar as suas informações de login com outros utilizadores do Wi-Fi",
    correct: "Evitar o acesso a sites que requerem senhas ou informações pessoais",
},
{
    question: "Recebes um telefonema de alguém se passando por um representante de suporte técnico. Eles solicitam acesso remoto ao teu computador para resolver um problema. O que deves fazer?",
    a: "Fornecer acesso remoto ao teu computador imediatamente",
    b: "Desligar o telefone e bloquear o número",
    c: "Seguir as instruções do suposto suporte técnico",
    d: "Verificar a autenticidade da ligação com a empresa de suporte técnico",
    correct: "Verificar a autenticidade da ligação com a empresa de suporte técnico",
},
{
    question: "Recebes uma mensagem de um colega de turma pedindo que partilhes as tuas credenciais de login para aceder a um documento importante. O que deves fazer?",
    a: "Partilhar as tuas credenciais de login com o colega",
    b: "Ignorar a mensagem e não partilhar as tuas credenciais",
    c: "Responder à mensagem pedindo mais informações sobre o documento",
    d: "Verificar com o professor ou responsável antes de partilhar qualquer informação",
    correct: "Verificar com o professor ou responsável antes de partilhar qualquer informação",
}],
// ----------------- 8 ------------------------------
[{
    question: "Estás a navegar num site e encontras um link para fazer o download gratuito de um software pago. O que deves fazer?",
    a: "Fazer o download imediatamente para aproveitar a oferta",
    b: "Verificar se o site é confiável e se o download é legítimo",
    c: "Partilhar o link com teus amigos para que eles também possam fazer o download",
    d: "Clicar no link para ver o que acontece, mas sem fazer o download",
    correct: "Verificar se o site é confiável e se o download é legítimo",
},
{
    question: "Recebes uma mensagem numa rede social de alguém que afirma ser um representante de uma empresa famosa e pede que forneças os teus dados pessoais para ganhar um prémio. O que deves fazer?",
    a: "Fornecer os dados pessoais imediatamente",
    b: "Ignorar a mensagem e denunciá-la como suspeita",
    c: "Partilhar a mensagem com os amigos para obter opiniões",
    d: "Responder à mensagem com os dados pessoais, mas com cuidado",
    correct: "Ignorar a mensagem e denunciá-la como suspeita",
},
{
    question: "Estás a planear uma viagem e decides partilhar detalhes sobre a sua localização e itinerário nas redes sociais. O que deves considerar antes de fazer isso?",
    a: "Partilhar tudo sem restrições, para que todos saibam onde estás",
    b: "Apenas partilhar com amigos próximos e familiares",
    c: "Configurar os teus posts para serem visíveis apenas para pessoas confiáveis",
    d: "Divulgar todas as informações publicamente para receber sugestões de lugares para visitar",
    correct: "Configurar os teus posts para serem visíveis apenas para pessoas confiáveis",
}],
// ----------------- 9 ------------------------------
[{
    question: "Estás de férias e decides fazer uma reserva de hotel online. Como deves verificar se o site de reserva é seguro?",
    a: "Fornecer as tuas informações de cartão de crédito sem te preocupares",
    b: "Verificar se o site tem um cadeado de segurança e um endereço HTTPS",
    c: "Partilhar os teus dados pessoais com o site sem hesitação",
    d: "Escolher um site aleatório e fazer a reserva sem verificar",
    correct: "Verificar se o site tem um cadeado de segurança e um endereço HTTPS",
},
{
    question: "Para proteger os teus dispositivos eletrónicos, é importante:",
    a: "Deixar o teu dispositivo desbloqueado para facilitar o acesso",
    b: "Instalar regularmente atualizações de segurança",
    c: "Partilhar as tuas senhas com amigos e familiares",
    d: "Fazer o download de aplicações de fontes não confiáveis",
    correct: "Instalar regularmente atualizações de segurança",
},
{
    question: "Ao receber uma solicitação de amizade numa rede social de alguém desconhecido, o que deves fazer?",
    a: "Aceitar a solicitação imediatamente, pois pode ser uma oportunidade de fazer novos amigos",
    b: "Ignorar a solicitação e não aceitar amizades de pessoas desconhecidas",
    c: "Responder à solicitação pedindo mais informações sobre a pessoa",
    d: "Partilhar a solicitação com os teus amigos para obter opiniões",
    correct: "Ignorar a solicitação e não aceitar amizades de pessoas desconhecidas",
}],
// ----------------- 10 ------------------------------
[{
    question: "A prática de verificar se um site possui um cadeado de segurança e um endereço HTTPS antes de fornecer informações pessoais é uma medida de segurança chamada de _______.",
    a: "Criptografia",
    b: "Firewall",
    c: "Navegação segura",
    d: "Proteção contra malware",
    correct: "Navegação segura",
},
{
    question: "Um programa malicioso projetado para se infiltrar num sistema de computador e se espalhar sem o conhecimento do utilizador é chamado de _______.",
    a: "Vírus",
    b: "Senha",
    c: "Firewall",
    d: "Backup",
    correct: "Vírus",
},
{
    question: "A prática de usar uma combinação única de letras, números e caracteres especiais para proteger as tuas contas online é chamada de _______.",
    a: "Senha forte",
    b: "Antivírus",
    c: "Criptografia",
    d: "Backup",
    correct: "Senha forte",
}],
// ----------------- 11 ------------------------------
[{
    question: "Um ataque cibernético que envolve o envio de e-mails falsos com o objetivo de induzir as pessoas a revelar informações confidenciais é chamado de _______.",
    a: "Phishing",
    b: "Malware",
    c: "Firewall",
    d: "Backup",
    correct: "Phishing",
},
{
    question: "A prática de fazer uma cópia de segurança regular dos teus ficheiros e dados importantes é conhecida como _______.",
    a: "Firewall",
    b: "Backup",
    c: "Criptografia",
    d: "Antivírus",
    correct: "Backup",
},
{
    question: "Um método utilizado por hackers para obter acesso a sistemas ou contas por meio do uso de senhas comuns ou fáceis de adivinhar é conhecido como _______.",
    a: "Injeção de código",
    b: "Força bruta",
    c: "Engenharia social",
    d: "Ransomware",
    correct: "Força bruta",
}],
// ----------------- 12 ------------------------------
[{
    question: "Uma técnica de segurança que consiste em verificar se os utilizadores são quem eles afirmam ser com base nas suas características físicas, como impressões digitais ou reconhecimento facial, é chamada de _______.",
    a: "Autenticação de dois fatores",
    b: "Firewall",
    c: "Criptografia",
    d: "Biometria",
    correct: "Biometria",
},
{
    question: "Um tipo de malware que rouba e criptografa os ficheiros de um dispositivo, exigindo um resgate para desbloqueá-los, é conhecido como _______.",
    a: "Ransomware",
    b: "Phishing",
    c: "Spyware",
    d: "Worm",
    correct: "Ransomware",
},
{
    question: "Um método de proteção de rede que controla o tráfego de entrada e saída com base num conjunto de regras de segurança é chamado de _______.",
    a: "Firewall",
    b: "Malware",
    c: "Criptografia",
    d: "Backup",
    correct: "Firewall",
}],
// ----------------- 13 ------------------------------
[{
    question: "Uma técnica usada por hackers para interceptar comunicações entre dois ou mais dispositivos e roubar informações é conhecida como _______.",
    a: "Man-in-the-middle",
    b: "Pharming",
    c: "Spoofing",
    d: "Antivírus",
    correct: "Man-in-the-middle",
},
{
    question: "Uma técnica usada por hackers para convencer as pessoas a executar ações prejudiciais, como clicar em links maliciosos ou fornecer informações confidenciais, é chamada de _______.",
    a: "Pharming",
    b: "Engenharia social",
    c: "Ransomware",
    d: "Spyware",
    correct: "Engenharia social",
},
{
    question: "Um tipo de ataque cibernético que visa sobrecarregar um sistema ou site específico com tráfego excessivo, tornando-o inacessível para os utilizadores legítimos, é chamado de _______.",
    a: "Phishing",
    b: "Spyware",
    c: "Ataque DDoS",
    d: "Worm",
    correct: "Ataque DDoS",
}],
// ----------------- 14 ------------------------------
[
{
    question: "Uma técnica de segurança que envolve a codificação de dados para que só possam ser lidos por pessoas autorizadas é conhecida como _______.",
    a: "Firewall",
    b: "Backup",
    c: "Criptografia",
    d: "Antivírus",
    correct: "Criptografia",
},
{
    question: "Um programa de computador malicioso que se replica e se espalha para outros computadores sem a necessidade de interação do utilizador é chamado de _______.",
    a: "Ransomware",
    b: "Worm",
    c: "Phishing",
    d: "Spyware",
    correct: "Worm",
},
{
    question: "Uma técnica usada por hackers para criar um site falso que se parece com um site legítimo, com o objetivo de enganar as pessoas a partilhar informações confidenciais, é conhecida como _______.",
    a: "Spyware",
    b: "Man-in-the-middle",
    c: "Phishing",
    d: "Malware",
    correct: "Phishing",
}],
// ----------------- 15 ------------------------------
[{
    question: "Um software projetado para detectar, bloquear e remover programas maliciosos de um computador é chamado de _______.",
    a: "Antivírus",
    b: "Firewall",
    c: "Backup",
    d: "Criptografia",
    correct: "Antivírus",
},
{
    question: "Um tipo de ataque cibernético que redireciona o tráfego de um site legítimo para um site falso, com o objetivo de roubar informações dos utilizadores, é chamado de _______.",
    a: "Spoofing",
    b: "Pharming",
    c: "Malware",
    d: "Worm",
    correct: "Spoofing",
},
{
    question: "Uma técnica de segurança que envolve o uso de duas formas de autenticação para verificar a identidade de um utilizador, geralmente uma combinação de senha e um código enviado para um dispositivo móvel, é chamada de _______.",
    a: "Criptografia",
    b: "Firewall",
    c: "Autenticação de dois fatores",
    d: "Backup",
    correct: "Autenticação de dois fatores",
}],


];

const welcomeSound = new Audio("page2_kbc_intro_audio.mp3")
const timerSound = new Audio("Kbc Timer - Tik Tik KBC Clock.mp3");
const wrongAnswerSound = new Audio("wrong_with_dramatic.mp3");
const correctAnswerSound = new Audio("kbc_background.mp3");
const answerLockSound = new Audio("ans_lock2.mp3");
const lifelineComesUpSound = new Audio("lifeline-comesUp.wav");
const audiencePollSound = new Audio("audience_poll.mp3");
const themeMusic = new Audio("THEME_MUSIC2.mp3");


let currentQuestIndex = 0;
let currentRandomQuestIndex;
let currQuestObject;
let prevQuestIndex;
let currSetTimeoutId ;

let lifelineFlag = {
    audiencePollFlag : 1,
    flipTheQuestionFlag : 1,
    fiftyFiftyFlag : 1,
    doubleDipFlag : 1,
    doubleDipMarker: 0,
}

let quitFlag = {
    wrongAnswerFlag: 0,
    timeUpFlag: 0,
    quitButtonFlag: 0,
    oneCroreFlag: 0,
    winningAmount: 0,
}

let colors = {
    page2btn : "#03318c",
}


const disableNextButton = ()=>{
    ele = document.getElementById("Next");
    if(ele.classList.contains("pointer-events-none")==false)
        document.getElementById("Next").classList.add("pointer-events-none");
}

const enableNextButton = ()=>{
    document.getElementById("Next").classList.remove("pointer-events-none");
}


const disableQuitButton = ()=>{
    ele = document.getElementById("Quit");
    if(ele.classList.contains("pointer-events-none")==false)
        document.getElementById("Quit").classList.add("pointer-events-none");
}

const enableQuitButton = ()=>{
    document.getElementById("Quit").classList.remove("pointer-events-none");
}

const optButtonDisabled = ()=>{
    document.querySelectorAll(".answer-opt").forEach((e)=>{
        e.classList.add("pointer-events-none");
    })
}

const optButtonEnabled = ()=>{
    document.querySelectorAll(".answer-opt").forEach((e)=>{
        e.classList.remove("pointer-events-none");
    })
}

const TimeUpSound = ()=>{
    wrongAnswerSound.currentTime=3.6;
    wrongAnswerSound.play();
}

const timeUp = ()=>{
    TimeUpSound();
    quitFlag.timeUpFlag = 1;
    correctAns = currQuestObject.correct;
    correctOptionId = correctOptionAnsEle(correctAns);
    document.getElementById(correctOptionId).style.backgroundColor = "green";
    document.getElementById(correctOptionId).style.color = "black";

    document.getElementById("result").innerText = "";
    disableLifelineButton();
    disableQuitButton();
    optButtonDisabled();
    setTimeout(openQuitPage,8000);
}

const stopWatch = ()=>{
    tikTikSound();
}
const tikTikSound = ()=>{
    document.querySelector(".timer").innerText = 30;
    timerSound.currentTime=0;
    timerSound.play();
    tikTikText();
}

const tikTikText = ()=>{
    let innerTextValue = document.querySelector(".timer").innerText;
    if(innerTextValue>0)
    {
        innerTextValue--;
        document.querySelector(".timer").innerText = innerTextValue;
        clearTimeout(currSetTimeoutId);
        currSetTimeoutId = setTimeout(tikTikText,1000);
    }
    else
    {
        timeUp();
    }
}

const clearStopWatch = ()=>{
    clearTimeout(currSetTimeoutId);
    timerSound.pause();
}

const correctOptionAnsEle = (correctAns)=>{
    obj = currQuestObject;
    for(let items in obj)
    {
        if(obj[items] == correctAns)
            return items;
    }
}

const CorrectAnswerSound = ()=>{
    correctAnswerSound.currentTime = 0;
    correctAnswerSound.play();
}

const WrongAnswerSound = ()=>{
    wrongAnswerSound.currentTime = 0;
    wrongAnswerSound.play();
}


function doubleDipLogic(e){

    document.querySelector("#result").innerText = "Resposta errada! Faça a segunda tentativa";
    e.style.backgroundColor = "lightcoral";
    optButtonEnabled();
    e.style.pointerEvents = "none";
    lifelineFlag.doubleDipMarker = 0;
}

//____________________________Result Analysis_________________________________________
const resultAnalysis = (e)=>{
    answerLockSound.pause();
    contestantAnsObject = e.childNodes;
    contestantAns = contestantAnsObject[1].nodeValue;
    correctAns = currQuestObject.correct;
    if(contestantAns == correctAns)
    {
        CorrectAnswerSound();
        if(lifelineFlag.doubleDipMarker==1)
        {
            lifelineFlag.doubleDipMarker=0;
        }
        let amount = document.getElementById(currentQuestIndex).innerText;
        // amount = amount.replaceAll("","");
        quitFlag.winningAmount = parseInt(amount);
        document.getElementById("result").innerText = "";
        e.style.backgroundColor = "green";
        enableNextButton();
        enableQuitButton();
        if(currentQuestIndex==14){
            setTimeout(openQuitPage,5000);
            quitFlag.oneCroreFlag = 1;
            disableQuitButton();
        }
    }
    else
    {
        if(lifelineFlag.doubleDipMarker==1)
        {
            WrongAnswerSound();
            doubleDipLogic(e);
        }
        else
        {
            WrongAnswerSound();
            document.getElementById("result").innerText = "";
            e.style.backgroundColor = "lightcoral";
            correctOptionId = correctOptionAnsEle(correctAns);
            document.getElementById(correctOptionId).style.backgroundColor = "green";
            document.getElementById(correctOptionId).style.color = "black";
            disableQuitButton();
            quitFlag.wrongAnswerFlag = 1;
            setTimeout(openQuitPage,5500);
        }
    }
}

const bulletTimeout = (flag,bullets,clearTimeoutId,e)=>{
    if(flag==3)
        {
            document.querySelector("#game-area-result").classList.remove("checking-bullets-container");
            let resultBack = `<div id="result" class="result">Rumo ao Topo da CiberSegurança</div>`;
            let lifelineBox = `
                <div class="lifeline-box">
                    <div class="lifeline-item computador">
                        <div id="audience-cross-one" class="cross-mark cross-one "></div>
                        <div id="audience-cross-two"  class="cross-mark cross-two "></div>
                    </div>
                    <div class="lifeline-item troca-de-pergunta">
                        <div class="cross-mark cross-one "></div>
                        <div class="cross-mark cross-two "></div>
                    </div>
                    <div class="lifeline-item cinquenta-cinquenta">
                        <div class="cross-mark cross-one "></div>
                        <div class="cross-mark cross-two "></div>
                    </div>
                    <div class="lifeline-item dupla-tentativa">
                        <div class="cross-mark cross-one "></div>
                        <div class="cross-mark cross-two "></div>
                    </div>
                </div>
            `;
            let gameAreaFullItem = resultBack + lifelineBox;
            document.getElementById("game-area-result").innerHTML = gameAreaFullItem;
            resultAnalysis(e);
        }
    else
      {
          let ele = document.querySelector(".checking-bullets-container");
          ele.innerHTML = bullets;
          ele.children[flag].style.backgroundColor = "orange";
          clearTimeout(clearTimeoutId);
          flag++;
          clearTimeoutId = setTimeout(bulletTimeout,800,flag,bullets,clearTimeoutId,e);
      }

    }

const bulletsRunning = (e)=>{
    document.querySelector("#game-area-result").classList.add("checking-bullets-container");
    let bullets = `
      <div class="bullets" style="background-color: white"></div>
      <div class="bullets" style="background-color: white"></div>
      <div class="bullets" style="background-color: white"></div>
    `
    disableNextButton();
    disableQuitButton();
    let clearTimeoutId;
    let flag=0;
    bulletTimeout(flag,bullets,clearTimeoutId,e);
}

const AnswerLockSound = ()=>{
    answerLockSound.currentTime = 0;
    answerLockSound.play();
}

function clearScreenFromAudiencePoll(){
    document.querySelector(".computador-outer-container").innerHTML = "";
}

const disableLifelineButton = ()=>{
    document.getElementById("lifeline-button").classList.add("pointer-events-none");
}

const enableLifelineButton = ()=>{
    document.getElementById("lifeline-button").classList.remove("pointer-events-none");
}

// on click any option by the player----------
const optionFun = ()=>{
    document.querySelectorAll(".answer-opt").forEach((e)=>{
        
        e.addEventListener("click",()=>{
            AnswerLockSound();
            e.style.backgroundColor = "gold";
            e.style.color = "black";
            clearStopWatch();
            optButtonDisabled();
            bulletsRunning(e);
            clearScreenFromAudiencePoll();
            disableLifelineButton();
        })
    })
}


//Life-line.............

function LifelineImplementationSound(){
    audiencePollSound.currentTime = 4;
    audiencePollSound.play();
}

//_____________________________________double dip_____________________________________


const doubleDipCrossMark = ()=>{
    let t = document.querySelector(".dupla-tentativa").children;
    for(let i=0;i<t.length;i++)
        t[i].classList.add("opacity-one");
}

const doubleDipHandler = ()=>{
    lifelineFlag["doubleDipFlag"] = 0;
    document.querySelector(".lifeline-box").classList.remove("show-lifeline");
    document.getElementById("result").innerText = "A implementar dupla tentativa";
    LifelineImplementationSound();
    document.querySelector(".dupla-tentativa").classList.add("pointer-events-none");
    doubleDipCrossMark();
    lifelineNum = document.querySelector(".lifeline-no").innerText ;
    lifelineNum--;
    document.querySelector(".lifeline-no").innerText = lifelineNum;
    setTimeout(()=>{
        document.getElementById("result").innerText = "Faça a primeira tentativa";
        lifelineFlag.doubleDipMarker = 1;
        if(document.querySelector(".lifeline-no").innerText >0 )
            enableLifelineButton();
        optButtonEnabled();
        
    },4250);
}

const doubleDip = ()=>{
    if(lifelineFlag["doubleDipFlag"])
    {
        document.querySelector(".dupla-tentativa").addEventListener("click",doubleDipHandler);
    }
    else
    {
        doubleDipCrossMark();
        document.querySelector(".dupla-tentativa").classList.add("pointer-events-none"); 
    }
}

// ________________________________flip the question_____________________________________


const flipTheQuestionCrossMark = ()=>{
    let t = document.querySelector(".troca-de-pergunta").children;
    for(let i=0;i<t.length;i++)
        t[i].classList.add("opacity-one");
}

const flipTheQuestionLogic = ()=>{
    questSetLength = kbcQuestions[currentQuestIndex].length;
    let flipIndex;
    if(questSetLength==1)
        flipIndex = 0;
    else
    {
        do{
            flipIndex = getRandom(0,questSetLength-1);
        }while(flipIndex==currentRandomQuestIndex);
    }
    
    currQuestObject = kbcQuestions[currentQuestIndex][flipIndex];
    currQuestObject = shuffleOptions(currQuestObject);
    const kbcQuestionsContent = `
        <div class="timer-container">
            <div class="timer">0</div>
        </div>
        <div class="question-box" style="background-color:#003e71">
            <div class="question">${currQuestObject.question}</div>
        </div>
        <div class="answer-box">
            <div id="a" class="answer-opt"><span>A)</span>${currQuestObject.a}</div>
            <div id="b" class="answer-opt"><span>B)</span>${currQuestObject.b}</div>
            <div id="c" class="answer-opt"><span>C)</span>${currQuestObject.c}</div>
            <div id="d" class="answer-opt"><span>D)</span>${currQuestObject.d}</div>
        </div>
    `;

    document.querySelector(".game-area-ques-ans").innerHTML = kbcQuestionsContent;
    optionFun();
    lifelineApplied();
    audiencePoll();
    fiftyFifty();
    flipTheQuestion();
    stopWatch();
}

const flipTheQuestionHandler = ()=>{
    lifelineFlag["flipTheQuestionFlag"] = 0;
    document.querySelector(".lifeline-box").classList.remove("show-lifeline");
    document.getElementById("result").innerText = "A implementar troca de pergunta";
    LifelineImplementationSound();
    document.querySelector(".troca-de-pergunta").classList.add("pointer-events-none");
    flipTheQuestionCrossMark();
    lifelineNum = document.querySelector(".lifeline-no").innerText ;
    lifelineNum--;
    document.querySelector(".lifeline-no").innerText = lifelineNum;
    setTimeout(()=>{
        document.getElementById("result").innerText = "Pergunta trocada!!";
        flipTheQuestionLogic();
        if(document.querySelector(".lifeline-no").innerText >0 )
            enableLifelineButton();
        optButtonEnabled();
        
    },4250);
}

const flipTheQuestion = ()=>{
    if(lifelineFlag["flipTheQuestionFlag"])
    {
        document.querySelector(".troca-de-pergunta").addEventListener("click",flipTheQuestionHandler);
    }
    else
    {
        flipTheQuestionCrossMark();
        document.querySelector(".troca-de-pergunta").classList.add("pointer-events-none"); 
    }
}
// _____________________________________50-50_____________________________________

const fiftyFiftyCrossMark = ()=>{
    let t = document.querySelector(".cinquenta-cinquenta").children;
    for(let i=0;i<t.length;i++)
        t[i].classList.add("opacity-one");
}

const FiftyFiftySound = ()=>{
    audiencePollSound.currentTime = 8.2;
    audiencePollSound.play();
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function correctAnsIndex(array,key){
    for(let i=0;i<array.length;i++)
    {
        if(array[i]==key)
            return i;
    }
    return 0;
}

const fiftyFiftyLogic = ()=>{
    let arr = ["a","b","c","d"];
    arr = shuffleArray(arr);
    let correctAns = currQuestObject.correct;
    correctOptionId = correctOptionAnsEle(correctAns);
    ansIndex = correctAnsIndex(arr,correctOptionId);

    temp = arr[0];
    arr[0] = arr[ansIndex];
    arr[ansIndex] = temp;

    document.getElementById(arr[1]).innerText = "";
    document.getElementById(arr[2]).innerText = "";
    ele = document.getElementById(arr[1]).style.pointerEvents = "none";
    document.getElementById(arr[2]).style.pointerEvents = "none";
}


const fiftyFiftyHandler = ()=>{
    lifelineFlag["fiftyFiftyFlag"] = 0;
    disableQuitButton();
    document.querySelector(".lifeline-box").classList.remove("show-lifeline");
    document.getElementById("result").innerText = "A implementar 50-50";
    LifelineImplementationSound();
    document.querySelector(".cinquenta-cinquenta").classList.add("pointer-events-none");
    fiftyFiftyCrossMark();
    lifelineNum = document.querySelector(".lifeline-no").innerText ;
    lifelineNum--;
    document.querySelector(".lifeline-no").innerText = lifelineNum;
    setTimeout(()=>{
        document.getElementById("result").innerText = "";
        fiftyFiftyLogic();
        if(document.querySelector(".lifeline-no").innerText >0 )
            enableLifelineButton();
        optButtonEnabled();
        enableQuitButton();
    },4250);
}

const fiftyFifty = ()=>{
    if(lifelineFlag["fiftyFiftyFlag"])
    {
        document.querySelector(".cinquenta-cinquenta").addEventListener("click",fiftyFiftyHandler);
    }
    else
    {
        fiftyFiftyCrossMark();
        document.querySelector(".cinquenta-cinquenta").classList.add("pointer-events-none"); 
    }
}
// __________________________________computador_____________________________________

const audiencePollCrossMark = ()=>{
    let t = document.querySelector(".computador").children;
    for(let i=0;i<t.length;i++)
        t[i].classList.add("opacity-one");
}


const audiencePollLogic = ()=>{
    let ans = getRandom(46,85);
    let one = getRandom(0,100-ans);
    let two = getRandom(0,100-ans-one);
    let three = 100-(ans+one+two);

    let correctAns = currQuestObject.correct;
    correctOptionId = correctOptionAnsEle(correctAns);
    
    let audienceOpt = ["a","b","c","d"];
    let audienceScore = [ans,one,two,three];

    for(let i=0;i<audienceOpt.length;i++)
    {
        if(audienceOpt[i]==correctOptionId)
        {
            let temp = audienceOpt[0];
            audienceOpt[0] = correctOptionId;
            audienceOpt[i] = temp;
            break;
        }
    }
    
    for(let i=0;i<audienceOpt.length;i++)
    {
        let percentageId = `percentage_${audienceOpt[i]}`;
        let barId = `bar_${audienceOpt[i]}`;
        document.getElementById(percentageId).innerText = audienceScore[i]+"%";
        document.getElementById(barId).style.height = audienceScore[i]+"%";
    }    
}

const audiencePollTimeout = (flag,justBeforeAudiencePoll,clearTimeoutId)=>{
    if(flag==8)
        {
            let audiencePollInnerContainer = `
                <div class="computador-inner-container">
                    <div class="audience-percentage-box">
                        <div id="percentage_a" class="percentage">34%</div>
                        <div id="percentage_b" class="percentage">32%</div>
                        <div id="percentage_c" class="percentage">10%</div>
                        <div id="percentage_d" class="percentage">18%</div>
                    </div>
                    <div class="audience-bar-box">
                        <div id="bar_a" class="bar"></div>
                        <div id="bar_b" class="bar"></div>
                        <div id="bar_c" class="bar"></div>
                        <div id="bar_d" class="bar"></div>
                    </div>
                    <div class="audience-letter-box">
                        <div class="letter">A</div>
                        <div class="letter">B</div>
                        <div class="letter">C</div>
                        <div class="letter">D</div>
                    </div>

                </div>
            `;
            document.querySelector(".computador-outer-container").innerHTML = audiencePollInnerContainer;
            document.querySelectorAll(".bar").forEach((e)=>{e.style.backgroundColor = "white"});
            audiencePollLogic();
            if(document.querySelector(".lifeline-no").innerText >0 )
                enableLifelineButton();
            optButtonEnabled();
            enableQuitButton();
        }
    else
      {
        let tempFlag = flag;
        if(tempFlag>3)
            tempFlag = flag-4;
        let ele = document.querySelector(".computador-outer-container");
        ele.innerHTML = justBeforeAudiencePoll;
        ele.children[0].children[tempFlag].style.backgroundColor = "orange";
        clearTimeout(clearTimeoutId);
        flag++;
        clearTimeoutId = setTimeout(audiencePollTimeout,1000,flag,justBeforeAudiencePoll,clearTimeoutId);
      }

}

const AudiencePollSound = ()=>{
    audiencePollSound.currentTime = 0;
    audiencePollSound.play();
}

const AudiencePollImplementationSound = ()=>{
    audiencePollImplementationSound.currentTime = 0;
    audiencePollImplementationSound.play();
}

const audiencePollAddHandler = ()=>{
    lifelineFlag["audiencePollFlag"] = 0;
    disableQuitButton();
    document.querySelector(".lifeline-box").classList.remove("show-lifeline");
    document.getElementById("result").innerText = "A implementar ajuda do computador";
    AudiencePollSound();
    document.querySelector(".computador").classList.add("pointer-events-none");
    audiencePollCrossMark();
    lifelineNum = document.querySelector(".lifeline-no").innerText ;
    lifelineNum--;
    document.querySelector(".lifeline-no").innerText = lifelineNum;
    setTimeout(()=>{
        let justBeforeAudiencePoll = `
            <div class="audience-bar-box just-before-computador">
                <div id="bar_a" class="bar"></div>
                <div id="bar_b" class="bar"></div>
                <div id="bar_c" class="bar"></div>
                <div id="bar_d" class="bar"></div>
            </div>
        `;
        document.getElementById("result").innerText = "";
        AudiencePollSound();
        let clearTimeoutId;
        audiencePollTimeout(0,justBeforeAudiencePoll,clearTimeoutId);
    },1500);
}
// audiencePollCrossMark();

const audiencePoll = ()=>{
    if(lifelineFlag["audiencePollFlag"])
    {
        document.querySelector(".computador").addEventListener("click",audiencePollAddHandler);
    }
    else
    {
        audiencePollCrossMark();
        document.querySelector(".computador").classList.add("pointer-events-none"); 
    }
}

const audiencePollRemoveHandler = ()=>{
    if(lifelineFlag["audiencePollFlag"] == 1)
        document.querySelector(".computador").removeEventListener("click",audiencePollAddHandler);    
}

const lifelineApplied = ()=>{
    let lifelineNum = document.querySelector(".lifeline-no").innerText;
    if(lifelineNum>0)
    {
        document.getElementById("lifeline-button").addEventListener("click",()=>{
            clearScreenFromAudiencePoll();
            clearStopWatch();
            optButtonDisabled();
            disableNextButton();
            disableLifelineButton();
        })
    }
}

function shuffleOptions(currQuestObject){
    one = currQuestObject.a;
    two = currQuestObject.b;
    three = currQuestObject.c;
    four = currQuestObject.d;
    arr = [one,two,three,four];
    arr = shuffleArray(arr);
    currQuestObject.a = arr[0];
    currQuestObject.b = arr[1];
    currQuestObject.c = arr[2];
    currQuestObject.d = arr[3];

    return currQuestObject;
}

const buildKBCquestions = ()=>{
    questSetLength = kbcQuestions[currentQuestIndex].length;
    currentRandomQuestIndex = getRandom(0,questSetLength-1);
    currQuestObject = kbcQuestions[currentQuestIndex][currentRandomQuestIndex];
    currQuestObject = shuffleOptions(currQuestObject);
    const kbcQuestionsContent = `
        <div class="timer-container">
            <div class="timer">0</div>
        </div>
        <div class="question-box" style="background-color:#003e71">
            <div class="question">${currQuestObject.question}</div>
        </div>
        <div class="answer-box">
            <div id="a" class="answer-opt"><span>A)</span>${currQuestObject.a}</div>
            <div id="b" class="answer-opt"><span>B)</span>${currQuestObject.b}</div>
            <div id="c" class="answer-opt"><span>C)</span>${currQuestObject.c}</div>
            <div id="d" class="answer-opt"><span>D)</span>${currQuestObject.d}</div>
        </div>
    `;

    document.querySelector(".game-area-ques-ans").innerHTML = kbcQuestionsContent;
    optionFun();
    lifelineApplied();
    audiencePoll();
    fiftyFifty();
    flipTheQuestion();
    doubleDip();
}


const nextButtonFun = ()=>{
    if(currentQuestIndex < kbcQuestions.length-1)
    {
        currentQuestIndex++;
        audiencePollRemoveHandler();
        buildKBCquestions();
        buildMoneyArea();
        questForSpecificPrizeMoney();
        clearStopWatch();
        stopWatch();
        correctAnswerSound.pause();
        wrongAnswerSound.pause();
        if(document.querySelector(".lifeline-no").innerText >0 )
            enableLifelineButton();
        quitButton();
        disableNextButton();
    }
}

const buildMoneyArea = ()=>{
    let moneyAreaPrizes = `
            <div id="0" class="each-prize">100</div>
            <div id="1" class="each-prize">200</div>
            <div id="2" class="each-prize">400</div>
            <div id="3" class="each-prize">800</div>
            <div id="4" class="each-prize">1000</div>
            <div id="5" class="each-prize">2000</div>
            <div id="6" class="each-prize">4000</div>
            <div id="7" class="each-prize">8000</div>
            <div id="8" class="each-prize">16000</div>
            <div id="9" class="each-prize">32000</div>
            <div id="10" class="each-prize">64000</div>
            <div id="11" class="each-prize">125000</div>
            <div id="12" class="each-prize">250000</div>
            <div id="13" class="each-prize">500000</div>
            <div id="14" class="each-prize">1000000</div>
            <br>
            <div id="15" class="each-prize">Pontos</div>
    `;
    document.querySelector("#money-area").classList.add("money-area");
    document.querySelector("#money-area").innerHTML = moneyAreaPrizes;
    document.getElementById('0').style.cssText = "color: gold;";
    document.getElementById('2').style.cssText = "color: gold;";
    document.getElementById('5').style.cssText = "color: gold;";
    document.getElementById('9').style.cssText = "color: gold;";
    document.getElementById('14').style.cssText = "color: gold";
    document.getElementById('15').style.cssText = "color: #003e71;  margin-top: -50px; padding: 20px; background-color: white; font-size: 30px;";
    let prizeId = `${currentQuestIndex}`;
    document.getElementById(prizeId).style.backgroundColor = colors.page2btn;
    document.getElementById(prizeId).style.borderRadius = "10px";
}

const questForSpecificPrizeMoney = ()=>{
    let prizeId = `${currentQuestIndex}`;
    let prizeValue = document.getElementById(prizeId).innerText ;
    document.getElementById("result").innerText = `Pergunta para ${prizeValue} pontos`;
}

function congratulationComment(ind){
    let comment ;
    if(ind >= 14)
        comment = "Especialista em Cibersegurança";

    else if( ind >= 9 && ind < 14)
        comment = "Consultor de Cibersegurança";

    else if(ind >= 5 && ind < 9)
        comment = "Engenheiro de Cibersegurança";
    
    else if( ind >= 2 && ind < 5)
        comment = "Analista de Cibersegurança";

    else if( ind >= 0 && ind < 2)
        comment = "Técnico de Cibersegurança";    
    
    else
        comment = "Estagiário de Cibersegurança";

    return comment;
}

function lastEndComment(money){
    let comment;
    if(money >= 1000000 )
        comment = "Parabéns, chegaste ao fim do jogo!\nPercebes imenso sobre Cibersegurança!";
    
    else if(money >= 32000 && money < 1000000) 
        comment = "Tens grandes conhecimentos sobre Cibersegurança!"; 
        
    else if(money >= 2000 && money < 32000) 
        comment = "Tens conhecimentos sobre Cibersegurança!";

    else if(money >= 400 && money < 2000)
        comment = "Tens alguns conhecimentos sobre Cibersegurança!";

    else if(money >= 100 && money < 400)
        comment = "Tens poucos conhecimentos sobre Cibersegurança!";

    else
        comment = "Precisas de aprender mais sobre Cibersegurança!";

    return comment;
}

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
function formatedMoney(money){
    let m = money.toString();
    let temp = "";
    if(m.length==5)
    {
        for(let i=0;i<5;i++)
        {
            if(i==2)
                temp+='';
            temp+=m[i];
        }
        return temp;
    }
    else if(m.length>5)
    {
        for(let i=m.length-1;i>=0;i--)
        {
            if(i==m.length-4 || i==m.length-6)
                temp+='';
            temp+=m[i];
        }
        temp = reverseString(temp);
        return temp;
    }
    else 
        return m;
}

function ThemeMusic(){
    themeMusic.currentTime = 0;
    themeMusic.loop = true;
    themeMusic.play();
}

function openQuitPage(){
    contestantName = document.getElementById("contestant-name").innerText;
    let congratulation;
    let money;
    let lastComment;
    if(quitFlag.oneCroreFlag)
    {
        congratulation = congratulationComment(14);
        money = 1000000;
        lastComment = lastEndComment(money);    
    }
    else if(quitFlag.timeUpFlag)
    {
        let temp;
        congratulation = congratulationComment(temp);
        money = quitFlag.winningAmount;
        lastComment = lastEndComment(money);    
        money = formatedMoney(money);    
    }
    else if(quitFlag.wrongAnswerFlag)
    {
        let temp = currentQuestIndex-1;
        congratulation = congratulationComment(temp);
       if(quitFlag.winningAmount>=32000){
            money = 32000;
        }     
        else if(quitFlag.winningAmount>=2000){
            money = 2000;
        } 
                 
        else if(quitFlag.winningAmount>=400){
            money = 400;
        } 
                 
        else if(quitFlag.winningAmount>=100){
            money = 100;
        }   
        else {

            money = 0; 
        }
        lastComment = lastEndComment(money);
        money = formatedMoney(money);    
    }
    else 
    {
        let temp = currentQuestIndex-1;
        congratulation = congratulationComment(temp);
        money = quitFlag.winningAmount;
        lastComment = lastEndComment(money);
        money = formatedMoney(money);    
    }
    quitContent = `  
    <div class="quit-container">
        <div class="transfer-image"></div>
        <div class="quit-info-container">
            <div class="people">
                <div class="person-image"></div>
                <div class="person-info">
                    <p id="contestant-name">${contestantName}</p>
                    <span>Jogador</span>
                </div>
            </div>
            <div class="congratulation">${congratulation}</div>
            <div class="prize-money-earned">Pontos Adquiridos: </div>
            <div class="money">${money}</div>
            <br>
            <div class="last-comment">${lastComment}</div>
            <div class="game-area-btns2" style="justify-content: center;">
                <div id="restart" class="btn page2btn" justify-content: center>
                    <button class="btn-rules center" style=" justify-content: center; width: 200px" onclick="refreshPage()">Começar de Novo</button>
                </div>
            </div>
        </div>
        </div>
    </div>

    `;
    clearScreenFromAudiencePoll(); 
    ThemeMusic();
    document.querySelector(".game-area").innerHTML = quitContent;
}

function refreshPage() {
    location.reload();
}

function quitButton(){
    document.querySelector("#Quit").addEventListener("click",()=>{
        quitFlag.quitButtonFlag = 1;
        correctAns = currQuestObject.correct;
        correctOptionId = correctOptionAnsEle(correctAns);
        document.getElementById(correctOptionId).style.backgroundColor = "green";
        document.getElementById(correctOptionId).style.color = "black";
        WrongAnswerSound();
        optButtonDisabled();
        clearStopWatch();
        correctAnswerSound.pause();
        setTimeout(openQuitPage,4000);
    });
}

document.querySelector(".lets-play-image").addEventListener("click",()=>{
    buildKBCquestions();
    buildMoneyArea();
    questForSpecificPrizeMoney();
    welcomeSound.pause();
    stopWatch();
    document.querySelector("#Next").addEventListener("click",nextButtonFun);
    document.querySelector(".lifeline-box").classList.remove("show-lifeline");
    quitButton();
    disableNextButton();
})

const WelcomeSound = ()=>{
    welcomeSound.currentTime = 0;
    welcomeSound.loop = true; 
    welcomeSound.play();
}

// just to show the money stack before the game begins..
const showMoneyStack = ()=>{
    let moneyAreaPrizes = `
            <div id="0" class="each-prize">100</div>
            <div id="1" class="each-prize">200</div>
            <div id="2" class="each-prize">400</div>
            <div id="3" class="each-prize">800</div>
            <div id="4" class="each-prize">1000</div>
            <div id="5" class="each-prize">2000</div>
            <div id="6" class="each-prize">4000</div>
            <div id="7" class="each-prize">8000</div>
            <div id="8" class="each-prize">16000</div>
            <div id="9" class="each-prize">32000</div>
            <div id="10" class="each-prize">64000</div>
            <div id="11" class="each-prize">125000</div>
            <div id="12" class="each-prize">250000</div>
            <div id="13" class="each-prize">500000</div>
            <div id="14" class="each-prize">1000000</div>
            <br>
            <div id="15" class="each-prize">Pontos</div>
    `;
    document.querySelector("#money-area").classList.add("money-area");
    document.querySelector("#money-area").innerHTML = moneyAreaPrizes;
    document.getElementById('0').style.cssText = "color: gold;";
    document.getElementById('2').style.cssText = "color: gold;";
    document.getElementById('5').style.cssText = "color: gold;";
    document.getElementById('9').style.cssText = "color: gold;";
    document.getElementById('14').style.cssText = "color: gold;";
    document.getElementById('15').style.cssText = "color: #003e71;  margin-top: -50px; padding: 20px; background-color: white; font-size: 30px;";
}

const hoverLifeline = ()=>{
    let beforeInnerText = document.getElementById("result").innerText;
    document.querySelectorAll(".lifeline-item").forEach((ele)=>{
        ele.addEventListener("mouseover",()=>{
            document.getElementById("result").innerText = ele.classList[1];
        })
    })
}

const LifelineComesUpSound = ()=>{
    lifelineComesUpSound.currentTime = 0;
    lifelineComesUpSound.play();
}

const showLifeline = ()=>{
        document.querySelector("#lifeline-button").addEventListener("click",()=>{
            document.querySelector(".lifeline-box").classList.toggle("show-lifeline");
            hoverLifeline();
            LifelineComesUpSound();
            
        })
}

// adding modal on clicking sitHotSeat button
const sitOnTheHotSeatFun = ()=>{
    let contestantName = document.getElementById("contestant-name-input").value;
    if(contestantName=="")
        contestantName = "Anónimo";
    WelcomeSound();
    document.getElementById("page2").classList.add("show-modal");
    document.getElementById("contestant-name").innerText = contestantName;
    showMoneyStack();
    showLifeline();
}
document.getElementById("sitOnTheHotSeat").addEventListener("click",sitOnTheHotSeatFun);



// adding modal on clicking rules button
document.getElementById("btn-rules").addEventListener("click",()=>{   
    document.getElementById("modal-container-rules").classList.add("show-modal");
})

document.getElementById("close-modal-btn").addEventListener("click",()=>{
    document.getElementById("modal-container-rules").classList.remove("show-modal");
})



//show that the button is clicked by flicking shadow
const allBtns = document.querySelectorAll('.btn');  
allBtns.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        buttonSelect(ele);
        transitionEndListener(ele);
    })
})

const buttonSelect = (element)=>{
    element.style.boxShadow = "0px 0px 10px 4px rgb(64, 189, 189)";
}

const buttonDeselect = (element)=>{
    element.style.boxShadow = "none";
}

const transitionEndListener = (element)=>{
    element.addEventListener("transitionend",()=>{
        buttonDeselect(element);
    })
}


function getRandom(first,last){
    var r = Math.random()*(last+1-first);
    return(Math.floor(r)+first)
}
