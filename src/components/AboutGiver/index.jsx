import ClickMeRegister from "../ModalRegisterAbout";
import CardRegister from "../CardRegister";
import "./modalRegister.css";

import { useState } from "react";
export const AboutGiver = () => {
  const [showContainer, setShowContainer] = useState(true);
  return (
    <div id="section2">
      <div className="opacity">
        <h1>Sejam muito bem-vindos ao Giver!</h1>
      </div>
      <div className="opacity">
        <p>
          Nossa plataforma foi desenvolvida com muito carinho pelos seus
          idealizadores para facilitar a vida de nossos usuários.
        </p>
        <p>
          Mas você sabe o que é e como funciona o Giver? Se a resposta for não,
          trouxemos aqui respostas para as perguntas que recebemos
          frequentemente para contar um pouquinho da história desta plataforma,
          bem como sua utilidade. Pois bem, vamos lá!
        </p>
      </div>
      <div className="opacity">
        <h3>- Para que serve o Giver ?</h3>
        <p>
          Primeiramente, fazemos uma pergunta, quem nunca teve aquela mesinha de
          canto antiga que não tinha mais utilidade em casa e não sabia o que
          fazer com ela ou aquela peça de roupa que já não serve mais, mas está
          boa demais para jogar fora?
        </p>
        <p>
          Então, pensando nisso, nossos idealizadores se juntaram para resolver
          esse problema e a solução foi nosso querido Giver, que conecta pessoas
          que tem itens para serem doados e pessoas que almejam receber a
          doação.
        </p>
      </div>
      <div className="opacity">
        <h3>- E como ele funciona?</h3>
        <p>
          Para todos que pretendem usar a plataforma, é necessário realizar um
          cadastro prévio de usuário. O Cadastro é rapidinho e já te permite
          acessar a plataforma e seus benefícios.
        </p>
        <p>
          Feito o cadastro, se caso for donatário, você será redirecionado para
          sua home, onde poderá começar se cadastrar seus interesses. E se caso
          for doador, precisará então cadastrar o item e, assim, já estará
          lançando sua doação e possibilitando que os usuários interessados
          possam cadastrar seu interesse.
        </p>
        <p>
          Encerrado o período de cadastramento de interesse, haverá um sorteio
          que definirá quem será o donatário sortudo escolhido.
        </p>
      </div>
      <div className="opacity">
        <h3>- Mas, afinal, quem são o Doador e o Donatário?</h3>
        <p>
          Doador é o usuário que se cadastra para doar um item e Donatário é
          aquele que se cadastra com a intenção de receber essa doação.
        </p>
      </div>
      <div className="opacity">
        <h3>- O que é o sistema de Score?</h3>
        <p>
          Para cada transação feita (doação ou recebimento), o Giver ganhará
          pontos em seu Score. Para cada tipo de item é nessário um score
          mínimo, ou seja, para receber também é necessário doar!
        </p>
      </div>
      <div className="opacity">
        <h3>- Qualquer um pode ser um doador ou um donatário?</h3>
        <p>
          Sim senhor! Qualquer pessoa pode se cadastrar e usufruir da
          plataforma.
        </p>
      </div>
      <div className="opacity">
        <h3>- Qualquer um pode ser um doador ou um donatário?</h3>
        <p>
          Sim senhor! Qualquer pessoa pode se cadastrar e usufruir da
          plataforma.
        </p>
      </div>
      <div className="opacity">
        <h3>- Qual o objetivo do Giver?</h3>
        <p>
          Nosso objetivo é auxiliar na reutilização das coisas e,
          consequentemente, realizar integração social, conectando pessoas que,
          por terem interessesm em comum, podem se ajudar.
        </p>
        <p>
          Gostou e quer saber mais? Então vem com a gente e torne-se um Giver!
        </p>
        <br />

        <p className="containerWithModal">
          <ClickMeRegister
            setShowContainer={setShowContainer}
            title="Cadastre-se"
            label={<strong>Clique Aqui</strong>}
          >
            <CardRegister />
          </ClickMeRegister>{" "}
          <span>e cadastre-se pra não perder nenhuma oportunidade!</span>
        </p>
      </div>
    </div>
  );
};

export default AboutGiver;
