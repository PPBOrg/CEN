const kbcQuestions = 
    [
// ----------------- 1 ------------------------------
        [{
            question: "Qual dos seguintes é um exemplo de informação pessoal sensível?",
            a: "Nome de um filme favorito",
            b: "Endereço de e-mail",
            c: "Cor favorita",
            d: "Equipa de futebol preferida",
            correct: "Endereço de e-mail",
        },
        {
            question: "Qual das seguintes é uma boa prática para criar senhas?",
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
            c: "Um programa malicioso que pode danificar arquivos e software",
            d: "Um dispositivo que permite acesso à internet sem fio",
            correct: "Um programa malicioso que pode danificar arquivos e software",
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
            question: "Qual das seguintes é uma maneira segura de comunicar pela internet?",
            a: "Partilhar informações pessoais em fóruns públicos",
            b: "Usar redes Wi-Fi públicas sem proteção",
            c: "Enviar senhas e informações confidenciais por e-mail",
            d: "Utilizar mensagens criptografadas ou aplicativos seguros",
            correct: "Utilizar mensagens criptografadas ou aplicativos seguros",
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
            c: "Apagar o e-mail sem abrir ou clicar em qualquer coisa",
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
            c: "Uma cópia de segurança de arquivos e informações importantes",
            d: "Um programa antivírus para proteger o computador contra ameaças",
            correct: "Uma cópia de segurança de arquivos e informações importantes",
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
            question: "Você recebe um e-mail solicitando que clique num link para verificar a conta bancária, pois há uma atividade suspeita. O que você deve fazer?",
            a: "Clicar no link e fornecer as informações solicitadas",
            b: "Ignorar o e-mail e apagar imediatamente",
            c: "Encaminhar o e-mail para os seus amigos",
            d: "Verificar diretamente com o seu banco por meio de um canal seguro",
            correct: "Verificar diretamente com o seu banco por meio de um canal seguro",
        },
        {
            question: "Você está usando um computador público numa biblioteca e precisa fazer login na sua conta de e-mail. O que você deve fazer para proteger as suas informações pessoais?",
            a: "Usar uma senha fácil de lembrar para não esquecer",
            b: "Permitir que o computador guarde suas informações de login",
            c: "Utilizar uma ligação VPN para criptografar os seus dados",
            d: "Partilhar as suas informações de login com um amigo",
            correct: "Utilizar uma ligação VPN para criptografar os seus dados",
        },
        {
            question: "Você recebe uma mensagem de texto de um número desconhecido, solicitando que você clique num link para ganhar um prémio. O que você deve fazer?",
            a: "Clicar no link e seguir as instruções",
            b: "Responder à mensagem com as suas informações pessoais",
            c: "Ignorar a mensagem e apagar imediatamente",
            d: "Informar um adulto responsável sobre a mensagem suspeita",
            correct: "Ignorar a mensagem e apagar imediatamente",
        }],
// ----------------7 ------------------------------
        [{
            question: "Você está usando um Wi-Fi público num café. O que você deve fazer para garantir a segurança das suas informações?",
            a: "Realizar todas as transações financeiras e aceder as contas confidenciais",
            b: "Desativar a firewall do seu dispositivo para uma ligação mais rápida",
            c: "Evitar o acesso a sites que requerem senhas ou informações pessoais",
            d: "Partilhar as suas informações de login com outros utilizadores do Wi-Fi",
            correct: "Evitar o acesso a sites que requerem senhas ou informações pessoais",
        },
        {
            question: "Você recebe um telefonema de alguém se passando por um representante de suporte técnico. Eles solicitam acesso remoto ao seu computador para resolver um problema. O que você deve fazer?",
            a: "Fornecer acesso remoto ao seu computador imediatamente",
            b: "Desligar o telefone e bloquear o número",
            c: "Seguir as instruções do suposto suporte técnico",
            d: "Verificar a autenticidade da ligação com a empresa de suporte técnico",
            correct: "Verificar a autenticidade da ligação com a empresa de suporte técnico",
        },
        {
            question: "Você recebe uma mensagem de um colega de turma pedindo que você partilhe as suas credenciais de login para aceder a um documento importante. O que você deve fazer?",
            a: "Partilhar as suas credenciais de login com o colega",
            b: "Ignorar a mensagem e não partilhar as suas credenciais",
            c: "Responder à mensagem pedindo mais informações sobre o documento",
            d: "Verificar com o professor ou responsável antes de partilhar qualquer informação",
            correct: "Verificar com o professor ou responsável antes de partilhar qualquer informação",
        }],
// ----------------- 8 ------------------------------
        [{
            question:"Which of these terms can only be used for women?",
            a:"Dirghaayu",
            b:"Suhagan",
            c:"Chiranjeevi",
            d:"Sushil",
            correct:"Suhagan",
        },
        {
            question:"Which type of waves are produced by a television remote controller?",
            a:"Infra-red waves",
            b:"Radio waves",
            c:"Ultraviolet waves",
            d:"light waves",
            correct:"Infra-red waves",
        },
        {
            question:"The Konark Temple is dedicated to",
            a:"Vishnu",
            b:"Shiva",
            c:"Krishna",
            d:"Sun-God",
            correct:"Sun-God",
        }],
// ----------------- 9 ------------------------------
        [{
            question:"Bahubali festival is related to",
            a:"Islam",
            b:"Hinduism",
            c:"Buddhism",
            d:"Jainism",
            correct:"Jainism",
        },
        {
            question:" Indus river originates in __",
            a:"Kinnaur",
            b:"Ladakh",
            c:"Nepal",
            d:"Tibet",
            correct:"Tibet",
        },
        {
            question:"which of them is correct about Kargil War",
            a:"India/Pakistan 1999",
            b:"India/China 1998",
            c:"India/Bangladesh 1962",
            d:"India/SriLanka 1972",
            correct:"India/Pakistan 1999",
        }],
// ----------------- 10 ------------------------------
        [{
            question:"The Rath Yatra at Puri is celebrated in honour of which Hindu diety?",
            a:"Ram",
            b:"Shiva",
            c:"Vishnu",
            d:"Jagannath",
            correct:"Jagannath",
        },
        {
            question:"Which scientist discovered the radioactive element radium?",
            a:"Isaac Newton",
            b:"Albert Einstein",
            c:"Benjamin Franklin",
            d:"Marie Curie",
            correct:"Marie Curie",
        },
        {
            question:"The World Largest desert is ?",
            a:"Thar",
            b:"Kalahari",
            c:"Sahara",
            d:"Sonoran",
            correct:"Sahara",
        }],
// ----------------- 11 ------------------------------
        [{
            question:"Which of the following Constitutional posts is enjoyed for a fixed term?",
            a:"President",
            b:"Chief Justice",
            c:"Prime Minister",
            d:"Governor",
            correct:"President",
        },
        {
            question:"Delhi became capital of India in__",
            a:"1910",
            b:"1911",
            c:"1916",
            d:"1917",
            correct:"1911",
        },
        {
            question:"At which one of the following places do the rivers Alaknanda and Bhagirathi merge to form Ganga?",
            a:"Devprayag",
            b:"Rudra Prayag",
            c:"Karnaprayag",
            d:"Vishnuprayag",
            correct:"Devprayag",
        }],
// ----------------- 12 ------------------------------
        [{
            question:"Who was the first Muslim lady to sit in the throne of Delhi?",
            a:"Noorjehan",
            b:"Razia Riaz Monnera",
            c:"Iltumisha",
            d:"Sultana Razia Begum",
            correct:"Sultana Razia Begum",
        },
        {
            question:"'Madhubani', a style of folk paintings, is popular in which of the following states in India?",
            a:"Madhya Pradesh",
            b:"Uttar Pradesh",
            c:"West Bengal",
            d:"Bihar",
            correct:"Bihar",
        },
        {
            question:"The Central Rice Research Station is situated in?",
            a:"Chennai",
            b:"Cuttack",
            c:"Bangalore",
            d:"Quilon",
            correct:"Cuttack",
        }],
// ----------------- 13 ------------------------------
        [{
            question:"Who was the last ruler of the Mughal dynasty?",
            a:"Bahadur Shah Zafar",
            b:"Aurangzeb",
            c:"Jehangir",
            d:"Shah Jahan",
            correct:"Bahadur Shah Zafar",
        },
        {
            question:"What does the ‘R’ stand for in the name of Dr B R Ambedkar?",
            a:"Ramesh",
            b:"Ramakant",
            c:"Raman",
            d:"Ramji",
            correct:"Ramji",
        },
        {
            question:"Who among the following wrote Sanskrit grammar?",
            a:"Kalidasa",
            b:"Charak",
            c:"Panini",
            d:"Aryabhatt",
            correct:"Panini",
        }],
// ----------------- 14 ------------------------------
        [
        {
            question:"Right to property was removed from the list of Fundamental Rights during the rule of?",
            a:"Indhira Gandhi Government",
            b:"Morarji Desai Government",
            c:"Narasimha Rao Government",
            d:"Vajpayee Government",
            correct:"Morarji Desai Government",
        },
        {
            question:"Who was the first Indian woman to win a medal in the Olympics?",
            a:"P.T.Usha",
            b:"Karnam Malleshwari",
            c:"Kunjarani Devi",
            d:"Bachendri Pal",
            correct:"Karnam Malleshwari",
        },
        {
            question:"Who became the first Indian woman to join the International Olympic Committee?",
            a:"Anjum Chopra",
            b:"P T Usha",
            c:"Karnam Malleswari",
            d:"Nita Ambani",
            correct:"Nita Ambani",
        }],
// ----------------- 15 ------------------------------
        [{
            question:"In what year was Mahatma Gandhi assassinated?",
            a:"1945",
            b:"1947",
            c:"1948",
            d:"1949",
            correct:"1948",
        },
        {
            question:"Which of these is nearest to the South Pole?",
            a:"Arctic circle",
            b:"Tropic of Cancer",
            c:"Equator",
            d:"Tropic of Capricorn",
            correct:"Tropic of Capricorn",
        },
        {
            question:"Who became the first Indian woman to join the International Olympic Committee?",
            a:"Anjum Chopra",
            b:"P T Usha",
            c:"Karnam Malleswari",
            d:"Nita Ambani",
            correct:"Nita Ambani",
        }],

];
const page1Sound = new Audio("./sounds/Kaun_Banega_Crorepati_Bgm.mp3");
const welcomeSound = new Audio("./sounds/page2_kbc_intro_audio.mp3")
const timerSound = new Audio("./sounds/Kbc Timer - Tik Tik KBC Clock.mp3");
const wrongAnswerSound = new Audio("./sounds/wrong_with_dramatic.mp3");
const correctAnswerSound = new Audio("./sounds/kbc_background.mp3");
const answerLockSound = new Audio("./sounds/ans_lock2.mp3");
const lifelineComesUpSound = new Audio("./sounds/lifeline-comesUp.mp3");
const audiencePollSound = new Audio("./sounds/audience_poll.mp3");
const audiencePollImplementationSound = new Audio("./sounds/audiencePoll_Implementation.mp3");
const doubleDipWrongAnswerSound = new Audio("./sounds/wrong_ans.mp3");
const themeMusic = new Audio("./sounds/THEME_MUSIC2.mp3");

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
    document.getElementById(correctOptionId).style.backgroundColor = "greenyellow";
    document.getElementById(correctOptionId).style.color = "black";

    document.getElementById("result").innerText = "#Time Up";
    disableLifelineButton();
    disableQuitButton();
    optButtonDisabled();
    setTimeout(openQuitPage,5000);
}

