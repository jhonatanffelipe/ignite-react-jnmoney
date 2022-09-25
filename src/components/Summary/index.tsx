import { Container } from "./styles";
import incomeImge from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImge} alt="" />
        </header>
        <strong>R$1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="" />
        </header>
        <strong>R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Totais</p>
          <img src={total} alt="" />
        </header>
        <strong>R$1.000,00</strong>
      </div>
    </Container>
  );
}
