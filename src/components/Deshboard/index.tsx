import { Summary } from "../Summary";
import { TransactionsTable } from "../TrasactionsTable";
import { Container } from "./styles";

export function Deshboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