const stopWatch = ()=>{
    tikTikSound();
}
const tikTikSound = ()=>{
    document.querySelector(".timer").innerText = 60;
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

const DoubleDipWrongAnswerSound = ()=>{
    doubleDipWrongAnswerSound.currentTime = 0;
    doubleDipWrongAnswerSound.play();
}

function doubleDipLogic(e){

    document.querySelector("#result").innerText = "Wrong Answer ! Make Second Guess";
    e.style.backgroundColor = "lightcoral";
    optButtonEnabled();
    e.style.pointerEvents = "none";
    lifelineFlag.doubleDipMarker = 0;
}

//Result Analysis--------
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
        amount = amount.replaceAll(",","");
        quitFlag.winningAmount = parseInt(amount);
        document.getElementById("result").innerText = "Correct Answer";
        e.style.backgroundColor = "greenyellow";
        enableNextButton();
        enableQuitButton();
        if(currentQuestIndex==14){
            setTimeout(openQuitPage,3000);
            quitFlag.oneCroreFlag = 1;
            disableQuitButton();
        }
    }
    else
    {
        if(lifelineFlag.doubleDipMarker==1)
        {
            DoubleDipWrongAnswerSound();
            doubleDipLogic(e);
        }
        else
        {
            WrongAnswerSound();
            document.getElementById("result").innerText = "Wrong Answer";
            e.style.backgroundColor = "lightcoral";
            correctOptionId = correctOptionAnsEle(correctAns);
            document.getElementById(correctOptionId).style.backgroundColor = "greenyellow";
            document.getElementById(correctOptionId).style.color = "black";
            disableQuitButton();
            quitFlag.wrongAnswerFlag = 1;
            setTimeout(openQuitPage,5000);
        }
    }
}

const bulletTimeout = (flag,bullets,clearTimeoutId,e)=>{
    if(flag==3)
        {
            document.querySelector("#game-area-result").classList.remove("checking-bullets-container");
            let resultBack = `<div id="result" class="result">Welcome to Kaun Banega Crorepati</div>`;
            let lifelineBox = `
                <div class="lifeline-box">
                    <div class="lifeline-item audience-poll">
                        <div id="audience-cross-one" class="cross-mark cross-one "></div>
                        <div id="audience-cross-two"  class="cross-mark cross-two "></div>
                    </div>
                    <div class="lifeline-item flip-the-question">
                        <div class="cross-mark cross-one "></div>
                        <div class="cross-mark cross-two "></div>
                    </div>
                    <div class="lifeline-item fifty-fifty">
                        <div class="cross-mark cross-one "></div>
                        <div class="cross-mark cross-two "></div>
                    </div>
                    <div class="lifeline-item double-dip">
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
          ele.children[flag].style.backgroundColor = "gold";
          clearTimeout(clearTimeoutId);
          flag++;
          clearTimeoutId = setTimeout(bulletTimeout,800,flag,bullets,clearTimeoutId,e);
      }

    }

const bulletsRunning = (e)=>{
    document.querySelector("#game-area-result").classList.add("checking-bullets-container");
    let bullets = `
      <div class="bullets"></div>
      <div class="bullets"></div>
      <div class="bullets"></div>
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
    document.querySelector(".audience-poll-outer-container").innerHTML = "";
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

// double dip lifeline --------------------


const doubleDipCrossMark = ()=>{
    let t = document.querySelector(".double-dip").children;
    for(let i=0;i<t.length;i++)
        t[i].classList.add("opacity-one");
}

const doubleDipHandler = ()=>{
    lifelineFlag["doubleDipFlag"] = 0;
    document.querySelector(".lifeline-box").classList.remove("show-lifeline");
    document.getElementById("result").innerText = "Implementing double-dip ...";
    LifelineImplementationSound();
    document.querySelector(".double-dip").classList.add("pointer-events-none");
    doubleDipCrossMark();
    lifelineNum = document.querySelector(".lifeline-no").innerText ;
    lifelineNum--;
    document.querySelector(".lifeline-no").innerText = lifelineNum;
    setTimeout(()=>{
        document.getElementById("result").innerText = "--Make Your first Guess--";
        lifelineFlag.doubleDipMarker = 1;
        if(document.querySelector(".lifeline-no").innerText >0 )
            enableLifelineButton();
        optButtonEnabled();
        
    },4250);
}

const doubleDip = ()=>{
    if(lifelineFlag["doubleDipFlag"])
    {
        document.querySelector(".double-dip").addEventListener("click",doubleDipHandler);
    }
    else
    {
        doubleDipCrossMark();
        document.querySelector(".double-dip").classList.add("pointer-events-none"); 
    }
}

// flip the question lifeline -------------


const flipTheQuestionCrossMark = ()=>{
    let t = document.querySelector(".flip-the-question").children;
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
        <div class="question-box">
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
    document.getElementById("result").innerText = "Implementing flip-the-question ...";
    LifelineImplementationSound();
    document.querySelector(".flip-the-question").classList.add("pointer-events-none");
    flipTheQuestionCrossMark();
    lifelineNum = document.querySelector(".lifeline-no").innerText ;
    lifelineNum--;
    document.querySelector(".lifeline-no").innerText = lifelineNum;
    setTimeout(()=>{
        document.getElementById("result").innerText = "Question flipped!!";
        flipTheQuestionLogic();
        if(document.querySelector(".lifeline-no").innerText >0 )
            enableLifelineButton();
        optButtonEnabled();
        
    },4250);
}

const flipTheQuestion = ()=>{
    if(lifelineFlag["flipTheQuestionFlag"])
    {
        document.querySelector(".flip-the-question").addEventListener("click",flipTheQuestionHandler);
    }
    else
    {
        flipTheQuestionCrossMark();
        document.querySelector(".flip-the-question").classList.add("pointer-events-none"); 
    }
}
// 50-50 lifeline-----------

const fiftyFiftyCrossMark = ()=>{
    let t = document.querySelector(".fifty-fifty").children;
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
    document.getElementById("result").innerText = "Implementing 50-50 ...";
    LifelineImplementationSound();
    document.querySelector(".fifty-fifty").classList.add("pointer-events-none");
    fiftyFiftyCrossMark();
    lifelineNum = document.querySelector(".lifeline-no").innerText ;
    lifelineNum--;
    document.querySelector(".lifeline-no").innerText = lifelineNum;
    setTimeout(()=>{
        document.getElementById("result").innerText = "Two Wrong Answers Removed!!";
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
        document.querySelector(".fifty-fifty").addEventListener("click",fiftyFiftyHandler);
    }
    else
    {
        fiftyFiftyCrossMark();
        document.querySelector(".fifty-fifty").classList.add("pointer-events-none"); 
    }
}
// audience-poll---------------

const audiencePollCrossMark = ()=>{
    let t = document.querySelector(".audience-poll").children;
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
                <div class="audience-poll-inner-container">
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
            document.querySelector(".audience-poll-outer-container").innerHTML = audiencePollInnerContainer;
            document.querySelectorAll(".bar").forEach((e)=>{e.style.backgroundColor = "goldenrod"});
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
        let ele = document.querySelector(".audience-poll-outer-container");
        ele.innerHTML = justBeforeAudiencePoll;
        ele.children[0].children[tempFlag].style.backgroundColor = "goldenrod";
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
    document.getElementById("result").innerText = "Implementing Audience Poll ...";
    AudiencePollImplementationSound();
    document.querySelector(".audience-poll").classList.add("pointer-events-none");
    audiencePollCrossMark();
    lifelineNum = document.querySelector(".lifeline-no").innerText ;
    lifelineNum--;
    document.querySelector(".lifeline-no").innerText = lifelineNum;
    setTimeout(()=>{
        let justBeforeAudiencePoll = `
            <div class="audience-bar-box just-before-audience-poll">
                <div id="bar_a" class="bar"></div>
                <div id="bar_b" class="bar"></div>
                <div id="bar_c" class="bar"></div>
                <div id="bar_d" class="bar"></div>
            </div>
        `;
        document.getElementById("result").innerText = "";
        AudiencePollSound();
        let clearTimeoutId;
        audiencePollImplementationSound.pause();
        audiencePollTimeout(0,justBeforeAudiencePoll,clearTimeoutId);
    },1500);
}
// audiencePollCrossMark();

const audiencePoll = ()=>{
    if(lifelineFlag["audiencePollFlag"])
    {
        document.querySelector(".audience-poll").addEventListener("click",audiencePollAddHandler);
    }
    else
    {
        audiencePollCrossMark();
        document.querySelector(".audience-poll").classList.add("pointer-events-none"); 
    }
}

const audiencePollRemoveHandler = ()=>{
    if(lifelineFlag["audiencePollFlag"] == 1)
        document.querySelector(".audience-poll").removeEventListener("click",audiencePollAddHandler);    
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
        <div class="question-box" style="background-color:#03318c">
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
            <div id="0" class="each-prize">1000</div>
            <div id="1" class="each-prize">2000</div>
            <div id="2" class="each-prize">3000</div>
            <div id="3" class="each-prize">5000</div>
            <div id="4" class="each-prize">10.000</div>
            <div id="5" class="each-prize">20.000</div>
            <div id="6" class="each-prize">40.000</div>
            <div id="7" class="each-prize">80.000</div>
            <div id="8" class="each-prize">160.000</div>
            <div id="9" class="each-prize">320.000</div>
            <div id="10" class="each-prize">640.000</div>
            <div id="11" class="each-prize">1.250.000</div>
            <div id="12" class="each-prize">2.500.000</div>
            <div id="13" class="each-prize">5.000.000</div>
            <div id="14" class="each-prize">10.000.000</div>
    `;
    document.querySelector("#money-area").classList.add("money-area");
    document.querySelector("#money-area").innerHTML = moneyAreaPrizes;
    document.getElementById('4').style.cssText = "color: gold; font-size: 15px;";
    document.getElementById('9').style.cssText = "color: gold; font-size: 17px;";
    document.getElementById('14').style.cssText = "color: gold; font-size: 30px;";

    
    let prizeId = `${currentQuestIndex}`;
    document.getElementById(prizeId).style.backgroundColor = colors.page2btn;
    document.getElementById(prizeId).style.borderRadius = "10px";
}

const questForSpecificPrizeMoney = ()=>{
    let prizeId = `${currentQuestIndex}`;
    let prizeValue = document.getElementById(prizeId).innerText ;
    document.getElementById("result").innerText = `Question for ${prizeValue}`;
}

function congratulationComment(ind){
    let comment ;
    if(ind<1)
        comment = "Estagiário de Cibersegurança";
    else if(ind>=2 && ind<5)
        comment = "Técnico de Cibersegurança";
    else if(ind>=5 && ind<8)
        comment = "Analista de Cibersegurança";
    else if(ind>=8 && ind<11)
        comment = "Engenheiro de Cibersegurança";
    else if(ind>=11 && ind<14)
        comment = "Consultor de Cibersegurança";
    else
        comment = "Especialista em Cibersegurança";

    return comment;
}

function lastEndComment(money){
    let com;
    if(money>=320000)
        com = "congratulation for winning such a huge amount!";
    else if(money>0)
        com = "It was a good game. played nicely!!";
    else
        com = "Sorry you could not win anything.";

    return com;
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
                temp+=',';
            temp+=m[i];
        }
        return temp;
    }
    else if(m.length>5)
    {
        for(let i=m.length-1;i>=0;i--)
        {
            if(i==m.length-4 || i==m.length-6)
                temp+=',';
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
        money = "1 Ponto";
        lastComment = "Parabens pela sua Vitória";
    }
    else if(quitFlag.timeUpFlag)
    {
        let temp;
        temp = currentQuestIndex-1;
        congratulation = congratulationComment(temp);
        money = quitFlag.winningAmount;
        lastComment = lastEndComment(money);    
        money = formatedMoney(money);    
    }
    else if(quitFlag.wrongAnswerFlag)
    {
        let temp = currentQuestIndex-1;
        congratulation = congratulationComment(temp);
        if(quitFlag.winningAmount>=320000)
            money = 320000;
        else if(quitFlag.winningAmount>=10000)
            money = 10000;
        else 
            money = 0;        
        lastComment =  `Seus pontos em prêmio cairam de  ${quitFlag.winningAmount} para ${money} devido à resposta errada.`;
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
                    <span>Competidor</span>
                </div>
            </div>
            <div class="congratulation">${congratulation}</div>
            <div class="prize-money-earned">Prêmio em Pontos: </div>
            <div class="money">${money}</div>
            <div class="last-comment">${lastComment}</div>
        </div>
    </div>

    `;
    clearScreenFromAudiencePoll(); 
    ThemeMusic();
    document.querySelector(".game-area").innerHTML = quitContent;
}

function quitButton(){
    document.querySelector("#Quit").addEventListener("click",()=>{
        quitFlag.quitButtonFlag = 1;
        correctAns = currQuestObject.correct;
        correctOptionId = correctOptionAnsEle(correctAns);
        document.getElementById(correctOptionId).style.backgroundColor = "greenyellow";
        document.getElementById(correctOptionId).style.color = "black";
        DoubleDipWrongAnswerSound();
        optButtonDisabled();
        clearStopWatch();
        correctAnswerSound.pause();
        setTimeout(openQuitPage,3000);
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

const openingSound = ()=>{
    page1Sound.currentTime = 0;
    page1Sound.play();
}

const WelcomeSound = ()=>{
    welcomeSound.currentTime = 0;
    welcomeSound.play();
}

// just to show the money stack before the game begins..
const showMoneyStack = ()=>{
    let moneyAreaPrizes = `
            <div id="0" class="each-prize">1000</div>
            <div id="1" class="each-prize">2000</div>
            <div id="2" class="each-prize">3000</div>
            <div id="3" class="each-prize">5000</div>
            <div id="4" class="each-prize">10.000</div>
            <div id="5" class="each-prize">20.000</div>
            <div id="6" class="each-prize">40.000</div>
            <div id="7" class="each-prize">80.000</div>
            <div id="8" class="each-prize">160.000</div>
            <div id="9" class="each-prize">320.000</div>
            <div id="10" class="each-prize">640.000</div>
            <div id="11" class="each-prize">1.250.000</div>
            <div id="12" class="each-prize">2.500.000</div>
            <div id="13" class="each-prize">5.000.000</div>
            <div id="14" class="each-prize">10.000.000</div>
    `;
    document.querySelector("#money-area").classList.add("money-area");
    document.querySelector("#money-area").innerHTML = moneyAreaPrizes;
    document.getElementById('4').style.cssText = "color: gold; font-size: 15px;";
    document.getElementById('9').style.cssText = "color: gold; font-size: 17px;";
    document.getElementById('14').style.cssText = "color: gold; font-size: 30px;";
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
        contestantName = "Anonymous";
    page1Sound.pause();
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